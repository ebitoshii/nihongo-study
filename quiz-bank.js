// ═══════════════════════════════════════════════════════════════════
//  QUIZ BANK — Japanese Language Practice
//  Format: { id, type, level, question, options:[A,B,C,D], answer, explanation }
//  Reading questions: { id, type:'reading', level, passage, question, options, answer, explanation }
// ═══════════════════════════════════════════════════════════════════

const quizBank = [

  // ══════════════════════════════════════════════════════════════
  //  N4 — GRAMMAR
  // ══════════════════════════════════════════════════════════════

  {id:'n4-g-001',type:'grammar',level:'n4',
   question:'明日、雨が降る___、試合は中止になります。',
   options:['A. と','B. ながら','C. でも','D. のに'],
   answer:'A',explanation:'〜と is used for natural/automatic consequence. If it rains, the match will be cancelled.'},

  {id:'n4-g-002',type:'grammar',level:'n4',
   question:'この映画は何度見___、感動します。',
   options:['A. ても','B. から','C. ので','D. けど'],
   answer:'A',explanation:'〜ても means "even if / no matter how many times". No matter how many times you watch, you are moved.'},

  {id:'n4-g-003',type:'grammar',level:'n4',
   question:'病気___、学校を休みました。',
   options:['A. なので','B. のに','C. ても','D. ながら'],
   answer:'A',explanation:'〜なので gives a reason (because). Because I was sick, I took the day off.'},

  {id:'n4-g-004',type:'grammar',level:'n4',
   question:'先生に褒め___、とても嬉しかったです。',
   options:['A. られて','B. させて','C. てもらって','D. ておいて'],
   answer:'A',explanation:'褒められて is the passive of 褒める. Being praised by the teacher, I was very happy.'},

  {id:'n4-g-005',type:'grammar',level:'n4',
   question:'子供___、この問題は難しすぎます。',
   options:['A. には','B. でも','C. から','D. まで'],
   answer:'A',explanation:'〜には expresses "for (someone)". For a child, this problem is too difficult.'},

  {id:'n4-g-006',type:'grammar',level:'n4',
   question:'音楽を聞き___、勉強しています。',
   options:['A. ながら','B. てから','C. ために','D. ように'],
   answer:'A',explanation:'〜ながら means doing two actions simultaneously. Studying while listening to music.'},

  {id:'n4-g-007',type:'grammar',level:'n4',
   question:'駅まで歩いて行く___、30分かかります。',
   options:['A. と','B. ので','C. から','D. が'],
   answer:'A',explanation:'〜と expresses a natural result. If you walk to the station, it takes 30 minutes.'},

  {id:'n4-g-008',type:'grammar',level:'n4',
   question:'この仕事は私___できません。',
   options:['A. には','B. が','C. を','D. で'],
   answer:'A',explanation:'〜には + potential negative = "for me, cannot". This job is beyond me.'},

  {id:'n4-g-009',type:'grammar',level:'n4',
   question:'日本語が上手になる___、毎日練習しています。',
   options:['A. ために','B. ように','C. から','D. ので'],
   answer:'A',explanation:'〜ために (purpose) = in order to become good at Japanese, I practise every day.'},

  {id:'n4-g-010',type:'grammar',level:'n4',
   question:'財布を忘れて___、困りました。',
   options:['A. しまって','B. みて','C. おいて','D. いて'],
   answer:'A',explanation:'〜てしまって expresses regret or an unfortunate completion. I forgot my wallet (unfortunately).'},

  {id:'n4-g-011',type:'grammar',level:'n4',
   question:'もっとゆっくり話して___ませんか。',
   options:['A. くれ','B. あげ','C. もらい','D. やり'],
   answer:'A',explanation:'〜てくれませんか = won’t you do ~ for me? A polite request to someone else.'},

  {id:'n4-g-012',type:'grammar',level:'n4',
   question:'宿題が終わった___、遊んでもいいです。',
   options:['A. ら','B. と','C. ので','D. が'],
   answer:'A',explanation:'〜たら expresses "once / after ~ then". Once homework is done, you may play.'},

  {id:'n4-g-013',type:'grammar',level:'n4',
   question:'この薬を飲む___、よくなりますよ。',
   options:['A. と','B. のに','C. から','D. が'],
   answer:'A',explanation:'〜と (conditional/natural consequence) — if you take this medicine, you will get better.'},

  {id:'n4-g-014',type:'grammar',level:'n4',
   question:'彼女は歌___ダンスも上手です。',
   options:['A. だけでなく','B. しか','C. ばかり','D. まで'],
   answer:'A',explanation:'〜だけでなく = "not only ~ but also". Not only singing but also dancing.'},

  {id:'n4-g-015',type:'grammar',level:'n4',
   question:'この映画は子供___大人も楽しめます。',
   options:['A. だけでなく','B. しか','C. ばかり','D. のみ'],
   answer:'A',explanation:'〜だけでなく〜も = not only children but adults too can enjoy it.'},

  {id:'n4-g-016',type:'grammar',level:'n4',
   question:'電車が遅れた___、会議に遅刻しました。',
   options:['A. ので','B. のに','C. ても','D. ながら'],
   answer:'A',explanation:'〜ので gives an objective reason. Because the train was delayed, I was late for the meeting.'},

  {id:'n4-g-017',type:'grammar',level:'n4',
   question:'頑張った___、試験に落ちました。',
   options:['A. のに','B. から','C. ので','D. と'],
   answer:'A',explanation:'〜のに expresses unexpected contrast/disappointment. Despite trying hard, I failed.'},

  {id:'n4-g-018',type:'grammar',level:'n4',
   question:'部屋を掃除___おきました。',
   options:['A. して','B. して','C. してみて','D. しながら'],
   answer:'A',explanation:'〜ておく = do in advance/preparation. I cleaned the room (in preparation/for later).'},

  {id:'n4-g-019',type:'grammar',level:'n4',
   question:'この本は読み___があります。',
   options:['A. やすさ','B. がい','C. づらい','D. にくい'],
   answer:'B',explanation:'〜がい = "worth doing". 読みがい = worth reading. A rewarding book to read.'},

  {id:'n4-g-020',type:'grammar',level:'n4',
   question:'日本に___ことがありますか。',
   options:['A. 行った','B. 行く','C. 行って','D. 行き'],
   answer:'A',explanation:'〜たことがある = have done something before. Have you ever been to Japan?'},

  {id:'n4-g-021',type:'grammar',level:'n4',
   question:'もし宝くじが当たっ___、家を買います。',
   options:['A. たら','B. ても','C. ば','D. と'],
   answer:'A',explanation:'もし〜たら = hypothetical "if". If I won the lottery, I would buy a house.'},

  {id:'n4-g-022',type:'grammar',level:'n4',
   question:'試験に合格できる___、一生懸命勉強しています。',
   options:['A. ように','B. ために','C. から','D. ので'],
   answer:'A',explanation:'〜ように (potential/state goal) = so that I can pass the exam. Used with potential verbs.'},

  {id:'n4-g-023',type:'grammar',level:'n4',
   question:'田中さん___、この仕事はできないでしょう。',
   options:['A. でなければ','B. だけ','C. しか','D. ばかり'],
   answer:'A',explanation:'〜でなければ = "if it’s not ~". If it’s not Tanaka-san, this work cannot be done.'},

  {id:'n4-g-024',type:'grammar',level:'n4',
   question:'急いで食べた___、おなかが痛くなりました。',
   options:['A. ら','B. と','C. ので','D. から'],
   answer:'B',explanation:'〜と expresses a natural/unexpected result. When I ate quickly, I got a stomachache.'},

  {id:'n4-g-025',type:'grammar',level:'n4',
   question:'子供が生まれて___、とても幸せです。',
   options:['A. から','B. まで','C. ので','D. のに'],
   answer:'A',explanation:'〜てから = since/after. Since my child was born, I have been very happy.'},

  {id:'n4-g-026',type:'grammar',level:'n4',
   question:'彼は病気___、学校に来ました。',
   options:['A. なのに','B. ので','C. から','D. ため'],
   answer:'A',explanation:'〜なのに = unexpectedly, despite. Despite being sick, he came to school (surprising).'},

  {id:'n4-g-027',type:'grammar',level:'n4',
   question:'新しいパソコンを買って___もらいました。',
   options:['A. あげて','B. くれて','C. もらって','D. しまって'],
   answer:'B',explanation:'〜てくれる = someone does something for the speaker’s benefit. They bought me a new computer.'},

  {id:'n4-g-028',type:'grammar',level:'n4',
   question:'授業が始まる___に、トイレに行っておきなさい。',
   options:['A. 前','B. 後','C. 間','D. とき'],
   answer:'A',explanation:'〜前に = before. Before class starts, go to the toilet.'},

  {id:'n4-g-029',type:'grammar',level:'n4',
   question:'この料理は辛___です。',
   options:['A. そう','B. らしい','C. ようだ','D. はずだ'],
   answer:'A',explanation:'〜そう (appearance/conjecture) = looks like. This dish looks spicy (based on appearance).'},

  {id:'n4-g-030',type:'grammar',level:'n4',
   question:'天気予報によると、明日は晴れる___です。',
   options:['A. そう','B. らしい','C. ようだ','D. はずだ'],
   answer:'B',explanation:'〜らしい (hearsay/evidence) = apparently/seems like. According to the forecast, it seems it will be sunny.'},

  {id:'n4-g-031',type:'grammar',level:'n4',
   question:'会議は３時から___です。',
   options:['A. はずだ','B. そうだ','C. らしい','D. ようだ'],
   answer:'A',explanation:'〜はずだ = expectation based on known facts. The meeting is supposed to start at 3.'},

  {id:'n4-g-032',type:'grammar',level:'n4',
   question:'彼はまるで子供の___ですね。',
   options:['A. よう','B. らしい','C. そう','D. はず'],
   answer:'A',explanation:'まるで〜のよう = just like, as if. He is just like a child.'},

  {id:'n4-g-033',type:'grammar',level:'n4',
   question:'これは私___作れません。',
   options:['A. には','B. だけ','C. しか','D. ばかり'],
   answer:'A',explanation:'〜には + potential negative = this is beyond me. I (alone) cannot make this.'},

  {id:'n4-g-034',type:'grammar',level:'n4',
   question:'水を飲んだ___、薬を飲んでください。',
   options:['A. 後で','B. 前に','C. から','D. まで'],
   answer:'A',explanation:'〜た後で = after doing. After drinking water, please take the medicine.'},

  {id:'n4-g-035',type:'grammar',level:'n4',
   question:'先生に叱られて___、泣いてしまいました。',
   options:['A. しまい','B. から','C. ので','D. のに'],
   answer:'B',explanation:'〜てから = after. After being scolded by the teacher, I ended up crying.'},

  {id:'n4-g-036',type:'grammar',level:'n4',
   question:'もっと早く___、よかったのに。',
   options:['A. 来れば','B. 来て','C. 来ると','D. 来たら'],
   answer:'A',explanation:'〜ばよかったのに = I wish you had done. I wish you had come earlier (regret).'},

  {id:'n4-g-037',type:'grammar',level:'n4',
   question:'日本語の勉強を___いますが、まだ難しいです。',
   options:['A. して','B. した','C. する','D. するの'],
   answer:'A',explanation:'〜ている = ongoing action. I am studying Japanese, but it’s still difficult.'},

  {id:'n4-g-038',type:'grammar',level:'n4',
   question:'彼女は歌手___なりたいと思っています。',
   options:['A. に','B. が','C. を','D. で'],
   answer:'A',explanation:'〜になりたい = want to become. She wants to become a singer.'},

  {id:'n4-g-039',type:'grammar',level:'n4',
   question:'冬になると、この山は雪___覆われます。',
   options:['A. で','B. に','C. が','D. を'],
   answer:'A',explanation:'〜で = by means of / covered with. The mountain is covered with snow.'},

  {id:'n4-g-040',type:'grammar',level:'n4',
   question:'この問題は難し___、誰も解けませんでした。',
   options:['A. すぎて','B. ので','C. けど','D. から'],
   answer:'A',explanation:'〜すぎて = too much (to the point that). It was too difficult and nobody could solve it.'},

];