import { CATEGORY_META } from "../data/categories";
import type { AnswerRecord, CategoryKey, CategoryStat } from "../types";

export function shuffleItems<T>(items: T[]): T[] {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

export function getVerdict(score: number) {
  if (score === 2) {
    return {
      label: "いいね",
      tone: "great" as const,
      summary: "相手にも自分にもやさしい選び方だよ。",
    };
  }

  if (score === 1) {
    return {
      label: "おしい",
      tone: "close" as const,
      summary: "あとひと工夫すると、もっと安心できるよ。",
    };
  }

  return {
    label: "もう一度かんがえてみよう",
    tone: "retry" as const,
    summary: "先にひとこと伝えると、ぐっとよくなるよ。",
  };
}

export function calculateResults(answered: AnswerRecord[]) {
  const totalScore = answered.reduce((sum, answer) => sum + answer.choice.score, 0);
  const maxScore = answered.length * 2;
  const categoryBase = Object.keys(CATEGORY_META).reduce(
    (accumulator, key) => {
      accumulator[key as CategoryKey] = { score: 0, maxScore: 0 };
      return accumulator;
    },
    {} as Record<CategoryKey, { score: number; maxScore: number }>,
  );

  answered.forEach(({ question, choice }) => {
    question.categories.forEach((category) => {
      categoryBase[category].score += choice.score;
      categoryBase[category].maxScore += 2;
    });
  });

  const categoryStats = Object.entries(categoryBase)
    .map(([key, value]) => ({
      key: key as CategoryKey,
      label: CATEGORY_META[key as CategoryKey].label,
      score: value.score,
      maxScore: value.maxScore,
      percentage: value.maxScore === 0 ? 0 : Math.round((value.score / value.maxScore) * 100),
    }))
    .filter((stat) => stat.maxScore > 0);

  const strongest = [...categoryStats].sort((left, right) => right.percentage - left.percentage)[0];
  const growth = [...categoryStats].sort((left, right) => left.percentage - right.percentage)[0];
  const ratio = maxScore === 0 ? 0 : totalScore / maxScore;

  let headline = "少しずつコツが見えてきたね";
  if (ratio >= 0.85) {
    headline = "すごい。先を読む力がしっかり育っているね";
  } else if (ratio >= 0.65) {
    headline = "いい調子。落ち着いて考えられているよ";
  }

  const summaryParts = [];
  if (strongest) {
    summaryParts.push(CATEGORY_META[strongest.key].praise);
  }

  if (growth && growth.percentage < 80) {
    summaryParts.push(`つぎは「${CATEGORY_META[growth.key].hint}」を意識すると、もっと伸びるよ。`);
  } else {
    summaryParts.push("どの力もバランスよく使えているね。");
  }

  return {
    totalScore,
    maxScore,
    categoryStats,
    strongest,
    growth,
    headline,
    summary: summaryParts.join(" "),
  };
}

