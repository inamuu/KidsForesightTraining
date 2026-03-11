import type { CategoryKey, CategoryMeta } from "../types";

export const CATEGORY_META: Record<CategoryKey, CategoryMeta> = {
  foresight: {
    label: "先読み",
    description: "このあと何が起こるかを考える力",
    praise: "先のことを想像しながら動けているね。",
    hint: "あとでこまることを先に見つけよう",
    color: "#5f7f34",
    softColor: "#e8efd8",
  },
  communication: {
    label: "伝える力",
    description: "必要な相手に、ひとこと伝える力",
    praise: "相手が知らないことをきちんと伝えられているね。",
    hint: "だれが知らないかを思い出してみよう",
    color: "#4f68b4",
    softColor: "#e2e7f8",
  },
  perspective: {
    label: "相手の気もち",
    description: "相手の立場から困ることを考える力",
    praise: "まわりの人の気もちに気づけているね。",
    hint: "相手の立場だと何が不安か考えてみよう",
    color: "#2f8a70",
    softColor: "#deefe7",
  },
  planning: {
    label: "段取り",
    description: "順番や時間を考えて進める力",
    praise: "やる順番を落ち着いて選べているね。",
    hint: "先にすませると楽になることを探そう",
    color: "#b88c2f",
    softColor: "#f4e8c9",
  },
  responsibility: {
    label: "自分から動く",
    description: "気づいたときに自分から行動する力",
    praise: "だれか待ちではなく、自分から動けているね。",
    hint: "気づいた人が一歩先に動いてみよう",
    color: "#b45436",
    softColor: "#f4dfd8",
  },
};
