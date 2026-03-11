import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import titleIllustration from "./assets/illustrations/title-hero.svg";
import { CATEGORY_META } from "./data/categories";
import { questionSets } from "./data/questionSets";
import { calculateResults, getVerdict, shuffleItems } from "./lib/game";
import type {
  AnswerRecord,
  CategoryKey,
  CategoryStat,
  Question,
  QuestionChoice,
} from "./types";

type Screen = "title" | "question" | "review" | "result";

function App() {
  const [screen, setScreen] = useState<Screen>("title");
  const [activeSetId, setActiveSetId] = useState(questionSets[0].id);
  const [questionQueue, setQuestionQueue] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const activeSet = questionSets.find((set) => set.id === activeSetId) ?? questionSets[0];
  const currentQuestion = questionQueue[currentIndex];
  const currentAnswer = answers[currentIndex];
  const results = useMemo(() => calculateResults(answers), [answers]);
  const progressRatio =
    questionQueue.length === 0 ? 0 : ((screen === "review" ? currentIndex + 1 : currentIndex) / questionQueue.length) * 100;

  const startGame = (setId: string, reshuffle = true) => {
    const nextSet = questionSets.find((set) => set.id === setId) ?? questionSets[0];
    setActiveSetId(nextSet.id);
    setQuestionQueue(reshuffle ? shuffleItems(nextSet.questions) : [...nextSet.questions]);
    setCurrentIndex(0);
    setAnswers([]);
    setScreen("question");
  };

  const handleChoice = (choice: QuestionChoice) => {
    if (!currentQuestion) {
      return;
    }

    setAnswers((previous) => [...previous, { question: currentQuestion, choice }]);
    setScreen("review");
  };

  const handleNext = () => {
    if (currentIndex >= questionQueue.length - 1) {
      setScreen("result");
      return;
    }

    setCurrentIndex((previous) => previous + 1);
    setScreen("question");
  };

  const resetToTitle = () => {
    setScreen("title");
    setQuestionQueue([]);
    setCurrentIndex(0);
    setAnswers([]);
  };

  return (
    <div className="app-shell">
      <div className="backdrop backdrop-a" />
      <div className="backdrop backdrop-b" />
      <main className="page-frame">
        <header className="topbar">
          <p className="eyebrow">Kids Foresight Training</p>
          <h1>つぎどうする？</h1>
          <p className="subhead">日常の場面で「先に気づく」「ひとこと伝える」を楽しく練習しよう。</p>
        </header>

        {screen === "title" && (
          <section className="screen-card intro-card">
            <div className="intro-copy">
              <span className="floating-pill">1プレイ 約10〜15分</span>
              <h2>あせらず選べば大丈夫</h2>
              <p>
                いろいろな場面で「つぎにどうするとよいかな？」を考えるゲームです。まちがえても学べるので、気楽に試してみてね。
              </p>

              <div className="set-grid">
                {questionSets.map((set) => (
                  <button
                    key={set.id}
                    className={`set-card ${set.id === activeSetId ? "is-active" : ""}`}
                    onClick={() => setActiveSetId(set.id)}
                    type="button"
                  >
                    <strong>{set.title}</strong>
                    <span>{set.description}</span>
                    <small>{set.questions.length}問をランダムに出題</small>
                  </button>
                ))}
              </div>

              <div className="action-row">
                <button className="primary-button" onClick={() => startGame(activeSet.id)} type="button">
                  スタート
                </button>
                <div className="hint-card">
                  <strong>コツ</strong>
                  <span>だれが知らないかな？ あとで困ることはないかな？ を思い出そう。</span>
                </div>
              </div>
            </div>

            <div className="intro-visual">
              <img alt="考える子どもたちのイラスト" src={titleIllustration} />
              <div className="category-list">
                {(Object.keys(CATEGORY_META) as CategoryKey[]).map((key) => (
                  <CategoryPill key={key} category={key} />
                ))}
              </div>
            </div>
          </section>
        )}

        {(screen === "question" || screen === "review") && currentQuestion && (
          <section className="screen-card play-card">
            <div className="play-main">
              <div className="progress-wrap" aria-label="進み具合">
                <div className="progress-topline">
                  <span>
                    問題 {currentIndex + 1} / {questionQueue.length}
                  </span>
                  <span>{screen === "review" ? "ふりかえり中" : "えらんでみよう"}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progressRatio}%` }} />
                </div>
              </div>

              <div className="question-card">
                <div className="question-header">
                  <div>
                    <p className="question-kicker">{currentQuestion.tags.join(" / ")}</p>
                    <h2>{currentQuestion.title}</h2>
                  </div>
                  <div className="mini-pills">
                    {currentQuestion.categories.map((category) => (
                      <CategoryPill key={category} category={category} />
                    ))}
                  </div>
                </div>

                <p className="situation-text">{currentQuestion.situation}</p>

                {screen === "question" && (
                  <div className="choice-list">
                    {currentQuestion.choices.map((choice) => (
                      <button
                        key={choice.id}
                        className="choice-card"
                        onClick={() => handleChoice(choice)}
                        type="button"
                      >
                        <span className="choice-index">{choice.id.toUpperCase()}</span>
                        <span>{choice.text}</span>
                      </button>
                    ))}
                  </div>
                )}

                {screen === "review" && currentAnswer && (
                  <ReviewPanel question={currentQuestion} answer={currentAnswer} onNext={handleNext} />
                )}
              </div>
            </div>

            <aside className="scene-panel">
              <img alt={`${currentQuestion.title} の場面イラスト`} className="scene-illustration" src={currentQuestion.illustration} />
              <div className="scene-note">
                <strong>考えるヒント</strong>
                <p>そのまま進むと、だれが困るかな？ 先にひとこと伝えると何が変わるかな？</p>
              </div>
            </aside>
          </section>
        )}

        {screen === "result" && (
          <section className="screen-card result-card">
            <div className="result-hero">
              <div>
                <span className="floating-pill">今回のスコア</span>
                <h2>{results.headline}</h2>
                <p>{results.summary}</p>
              </div>
              <div className="score-ring" aria-label={`合計スコア ${results.totalScore} 点`}>
                <strong>{results.totalScore}</strong>
                <span>/ {results.maxScore}</span>
              </div>
            </div>

            <div className="result-grid">
              <section className="result-block">
                <h3>カテゴリごとのようす</h3>
                <div className="meter-list">
                  {results.categoryStats.map((stat) => (
                    <ScoreMeter key={stat.key} stat={stat} />
                  ))}
                </div>
              </section>

              <section className="result-block">
                <h3>ふりかえりメモ</h3>
                <div className="insight-stack">
                  <InsightCard
                    label="よかったところ"
                    text={
                      results.strongest
                        ? `${results.strongest.label}が高め。${CATEGORY_META[results.strongest.key].praise}`
                        : "最後までチャレンジできたね。"
                    }
                  />
                  <InsightCard
                    label="つぎの一歩"
                    text={
                      results.growth
                        ? `「${CATEGORY_META[results.growth.key].hint}」を意識してみよう。`
                        : "いろいろな場面で続けて試してみよう。"
                    }
                  />
                  <InsightCard label="セット情報" text={`${activeSet.title} / ${activeSet.questions.length}問`} />
                </div>
              </section>
            </div>

            <section className="result-block history-block">
              <h3>回答のきろく</h3>
              <div className="history-list">
                {answers.map((answer, index) => {
                  const verdict = getVerdict(answer.choice.score);

                  return (
                    <article key={answer.question.id} className={`history-card tone-${verdict.tone}`}>
                      <div>
                        <small>
                          {index + 1}問目 / {answer.question.title}
                        </small>
                        <strong>{answer.choice.text}</strong>
                      </div>
                      <span>{verdict.label}</span>
                    </article>
                  );
                })}
              </div>
            </section>

            <div className="action-row result-actions">
              <button className="primary-button" onClick={() => startGame(activeSet.id)} type="button">
                順番をかえてもう一度
              </button>
              <button className="secondary-button" onClick={resetToTitle} type="button">
                タイトルへ戻る
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function ReviewPanel({
  question,
  answer,
  onNext,
}: {
  question: Question;
  answer: AnswerRecord;
  onNext: () => void;
}) {
  const verdict = getVerdict(answer.choice.score);

  return (
    <div className={`review-panel tone-${verdict.tone}`}>
      <div className="review-head">
        <div>
          <span className="verdict-label">{verdict.label}</span>
          <h3>{verdict.summary}</h3>
        </div>
        <div className="point-chip">{answer.choice.score} 点</div>
      </div>

      <div className="feedback-card">
        <p>{answer.choice.feedback}</p>
        <p>{question.explanation}</p>
      </div>

      <div className="learning-grid">
        {question.learningPoints.map((point) => (
          <article key={point.label} className="learning-card">
            <strong>{point.label}</strong>
            <p>{point.text}</p>
          </article>
        ))}
      </div>

      <button className="primary-button next-button" onClick={onNext} type="button">
        つぎへ
      </button>
    </div>
  );
}

function CategoryPill({ category }: { category: CategoryKey }) {
  const meta = CATEGORY_META[category];

  return (
    <span
      className="category-pill"
      style={
        {
          "--accent-color": meta.color,
          "--accent-soft": meta.softColor,
        } as CSSProperties
      }
    >
      {meta.label}
    </span>
  );
}

function ScoreMeter({ stat }: { stat: CategoryStat }) {
  const meta = CATEGORY_META[stat.key];

  return (
    <article className="meter-card">
      <div className="meter-head">
        <div>
          <strong>{stat.label}</strong>
          <p>{meta.description}</p>
        </div>
        <span>
          {stat.score} / {stat.maxScore}
        </span>
      </div>
      <div className="meter-track">
        <div
          className="meter-fill"
          style={
            {
              width: `${stat.percentage}%`,
              "--meter-color": meta.color,
            } as CSSProperties
          }
        />
      </div>
    </article>
  );
}

function InsightCard({ label, text }: { label: string; text: string }) {
  return (
    <article className="insight-card">
      <small>{label}</small>
      <p>{text}</p>
    </article>
  );
}

export default App;
