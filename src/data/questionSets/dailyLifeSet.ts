import dragonIllustration from "../../assets/illustrations/raster/dragon.png";
import dwarfIllustration from "../../assets/illustrations/raster/dwarf-guardian.png";
import archerIllustration from "../../assets/illustrations/raster/forest-archer.png";
import heroIllustration from "../../assets/illustrations/raster/hero-knight.png";
import treasureIllustration from "../../assets/illustrations/raster/treasure-chest.png";
import wizardIllustration from "../../assets/illustrations/raster/wizard.png";
import type { Question, QuestionChoice, QuestionSet } from "../../types";

type RawQuestion = Omit<Question, "learningPoints"> & {
  learningPoint: {
    label: string;
    text: string;
  };
};

function choice(id: "a" | "b" | "c", text: string, score: 0 | 1 | 2, feedback: string): QuestionChoice {
  return { id, text, score, feedback };
}

function makeQuestion({ learningPoint, ...question }: RawQuestion): Question {
  return {
    ...question,
    learningPoints: [learningPoint],
  };
}

export const dailyLifeSet: QuestionSet = {
  id: "daily-life",
  title: "かけだし冒険者セット",
  description: "50のクエスト場面から、毎回10問をランダムで挑戦。",
  questions: [
    makeQuestion({
      id: "q001",
      title: "依頼書の集合場所",
      situation:
        "ギルドで受けた薬草集めの依頼書には、集合場所と帰る時間が書かれています。仲間はもう出ようとしています。どうする？",
      categories: ["planning", "foresight"],
      choices: [
        choice("a", "読まずにそのまま出発する", 0, "場所や時間がずれると、あとで仲間と会えなくなるかもしれないね。"),
        choice("b", "依頼書の場所と時間を確認してから出る", 2, "いいね。先に条件をそろえると、安心して動けるよ。"),
        choice("c", "歩きながら読めばいいと思って進む", 1, "あとからでも読めるけれど、先に確認したほうが落ち着いて動けるね。"),
      ],
      bestChoiceId: "b",
      explanation: "出発前に条件を確かめると、行き違いを減らせます。",
      learningPoint: {
        label: "先にそろえる",
        text: "時間・場所・持ちもののような土台を最初に確かめると、後であわてにくいよ。",
      },
      illustration: heroIllustration,
      tags: ["ギルド", "集合", "確認"],
    }),
    makeQuestion({
      id: "q002",
      title: "村を出る前のひとこと",
      situation:
        "きみは見習い冒険者です。宿の主人は、きみが今日は裏庭の手伝いをすると思っています。森へ依頼に向かう前にどうする？",
      categories: ["communication", "perspective"],
      choices: [
        choice("a", "何も言わずに出る", 0, "宿の主人は、きみがどこへ行ったのか分からず困るかもしれないね。"),
        choice("b", "『森の依頼に行ってきます』と伝えてから出る", 2, "いいね。相手が知らない予定は、先に伝えると安心だよ。"),
        choice("c", "帰ってから話せばいいと思う", 1, "あとで話すより、出る前のひとことが役立つね。"),
      ],
      bestChoiceId: "b",
      explanation: "相手が知らない予定は、先に伝えると安心です。",
      learningPoint: {
        label: "だれが知らない？",
        text: "自分では当たり前でも、相手はまだ知らないことがあるよ。",
      },
      illustration: heroIllustration,
      tags: ["村", "宿", "声かけ"],
    }),
    makeQuestion({
      id: "q003",
      title: "雨雲と旅マント",
      situation:
        "草原の先に暗い雲が見えます。これから半日かけて見回りに行くところです。出発前にどれを選ぶ？",
      categories: ["foresight", "planning"],
      choices: [
        choice("a", "晴れているのでそのまま行く", 0, "天気が変わると、ぬれて動きにくくなるかもしれないね。"),
        choice("b", "雨よけのマントを持って出る", 2, "いいね。起こりそうなことを先に考えられているよ。"),
        choice("c", "降ってから戻ればいいと思う", 1, "戻るより、最初に持っておくほうが楽だね。"),
      ],
      bestChoiceId: "b",
      explanation: "変わりそうな天気には、先回りした準備が役立ちます。",
      learningPoint: {
        label: "先の変化",
        text: "今だけでなく、このあと何が起きそうかも考えてみよう。",
      },
      illustration: dragonIllustration,
      tags: ["草原", "天気", "準備"],
    }),
    makeQuestion({
      id: "q004",
      title: "見習い仲間へ出発の合図",
      situation:
        "出発時間になりましたが、新しく入った仲間はまだ荷物をまとめています。きみは先に時間に気づきました。どうする？",
      categories: ["responsibility", "communication"],
      choices: [
        choice("a", "自分だけ先に外へ出る", 1, "自分は動けるけれど、仲間全体はそろわないかもしれないね。"),
        choice("b", "『そろそろ出発だよ』とやさしく知らせる", 2, "いいね。気づいた人が声をかけると、みんなが動きやすいよ。"),
        choice("c", "時間が過ぎてから隊長にだけ伝える", 0, "もっと早く動けたなら、その時点で知らせたいね。"),
      ],
      bestChoiceId: "b",
      explanation: "気づいた人がやさしく声をかけると、流れがよくなります。",
      learningPoint: {
        label: "気づいた人が動く",
        text: "だれかがやるのを待つより、先に気づいた人の一歩が助けになるよ。",
      },
      illustration: dwarfIllustration,
      tags: ["出発", "仲間", "主体性"],
    }),
    makeQuestion({
      id: "q005",
      title: "洞窟前の回復薬",
      situation:
        "小さな洞窟の見回りに行きます。回復薬が1本しか残っていないことに気づきました。どう考える？",
      categories: ["foresight", "planning"],
      choices: [
        choice("a", "そのまま気にせず入る", 0, "必要になったときに足りず、困るかもしれないね。"),
        choice("b", "補充するか、少ないことを先に仲間へ伝える", 2, "いいね。足りない物に先に気づいて動けているよ。"),
        choice("c", "誰かが持っているだろうと思う", 1, "そうかもしれないけれど、確認できるともっと安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "足りない物に気づいたら、先に補うか共有すると安心です。",
      learningPoint: {
        label: "足りない物に気づく",
        text: "出発前の小さな確認が、あとで大きな安心につながるよ。",
      },
      illustration: dragonIllustration,
      tags: ["洞窟", "持ちもの", "確認"],
    }),
    makeQuestion({
      id: "q006",
      title: "地図を初めて見る仲間",
      situation:
        "今日は北の見張り塔で集合です。でも一緒に行く仲間は、その場所へ行ったことがありません。どうする？",
      categories: ["communication", "perspective"],
      choices: [
        choice("a", "『北の見張り塔ね』だけ伝える", 0, "相手は同じだけ場所を知っているとは限らないね。"),
        choice("b", "どの門を出て、どこを目印にするかまで伝える", 2, "いいね。相手が知らないところを先にうめられているよ。"),
        choice("c", "着いてから探してもらう", 1, "あとでも会えるかもしれないけれど、先に説明したほうがやさしいね。"),
      ],
      bestChoiceId: "b",
      explanation: "相手が知らない場所は、具体的に伝えると迷いにくくなります。",
      learningPoint: {
        label: "知っている量は同じ？",
        text: "自分が知っている場所でも、相手には初めてかもしれないよ。",
      },
      illustration: archerIllustration,
      tags: ["地図", "集合", "説明"],
    }),
    makeQuestion({
      id: "q007",
      title: "門が閉まる前に帰る",
      situation:
        "夕方になると町の門が閉まります。依頼先の畑までは片道30分です。出る時間をどう考える？",
      categories: ["foresight", "planning"],
      choices: [
        choice("a", "終わるまで気にせず作業する", 0, "帰りが遅くなると、門に間に合わないかもしれないね。"),
        choice("b", "帰る時間から逆算して、早めに切り上げる", 2, "いいね。帰り道まで考えて動けているよ。"),
        choice("c", "門番が待ってくれると思う", 1, "助かることもあるけれど、最初から当てにしないほうが安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "帰る条件まで含めて逆算すると、無理のない動き方になります。",
      learningPoint: {
        label: "帰りまで考える",
        text: "出発だけでなく、戻る時間まで考えておくと予定が安定するよ。",
      },
      illustration: archerIllustration,
      tags: ["門", "時間", "逆算"],
    }),
    makeQuestion({
      id: "q008",
      title: "遅れそうな伝令",
      situation:
        "きみは手紙を届ける役目です。道が混んでいて、約束の時間に少し遅れそうだと分かりました。どうする？",
      categories: ["communication", "responsibility"],
      choices: [
        choice("a", "急いで行き、何も知らせない", 0, "待っている人は、どうしたのか分からず不安になるかもしれないね。"),
        choice("b", "遅れそうだと分かった時点で先に知らせる", 2, "いいね。早めの共有は相手を安心させるよ。"),
        choice("c", "着いてから遅れたことを話す", 1, "伝えるのは大事だけれど、先に知らせるともっと親切だね。"),
      ],
      bestChoiceId: "b",
      explanation: "遅れそうだと分かった時点で共有すると、相手が待ちやすくなります。",
      learningPoint: {
        label: "早めの連絡",
        text: "うまくいかなくなりそうな時ほど、先に伝えることが役に立つよ。",
      },
      illustration: dwarfIllustration,
      tags: ["伝令", "遅れ", "連絡"],
    }),
    makeQuestion({
      id: "q009",
      title: "荷馬車の荷物確認",
      situation:
        "荷馬車で食料を運びます。出発直前、きみは荷物のひもが少しゆるんでいるのを見つけました。どうする？",
      categories: ["planning", "responsibility"],
      choices: [
        choice("a", "たぶん大丈夫だと思ってそのまま出る", 0, "途中で荷物が落ちると、もっと大変になるかもしれないね。"),
        choice("b", "出発前に結び直すか、担当の人へ伝える", 2, "いいね。小さな気づきをその場で動きにつなげられているよ。"),
        choice("c", "帰りに直せばいいと思う", 1, "あと回しにするより、今のうちに直せると安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "出発前の小さな異変は、その場で直すと大きなトラブルを防げます。",
      learningPoint: {
        label: "小さいうちに直す",
        text: "困りごとは小さいうちに動くと、あとで楽になるよ。",
      },
      illustration: treasureIllustration,
      tags: ["荷馬車", "確認", "出発前"],
    }),
    makeQuestion({
      id: "q010",
      title: "朝訓練と食堂当番",
      situation:
        "朝の剣の訓練をしたいけれど、今日は食堂の片づけ当番もあります。出発まで30分。どう考える？",
      categories: ["planning", "responsibility"],
      choices: [
        choice("a", "訓練を先にして、当番はあとで考える", 0, "やるべきことが残ると、あとで急ぐことになりそうだね。"),
        choice("b", "当番を先に終えて、残り時間で訓練する", 2, "いいね。必要なことを先に済ませる順番ができているよ。"),
        choice("c", "当番は誰かがやるだろうと思う", 0, "自分の役目は、自分で意識できると気持ちがよいね。"),
      ],
      bestChoiceId: "b",
      explanation: "先に役目を終えると、その後の時間を安心して使えます。",
      learningPoint: {
        label: "順番を決める",
        text: "やりたいことと、やるべきことを分けて順番を考えてみよう。",
      },
      illustration: wizardIllustration,
      tags: ["朝", "当番", "順番"],
    }),
    makeQuestion({
      id: "q011",
      title: "借りたロープの返却",
      situation:
        "鍛冶屋から借りた丈夫なロープを、明日までに返す約束です。今日、店の近くを通る予定があります。どうする？",
      categories: ["responsibility", "communication"],
      choices: [
        choice("a", "明日でもいいから今日は何もしない", 1, "明日でも返せるかもしれないけれど、先に済ませると安心だね。"),
        choice("b", "今日返せるなら返しておく", 2, "いいね。できる時に済ませると、うっかりを減らせるよ。"),
        choice("c", "返す約束を忘れていたふりをする", 0, "借りた物は、きちんと返す意識を持ちたいね。"),
      ],
      bestChoiceId: "b",
      explanation: "返せる機会があるなら、先に返しておくと忘れにくいです。",
      learningPoint: {
        label: "約束を先に回収",
        text: "やるべきことは、できるチャンスが来た時に進めると安定するよ。",
      },
      illustration: dwarfIllustration,
      tags: ["借り物", "約束", "返却"],
    }),
    makeQuestion({
      id: "q012",
      title: "休けいあとのたき火",
      situation:
        "野外で昼休けいをしました。そろそろ移動です。たき火の火がまだ少し残っています。どうする？",
      categories: ["responsibility", "foresight"],
      choices: [
        choice("a", "急いでいるのでそのまま出る", 0, "あとで火が広がると、もっと大きな困りごとになるかもしれないね。"),
        choice("b", "完全に消えたのを確かめてから出る", 2, "いいね。次に起こるかもしれないことまで考えられているよ。"),
        choice("c", "誰かが最後に見るだろうと思う", 1, "そうかもしれないけれど、自分で気づいたなら動けるとよいね。"),
      ],
      bestChoiceId: "b",
      explanation: "その場を離れる前の確認は、あとで困ることを減らします。",
      learningPoint: {
        label: "出る前の確認",
        text: "場面を切り替える前に、一度だけ見直す習慣が役立つよ。",
      },
      illustration: dragonIllustration,
      tags: ["野外", "火", "確認"],
    }),
    makeQuestion({
      id: "q013",
      title: "夜番の交代",
      situation:
        "夜番の時間になりましたが、交代相手は本を読んでいて気づいていないようです。どうする？",
      categories: ["communication", "perspective"],
      choices: [
        choice("a", "何も言わずにそのまま待つ", 1, "急がせないのはやさしいけれど、相手はまだ気づいていないかもしれないね。"),
        choice("b", "『交代の時間だよ』と静かに声をかける", 2, "いいね。必要なことをやさしく伝えられているよ。"),
        choice("c", "時間を過ぎてから文句を言う", 0, "先に知らせれば、防げた困りごとかもしれないね。"),
      ],
      bestChoiceId: "b",
      explanation: "相手が気づいていない時は、やさしい声かけが役立ちます。",
      learningPoint: {
        label: "責める前に知らせる",
        text: "まずは今必要な情報を伝えると、相手も動きやすくなるよ。",
      },
      illustration: wizardIllustration,
      tags: ["夜番", "交代", "声かけ"],
    }),
    makeQuestion({
      id: "q014",
      title: "橋こわれで道変更",
      situation:
        "見回りの途中で、いつもの橋が使えないと分かりました。後ろから来る仲間は、まだそのことを知りません。どうする？",
      categories: ["communication", "foresight"],
      choices: [
        choice("a", "自分だけ別の道へ進む", 0, "後から来る仲間は、同じ橋へ向かってしまうかもしれないね。"),
        choice("b", "まだ知らない仲間へ、道が変わったことを伝える", 2, "いいね。情報の差に気づいて共有できているよ。"),
        choice("c", "帰った後で話せばいいと思う", 1, "伝えるのは大切だけれど、必要な時に伝えるのがもっと役立つね。"),
      ],
      bestChoiceId: "b",
      explanation: "予定変更を知ったら、まだ知らない人へ早めに伝えるのが大切です。",
      learningPoint: {
        label: "情報の差をうめる",
        text: "自分が知った新しい情報は、必要な相手がまだ知らないかを考えてみよう。",
      },
      illustration: dragonIllustration,
      tags: ["道変更", "橋", "共有"],
    }),
    makeQuestion({
      id: "q015",
      title: "合図を知らない新入り",
      situation:
        "森の見回りでは、危ない時に笛を一回鳴らす決まりです。今日初参加の新入りは、その合図をまだ知りません。どうする？",
      categories: ["communication", "perspective"],
      choices: [
        choice("a", "見れば分かるだろうと思って何も言わない", 0, "初めての人には、当然に見えることも伝わっていないかもしれないね。"),
        choice("b", "出発前に合図の意味を短く伝える", 2, "いいね。相手が知らないことを先に埋められているよ。"),
        choice("c", "危なくなった時にその場で教える", 1, "その場でも伝えられるけれど、前もって知っていると安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "初めて参加する人には、ルールや合図を先に共有すると安心です。",
      learningPoint: {
        label: "初めての人目線",
        text: "慣れている人には当たり前でも、初めての人には初めてだよ。",
      },
      illustration: archerIllustration,
      tags: ["合図", "新入り", "ルール"],
    }),
    makeQuestion({
      id: "q016",
      title: "宝箱の前でひとこと",
      situation:
        "古い宝箱を見つけました。後ろにいる仲間はまだ近づいてきていません。どうする？",
      categories: ["perspective", "responsibility"],
      choices: [
        choice("a", "何も言わず、すぐに開ける", 0, "仲間は何が起きたのか分からず、危ない場面に巻きこまれるかもしれないね。"),
        choice("b", "まず仲間に知らせて、様子を見てから開ける", 2, "いいね。自分だけでなく、周りの安全も考えられているよ。"),
        choice("c", "宝箱の上に座ってみる", 0, "楽しくても、まず安全をたしかめたいね。"),
      ],
      bestChoiceId: "b",
      explanation: "気になる物ほど、周りへ知らせてから確かめると安全です。",
      learningPoint: {
        label: "自分だけの判断にしない",
        text: "気づいたことは一人で抱えず、近くの人にも共有すると安心だよ。",
      },
      illustration: treasureIllustration,
      tags: ["宝箱", "安全", "共有"],
    }),
    makeQuestion({
      id: "q017",
      title: "村祭りと依頼",
      situation:
        "今日は村祭りですが、同じ時間に小さな依頼も入っています。友だちには祭りへ行くと言ってあります。どうする？",
      categories: ["communication", "planning"],
      choices: [
        choice("a", "どちらにも何も言わず、その時の気分で決める", 0, "待っている人たちが、予定を立てにくくなるかもしれないね。"),
        choice("b", "依頼と祭りの予定を見て、先に関係する人へ相談する", 2, "いいね。予定が重なった時の考え方ができているよ。"),
        choice("c", "友だちだけに伝えて依頼先には何も言わない", 1, "一方には伝わるけれど、必要な相手全員には届いていないね。"),
      ],
      bestChoiceId: "b",
      explanation: "予定が重なった時は、関係する相手へ先に相談すると安心です。",
      learningPoint: {
        label: "予定は一人だけのものじゃない",
        text: "自分の予定が変わると、まわりの予定にも関わることがあるよ。",
      },
      illustration: heroIllustration,
      tags: ["予定", "祭り", "相談"],
    }),
    makeQuestion({
      id: "q018",
      title: "水袋は足りる？",
      situation:
        "今日は暑い日で、丘の上まで歩いて行きます。きみの水袋は半分しか入っていません。どうする？",
      categories: ["foresight", "planning"],
      choices: [
        choice("a", "半分でもたぶん足りると思う", 0, "足りなくなってからでは、すぐに補えないかもしれないね。"),
        choice("b", "出発前に足しておく", 2, "いいね。必要になりそうな物を先に満たせているよ。"),
        choice("c", "仲間の分を少しもらえばいいと思う", 1, "助けてもらえることもあるけれど、自分で備えられると安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "必要になりそうな物は、出る前にそろえておくと安心です。",
      learningPoint: {
        label: "足りなくなる前",
        text: "困ってからではなく、困りそうな前に動くのが先読みだよ。",
      },
      illustration: archerIllustration,
      tags: ["水", "暑さ", "準備"],
    }),
    makeQuestion({
      id: "q019",
      title: "朝の支度と武具みがき",
      situation:
        "朝の出発まで25分あります。顔を洗う、朝ごはん、荷物確認、剣の手入れがまだです。どう考える？",
      categories: ["planning", "responsibility"],
      choices: [
        choice("a", "好きなことから始めて、残りは後で考える", 1, "気分は上がるけれど、出発に必要な順番も見たいね。"),
        choice("b", "まず出発に必要なことを順番にすませる", 2, "いいね。ゴールから逆算する考え方ができているよ。"),
        choice("c", "何もせず、出発直前にまとめてやる", 0, "時間が足りなくなると、どれも中途半端になりそうだね。"),
      ],
      bestChoiceId: "b",
      explanation: "出発までに必要なことを順に進めると、落ち着いて準備できます。",
      learningPoint: {
        label: "ゴールから逆算",
        text: "最後に間に合っていたい形を思い浮かべると、順番を選びやすいよ。",
      },
      illustration: wizardIllustration,
      tags: ["朝", "支度", "逆算"],
    }),
    makeQuestion({
      id: "q020",
      title: "討伐後の報告",
      situation:
        "見回りの依頼が終わりました。みんなはもう休みたい様子ですが、依頼主への報告はまだです。どうする？",
      categories: ["responsibility", "communication"],
      choices: [
        choice("a", "報告しないまま帰る", 0, "依頼主は終わったか分からず、次の予定が立てにくいかもしれないね。"),
        choice("b", "終わったことを先に報告してから休む", 2, "いいね。最後までやり切る意識があるよ。"),
        choice("c", "明日思い出したら話す", 1, "あとでも話せるけれど、その日のうちの方が分かりやすいね。"),
      ],
      bestChoiceId: "b",
      explanation: "終わったことを伝えるまでが、依頼の大切な一部です。",
      learningPoint: {
        label: "終わりも共有",
        text: "始まりだけでなく、終わったことを伝えるのも大切な仕事だよ。",
      },
      illustration: heroIllustration,
      tags: ["報告", "依頼", "完了"],
    }),
    makeQuestion({
      id: "q021",
      title: "宿を出る前の忘れ物",
      situation:
        "宿を出てしばらく歩いたところで、部屋の鍵を机に置いたままかもしれないと気づきました。どうする？",
      categories: ["foresight", "planning"],
      choices: [
        choice("a", "気にせず進む", 0, "あとで戻ると、もっと時間がかかるかもしれないね。"),
        choice("b", "気づいた今のうちに確認する", 2, "いいね。小さいうちに確かめるのは大事だよ。"),
        choice("c", "帰る時に思い出せばいいと思う", 1, "あとにするより、今確かめるほうが安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "不安なことは、気づいた時に確認するとあとで楽になります。",
      learningPoint: {
        label: "気づいた時が動く時",
        text: "あとでやろうより、今のひと手間のほうが小さく済むことが多いよ。",
      },
      illustration: treasureIllustration,
      tags: ["宿", "忘れ物", "確認"],
    }),
    makeQuestion({
      id: "q022",
      title: "森が暗くなる前に",
      situation:
        "あと少しで目的の木の実が集まりそうですが、森はだんだん暗くなっています。どうする？",
      categories: ["foresight", "planning"],
      choices: [
        choice("a", "全部集まるまで続ける", 0, "暗くなると、帰り道が見えにくくなるかもしれないね。"),
        choice("b", "暗くなる前に切り上げて戻る", 2, "いいね。今だけでなく、帰りの安全まで考えられているよ。"),
        choice("c", "明かりなしで何とかすると決める", 1, "進めることもあるけれど、無理をしない判断も大切だね。"),
      ],
      bestChoiceId: "b",
      explanation: "その場の目的だけでなく、帰り道まで考えることが大切です。",
      learningPoint: {
        label: "目の前だけじゃない",
        text: "今うまくいっていても、その後に困らないかを考えてみよう。",
      },
      illustration: dragonIllustration,
      tags: ["森", "帰り道", "安全"],
    }),
    makeQuestion({
      id: "q023",
      title: "けがを見つけたら",
      situation:
        "仲間のひざに小さな切り傷がありました。本人は『平気だよ』と言っています。どうする？",
      categories: ["perspective", "communication"],
      choices: [
        choice("a", "平気と言うなら何もしない", 1, "本人は気にしていなくても、あとで痛くなるかもしれないね。"),
        choice("b", "手当てが必要か、一緒に確認しようと声をかける", 2, "いいね。相手の様子を見ながら支えられているよ。"),
        choice("c", "みんなの前で大声でさわぐ", 0, "気づくのは大事だけれど、伝え方は落ち着いて選びたいね。"),
      ],
      bestChoiceId: "b",
      explanation: "相手の様子を見ながら、必要な助けをやさしく提案すると安心です。",
      learningPoint: {
        label: "相手の気もちも大切",
        text: "助ける時は、内容だけでなく伝え方もやさしく選べるといいね。",
      },
      illustration: wizardIllustration,
      tags: ["けが", "気づき", "声かけ"],
    }),
    makeQuestion({
      id: "q024",
      title: "待ち合わせは西門",
      situation:
        "旅の商人と西門で会う約束です。でも西門には大きな門と小さな横門があります。商人は町に不慣れです。どうする？",
      categories: ["communication", "perspective"],
      choices: [
        choice("a", "『西門で』だけ伝える", 0, "相手はどこに立てばよいか迷うかもしれないね。"),
        choice("b", "大きな門の前など、目印まで伝える", 2, "いいね。分かれそうな所を先に減らせているよ。"),
        choice("c", "会えなければ歩き回ればいいと思う", 1, "あとで会えるかもしれないけれど、先に決めるともっと安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "目印まで伝えると、知らない場所でも会いやすくなります。",
      learningPoint: {
        label: "あいまいを減らす",
        text: "いくつも候補がありそうな時は、具体的にしておくと会いやすいよ。",
      },
      illustration: archerIllustration,
      tags: ["待ち合わせ", "場所", "目印"],
    }),
    makeQuestion({
      id: "q025",
      title: "仲間がまだ朝食中",
      situation:
        "出発時間が近いのに、仲間は朝食を食べながらのんびり話しています。きみは時間に気づきました。どうする？",
      categories: ["responsibility", "perspective"],
      choices: [
        choice("a", "イライラしながら黙って待つ", 1, "気持ちは分かるけれど、相手は時間に気づいていないかもしれないね。"),
        choice("b", "『もうすぐ出発だよ』と落ち着いて伝える", 2, "いいね。気づいたことを責めずに伝えられているよ。"),
        choice("c", "自分だけ先に出てしまう", 0, "全体の予定がそろわず、あとで困りやすいね。"),
      ],
      bestChoiceId: "b",
      explanation: "時間に気づいた時は、責めるより先に知らせることが大切です。",
      learningPoint: {
        label: "伝え方で変わる",
        text: "同じ内容でも、やさしい声かけの方が相手は動きやすいよ。",
      },
      illustration: dwarfIllustration,
      tags: ["朝", "時間", "仲間"],
    }),
    makeQuestion({
      id: "q026",
      title: "薬草の数を数える",
      situation:
        "依頼では薬草を10束集める決まりです。そろった気がするけれど、数え直してはいません。どうする？",
      categories: ["responsibility", "planning"],
      choices: [
        choice("a", "たぶん足りていると思って帰る", 0, "足りなかった時に、また戻ることになるかもしれないね。"),
        choice("b", "帰る前に一度数えて確かめる", 2, "いいね。終わる前の確認ができているよ。"),
        choice("c", "あとでギルドで数えればいい", 1, "確認は大切だけれど、その場で分かる方が動きやすいね。"),
      ],
      bestChoiceId: "b",
      explanation: "終える前のひと確認で、やり直しを減らせます。",
      learningPoint: {
        label: "終わる前の一回",
        text: "完了と思った時に、一度だけ見直すとミスが減りやすいよ。",
      },
      illustration: treasureIllustration,
      tags: ["薬草", "数", "確認"],
    }),
    makeQuestion({
      id: "q027",
      title: "ぬかるみ道を知らせる",
      situation:
        "近道の林道が雨でぬかるんでいました。あとから来る仲間は、まだそのことを知りません。どうする？",
      categories: ["communication", "foresight"],
      choices: [
        choice("a", "自分だけ気をつけて進む", 0, "知らない仲間は、すべって困るかもしれないね。"),
        choice("b", "危ない場所を先に伝える", 2, "いいね。次に起こりそうな困りごとを防げているよ。"),
        choice("c", "きっと見れば分かると思う", 1, "気づくこともあるけれど、先に伝えるともっと安全だね。"),
      ],
      bestChoiceId: "b",
      explanation: "危ない変化に気づいたら、必要な相手へ早めに共有することが大切です。",
      learningPoint: {
        label: "危ない情報は早め",
        text: "転ぶ・迷う・遅れるのようなことは、先に知らせると防ぎやすいよ。",
      },
      illustration: archerIllustration,
      tags: ["道", "危険", "共有"],
    }),
    makeQuestion({
      id: "q028",
      title: "川べり遠征のくつ",
      situation:
        "今日は川べりを歩く依頼です。足元がぬれやすいと分かっています。朝のうちに何をする？",
      categories: ["foresight", "planning"],
      choices: [
        choice("a", "いつものままで行く", 0, "ぬれると動きにくくなって困るかもしれないね。"),
        choice("b", "ぬれてもよいくつや替えのくつ下を用意する", 2, "いいね。場面に合わせた準備ができているよ。"),
        choice("c", "ぬれたら乾くまで待てばいいと思う", 1, "何とかはなるかもしれないけれど、先の準備があると楽だね。"),
      ],
      bestChoiceId: "b",
      explanation: "行く場所に合わせて準備を変えると、動きやすくなります。",
      learningPoint: {
        label: "場面に合わせる",
        text: "いつも同じでなく、その日の場所や天気に合わせて考えてみよう。",
      },
      illustration: dragonIllustration,
      tags: ["川", "持ちもの", "準備"],
    }),
    makeQuestion({
      id: "q029",
      title: "魔法書を貸した相手",
      situation:
        "貸していた魔法書を、今日の夕方までに返してもらう約束です。相手は忘れていそうです。どうする？",
      categories: ["responsibility", "communication"],
      choices: [
        choice("a", "何も言わず、返ってこないのを待つ", 1, "相手は本当に忘れているだけかもしれないね。"),
        choice("b", "約束の前に、やさしく思い出せるよう伝える", 2, "いいね。相手を責めずに、必要なことを伝えられているよ。"),
        choice("c", "いきなり怒る", 0, "気持ちは分かるけれど、まずは落ち着いて知らせたいね。"),
      ],
      bestChoiceId: "b",
      explanation: "忘れそうな約束は、責めずに早めに声をかけると進みやすいです。",
      learningPoint: {
        label: "思い出せる手助け",
        text: "相手を責めるより、必要な時に思い出せるようにするのが役立つよ。",
      },
      illustration: wizardIllustration,
      tags: ["貸し借り", "約束", "声かけ"],
    }),
    makeQuestion({
      id: "q030",
      title: "見張り台の交代合図",
      situation:
        "見張り台は風が強く、声が届きにくい場所です。交代の時にどうする？",
      categories: ["communication", "planning"],
      choices: [
        choice("a", "その場で何とかなると思って決めない", 0, "聞こえないと、交代がうまくいかないかもしれないね。"),
        choice("b", "事前に手を振るなどの合図を決めておく", 2, "いいね。声が届きにくい場面まで考えられているよ。"),
        choice("c", "大きな声を出せば大丈夫だと思う", 1, "届くこともあるけれど、別の方法もあると安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "場面に合う伝え方を先に決めると、困りにくくなります。",
      learningPoint: {
        label: "伝え方を選ぶ",
        text: "いつもの方法が使いにくい時は、別の伝え方を考えてみよう。",
      },
      illustration: archerIllustration,
      tags: ["見張り台", "合図", "準備"],
    }),
    makeQuestion({
      id: "q031",
      title: "返事待ちの依頼",
      situation:
        "友だち冒険者に一緒に行くか聞きましたが、まだ返事がありません。出発時間は近づいています。どうする？",
      categories: ["communication", "perspective"],
      choices: [
        choice("a", "返事がないまま、ずっと待ち続ける", 1, "待つのはやさしいけれど、予定全体が止まってしまうかもしれないね。"),
        choice("b", "いつまで待つかを決めて、必要ならもう一度短く確認する", 2, "いいね。相手も自分も困りにくい進め方だよ。"),
        choice("c", "何も言わずに怒って出発する", 0, "気持ちは分かるけれど、確認がないままだと行き違いやすいね。"),
      ],
      bestChoiceId: "b",
      explanation: "返事待ちの時は、待つ時間や確認の仕方を決めると落ち着いて進められます。",
      learningPoint: {
        label: "待つにも段取り",
        text: "ただ待つより、どこまで待つかを決めると動きやすいよ。",
      },
      illustration: heroIllustration,
      tags: ["返事", "予定", "確認"],
    }),
    makeQuestion({
      id: "q032",
      title: "野営前の食料配分",
      situation:
        "今夜は野営です。食料は限られています。まだ人数分に分けていません。どうする？",
      categories: ["planning", "perspective"],
      choices: [
        choice("a", "おなかがすいた人から先に食べる", 0, "あとから来る人の分が足りなくなるかもしれないね。"),
        choice("b", "人数を見て先に分けておく", 2, "いいね。みんなのぶんを考えた準備ができているよ。"),
        choice("c", "食べながら何となく分ける", 1, "分けられるかもしれないけれど、先に決めると安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "限りがあるものは、先に全体を見て分けると安心です。",
      learningPoint: {
        label: "全体を見る",
        text: "自分の分だけでなく、みんなの分まで見て考えると公平になりやすいよ。",
      },
      illustration: treasureIllustration,
      tags: ["野営", "食料", "分け方"],
    }),
    makeQuestion({
      id: "q033",
      title: "宝物庫見学の集合",
      situation:
        "今日は城の宝物庫を見学する日です。集合時間は朝9時。友だちは時間をまだよく覚えていないようです。どうする？",
      categories: ["communication", "planning"],
      choices: [
        choice("a", "当日になれば思い出すだろうと思う", 0, "忘れると、待ち合わせがずれてしまうかもしれないね。"),
        choice("b", "前の日のうちに集合時間をもう一度伝える", 2, "いいね。忘れやすい予定を先に整えられているよ。"),
        choice("c", "自分だけ覚えていればいいと思う", 1, "自分は大丈夫でも、相手の準備は別に必要かもしれないね。"),
      ],
      bestChoiceId: "b",
      explanation: "忘れそうな予定は、前もって確認し合うと安心です。",
      learningPoint: {
        label: "前日に整える",
        text: "明日の大事な予定は、前の日に一度だけ見直すと動きやすいよ。",
      },
      illustration: treasureIllustration,
      tags: ["集合", "時間", "前日"],
    }),
    makeQuestion({
      id: "q034",
      title: "別の門へ向かいそうな友だち",
      situation:
        "王都には東門と西門があります。きみは西門で待ち合わせだと知っていますが、友だちは東門へ向かいそうです。どうする？",
      categories: ["communication", "perspective"],
      choices: [
        choice("a", "気づいてもそのまま見送る", 0, "友だちは違う場所で待ち続けるかもしれないね。"),
        choice("b", "今のうちに待ち合わせ場所を伝える", 2, "いいね。行き違いになる前に動けているよ。"),
        choice("c", "着いてから気づくだろうと思う", 1, "気づけるかもしれないけれど、先に伝えた方がやさしいね。"),
      ],
      bestChoiceId: "b",
      explanation: "行き違いに気づいたら、その場で短く伝えると助けになります。",
      learningPoint: {
        label: "ずれに気づく",
        text: "ちょっと違うかもと気づいた時に伝えるのが、いちばん効くことが多いよ。",
      },
      illustration: archerIllustration,
      tags: ["王都", "待ち合わせ", "門"],
    }),
    makeQuestion({
      id: "q035",
      title: "強風の日の書類",
      situation:
        "風の強い日に、依頼書や地図を外へ持って行きます。どう準備する？",
      categories: ["foresight", "planning"],
      choices: [
        choice("a", "手で持つだけで出る", 0, "風で飛ばされると、あとで探すのが大変かもしれないね。"),
        choice("b", "袋に入れるか、まとめてとめて持つ", 2, "いいね。起こりそうなことに先に備えられているよ。"),
        choice("c", "落ちたら拾えばいいと思う", 1, "拾えることもあるけれど、最初から飛ばない方が安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "風や雨など、その日の条件に合わせた準備が役立ちます。",
      learningPoint: {
        label: "環境に合わせる",
        text: "持ち方や入れ方も、その日の天気や場所で変えられるといいね。",
      },
      illustration: dragonIllustration,
      tags: ["風", "地図", "準備"],
    }),
    makeQuestion({
      id: "q036",
      title: "使った道具の片づけ",
      situation:
        "訓練で木の盾を使いました。次は食事の時間です。どうする？",
      categories: ["responsibility", "planning"],
      choices: [
        choice("a", "そのまま置いて食堂へ行く", 0, "次に使う人や通る人が困るかもしれないね。"),
        choice("b", "食事の前に片づけてから移動する", 2, "いいね。次の予定に移る前の整理ができているよ。"),
        choice("c", "友だちに片づけてもらう", 0, "自分で使ったものは、自分でしまえると気持ちがよいね。"),
      ],
      bestChoiceId: "b",
      explanation: "使い終わったものは、次の予定の前に片づけると流れがよくなります。",
      learningPoint: {
        label: "切り替え前の整理",
        text: "次へ進む前の短い片づけが、あとで大きく効いてくるよ。",
      },
      illustration: dwarfIllustration,
      tags: ["片づけ", "訓練", "切り替え"],
    }),
    makeQuestion({
      id: "q037",
      title: "鍛冶屋の盾の返却日",
      situation:
        "鍛冶屋から借りた盾の返却日が今日です。午後にその通りへ行く予定があります。どうする？",
      categories: ["responsibility", "foresight"],
      choices: [
        choice("a", "帰ってから思い出せば返す", 1, "返せるかもしれないけれど、忘れることもありそうだね。"),
        choice("b", "出かける前に盾を持ち出しやすい場所へ置いておく", 2, "いいね。返す流れを先に作れているよ。"),
        choice("c", "返す約束をなかったことにする", 0, "借りたものの約束は、大切にしたいね。"),
      ],
      bestChoiceId: "b",
      explanation: "あとで必要な物は、先に見える場所へ準備すると忘れにくくなります。",
      learningPoint: {
        label: "動きやすい形にする",
        text: "やることを覚えるだけでなく、やれる形にしておくのもコツだよ。",
      },
      illustration: dwarfIllustration,
      tags: ["返却", "借り物", "準備"],
    }),
    makeQuestion({
      id: "q038",
      title: "水辺クエストの着替え",
      situation:
        "今日は浅い川を何度か渡る依頼です。宿を出る前に、どれを考える？",
      categories: ["foresight", "planning"],
      choices: [
        choice("a", "ぬれないよう祈ってそのまま行く", 0, "ぬれた時に困ることを見落としているかもしれないね。"),
        choice("b", "必要なら替えの服や布を持つ", 2, "いいね。起こりそうなことへの備えができているよ。"),
        choice("c", "ぬれたら日なたで乾かせばいい", 1, "そうできることもあるけれど、準備があるともっと安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "起こりそうな不便を思い浮かべて、先に持ちものを変えると安心です。",
      learningPoint: {
        label: "不便を先に想像",
        text: "『もしこうなったら？』を一つ考えるだけでも、準備は変わるよ。",
      },
      illustration: archerIllustration,
      tags: ["川", "着替え", "準備"],
    }),
    makeQuestion({
      id: "q039",
      title: "早朝出発と寝ている仲間",
      situation:
        "夜明け前に出発する日です。宿ではまだ仲間が寝ています。きみは先に起きました。どうする？",
      categories: ["perspective", "responsibility"],
      choices: [
        choice("a", "大きな音で荷物を広げる", 0, "まだ寝ている仲間がびっくりしてしまうかもしれないね。"),
        choice("b", "静かに自分の準備を進め、必要なら時間だけ短く伝える", 2, "いいね。相手の様子を考えながら動けているよ。"),
        choice("c", "みんなが起きるまで何もしない", 1, "静かにするのはよいけれど、自分でできることは進められるね。"),
      ],
      bestChoiceId: "b",
      explanation: "周りの様子を見ながら、自分で進められる準備をするのが大切です。",
      learningPoint: {
        label: "静かに進める",
        text: "相手を気づかいながら、自分のやることを進める方法もあるよ。",
      },
      illustration: wizardIllustration,
      tags: ["早朝", "宿", "気づかい"],
    }),
    makeQuestion({
      id: "q040",
      title: "依頼内容の変更掲示",
      situation:
        "ギルドの掲示板で、依頼の集合時間が変わったと知りました。でも仲間はまだその前の時間だと思っています。どうする？",
      categories: ["communication", "foresight"],
      choices: [
        choice("a", "自分だけ新しい時間で動く", 0, "仲間は古い時間のまま来てしまうかもしれないね。"),
        choice("b", "気づいた時点で新しい時間を共有する", 2, "いいね。情報の更新を必要な人へつなげられているよ。"),
        choice("c", "集合場所で会った時に言う", 1, "伝えるのは大切だけれど、早い方が助かるね。"),
      ],
      bestChoiceId: "b",
      explanation: "変更に気づいた人が先に共有すると、行き違いを減らせます。",
      learningPoint: {
        label: "更新された情報",
        text: "新しい情報を知ったら、古い情報のままの人がいないか考えてみよう。",
      },
      illustration: heroIllustration,
      tags: ["掲示板", "変更", "集合"],
    }),
    makeQuestion({
      id: "q041",
      title: "洞窟の目印",
      situation:
        "似た道が多い洞窟へ入ります。帰りに迷いにくくするには、どうする？",
      categories: ["planning", "foresight"],
      choices: [
        choice("a", "何も考えずに進む", 0, "帰り道で、どこから来たか分からなくなるかもしれないね。"),
        choice("b", "目印になる場所を確認しながら進む", 2, "いいね。帰りのことまで考えた進み方だよ。"),
        choice("c", "後ろの仲間が覚えていると思う", 1, "そうかもしれないけれど、自分でも見ておけると安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "進む時に帰りの目印も見ておくと、迷いにくくなります。",
      learningPoint: {
        label: "行きながら準備",
        text: "その場で進みつつ、あとで使う情報も集めておくと役立つよ。",
      },
      illustration: dragonIllustration,
      tags: ["洞窟", "目印", "帰り道"],
    }),
    makeQuestion({
      id: "q042",
      title: "すべりやすい落ち葉",
      situation:
        "石段にぬれた落ち葉がたくさんあり、すべりやすそうです。後ろから荷物を持った仲間が来ています。どうする？",
      categories: ["responsibility", "perspective"],
      choices: [
        choice("a", "自分だけ気をつけて通る", 0, "後ろの仲間は危ないことに気づかないかもしれないね。"),
        choice("b", "すべりやすいことを伝えるか、少しよけておく", 2, "いいね。気づきを行動につなげられているよ。"),
        choice("c", "面白そうなので何も言わず見ている", 0, "人が困りそうな時は、助ける動きができるとよいね。"),
      ],
      bestChoiceId: "b",
      explanation: "危ないことに気づいたら、周りが困る前に動くのが大切です。",
      learningPoint: {
        label: "気づきは行動へ",
        text: "見つけただけで終わらず、一歩動けると安心につながるよ。",
      },
      illustration: dwarfIllustration,
      tags: ["石段", "危険", "仲間"],
    }),
    makeQuestion({
      id: "q043",
      title: "食料が少ない夜道",
      situation:
        "帰り道が長引きそうなのに、軽食が少ないと分かりました。どうする？",
      categories: ["planning", "communication"],
      choices: [
        choice("a", "自分の分だけ先に食べる", 0, "あとで必要な人の分がなくなるかもしれないね。"),
        choice("b", "量を見て、みんなでどう分けるか相談する", 2, "いいね。足りない時の段取りと共有ができているよ。"),
        choice("c", "何も言わず、あとで困ってから考える", 1, "後からでも考えられるけれど、早い方が動きやすいね。"),
      ],
      bestChoiceId: "b",
      explanation: "足りないと気づいた時に相談すると、みんなで考えやすくなります。",
      learningPoint: {
        label: "不足は共有",
        text: "足りないことは一人で抱えず、早めに共有した方がうまく進むよ。",
      },
      illustration: treasureIllustration,
      tags: ["食料", "相談", "帰り道"],
    }),
    makeQuestion({
      id: "q044",
      title: "合流の合図を決める",
      situation:
        "市場は人が多く、声が通りにくい場所です。あとで別々に用事をしてから合流するには、どうする？",
      categories: ["communication", "perspective"],
      choices: [
        choice("a", "後でその辺で会えると思う", 0, "広い場所だと、なかなか会えないかもしれないね。"),
        choice("b", "会う場所や合図を先に決めておく", 2, "いいね。人が多い時の困りごとを先に減らせているよ。"),
        choice("c", "会えなかったら誰かに探してもらう", 1, "助けてもらえることもあるけれど、先に決めた方が安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "人が多い場所では、先に会う方法を決めておくと安心です。",
      learningPoint: {
        label: "別れる前に決める",
        text: "あとで会う予定なら、別れる前の一言がとても大事になるよ。",
      },
      illustration: archerIllustration,
      tags: ["市場", "合流", "約束"],
    }),
    makeQuestion({
      id: "q045",
      title: "王都行き馬車の本数",
      situation:
        "王都行きの馬車は1時間に1本です。乗りそこねると大きく遅れます。どうする？",
      categories: ["foresight", "planning"],
      choices: [
        choice("a", "だいたいの時間で向かう", 0, "一本逃すと、予定全体がずれてしまうかもしれないね。"),
        choice("b", "馬車の時間を見て、少し早めに動く", 2, "いいね。本数が少ない時の考え方ができているよ。"),
        choice("c", "走れば間に合うと思う", 1, "急げることもあるけれど、早めの方が落ち着いて動けるね。"),
      ],
      bestChoiceId: "b",
      explanation: "本数が少ない移動は、時刻を見て早めに動くのが安心です。",
      learningPoint: {
        label: "失敗した時も考える",
        text: "一本逃したらどうなるかを考えると、動く時間が見えてくるよ。",
      },
      illustration: heroIllustration,
      tags: ["馬車", "時間", "移動"],
    }),
    makeQuestion({
      id: "q046",
      title: "けが人がいる時の順番",
      situation:
        "泉で水をくむ順番待ちです。いつもはきみが先ですが、今日は後ろの仲間が足を少し痛めています。どう考える？",
      categories: ["perspective", "planning"],
      choices: [
        choice("a", "いつも通り自分が先に行く", 0, "今日はいつもとちがう様子なので、少し考えたいね。"),
        choice("b", "相手の様子を見て、順番を相談する", 2, "いいね。その日の状況に合わせて考えられているよ。"),
        choice("c", "何も言わずにずっと待つ", 1, "急がないのはよいけれど、相談するともっと分かりやすいね。"),
      ],
      bestChoiceId: "b",
      explanation: "いつもと同じでなく、相手の様子に合わせて順番を考えることも大切です。",
      learningPoint: {
        label: "その日の相手を見る",
        text: "ふだんの決まりがあっても、今日はどうかを見て判断してみよう。",
      },
      illustration: wizardIllustration,
      tags: ["順番", "気づかい", "相談"],
    }),
    makeQuestion({
      id: "q047",
      title: "報告書を渡すタイミング",
      situation:
        "隊長に見せる報告書を受け取りました。明日の朝までに渡してほしいと言われています。今夜どうする？",
      categories: ["responsibility", "communication"],
      choices: [
        choice("a", "荷物の奥に入れて、そのままにする", 0, "朝までに気づかず、渡しそびれるかもしれないね。"),
        choice("b", "今のうちに見える場所へ置くか、渡せるなら先に渡す", 2, "いいね。忘れにくい形に変えられているよ。"),
        choice("c", "眠る前に思い出したらやる", 1, "できるかもしれないけれど、早い方が安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "忘れやすい物は、先に渡すか見える形にすると安心です。",
      learningPoint: {
        label: "覚えるより仕組み",
        text: "忘れないように、置き場所やタイミングを工夫するのも大切だよ。",
      },
      illustration: wizardIllustration,
      tags: ["報告書", "忘れ防止", "隊長"],
    }),
    makeQuestion({
      id: "q048",
      title: "雨で訓練場が閉鎖",
      situation:
        "雨で訓練場が使えなくなりました。友だちはまだいつもの場所へ向かっているかもしれません。どうする？",
      categories: ["communication", "foresight"],
      choices: [
        choice("a", "自分だけ予定変更を知っていればいいと思う", 0, "友だちは、使えない訓練場へ行ってしまうかもしれないね。"),
        choice("b", "まだ知らなそうな人へ早めに伝える", 2, "いいね。予定変更の共有ができているよ。"),
        choice("c", "先生が言うだろうから何もしない", 1, "伝わるかもしれないけれど、自分でも助けになれるね。"),
      ],
      bestChoiceId: "b",
      explanation: "予定変更を知った時は、まだ知らない人がいないか考えることが大切です。",
      learningPoint: {
        label: "変更ほど共有",
        text: "予定が変わった時こそ、必要な相手へ早く伝える価値が大きいよ。",
      },
      illustration: dragonIllustration,
      tags: ["予定変更", "雨", "共有"],
    }),
    makeQuestion({
      id: "q049",
      title: "ぬれた装備の手入れ",
      situation:
        "雨の中を歩いて、マントと手袋がぬれています。宿に戻ってすぐどうする？",
      categories: ["responsibility", "planning"],
      choices: [
        choice("a", "そのまま丸めて置いておく", 0, "次に使う時、ぬれたままで困るかもしれないね。"),
        choice("b", "使う前に困らないよう、干したり広げたりする", 2, "いいね。次の自分を助ける準備ができているよ。"),
        choice("c", "明日の朝に考える", 1, "朝でもできるけれど、今の方が忘れにくいね。"),
      ],
      bestChoiceId: "b",
      explanation: "使った後の手入れをしておくと、次の準備が楽になります。",
      learningPoint: {
        label: "未来の自分を助ける",
        text: "今の少しの手入れが、次の自分の困りごとを減らしてくれるよ。",
      },
      illustration: dwarfIllustration,
      tags: ["装備", "手入れ", "帰宅後"],
    }),
    makeQuestion({
      id: "q050",
      title: "遠征前の寝る時間",
      situation:
        "明日は朝早くから山道の遠征です。夜になっても、まだ本を読みたくなっています。どう考える？",
      categories: ["planning", "foresight"],
      choices: [
        choice("a", "眠くなるまで起きている", 0, "明日の朝、起きにくくなって準備が遅れるかもしれないね。"),
        choice("b", "明日の出発を考えて、早めに休む", 2, "いいね。明日の自分に必要な準備まで考えられているよ。"),
        choice("c", "少しだけのつもりでだらだら続ける", 1, "楽しみも大切だけれど、区切りを決めるともっと安心だね。"),
      ],
      bestChoiceId: "b",
      explanation: "次の日に大事な予定がある時は、前日の休み方も準備の一つです。",
      learningPoint: {
        label: "前の日から始まる",
        text: "明日の動きやすさは、前の日のすごし方でも変わるよ。",
      },
      illustration: heroIllustration,
      tags: ["遠征", "前日", "睡眠"],
    }),
  ],
};
