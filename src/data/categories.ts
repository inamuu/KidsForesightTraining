import type { CategoryKey, CategoryMeta } from "../types";

export const CATEGORY_META: Record<CategoryKey, CategoryMeta> = {
  foresight: {
    label: "先読み",
    description: "このあと何が起こるかを考える力",
    praise: "先のことを想像しながら動けているね。",
    hint: "あとでこまることを先に見つけよう",
    color: "#ff7a45",
    softColor: "#fff0e4",
  },
  communication: {
    label: "伝える力",
    description: "必要な相手に、ひとこと伝える力",
    praise: "相手が知らないことをきちんと伝えられているね。",
    hint: "だれが知らないかを思い出してみよう",
    color: "#2f9f7f",
    softColor: "#e3f8ef",
  },
  perspective: {
    label: "相手の気もち",
    description: "相手の立場から困ることを考える力",
    praise: "まわりの人の気もちに気づけているね。",
    hint: "相手の立場だと何が不安か考えてみよう",
    color: "#4c7ef3",
    softColor: "#ebf2ff",
  },
  planning: {
    label: "段取り",
    description: "順番や時間を考えて進める力",
    praise: "やる順番を落ち着いて選べているね。",
    hint: "先にすませると楽になることを探そう",
    color: "#f2b31a",
    softColor: "#fff6dc",
  },
  responsibility: {
    label: "自分から動く",
    description: "気づいたときに自分から行動する力",
    praise: "だれか待ちではなく、自分から動けているね。",
    hint: "気づいた人が一歩先に動いてみよう",
    color: "#d15f99",
    softColor: "#ffe6f1",
  },
};

