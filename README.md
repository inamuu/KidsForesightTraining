# つぎどうする？ 先読みトレーニングゲーム

子ども向けの静的 Web アプリです。駆け出し冒険者のクエストを題材に、「次にどうするとよいか」「だれに伝えるべきか」「相手は何を知らないか」を考える 50 問を収録し、毎回その中から 10 問をランダム出題します。

## 特徴

- `Vite + React + TypeScript` で構築
- サーバー不要の静的アプリ
- GitHub Pages で公開しやすい `base: "./"` 設定
- 50 問をデータファイルとして分離し、毎回 10 問をランダム出題
- カテゴリ別スコア表示あり
- タイトル画面と問題画面で使えるファンタジー風イラスト同梱

## ローカル起動

Node.js 20 以上を想定しています。

```bash
npm install
npm run dev
```

ブラウザで表示されたローカル URL を開いてください。

## ビルド

```bash
npm run build
```

出力先は `dist/` です。

`dist/index.html` を Finder などから `file://` で直接開くと、ブラウザによっては白画面になることがあります。確認するときは静的サーバー経由で開いてください。

```bash
npm run serve:dist
```

その後、`http://127.0.0.1:4173/` をブラウザで開いてください。

## GitHub Pages での公開

このリポジトリには GitHub Actions のデプロイ設定を含めています。

1. GitHub に push する
2. リポジトリの `Settings > Pages` を開く
3. `Build and deployment` の Source を `GitHub Actions` にする
4. `main` ブランチへ push すると、自動で `dist/` が Pages に公開される

ワークフロー定義は [`./.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) です。

## 問題の追加方法

問題は [`./src/data/questionSets/dailyLifeSet.ts`](./src/data/questionSets/dailyLifeSet.ts) にあります。

1. `questions` 配列へオブジェクトを追加する
2. `categories` に `foresight / communication / perspective / planning / responsibility` のいずれかを入れる
3. `choices` には `score: 0 | 1 | 2` を設定する
4. `illustration` に `src/assets/illustrations/` 配下の画像を指定する

将来的にセットを増やす場合は、新しい `QuestionSet` ファイルを作り、[`./src/data/questionSets/index.ts`](./src/data/questionSets/index.ts) で配列に追加してください。

## 主な構成

```txt
src/
  assets/
    illustrations/
  data/
    categories.ts
    questionSets/
      dailyLifeSet.ts
      index.ts
  lib/
    game.ts
  App.tsx
  index.css
```

## 補足

- ルーティングは使わず、1 ページの画面切り替え構成です
- 問題順と選択肢順はゲーム開始ごとにランダム化されます
- 画像はファンタジー風の仮素材を同梱しています
