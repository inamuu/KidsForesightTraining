import dragonIllustration from "../../assets/illustrations/raster/dragon.png";
import dwarfIllustration from "../../assets/illustrations/raster/dwarf-guardian.png";
import archerIllustration from "../../assets/illustrations/raster/forest-archer.png";
import heroIllustration from "../../assets/illustrations/raster/hero-knight.png";
import treasureIllustration from "../../assets/illustrations/raster/treasure-chest.png";
import wizardIllustration from "../../assets/illustrations/raster/wizard.png";
import type { QuestionSet } from "../../types";

export const dailyLifeSet: QuestionSet = {
  id: "daily-life",
  title: "いつもの毎日セット",
  description: "家・学校・おでかけの20問から、毎回10問をランダムで練習。",
  questions: [
    {
      id: "q001",
      title: "家を出る前のひとこと",
      situation:
        "友だちと公園で遊ぶ約束をしています。おうちの人は、あなたがまだ家にいると思っています。もう出る時間です。どうする？",
      categories: ["communication", "foresight"],
      choices: [
        {
          id: "a",
          text: "そのまま静かに出かける",
          score: 0,
          feedback: "家の人が知らないままだと、どこに行ったのかなと心配になるかもしれないね。",
        },
        {
          id: "b",
          text: "『公園に行ってくるね』と伝えてから出る",
          score: 2,
          feedback: "いいね。相手が知らない予定は、先に伝えると安心してもらえるよ。",
        },
        {
          id: "c",
          text: "先に出て、あとでメッセージを送る",
          score: 1,
          feedback: "あとで伝えるより、出る前のひとことで心配を減らせるよ。",
        },
      ],
      bestChoiceId: "b",
      explanation: "相手が知らない予定は、出かける前に伝えるのがいちばん安心です。",
      learningPoints: [
        { label: "だれがこまる？", text: "家の人は、あなたがどこにいるか分からず心配するかもしれないよ。" },
        { label: "だれに言う？", text: "家にいる大人へ、出る前にひとこと伝えるのが大切だよ。" },
        { label: "先にできること", text: "出かける前の声かけを、いつもの習慣にしてみよう。" },
      ],
      illustration: heroIllustration,
      tags: ["家族", "声かけ", "予定"],
    },
    {
      id: "q002",
      title: "出発時間になったよ",
      situation:
        "家族で出かける予定です。出る時間になったけれど、弟はまだおもちゃで遊んでいます。あなたは先に気づきました。どうする？",
      categories: ["responsibility", "communication"],
      choices: [
        {
          id: "a",
          text: "何も言わず、自分だけくつをはく",
          score: 1,
          feedback: "自分の準備はできるけれど、みんなが間に合うとは限らないね。",
        },
        {
          id: "b",
          text: "『そろそろ出るよ』と弟にやさしく声をかける",
          score: 2,
          feedback: "いいね。気づいた人が先に声をかけると、家族みんなが動きやすくなるよ。",
        },
        {
          id: "c",
          text: "時間がすぎてから親にだけ言う",
          score: 0,
          feedback: "もっと早く気づいたなら、その時点で動くと助けになったね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "時間に気づいたら、自分からやさしく声をかけると流れがよくなります。",
      learningPoints: [
        { label: "だれが助かる？", text: "弟も親も、出発の流れが分かって準備しやすくなるよ。" },
        { label: "どんな声かけ？", text: "急かすより、やさしく短く伝えると受け取りやすいよ。" },
        { label: "先に動くコツ", text: "気づいた人が一歩先に動くと、全体がスムーズになるよ。" },
      ],
      illustration: dwarfIllustration,
      tags: ["家族", "出発", "主体性"],
    },
    {
      id: "q003",
      title: "雨がふりそうな午後",
      situation:
        "空が暗くなってきました。これから習いごとへ歩いて行きます。家を出る前に、どれを選ぶ？",
      categories: ["foresight", "planning"],
      choices: [
        {
          id: "a",
          text: "何も持たずに出る",
          score: 0,
          feedback: "雨が降ったとき、ぬれてしまって困るかもしれないね。",
        },
        {
          id: "b",
          text: "折りたたみ傘を持って出る",
          score: 2,
          feedback: "いいね。まだ降っていなくても、先に準備しておくと安心だよ。",
        },
        {
          id: "c",
          text: "降り出してから取りに戻るつもりで出る",
          score: 1,
          feedback: "あとから戻るより、先に持っておくほうが楽だね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "起こりそうなことを予想して、先に必要な物を持つと困りにくくなります。",
      learningPoints: [
        { label: "何を想像する？", text: "このあと雨が降ったらどうなるかな、と先に考えてみよう。" },
        { label: "何を準備する？", text: "折りたたみ傘のように、軽くて持ちやすい物が役立つよ。" },
        { label: "段取りのコツ", text: "出る直前に迷わないよう、前もって確認できるといいね。" },
      ],
      illustration: dragonIllustration,
      tags: ["天気", "持ちもの", "準備"],
    },
    {
      id: "q004",
      title: "宿題とゲームの順番",
      situation:
        "学校から帰ってきました。宿題はまだです。夕ごはんまで40分あり、ゲームもしたいです。どう考える？",
      categories: ["planning", "foresight"],
      choices: [
        {
          id: "a",
          text: "まずゲームを始めて、時間が足りなければあとで考える",
          score: 0,
          feedback: "あとで急ぐことになって、落ち着いて宿題ができないかもしれないね。",
        },
        {
          id: "b",
          text: "先に宿題をすませて、残った時間でゲームをする",
          score: 2,
          feedback: "いいね。先にやることを終えると、そのあと気持ちよく遊べるよ。",
        },
        {
          id: "c",
          text: "少しだけゲームをしてから宿題にする",
          score: 1,
          feedback: "時間をきっちり守れるなら近いけれど、先に宿題のほうが安心だね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "時間が限られているときは、先にやるべきことを終えると気持ちに余裕ができます。",
      learningPoints: [
        { label: "あとで困る？", text: "宿題が残ると、夕ごはん前にあわてることがあるよ。" },
        { label: "どの順番？", text: "先に必要なこと、そのあと楽しみ、の順にすると分かりやすいよ。" },
        { label: "続けるコツ", text: "帰ったら最初にやることを決めておくと動きやすいよ。" },
      ],
      illustration: wizardIllustration,
      tags: ["宿題", "時間", "順番"],
    },
    {
      id: "q005",
      title: "ごはん前に少しだけ遊ぶ？",
      situation:
        "夕ごはんの前に、友だちから『公園に行こう』とさそわれました。家ではもうすぐごはんです。どうするのがよい？",
      categories: ["communication", "planning"],
      choices: [
        {
          id: "a",
          text: "何も言わずにすぐ公園へ行く",
          score: 0,
          feedback: "家の人はごはんの時間にあなたがいなくて、困ってしまうかもしれないね。",
        },
        {
          id: "b",
          text: "家の人に時間を聞き、行けるなら帰る時間も決めてから出る",
          score: 2,
          feedback: "いいね。家の予定と自分の予定を合わせる考え方ができているよ。",
        },
        {
          id: "c",
          text: "友だちにだけ『少しだけ』と言って出る",
          score: 1,
          feedback: "友だちには伝わるけれど、家の人にも予定を知らせたいね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "家の予定があるときは、先に相談して帰る時間も決めると安心です。",
      learningPoints: [
        { label: "だれが知らない？", text: "家の人は、あなたが出かけることを知らないかもしれないよ。" },
        { label: "何を決める？", text: "行くかどうかだけでなく、帰る時間も決めるとよいよ。" },
        { label: "うまく遊ぶには", text: "予定を合わせると、あとであわてずにすむよ。" },
      ],
      illustration: heroIllustration,
      tags: ["夕ごはん", "相談", "時間"],
    },
    {
      id: "q006",
      title: "前日の持ちものチェック",
      situation:
        "明日は体育があり、いつもとちがう持ちものがあります。夜のうちに、どれをする？",
      categories: ["planning", "foresight"],
      choices: [
        {
          id: "a",
          text: "朝になってから考える",
          score: 0,
          feedback: "朝は時間が少なく、忘れ物に気づいても間に合わないことがあるね。",
        },
        {
          id: "b",
          text: "れんらく帳や時間割を見て、夜のうちに準備する",
          score: 2,
          feedback: "いいね。前日にそろえておくと、朝がぐっと楽になるよ。",
        },
        {
          id: "c",
          text: "くつ下だけ出して、あとはそのままにする",
          score: 1,
          feedback: "少し進んでいるけれど、必要な物をまとめて確認したいね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "前日に確認すると、朝のバタバタや忘れ物を減らせます。",
      learningPoints: [
        { label: "何を見る？", text: "時間割やれんらく帳を見て、必要な物を確かめよう。" },
        { label: "いつ準備する？", text: "夜のうちなら、足りない物にも気づきやすいよ。" },
        { label: "次につながる", text: "前日チェックを習慣にすると、忘れ物が減りやすいよ。" },
      ],
      illustration: archerIllustration,
      tags: ["学校", "前日準備", "忘れ物"],
    },
    {
      id: "q007",
      title: "待ち合わせに遅れそう",
      situation:
        "友だちとの待ち合わせまであと5分。でも道がこんでいて、間に合わなさそうです。どうする？",
      categories: ["communication", "responsibility"],
      choices: [
        {
          id: "a",
          text: "そのまま急いで行き、何も連絡しない",
          score: 0,
          feedback: "待っている友だちは、どうしたのかなと不安になるかもしれないね。",
        },
        {
          id: "b",
          text: "遅れそうだと分かった時点で、友だちか家の人に連絡する",
          score: 2,
          feedback: "いいね。早めに知らせると、相手が安心して待てるよ。",
        },
        {
          id: "c",
          text: "着いてから『おそくなった』と言う",
          score: 1,
          feedback: "着いてから伝えるより、先に知らせるほうが親切だね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "遅れそうだと分かったら、早めの連絡が相手を安心させます。",
      learningPoints: [
        { label: "相手はどう思う？", text: "待っている人は、来ない理由が分からないと不安になるよ。" },
        { label: "いつ伝える？", text: "遅れると分かった時点で伝えるのがいちばん役立つよ。" },
        { label: "自分から動く", text: "気まずくても、先に伝えることが大切だよ。" },
      ],
      illustration: dwarfIllustration,
      tags: ["待ち合わせ", "連絡", "遅刻"],
    },
    {
      id: "q008",
      title: "予定が重なったとき",
      situation:
        "土曜日に家族で出かける予定がある日に、友だちから遊びのさそいが来ました。どうする？",
      categories: ["perspective", "communication"],
      choices: [
        {
          id: "a",
          text: "すぐ友だちに『行ける』と返事する",
          score: 0,
          feedback: "家族の予定を知らないまま返事すると、あとで困ることがあるね。",
        },
        {
          id: "b",
          text: "家族の予定を確認してから、友だちに返事する",
          score: 2,
          feedback: "いいね。どちらの相手にも失礼になりにくい考え方だよ。",
        },
        {
          id: "c",
          text: "返事をしないままその日まで待つ",
          score: 1,
          feedback: "急いで決めないのは近いけれど、相手を待たせすぎないようにしたいね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "予定が重なりそうなときは、先に確認してから返事をすると安心です。",
      learningPoints: [
        { label: "だれに配る気もち？", text: "家族にも友だちにも、待たせすぎないように考えたいね。" },
        { label: "何を確認する？", text: "時間や場所など、家族の予定を先に確かめよう。" },
        { label: "返事のコツ", text: "すぐ決められないときは『確認してから返事するね』で大丈夫。" },
      ],
      illustration: wizardIllustration,
      tags: ["予定", "相談", "家族"],
    },
    {
      id: "q009",
      title: "おふろの順番を考える",
      situation:
        "今日は弟が少しねむそうです。いつもはあなたが先におふろですが、どう考える？",
      categories: ["perspective", "planning"],
      choices: [
        {
          id: "a",
          text: "いつも通り、自分が先に入る",
          score: 0,
          feedback: "今日はいつもとちがう様子なので、少し考えたいね。",
        },
        {
          id: "b",
          text: "弟が先のほうがよさそうなら、順番を相談する",
          score: 2,
          feedback: "いいね。その日の様子を見て順番を考えるのはやさしい判断だよ。",
        },
        {
          id: "c",
          text: "何も言わずに待ってみる",
          score: 1,
          feedback: "急がないのはよいけれど、相談するともっと分かりやすいね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "いつも同じでなく、その日の相手の様子を見て順番を考えることも大切です。",
      learningPoints: [
        { label: "相手の立場", text: "ねむそうな人は、早めに休めると助かるかもしれないよ。" },
        { label: "どう決める？", text: "家の人や弟と相談して、その日に合う順番を決めよう。" },
        { label: "段取りの工夫", text: "少し順番を変えるだけで、みんなが楽になることもあるよ。" },
      ],
      illustration: dwarfIllustration,
      tags: ["家族", "順番", "気づき"],
    },
    {
      id: "q010",
      title: "集合場所を知らない友だち",
      situation:
        "友だちと図書館で会う約束をしました。でも友だちは、その図書館へまだ行ったことがありません。どうする？",
      categories: ["communication", "perspective"],
      choices: [
        {
          id: "a",
          text: "『図書館でね』だけ伝える",
          score: 0,
          feedback: "入口がいくつもあると、友だちはどこへ行けばいいか迷うかもしれないね。",
        },
        {
          id: "b",
          text: "どの入口で会うか、分かりやすく伝えておく",
          score: 2,
          feedback: "いいね。相手が知らないことを先に伝えるのは、とても大事だよ。",
        },
        {
          id: "c",
          text: "着いてから電話すればいいと思う",
          score: 1,
          feedback: "あとで合わせることもできるけれど、先に決めておくともっと安心だね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "相手が場所を知らないときは、具体的に伝えておくと迷いにくくなります。",
      learningPoints: [
        { label: "だれが知らない？", text: "相手は、あなたと同じだけ場所を知っているとは限らないよ。" },
        { label: "何を伝える？", text: "入口、時間、目印などを短くはっきり伝えるとよいよ。" },
        { label: "先に決める", text: "あとで探し回らないよう、前もって決めておこう。" },
      ],
      illustration: archerIllustration,
      tags: ["待ち合わせ", "場所", "説明"],
    },
    {
      id: "q011",
      title: "忘れ物に気づいた朝",
      situation:
        "学校についてから、宿題を家に置いてきたことに気づきました。どうする？",
      categories: ["responsibility", "communication"],
      choices: [
        {
          id: "a",
          text: "何も言わずに、見つからないことを願う",
          score: 0,
          feedback: "あとで言うより、早めに知らせたほうが話し合いやすいね。",
        },
        {
          id: "b",
          text: "先生に早めに伝えて、どうするか相談する",
          score: 2,
          feedback: "いいね。気づいた時点で相談すると、次の動きが考えやすいよ。",
        },
        {
          id: "c",
          text: "友だちに自分のぶんも出してもらおうとする",
          score: 0,
          feedback: "自分の忘れ物は、自分で伝えて動くほうがよいね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "忘れ物に気づいたら、隠さず早めに相談することが大切です。",
      learningPoints: [
        { label: "気づいたら？", text: "小さな失敗でも、早めに伝えると次を考えやすくなるよ。" },
        { label: "だれに言う？", text: "その場で助けてもらえる先生へ、まず伝えてみよう。" },
        { label: "次に生かす", text: "前日の準備や持ちものチェックにもつながるよ。" },
      ],
      illustration: heroIllustration,
      tags: ["学校", "忘れ物", "相談"],
    },
    {
      id: "q012",
      title: "お店で待つ人へのひとこと",
      situation:
        "お店で家の人と並んでいます。あなたはトイレに行きたくなりました。どうする？",
      categories: ["communication", "perspective"],
      choices: [
        {
          id: "a",
          text: "何も言わずに、そのままトイレへ行く",
          score: 0,
          feedback: "家の人は、急にいなくなってびっくりしてしまうかもしれないね。",
        },
        {
          id: "b",
          text: "『トイレに行ってくるね』と伝えてから行く",
          score: 2,
          feedback: "いいね。短いひとことでも、相手は安心して待てるよ。",
        },
        {
          id: "c",
          text: "近くにいるから言わなくても分かると思う",
          score: 1,
          feedback: "近くでも、見失うことがあるから伝えておくと親切だね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "少しの間はなれるときでも、ひとことあると相手が安心します。",
      learningPoints: [
        { label: "相手の気もち", text: "急にいなくなると『どこへ行ったのかな』と不安になるよ。" },
        { label: "どのくらい話す？", text: "長くなくて大丈夫。短くはっきり伝えれば十分だよ。" },
        { label: "身近な場面", text: "お店や駅など、人が多い場所ほど声かけが役立つよ。" },
      ],
      illustration: treasureIllustration,
      tags: ["外出", "声かけ", "安心"],
    },
    {
      id: "q013",
      title: "朝のしたくを逆算",
      situation:
        "学校へ出るまで25分あります。朝ごはん、顔を洗う、着替える、歯みがきがまだです。先にどれを考える？",
      categories: ["planning", "foresight"],
      choices: [
        {
          id: "a",
          text: "まず動画を見て、あとで急いで準備する",
          score: 0,
          feedback: "楽しいことから始めると、時間が足りなくなることがあるね。",
        },
        {
          id: "b",
          text: "出るまでに必要なことを順番にすませる",
          score: 2,
          feedback: "いいね。ゴールから考えると、あわてずに動きやすいよ。",
        },
        {
          id: "c",
          text: "一番好きなことから始めて、残りはその時に考える",
          score: 1,
          feedback: "気分は上がるけれど、出発までの流れも見ておきたいね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "出る時間から逆算して、必要なことを順番に進めると準備が整いやすくなります。",
      learningPoints: [
        { label: "ゴールは何？", text: "『学校へ出る』をゴールにして、その前に必要なことを並べよう。" },
        { label: "順番の考え方", text: "先に済ませると安心なことから進めるとよいよ。" },
        { label: "朝のコツ", text: "毎朝の順番が決まると、迷う時間が減るよ。" },
      ],
      illustration: archerIllustration,
      tags: ["朝", "逆算", "学校"],
    },
    {
      id: "q014",
      title: "遊んだあとの片づけ",
      situation:
        "ブロックで大きな町を作って遊びました。もうすぐおやつの時間です。どうする？",
      categories: ["responsibility", "planning"],
      choices: [
        {
          id: "a",
          text: "そのままにして、おやつを食べに行く",
          score: 0,
          feedback: "あとで部屋を使う人が困ったり、片づけがもっと大変になるかもしれないね。",
        },
        {
          id: "b",
          text: "おやつの前に、少しでも片づけを始める",
          score: 2,
          feedback: "いいね。次の予定の前に少し動いておくと、あとが楽になるよ。",
        },
        {
          id: "c",
          text: "家の人に片づけておいてもらう",
          score: 0,
          feedback: "自分が使ったものは、自分から動けると気持ちがよいね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "次の予定の前に少しでも片づけると、気持ちよく切り替えられます。",
      learningPoints: [
        { label: "だれがこまる？", text: "通る人や一緒に使う人が、足のふみ場に困ることがあるよ。" },
        { label: "いつ動く？", text: "次の予定が始まる前に、少しでも動いておくのがコツだよ。" },
        { label: "小さく始める", text: "全部でなくても、まず大きい物から片づけるだけでも前進だよ。" },
      ],
      illustration: treasureIllustration,
      tags: ["片づけ", "切り替え", "自分から"],
    },
    {
      id: "q015",
      title: "学校の手紙を渡すタイミング",
      situation:
        "学校から、明日までに見てもらいたい手紙をもらいました。家に帰ってからどうする？",
      categories: ["communication", "foresight"],
      choices: [
        {
          id: "a",
          text: "ランドセルに入れたままにする",
          score: 0,
          feedback: "そのままだと、翌朝まで気づかないかもしれないね。",
        },
        {
          id: "b",
          text: "帰ったら早めに家の人へ渡す",
          score: 2,
          feedback: "いいね。忘れる前に渡すと、おうちでも確認しやすいよ。",
        },
        {
          id: "c",
          text: "寝る前に思い出したら渡す",
          score: 1,
          feedback: "渡せるなら悪くないけれど、早いほうが安心だね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "忘れやすい物ほど、帰ったら早めに渡すと安心です。",
      learningPoints: [
        { label: "何が起こる？", text: "あとにすると、遊びやごはんで忘れてしまうことがあるよ。" },
        { label: "だれに必要？", text: "家の人は、早めに手紙を見られると助かるよ。" },
        { label: "習慣にする", text: "帰ったら手紙を出す流れを決めておくと続きやすいよ。" },
      ],
      illustration: wizardIllustration,
      tags: ["連絡物", "学校", "忘れ防止"],
    },
    {
      id: "q016",
      title: "遠足の前の日",
      situation:
        "明日は遠足です。おべんとう、水とう、しきものが必要です。夜のうちに何をする？",
      categories: ["planning", "foresight"],
      choices: [
        {
          id: "a",
          text: "明日の朝に全部まとめて準備する",
          score: 0,
          feedback: "朝に全部だと、足りない物に気づいても時間が少ないね。",
        },
        {
          id: "b",
          text: "持ちものを見ながら、前の日にできる準備をしておく",
          score: 2,
          feedback: "いいね。前日にできることを進めると、当日の朝が楽になるよ。",
        },
        {
          id: "c",
          text: "水とうだけ出して、ほかは忘れなければいいと思う",
          score: 1,
          feedback: "一部だけでも近いけれど、一覧で見ながらそろえるともっと安心だね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "前日に準備できる物をそろえておくと、当日の忘れ物やあわてを防げます。",
      learningPoints: [
        { label: "前日にできること", text: "しきものやリュックなど、夜に入れられる物からそろえよう。" },
        { label: "確認のしかた", text: "持ちものリストを見ながら一つずつチェックすると分かりやすいよ。" },
        { label: "当日の朝", text: "残るのはおべんとうなど、その日でないと入れられない物だけにしよう。" },
      ],
      illustration: heroIllustration,
      tags: ["遠足", "前日", "持ちもの"],
    },
    {
      id: "q017",
      title: "バスの時間に合わせる",
      situation:
        "バスで博物館へ行きます。バスは20分に1本です。ちょうどいい時間に出るには、どう考える？",
      categories: ["foresight", "planning"],
      choices: [
        {
          id: "a",
          text: "だいたいで家を出て、来たバスに乗る",
          score: 0,
          feedback: "一本のがすと大きく遅れることがあるね。",
        },
        {
          id: "b",
          text: "バスの時間を見て、少し早めに家を出る",
          score: 2,
          feedback: "いいね。乗り物の時間がある日は、少し早めの行動が安心だよ。",
        },
        {
          id: "c",
          text: "家を出るのは同じで、走れば何とかなると思う",
          score: 1,
          feedback: "急ぐより、前もって時間を見ておくほうが落ち着いて動けるね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "本数が少ない乗り物は、時刻を見て少し早めに動くのが安心です。",
      learningPoints: [
        { label: "何を調べる？", text: "出発時刻と、そこまでにかかる時間を見ておこう。" },
        { label: "なぜ早め？", text: "道で少し遅れても、乗れるようにしておくためだよ。" },
        { label: "先読みのコツ", text: "『一本のがしたらどうなる？』も考えてみよう。" },
      ],
      illustration: dwarfIllustration,
      tags: ["交通", "時間", "外出"],
    },
    {
      id: "q018",
      title: "図書館の本の返す日",
      situation:
        "借りた本の返す日が明日です。今日は図書館の近くに行く予定があります。どうする？",
      categories: ["responsibility", "planning"],
      choices: [
        {
          id: "a",
          text: "明日でいいから、今日は何もしない",
          score: 1,
          feedback: "明日でも返せるかもしれないけれど、今日のうちにできるなら安心だね。",
        },
        {
          id: "b",
          text: "持って行けるなら今日返しておく",
          score: 2,
          feedback: "いいね。できるときに先にすませると、うっかりを減らせるよ。",
        },
        {
          id: "c",
          text: "本をどこに置いたか分からないまま、あとで考える",
          score: 0,
          feedback: "返す物があるなら、まず場所を確かめて準備しておきたいね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "できるタイミングがあるなら、先に返しておくと忘れにくくなります。",
      learningPoints: [
        { label: "先にすませる", text: "やるべきことは、できるときに終えると気持ちが軽くなるよ。" },
        { label: "何を準備する？", text: "出かける前に、本をバッグの近くへ置いておくのも手だよ。" },
        { label: "自分の役目", text: "借りた物の期限を覚えて動くのも大事な力だよ。" },
      ],
      illustration: treasureIllustration,
      tags: ["図書館", "返却", "責任"],
    },
    {
      id: "q019",
      title: "家族がまだ寝ている朝",
      situation:
        "朝早く、家族はまだ寝ています。あなたは先に起きて支度を始めます。どうする？",
      categories: ["perspective", "foresight"],
      choices: [
        {
          id: "a",
          text: "大きな音でテレビをつける",
          score: 0,
          feedback: "まだ寝ている人が、びっくりして起きてしまうかもしれないね。",
        },
        {
          id: "b",
          text: "必要な準備を静かに進める",
          score: 2,
          feedback: "いいね。まわりの人の様子を考えて動けているよ。",
        },
        {
          id: "c",
          text: "家族が起きるまで何もせず待つ",
          score: 1,
          feedback: "静かにするのはよいけれど、自分でできる準備は進められるね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "相手の様子を見ながら、静かに自分の準備を進めると気持ちよく過ごせます。",
      learningPoints: [
        { label: "相手の立場", text: "寝ている人にとって、大きな音はつらいかもしれないよ。" },
        { label: "自分にできること", text: "静かに着替えたり、持ちものをそろえたりできるね。" },
        { label: "先読み", text: "音が出そうなことは後に回す工夫も役立つよ。" },
      ],
      illustration: wizardIllustration,
      tags: ["朝", "家族", "静かに"],
    },
    {
      id: "q020",
      title: "雨で予定が変わった",
      situation:
        "外でのクラブ活動が雨で中止になりました。でも友だちはまだ知らないかもしれません。どうする？",
      categories: ["communication", "foresight"],
      choices: [
        {
          id: "a",
          text: "自分が分かっていればいいので、そのまま帰る",
          score: 0,
          feedback: "まだ知らない友だちは、来てしまうかもしれないね。",
        },
        {
          id: "b",
          text: "まだ知らなそうな人に、分かった時点で伝える",
          score: 2,
          feedback: "いいね。情報の差に気づいて伝えられるのは、とても大事だよ。",
        },
        {
          id: "c",
          text: "先生が言うだろうから、自分は何もしない",
          score: 1,
          feedback: "先生からも伝わるかもしれないけれど、自分で気づいたなら助けになるね。",
        },
      ],
      bestChoiceId: "b",
      explanation: "予定変更を知ったら、まだ知らない人がいないか考えて伝えることが大切です。",
      learningPoints: [
        { label: "情報の差", text: "自分が知っていても、相手はまだ知らないことがあるよ。" },
        { label: "だれに伝える？", text: "来そうな友だちや、予定を気にしている人へ伝えるとよいよ。" },
        { label: "先に気づく力", text: "変更があったときほど、『まだ知らない人は？』を思い出そう。" },
      ],
      illustration: dragonIllustration,
      tags: ["予定変更", "雨", "共有"],
    },
  ],
};
