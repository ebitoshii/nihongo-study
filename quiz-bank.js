// ═══════════════════════════════════════════════════════════════════
//  QUIZ BANK — Japanese Language Practice
//  Format: { id, type, level, question, options:[A,B,C,D], answer, explanation }
//  Reading questions: { id, type:'reading', level, passage, question, options, answer, explanation }
// ═══════════════════════════════════════════════════════════════════

const quizBank = [

  // ══════════════════════════════════════════════════════════════
  //  N4 — GRAMMAR
  // ══════════════════════════════════════════════════════════════

  {id:'n4-g-001',type:'grammar',level:'n4',question:'明日、雨が降る___、試合は中止になります。',options:['A. と','B. ながら','C. でも','D. のに'],answer:'A',explanation:'〜と is used for natural/automatic consequence. If it rains, the match will be cancelled.'},
  {id:'n4-g-002',type:'grammar',level:'n4',question:'この映画は何度見___、感動します。',options:['A. ても','B. から','C. ので','D. けど'],answer:'A',explanation:'〜ても means "even if / no matter how many times". No matter how many times you watch, you are moved.'},
  {id:'n4-g-003',type:'grammar',level:'n4',question:'病気___、学校を休みました。',options:['A. なので','B. のに','C. ても','D. ながら'],answer:'A',explanation:'〜なので gives a reason (because). Because I was sick, I took the day off.'},
  {id:'n4-g-004',type:'grammar',level:'n4',question:'先生に褒め___、とても嬉しかったです。',options:['A. られて','B. させて','C. てもらって','D. ておいて'],answer:'A',explanation:'褒められて is the passive of 褒める. Being praised by the teacher, I was very happy.'},
  {id:'n4-g-005',type:'grammar',level:'n4',question:'子供___、この問題は難しすぎます。',options:['A. には','B. でも','C. から','D. まで'],answer:'A',explanation:'〜には expresses "for (someone)". For a child, this problem is too difficult.'},
  {id:'n4-g-006',type:'grammar',level:'n4',question:'音楽を聞き___、勉強しています。',options:['A. ながら','B. てから','C. ために','D. ように'],answer:'A',explanation:'〜ながら means doing two actions simultaneously. Studying while listening to music.'},
  {id:'n4-g-007',type:'grammar',level:'n4',question:'駅まで歩いて行く___、30分かかります。',options:['A. と','B. ので','C. から','D. が'],answer:'A',explanation:'〜と expresses a natural result. If you walk to the station, it takes 30 minutes.'},
  {id:'n4-g-008',type:'grammar',level:'n4',question:'この仕事は私___できません。',options:['A. には','B. が','C. を','D. で'],answer:'A',explanation:'〜には + potential negative = "for me, cannot". This job is beyond me.'},
  {id:'n4-g-009',type:'grammar',level:'n4',question:'日本語が上手になる___、毎日練習しています。',options:['A. ために','B. ように','C. から','D. ので'],answer:'A',explanation:'〜ために (purpose) = in order to become good at Japanese, I practise every day.'},
  {id:'n4-g-010',type:'grammar',level:'n4',question:'財布を忘れて___、困りました。',options:['A. しまって','B. みて','C. おいて','D. いて'],answer:'A',explanation:'〜てしまって expresses regret or an unfortunate completion. I forgot my wallet (unfortunately).'},
  {id:'n4-g-011',type:'grammar',level:'n4',question:'もっとゆっくり話して___ませんか。',options:['A. くれ','B. あげ','C. もらい','D. やり'],answer:'A',explanation:'〜てくれませんか = "won\'t you do ~ for me?" A polite request to someone else.'},
  {id:'n4-g-012',type:'grammar',level:'n4',question:'宿題が終わった___、遊んでもいいです。',options:['A. ら','B. と','C. ので','D. が'],answer:'A',explanation:'〜たら expresses "once / after ~ then". Once homework is done, you may play.'},
  {id:'n4-g-013',type:'grammar',level:'n4',question:'この薬を飲む___、よくなりますよ。',options:['A. と','B. のに','C. から','D. が'],answer:'A',explanation:'〜と (conditional/natural consequence) — if you take this medicine, you will get better.'},
  {id:'n4-g-014',type:'grammar',level:'n4',question:'彼女は歌___ダンスも上手です。',options:['A. だけでなく','B. しか','C. ばかり','D. まで'],answer:'A',explanation:'〜だけでなく = "not only ~ but also". Not only singing but also dancing.'},
  {id:'n4-g-015',type:'grammar',level:'n4',question:'この映画は子供___大人も楽しめます。',options:['A. だけでなく','B. しか','C. ばかり','D. のみ'],answer:'A',explanation:'〜だけでなく〜も = not only children but adults too can enjoy it.'},
  {id:'n4-g-016',type:'grammar',level:'n4',question:'電車が遅れた___、会議に遅刻しました。',options:['A. ので','B. のに','C. ても','D. ながら'],answer:'A',explanation:'〜ので gives an objective reason. Because the train was delayed, I was late for the meeting.'},
  {id:'n4-g-017',type:'grammar',level:'n4',question:'頑張った___、試験に落ちました。',options:['A. のに','B. から','C. ので','D. と'],answer:'A',explanation:'〜のに expresses unexpected contrast/disappointment. Despite trying hard, I failed.'},
  {id:'n4-g-018',type:'grammar',level:'n4',question:'部屋を掃除___おきました。',options:['A. して','B. して','C. してみて','D. しながら'],answer:'A',explanation:'〜ておく = do in advance/preparation. I cleaned the room (in preparation/for later).'},
  {id:'n4-g-019',type:'grammar',level:'n4',question:'この本は読み___があります。',options:['A. やすさ','B. がい','C. づらい','D. にくい'],answer:'B',explanation:'〜がい = "worth doing". 読みがい = worth reading. A rewarding book to read.'},
  {id:'n4-g-020',type:'grammar',level:'n4',question:'日本に___ことがありますか。',options:['A. 行った','B. 行く','C. 行って','D. 行き'],answer:'A',explanation:'〜たことがある = have done something before. Have you ever been to Japan?'},
  {id:'n4-g-021',type:'grammar',level:'n4',question:'もし宝くじが当たっ___、家を買います。',options:['A. たら','B. ても','C. ば','D. と'],answer:'A',explanation:'もし〜たら = hypothetical "if". If I won the lottery, I would buy a house.'},
  {id:'n4-g-022',type:'grammar',level:'n4',question:'試験に合格できる___、一生懸命勉強しています。',options:['A. ように','B. ために','C. から','D. ので'],answer:'A',explanation:'〜ように (potential/state goal) = so that I can pass the exam. Used with potential verbs.'},
  {id:'n4-g-023',type:'grammar',level:'n4',question:'田中さん___、この仕事はできないでしょう。',options:['A. でなければ','B. だけ','C. しか','D. ばかり'],answer:'A',explanation:'〜でなければ = "if it\'s not ~". If it\'s not Tanaka-san, this work cannot be done.'},
  {id:'n4-g-024',type:'grammar',level:'n4',question:'急いで食べた___、おなかが痛くなりました。',options:['A. ら','B. と','C. ので','D. から'],answer:'B',explanation:'〜と expresses a natural/unexpected result. When I ate quickly, I got a stomachache.'},
  {id:'n4-g-025',type:'grammar',level:'n4',question:'子供が生まれて___、とても幸せです。',options:['A. から','B. まで','C. ので','D. のに'],answer:'A',explanation:'〜てから = since/after. Since my child was born, I have been very happy.'},
  {id:'n4-g-026',type:'grammar',level:'n4',question:'彼は病気___、学校に来ました。',options:['A. なのに','B. ので','C. から','D. ため'],answer:'A',explanation:'〜なのに = unexpectedly, despite. Despite being sick, he came to school (surprising).'},
  {id:'n4-g-027',type:'grammar',level:'n4',question:'新しいパソコンを買って___もらいました。',options:['A. あげて','B. くれて','C. もらって','D. しまって'],answer:'B',explanation:'〜てくれる = someone does something for the speaker\'s benefit. They bought me a new computer.'},
  {id:'n4-g-028',type:'grammar',level:'n4',question:'授業が始まる___に、トイレに行っておきなさい。',options:['A. 前','B. 後','C. 間','D. とき'],answer:'A',explanation:'〜前に = before. Before class starts, go to the toilet.'},
  {id:'n4-g-029',type:'grammar',level:'n4',question:'この料理は辛___です。',options:['A. そう','B. らしい','C. ようだ','D. はずだ'],answer:'A',explanation:'〜そう (appearance/conjecture) = looks like. This dish looks spicy (based on appearance).'},
  {id:'n4-g-030',type:'grammar',level:'n4',question:'天気予報によると、明日は晴れる___です。',options:['A. そう','B. らしい','C. ようだ','D. はずだ'],answer:'B',explanation:'〜らしい (hearsay/evidence) = apparently/seems like. According to the forecast, it seems it will be sunny.'},
  {id:'n4-g-031',type:'grammar',level:'n4',question:'会議は３時から___です。',options:['A. はずだ','B. そうだ','C. らしい','D. ようだ'],answer:'A',explanation:'〜はずだ = expectation based on known facts. The meeting is supposed to start at 3.'},
  {id:'n4-g-032',type:'grammar',level:'n4',question:'彼はまるで子供の___ですね。',options:['A. よう','B. らしい','C. そう','D. はず'],answer:'A',explanation:'まるで〜のよう = just like, as if. He is just like a child.'},
  {id:'n4-g-033',type:'grammar',level:'n4',question:'これは私___作れません。',options:['A. には','B. だけ','C. しか','D. ばかり'],answer:'A',explanation:'〜には + potential negative = this is beyond me. I (alone) cannot make this.'},
  {id:'n4-g-034',type:'grammar',level:'n4',question:'水を飲んだ___、薬を飲んでください。',options:['A. 後で','B. 前に','C. から','D. まで'],answer:'A',explanation:'〜た後で = after doing. After drinking water, please take the medicine.'},
  {id:'n4-g-035',type:'grammar',level:'n4',question:'先生に叱られて___、泣いてしまいました。',options:['A. しまい','B. から','C. ので','D. のに'],answer:'B',explanation:'〜てから = after. After being scolded by the teacher, I ended up crying.'},
  {id:'n4-g-036',type:'grammar',level:'n4',question:'もっと早く___、よかったのに。',options:['A. 来れば','B. 来て','C. 来ると','D. 来たら'],answer:'A',explanation:'〜ばよかったのに = I wish you had done. I wish you had come earlier (regret).'},
  {id:'n4-g-037',type:'grammar',level:'n4',question:'日本語の勉強を___いますが、まだ難しいです。',options:['A. して','B. した','C. する','D. するの'],answer:'A',explanation:'〜ている = ongoing action. I am studying Japanese, but it\'s still difficult.'},
  {id:'n4-g-038',type:'grammar',level:'n4',question:'彼女は歌手___なりたいと思っています。',options:['A. に','B. が','C. を','D. で'],answer:'A',explanation:'〜になりたい = want to become. She wants to become a singer.'},
  {id:'n4-g-039',type:'grammar',level:'n4',question:'冬になると、この山は雪___覆われます。',options:['A. で','B. に','C. が','D. を'],answer:'A',explanation:'〜で = by means of / covered with. The mountain is covered with snow.'},
  {id:'n4-g-040',type:'grammar',level:'n4',question:'この問題は難し___、誰も解けませんでした。',options:['A. すぎて','B. ので','C. けど','D. から'],answer:'A',explanation:'〜すぎて = too much (to the point that). It was too difficult and nobody could solve it.'},

  // ══════════════════════════════════════════════════════════════
  //  N4 — VOCABULARY
  // ══════════════════════════════════════════════════════════════

  {id:'n4-v-001',type:'vocabulary',level:'n4',question:'「連絡する」の意味はどれですか。',options:['A. 旅行する','B. 連絡を取る・知らせる','C. 練習する','D. 予約する'],answer:'B',explanation:'連絡する means to contact, to get in touch with, or to inform someone.'},
  {id:'n4-v-002',type:'vocabulary',level:'n4',question:'「準備」の意味はどれですか。',options:['A. 修理','B. 準備・用意','C. 申し込み','D. 旅行'],answer:'B',explanation:'準備 means preparation or getting ready for something.'},
  {id:'n4-v-003',type:'vocabulary',level:'n4',question:'「引っ越し」の意味はどれですか。',options:['A. 旅行','B. 帰国','C. 転居・引越し','D. 出張'],answer:'C',explanation:'引っ越し means moving house or changing one\'s residence.'},
  {id:'n4-v-004',type:'vocabulary',level:'n4',question:'「恥ずかしい」の意味はどれですか。',options:['A. 嬉しい','B. 悲しい','C. 恥ずかしい・照れくさい','D. 怖い'],answer:'C',explanation:'恥ずかしい means embarrassing, shy, or ashamed.'},
  {id:'n4-v-005',type:'vocabulary',level:'n4',question:'「諦める」の意味はどれですか。',options:['A. 始める','B. 続ける','C. 諦める・あきらめる','D. 頑張る'],answer:'C',explanation:'諦める means to give up or to abandon hope.'},
  {id:'n4-v-006',type:'vocabulary',level:'n4',question:'「必要」の意味はどれですか。',options:['A. 大切','B. 必要・必須','C. 便利','D. 簡単'],answer:'B',explanation:'必要 means necessary or needed.'},
  {id:'n4-v-007',type:'vocabulary',level:'n4',question:'「経験」の意味はどれですか。',options:['A. 勉強','B. 感想','C. 経験・体験','D. 研究'],answer:'C',explanation:'経験 means experience, something one has been through.'},
  {id:'n4-v-008',type:'vocabulary',level:'n4',question:'「心配」の意味はどれですか。',options:['A. 安心','B. 不安・心配','C. 驚き','D. 感動'],answer:'B',explanation:'心配 means worry or concern about something.'},
  {id:'n4-v-009',type:'vocabulary',level:'n4',question:'「直す」の意味はどれですか。',options:['A. 見る','B. 作る','C. 修正する・治す','D. 壊す'],answer:'C',explanation:'直す means to fix, to correct, or to repair.'},
  {id:'n4-v-010',type:'vocabulary',level:'n4',question:'「丁寧」の意味はどれですか。',options:['A. 厳しい','B. 丁寧・礼儀正しい','C. 親切','D. 積極的'],answer:'B',explanation:'丁寧 means polite, careful, or thorough.'},
  {id:'n4-v-011',type:'vocabulary',level:'n4',question:'「確認する」の意味はどれですか。',options:['A. 報告する','B. 相談する','C. 確かめる・チェックする','D. 申し込む'],answer:'C',explanation:'確認する means to confirm or to check/verify something.'},
  {id:'n4-v-012',type:'vocabulary',level:'n4',question:'「習慣」の意味はどれですか。',options:['A. 趣味','B. 習慣・癖','C. 練習','D. 文化'],answer:'B',explanation:'習慣 means habit or custom — a pattern of behaviour.'},
  {id:'n4-v-013',type:'vocabulary',level:'n4',question:'この仕事は私には___です。（得意の反対）',options:['A. 苦手','B. 便利','C. 大切','D. 不便'],answer:'A',explanation:'苦手 is the opposite of 得意 — it means "not good at" or "weak point".'},
  {id:'n4-v-014',type:'vocabulary',level:'n4',question:'「役に立つ」の意味はどれですか。',options:['A. 邪魔になる','B. 役に立つ・有益だ','C. 大変になる','D. 使いにくい'],answer:'B',explanation:'役に立つ means to be useful or helpful.'},
  {id:'n4-v-015',type:'vocabulary',level:'n4',question:'「届く」の意味はどれですか。',options:['A. 送る','B. 届く・到達する','C. 受け取る','D. 渡す'],answer:'B',explanation:'届く means to arrive, to reach, or to be delivered.'},
  {id:'n4-v-016',type:'vocabulary',level:'n4',question:'「残業」の意味はどれですか。',options:['A. 有給休暇','B. 昼休み','C. 時間外労働','D. 副業'],answer:'C',explanation:'残業 means overtime — working beyond regular hours.'},
  {id:'n4-v-017',type:'vocabulary',level:'n4',question:'「乗り換える」の意味はどれですか。',options:['A. 乗車する','B. 降りる','C. 別の交通機関に移る','D. 急ぐ'],answer:'C',explanation:'乗り換える means to transfer or change trains/buses.'},
  {id:'n4-v-018',type:'vocabulary',level:'n4',question:'「見つける」の意味はどれですか。',options:['A. 探す','B. 発見する・見つける','C. 落とす','D. 忘れる'],answer:'B',explanation:'見つける means to find or to discover something.'},
  {id:'n4-v-019',type:'vocabulary',level:'n4',question:'「自由」の意味はどれですか。',options:['A. 義務','B. 制限','C. 自由・制限がない','D. 規則'],answer:'C',explanation:'自由 means freedom, liberty, or being free from restriction.'},
  {id:'n4-v-020',type:'vocabulary',level:'n4',question:'「迷う」の意味はどれですか。',options:['A. 急ぐ','B. 道に迷う・決めかねる','C. 進む','D. 止まる'],answer:'B',explanation:'迷う means to get lost, or to be undecided/uncertain.'},
  {id:'n4-v-021',type:'vocabulary',level:'n4',question:'「喜ぶ」の意味はどれですか。',options:['A. 怒る','B. 悲しむ','C. 喜ぶ・喜びを感じる','D. 驚く'],answer:'C',explanation:'喜ぶ means to be pleased or to rejoice.'},
  {id:'n4-v-022',type:'vocabulary',level:'n4',question:'「我慢する」の意味はどれですか。',options:['A. 断る','B. 我慢する・耐える','C. 謝る','D. 笑う'],answer:'B',explanation:'我慢する means to endure, to put up with, or to hold back.'},
  {id:'n4-v-023',type:'vocabulary',level:'n4',question:'「親切」の意味はどれですか。',options:['A. 正直','B. 親切・思いやりがある','C. 厳しい','D. 元気'],answer:'B',explanation:'親切 means kind or kindness — showing care for others.'},
  {id:'n4-v-024',type:'vocabulary',level:'n4',question:'「安全」の意味はどれですか。',options:['A. 安い','B. 危険','C. 安全・危険がない','D. 便利'],answer:'C',explanation:'安全 means safe or safety — free from danger.'},
  {id:'n4-v-025',type:'vocabulary',level:'n4',question:'「増える」の反対語はどれですか。',options:['A. 変える','B. 続ける','C. 減る','D. 止まる'],answer:'C',explanation:'増える means to increase; its opposite is 減る (to decrease).'},
  {id:'n4-v-026',type:'vocabulary',level:'n4',question:'「選ぶ」の意味はどれですか。',options:['A. 見る','B. 探す','C. 決める','D. 選ぶ・選択する'],answer:'D',explanation:'選ぶ means to choose or to select.'},
  {id:'n4-v-027',type:'vocabulary',level:'n4',question:'「断る」の意味はどれですか。',options:['A. 受け入れる','B. 拒否する・断る','C. 頼む','D. 勧める'],answer:'B',explanation:'断る means to refuse, to decline, or to turn down a request.'},
  {id:'n4-v-028',type:'vocabulary',level:'n4',question:'「戻る」の意味はどれですか。',options:['A. 進む','B. 帰る・元の場所へ戻る','C. 出発する','D. 到着する'],answer:'B',explanation:'戻る means to return or to go back to where one was.'},
  {id:'n4-v-029',type:'vocabulary',level:'n4',question:'「比べる」の意味はどれですか。',options:['A. 並べる','B. 比較する','C. 選ぶ','D. 調べる'],answer:'B',explanation:'比べる means to compare.'},
  {id:'n4-v-030',type:'vocabulary',level:'n4',question:'「生活」の意味はどれですか。',options:['A. 旅行','B. 生活・日常の暮らし','C. 文化','D. 社会'],answer:'B',explanation:'生活 means daily life, living, or one\'s lifestyle.'},
  {id:'n4-v-031',type:'vocabulary',level:'n4',question:'「理由」の意味はどれですか。',options:['A. 結果','B. 方法','C. 理由・原因','D. 目的'],answer:'C',explanation:'理由 means reason or grounds for something.'},
  {id:'n4-v-032',type:'vocabulary',level:'n4',question:'「守る」の意味はどれですか。',options:['A. 壊す','B. 攻める','C. 守る・保護する','D. 捨てる'],answer:'C',explanation:'守る means to protect, to defend, or to keep (a promise/rule).'},
  {id:'n4-v-033',type:'vocabulary',level:'n4',question:'「感動」の意味はどれですか。',options:['A. 感謝','B. 感動・心が動かされること','C. 驚き','D. 喜び'],answer:'B',explanation:'感動 means being deeply moved or touched emotionally.'},
  {id:'n4-v-034',type:'vocabulary',level:'n4',question:'「正直」の意味はどれですか。',options:['A. 曖昧な','B. 正直・嘘をつかない','C. 厳しい','D. 親切な'],answer:'B',explanation:'正直 means honest — not lying or deceiving others.'},
  {id:'n4-v-035',type:'vocabulary',level:'n4',question:'「失敗」の反対語はどれですか。',options:['A. 失望','B. 挑戦','C. 努力','D. 成功'],answer:'D',explanation:'失敗 (failure) and 成功 (success) are antonyms.'},
  {id:'n4-v-036',type:'vocabulary',level:'n4',question:'「注意する」の意味はどれですか。',options:['A. 無視する','B. 気をつける・警告する','C. 急ぐ','D. 休む'],answer:'B',explanation:'注意する means to pay attention, to be careful, or to warn.'},
  {id:'n4-v-037',type:'vocabulary',level:'n4',question:'「以上」の意味はどれですか。',options:['A. 以下','B. 以前','C. ～より多い・それ以上','D. ～より少ない'],answer:'C',explanation:'以上 means "more than" or "above" a given amount.'},
  {id:'n4-v-038',type:'vocabulary',level:'n4',question:'「不便」の意味はどれですか。',options:['A. 便利','B. 使いやすい','C. 不便・使いにくい','D. 安全'],answer:'C',explanation:'不便 means inconvenient — not easy to use or access.'},
  {id:'n4-v-039',type:'vocabulary',level:'n4',question:'「申し込む」の意味はどれですか。',options:['A. 断る','B. 申し込む・登録する','C. 取り消す','D. 受け取る'],answer:'B',explanation:'申し込む means to apply or to register for something.'},
  {id:'n4-v-040',type:'vocabulary',level:'n4',question:'「残念」の意味はどれですか。',options:['A. 嬉しい','B. 残念・惜しい','C. 不思議','D. 面白い'],answer:'B',explanation:'残念 means regrettable, disappointing, or a pity.'},

  // ══════════════════════════════════════════════════════════════
  //  N4 — KANJI READING
  // ══════════════════════════════════════════════════════════════

  {id:'n4-k-001',type:'kanji',level:'n4',question:'「来週」の読み方はどれですか。',options:['A. らいしゅう','B. こんしゅう','C. せんしゅう','D. まいしゅう'],answer:'A',explanation:'来週 = らいしゅう (next week).'},
  {id:'n4-k-002',type:'kanji',level:'n4',question:'「出発」の読み方はどれですか。',options:['A. しゅっぱつ','B. でぱつ','C. でばつ','D. しゅっぱた'],answer:'A',explanation:'出発 = しゅっぱつ (departure).'},
  {id:'n4-k-003',type:'kanji',level:'n4',question:'「体力」の読み方はどれですか。',options:['A. からだりょく','B. たいりょく','C. たいちから','D. けんりょく'],answer:'B',explanation:'体力 = たいりょく (physical strength).'},
  {id:'n4-k-004',type:'kanji',level:'n4',question:'「安全」の読み方はどれですか。',options:['A. あんぜん','B. あんぜ','C. やすぜん','D. あんぜぬ'],answer:'A',explanation:'安全 = あんぜん (safety).'},
  {id:'n4-k-005',type:'kanji',level:'n4',question:'「練習」の読み方はどれですか。',options:['A. れいしゅ','B. れんしゅう','C. れいしゅう','D. れんしゅ'],answer:'B',explanation:'練習 = れんしゅう (practice).'},
  {id:'n4-k-006',type:'kanji',level:'n4',question:'「予約」の読み方はどれですか。',options:['A. よやく','B. よくやく','C. よやっく','D. よやく'],answer:'A',explanation:'予約 = よやく (reservation, booking).'},
  {id:'n4-k-007',type:'kanji',level:'n4',question:'「説明」の読み方はどれですか。',options:['A. せつめ','B. せつめい','C. せいめい','D. せつみょう'],answer:'B',explanation:'説明 = せつめい (explanation).'},
  {id:'n4-k-008',type:'kanji',level:'n4',question:'「旅行」の読み方はどれですか。',options:['A. りょこ','B. りょうこう','C. りょこう','D. りこう'],answer:'C',explanation:'旅行 = りょこう (travel, trip).'},
  {id:'n4-k-009',type:'kanji',level:'n4',question:'「心配」の読み方はどれですか。',options:['A. こころはい','B. しんぱい','C. しんはい','D. こころぱい'],answer:'B',explanation:'心配 = しんぱい (worry, concern).'},
  {id:'n4-k-010',type:'kanji',level:'n4',question:'「生活」の読み方はどれですか。',options:['A. せいかつ','B. せいかった','C. なりかつ','D. いかつ'],answer:'A',explanation:'生活 = せいかつ (daily life, living).'},
  {id:'n4-k-011',type:'kanji',level:'n4',question:'「引っ越し」の読み方はどれですか。',options:['A. びっこし','B. ひこし','C. ひっこし','D. ひっごし'],answer:'C',explanation:'引っ越し = ひっこし (moving house).'},
  {id:'n4-k-012',type:'kanji',level:'n4',question:'「運転」の読み方はどれですか。',options:['A. うんどう','B. うんてん','C. うんでん','D. いんてん'],answer:'B',explanation:'運転 = うんてん (driving).'},
  {id:'n4-k-013',type:'kanji',level:'n4',question:'「病院」の読み方はどれですか。',options:['A. びょうかん','B. びょういん','C. やまいいん','D. びょうえん'],answer:'B',explanation:'病院 = びょういん (hospital).'},
  {id:'n4-k-014',type:'kanji',level:'n4',question:'「会議」の読み方はどれですか。',options:['A. かいき','B. かいぎ','C. えかいぎ','D. あいき'],answer:'B',explanation:'会議 = かいぎ (meeting, conference).'},
  {id:'n4-k-015',type:'kanji',level:'n4',question:'「感動」の読み方はどれですか。',options:['A. かんどう','B. かんとう','C. きんどう','D. かどう'],answer:'A',explanation:'感動 = かんどう (being moved/touched).'},
  {id:'n4-k-016',type:'kanji',level:'n4',question:'「準備」の読み方はどれですか。',options:['A. じゅんぼ','B. しゅんび','C. じゅんび','D. ずんび'],answer:'C',explanation:'準備 = じゅんび (preparation).'},
  {id:'n4-k-017',type:'kanji',level:'n4',question:'「経験」の読み方はどれですか。',options:['A. けいげん','B. けいけん','C. きょうけん','D. けんけい'],answer:'B',explanation:'経験 = けいけん (experience).'},
  {id:'n4-k-018',type:'kanji',level:'n4',question:'「連絡」の読み方はどれですか。',options:['A. れんらく','B. れいらく','C. れんろく','D. れんらく'],answer:'A',explanation:'連絡 = れんらく (contact, communication).'},
  {id:'n4-k-019',type:'kanji',level:'n4',question:'「勉強」の読み方はどれですか。',options:['A. べんきょう','B. べんこう','C. めんきょ','D. べんきょ'],answer:'A',explanation:'勉強 = べんきょう (study).'},
  {id:'n4-k-020',type:'kanji',level:'n4',question:'「丁寧」の読み方はどれですか。',options:['A. ていちょう','B. てっていね','C. ていねい','D. でいねい'],answer:'C',explanation:'丁寧 = ていねい (polite, careful).'},
  {id:'n4-k-021',type:'kanji',level:'n4',question:'「残業」の読み方はどれですか。',options:['A. のこりぎょう','B. ざんぎょう','C. さんきょう','D. ざんぎょ'],answer:'B',explanation:'残業 = ざんぎょう (overtime work).'},
  {id:'n4-k-022',type:'kanji',level:'n4',question:'「満足」の読み方はどれですか。',options:['A. まんぞく','B. まんしょく','C. みちたり','D. まんぞっく'],answer:'A',explanation:'満足 = まんぞく (satisfaction).'},
  {id:'n4-k-023',type:'kanji',level:'n4',question:'「安心」の読み方はどれですか。',options:['A. あんしん','B. やすこころ','C. あんこころ','D. あんじん'],answer:'A',explanation:'安心 = あんしん (relief, peace of mind).'},
  {id:'n4-k-024',type:'kanji',level:'n4',question:'「失敗」の読み方はどれですか。',options:['A. なくなり','B. しっぱい','C. しつぱい','D. しっぱい'],answer:'B',explanation:'失敗 = しっぱい (failure).'},
  {id:'n4-k-025',type:'kanji',level:'n4',question:'「習慣」の読み方はどれですか。',options:['A. しゅうかん','B. ならいかん','C. しゅかん','D. しゅうかぬ'],answer:'A',explanation:'習慣 = しゅうかん (habit, custom).'},
  {id:'n4-k-026',type:'kanji',level:'n4',question:'「荷物」の読み方はどれですか。',options:['A. かぶつ','B. につ','C. にもの','D. にもつ'],answer:'D',explanation:'荷物 = にもつ (luggage, baggage).'},
  {id:'n4-k-027',type:'kanji',level:'n4',question:'「必要」の読み方はどれですか。',options:['A. ひつよう','B. ひっよう','C. かならずよう','D. ひつよ'],answer:'A',explanation:'必要 = ひつよう (necessary, needed).'},
  {id:'n4-k-028',type:'kanji',level:'n4',question:'「注意」の読み方はどれですか。',options:['A. ちゅうい','B. ちゅうき','C. ちゅうっい','D. ちゅい'],answer:'A',explanation:'注意 = ちゅうい (attention, caution).'},
  {id:'n4-k-029',type:'kanji',level:'n4',question:'「正直」の読み方はどれですか。',options:['A. せいちょく','B. しょうじき','C. まさじき','D. せいじき'],answer:'B',explanation:'正直 = しょうじき (honest).'},
  {id:'n4-k-030',type:'kanji',level:'n4',question:'「成功」の読み方はどれですか。',options:['A. せいこう','B. なりこう','C. せこう','D. せいごう'],answer:'A',explanation:'成功 = せいこう (success).'},

  // ══════════════════════════════════════════════════════════════
  //  N4 — READING COMPREHENSION
  // ══════════════════════════════════════════════════════════════

  {id:'n4-r-001',type:'reading',level:'n4',passage:'田中さんは毎朝６時に起きて、コーヒーを飲みながら新聞を読みます。それが長年の習慣です。休日でも、この習慣は変わりません。',question:'田中さんの習慣について正しいものはどれですか。',options:['A. 平日だけ新聞を読む','B. ７時に起きてコーヒーを飲む','C. 毎朝コーヒーを飲みながら新聞を読む','D. 休日は新聞を読まない'],answer:'C',explanation:'「毎朝…コーヒーを飲みながら新聞を読みます」と書いてあります。'},
  {id:'n4-r-002',type:'reading',level:'n4',passage:'山田さんは来月引っ越す予定です。新しいアパートは駅から歩いて５分で、今の家より広いです。でも、家賃が少し高くなります。',question:'新しいアパートについて正しいものはどれですか。',options:['A. 今の家より狭い','B. 駅から車で５分','C. 家賃が安くなる','D. 駅から歩いて５分で今より広い'],answer:'D',explanation:'「駅から歩いて５分で、今の家より広いです」とあります。'},
  {id:'n4-r-003',type:'reading',level:'n4',passage:'健康のためには、食事・運動・睡眠の３つが大切です。特に睡眠は７〜８時間が理想とされています。忙しくても、睡眠時間は確保するようにしましょう。',question:'この文章が最も強調していることはどれですか。',options:['A. 食事だけが健康に大切だ','B. 運動を毎日すべきだ','C. 睡眠時間を確保することが大切だ','D. ８時間以上寝るべきだ'],answer:'C',explanation:'「忙しくても、睡眠時間は確保するようにしましょう」と強調されています。'},
  {id:'n4-r-004',type:'reading',level:'n4',passage:'日本のコンビニは24時間営業しています。食べ物だけでなく、公共料金の支払いやATMの利用もできます。外国から来た人はその便利さに驚くと言います。',question:'コンビニでできないことはどれですか。',options:['A. 食べ物を買う','B. 公共料金を払う','C. ATMを使う','D. 車を修理する'],answer:'D',explanation:'本文には車の修理については書かれていません。'},
  {id:'n4-r-005',type:'reading',level:'n4',passage:'ペットを飼うにはお金と時間が必要です。毎日エサをあげたり、病気のときは動物病院に連れて行かなければなりません。でも、ペットがいると生活が楽しくなります。',question:'ペットを飼うときに必要なこととして挙げられていないものはどれですか。',options:['A. お金','B. 時間','C. 大きな家','D. 毎日の世話'],answer:'C',explanation:'大きな家については本文で述べられていません。'},
  {id:'n4-r-006',type:'reading',level:'n4',passage:'佐藤さんは先週から日本語の勉強を始めました。毎日30分、単語と文法を勉強しています。まだ難しいですが、少しずつ上手になっていると感じています。',question:'佐藤さんについて正しいものはどれですか。',options:['A. 日本語を長年勉強している','B. 毎日１時間勉強している','C. 先週から毎日30分勉強している','D. 日本語はもう上手だ'],answer:'C',explanation:'「先週から…毎日30分、単語と文法を勉強しています」とあります。'},

  // ══════════════════════════════════════════════════════════════
  //  N3 — GRAMMAR
  // ══════════════════════════════════════════════════════════════

  {id:'n3-g-001',type:'grammar',level:'n3',question:'この問題は難し___、誰も解けなかった。',options:['A. すぎて','B. のに','C. けど','D. から'],answer:'A',explanation:'〜すぎて = too much (to the point that). It was too difficult and nobody could solve it.'},
  {id:'n3-g-002',type:'grammar',level:'n3',question:'試験が終わった___、旅行に行こうと思っています。',options:['A. ら','B. のに','C. ながら','D. ので'],answer:'A',explanation:'〜たら = once / after ~ then. Once the exam is finished, I plan to travel.'},
  {id:'n3-g-003',type:'grammar',level:'n3',question:'子供___、この映画は怖すぎる。',options:['A. にとって','B. にしたら','C. について','D. によって'],answer:'A',explanation:'〜にとって = from the perspective of, for. For a child, this movie is too scary.'},
  {id:'n3-g-004',type:'grammar',level:'n3',question:'どんなに忙し___、家族との時間は大切にしています。',options:['A. くても','B. ければ','C. いのに','D. かった'],answer:'A',explanation:'どんなに〜ても = no matter how ~. No matter how busy I am, I cherish family time.'},
  {id:'n3-g-005',type:'grammar',level:'n3',question:'電車が遅れた___、会議に間に合わなかった。',options:['A. せいで','B. おかげで','C. ために','D. ので'],answer:'A',explanation:'〜せいで = because of (negative cause). Because the train was late, I didn\'t make the meeting.'},
  {id:'n3-g-006',type:'grammar',level:'n3',question:'先生に教えて___、やっと分かりました。',options:['A. もらって','B. あげて','C. くれて','D. やって'],answer:'A',explanation:'〜てもらって = having received the action. Having been taught by the teacher, I finally understood.'},
  {id:'n3-g-007',type:'grammar',level:'n3',question:'彼は医者___、患者の気持ちを大切にする。',options:['A. として','B. にとって','C. について','D. によって'],answer:'A',explanation:'〜として = in the role/capacity of. As a doctor, he values his patients\' feelings.'},
  {id:'n3-g-008',type:'grammar',level:'n3',question:'このレストランは料理がおいしい___、サービスも素晴らしい。',options:['A. だけでなく','B. しか〜ない','C. ばかり','D. さえ'],answer:'A',explanation:'〜だけでなく〜も = not only ~ but also. Not only is the food good but the service is also wonderful.'},
  {id:'n3-g-009',type:'grammar',level:'n3',question:'彼の言う___にすれば、問題は解決できるはずだ。',options:['A. とおり','B. よう','C. まま','D. はず'],answer:'A',explanation:'〜とおりに = exactly as/according to. If we do it exactly as he says, the problem should be solved.'},
  {id:'n3-g-010',type:'grammar',level:'n3',question:'運動___、健康が改善されてきた。',options:['A. するにつれて','B. してから','C. するのに','D. すると'],answer:'A',explanation:'〜につれて = as ~ progresses. As I exercise (more), my health has been improving.'},
  {id:'n3-g-011',type:'grammar',level:'n3',question:'この計画は実行する___の問題がある。',options:['A. うえで','B. ために','C. ことで','D. ように'],answer:'A',explanation:'〜うえで = when doing / in the process of. There are problems in implementing this plan.'},
  {id:'n3-g-012',type:'grammar',level:'n3',question:'時間が許す___、もっと勉強したい。',options:['A. 限り','B. まで','C. ほど','D. だけ'],answer:'A',explanation:'時間が許す限り = as long as time allows. I want to study more as long as time permits.'},
  {id:'n3-g-013',type:'grammar',level:'n3',question:'弟は勉強する___、ゲームばかりしている。',options:['A. どころか','B. のに','C. から','D. ので'],answer:'A',explanation:'〜どころか = far from. Far from studying, my brother does nothing but play games.'},
  {id:'n3-g-014',type:'grammar',level:'n3',question:'このケーキはあまりにも甘___、食べられなかった。',options:['A. すぎて','B. けど','C. のに','D. だから'],answer:'A',explanation:'あまりにも〜すぎて = so excessively ~ that. The cake was so sweet that I couldn\'t eat it.'},
  {id:'n3-g-015',type:'grammar',level:'n3',question:'年をとる___、体力が落ちてくる。',options:['A. につれて','B. ながら','C. ために','D. のに'],answer:'A',explanation:'〜につれて = as ~ progresses. As one gets older, physical strength declines.'},
  {id:'n3-g-016',type:'grammar',level:'n3',question:'風邪___、学校を休みました。',options:['A. を引いたので','B. を引いても','C. を引いたのに','D. を引きながら'],answer:'A',explanation:'〜ので = because. Because I caught a cold, I took the day off school.'},
  {id:'n3-g-017',type:'grammar',level:'n3',question:'彼が来るか___、まだ分かりません。',options:['A. どうか','B. かどうか','C. かなか','D. どうして'],answer:'B',explanation:'〜かどうか = whether or not. We don\'t know yet whether or not he will come.'},
  {id:'n3-g-018',type:'grammar',level:'n3',question:'雨が降り___、試合は行われた。',options:['A. にもかかわらず','B. ので','C. から','D. ても'],answer:'A',explanation:'〜にもかかわらず = despite, in spite of. Despite the rain, the game was played.'},
  {id:'n3-g-019',type:'grammar',level:'n3',question:'忙しい___、友達の誕生日を忘れていた。',options:['A. あまり','B. ので','C. から','D. ため'],answer:'A',explanation:'〜あまり = because of being too ~. Being too busy, I forgot my friend\'s birthday.'},
  {id:'n3-g-020',type:'grammar',level:'n3',question:'彼女は歌手___だけあって、歌がうまい。',options:['A. な','B. だ','C. の','D. に'],answer:'A',explanation:'〜だけあって = as expected of, befitting. As expected of a singer, she is good at singing.'},
  {id:'n3-g-021',type:'grammar',level:'n3',question:'その問題について、もう少し___いただけますか。',options:['A. 説明して','B. 説明する','C. 説明に','D. 説明の'],answer:'A',explanation:'〜ていただけますか = polite request. Could you please explain that issue a bit more?'},
  {id:'n3-g-022',type:'grammar',level:'n3',question:'田中さんは優しい___、頼りになります。',options:['A. うえに','B. けれど','C. のに','D. から'],answer:'A',explanation:'〜うえに = on top of, in addition to. On top of being kind, he is also dependable.'},
  {id:'n3-g-023',type:'grammar',level:'n3',question:'急いで来た___、もう映画が始まっていた。',options:['A. のに','B. ので','C. から','D. が'],answer:'A',explanation:'〜のに = despite/unexpectedly. Despite rushing, the movie had already started.'},
  {id:'n3-g-024',type:'grammar',level:'n3',question:'彼女が合格したと聞いて、___思いました。',options:['A. よかったと','B. よかったで','C. よかったを','D. よかったの'],answer:'A',explanation:'〜とよかったと思った = thought "that\'s great". Hearing she passed, I thought "how wonderful".'},
  {id:'n3-g-025',type:'grammar',level:'n3',question:'彼は___はずなのに、約束を忘れていた。',options:['A. 知っている','B. 知る','C. 知っていた','D. 知った'],answer:'A',explanation:'〜はずなのに = even though supposed to. Even though he should know, he forgot the promise.'},
  {id:'n3-g-026',type:'grammar',level:'n3',question:'日本語を勉強し始めて___、もう２年になります。',options:['A. から','B. ので','C. のに','D. まで'],answer:'A',explanation:'〜てから〜になります = it has been ~ since. It has already been 2 years since I started studying Japanese.'},
  {id:'n3-g-027',type:'grammar',level:'n3',question:'明日の試験のことを考える___、不安になります。',options:['A. と','B. ので','C. から','D. が'],answer:'A',explanation:'〜と = whenever/each time. Every time I think about tomorrow\'s exam, I get anxious.'},
  {id:'n3-g-028',type:'grammar',level:'n3',question:'彼に頼んでもムダだ。___、断るだろう。',options:['A. どうせ','B. まだ','C. すでに','D. なんと'],answer:'A',explanation:'どうせ = anyway, in any case. Asking him is pointless. He\'ll refuse anyway.'},
  {id:'n3-g-029',type:'grammar',level:'n3',question:'この商品は___売れている。',options:['A. よく','B. いつも','C. また','D. もう'],answer:'A',explanation:'よく売れている = selling well. This product is selling well.'},
  {id:'n3-g-030',type:'grammar',level:'n3',question:'試合に勝った___、みんなで祝いました。',options:['A. ことを','B. することを','C. するので','D. してから'],answer:'A',explanation:'〜したことを祝う = celebrate that one won. We celebrated that everyone won the match.'},
  {id:'n3-g-031',type:'grammar',level:'n3',question:'彼女は最近元気___ない。（様子がおかしい）',options:['A. そうで','B. じゃ','C. で','D. に'],answer:'A',explanation:'元気そうでない = doesn\'t look well/energetic. She doesn\'t seem well lately.'},
  {id:'n3-g-032',type:'grammar',level:'n3',question:'このアプリを使えば、簡単に___できます。',options:['A. 翻訳する','B. 翻訳が','C. 翻訳に','D. 翻訳を'],answer:'A',explanation:'Using this app, you can easily translate. 翻訳する (translating) follows 簡単に naturally.'},
  {id:'n3-g-033',type:'grammar',level:'n3',question:'彼女の気持ちを考える___、何も言えなかった。',options:['A. と','B. ので','C. から','D. が'],answer:'A',explanation:'〜ると = when, as a result of thinking. When I thought of her feelings, I couldn\'t say anything.'},
  {id:'n3-g-034',type:'grammar',level:'n3',question:'明日の天気が___かどうか分からない。',options:['A. 晴れる','B. 晴れて','C. 晴れた','D. 晴れろ'],answer:'A',explanation:'〜かどうか = whether or not. I don\'t know whether or not it will be sunny tomorrow.'},
  {id:'n3-g-035',type:'grammar',level:'n3',question:'彼は優しい___、頭もいい。',options:['A. うえに','B. けれど','C. から','D. ので'],answer:'A',explanation:'〜うえに = in addition to, on top of. On top of being kind, he is also intelligent.'},
  {id:'n3-g-036',type:'grammar',level:'n3',question:'どれほど批判されよう___、彼は意見を変えなかった。',options:['A. とも','B. が','C. でも','D. から'],answer:'A',explanation:'〜ようとも = no matter what. No matter how much criticism he received, he didn\'t change his opinion.'},
  {id:'n3-g-037',type:'grammar',level:'n3',question:'子供のころから、音楽が___と思っていた。',options:['A. 好きだ','B. 好きな','C. 好きに','D. 好きで'],answer:'A',explanation:'〜と思っていた = has been thinking that. Since childhood, I have thought that I like music.'},
  {id:'n3-g-038',type:'grammar',level:'n3',question:'彼女は仕事で___あまり、体を壊した。',options:['A. 頑張りすぎた','B. 頑張った','C. 頑張る','D. 頑張り'],answer:'A',explanation:'〜すぎたあまり = because of doing too much. Because she worked too hard, she broke down her health.'},
  {id:'n3-g-039',type:'grammar',level:'n3',question:'社長の話し方___、今日の会議は重要らしい。',options:['A. からすると','B. について','C. によると','D. に関して'],answer:'A',explanation:'〜からすると = judging from, based on. Judging from how the president spoke, today\'s meeting seems important.'},
  {id:'n3-g-040',type:'grammar',level:'n3',question:'どんなに練習し___、才能がなければ限界がある。',options:['A. ても','B. から','C. のに','D. ので'],answer:'A',explanation:'どんなに〜ても = no matter how much. No matter how much one practises, there are limits without talent.'},

  // ══════════════════════════════════════════════════════════════
  //  N3 — VOCABULARY
  // ══════════════════════════════════════════════════════════════

  {id:'n3-v-001',type:'vocabulary',level:'n3',question:'「我慢」の意味はどれですか。',options:['A. 努力する','B. 我慢する・耐える','C. 諦める','D. 怒る'],answer:'B',explanation:'我慢 means endurance or holding back — bearing something patiently.'},
  {id:'n3-v-002',type:'vocabulary',level:'n3',question:'「感謝」の意味はどれですか。',options:['A. 感謝・お礼','B. 謝罪','C. 感動','D. 後悔'],answer:'A',explanation:'感謝 means gratitude or appreciation.'},
  {id:'n3-v-003',type:'vocabulary',level:'n3',question:'「責任」の意味はどれですか。',options:['A. 権利','B. 義務','C. 責任・役割','D. 自由'],answer:'C',explanation:'責任 means responsibility or obligation.'},
  {id:'n3-v-004',type:'vocabulary',level:'n3',question:'「状況」の意味はどれですか。',options:['A. 原因','B. 結果','C. 方法','D. 状況・様子'],answer:'D',explanation:'状況 means situation or circumstances.'},
  {id:'n3-v-005',type:'vocabulary',level:'n3',question:'「尊敬する」の意味はどれですか。',options:['A. 尊敬する・敬う','B. 好きだ','C. 信頼する','D. 羨ましい'],answer:'A',explanation:'尊敬する means to respect or to look up to someone.'},
  {id:'n3-v-006',type:'vocabulary',level:'n3',question:'「信頼」の意味はどれですか。',options:['A. 信頼・信用','B. 疑い','C. 心配','D. 期待'],answer:'A',explanation:'信頼 means trust or reliance.'},
  {id:'n3-v-007',type:'vocabulary',level:'n3',question:'「不満」の意味はどれですか。',options:['A. 満足','B. 期待','C. 不満・不平','D. 不安'],answer:'C',explanation:'不満 means dissatisfaction or discontent.'},
  {id:'n3-v-008',type:'vocabulary',level:'n3',question:'「後悔」の意味はどれですか。',options:['A. 後悔・悔やみ','B. 感謝','C. 期待','D. 喜び'],answer:'A',explanation:'後悔 means regret or remorse.'},
  {id:'n3-v-009',type:'vocabulary',level:'n3',question:'「勇気」の意味はどれですか。',options:['A. 強さ','B. 勇気・度胸','C. 努力','D. 自信'],answer:'B',explanation:'勇気 means courage or bravery.'},
  {id:'n3-v-010',type:'vocabulary',level:'n3',question:'「成長する」の意味はどれですか。',options:['A. 大きくなる・成長する','B. 成功する','C. 変化する','D. 進歩する'],answer:'A',explanation:'成長する means to grow or to develop.'},
  {id:'n3-v-011',type:'vocabulary',level:'n3',question:'「影響」の意味はどれですか。',options:['A. 関係','B. 結果','C. 影響・効果','D. 原因'],answer:'C',explanation:'影響 means influence or effect on something.'},
  {id:'n3-v-012',type:'vocabulary',level:'n3',question:'「解決する」の意味はどれですか。',options:['A. 発見する','B. 解決する・問題を片付ける','C. 悩む','D. 調べる'],answer:'B',explanation:'解決する means to solve or to resolve a problem.'},
  {id:'n3-v-013',type:'vocabulary',level:'n3',question:'「批判する」の意味はどれですか。',options:['A. 褒める','B. 批判する・非難する','C. 説明する','D. 評価する'],answer:'B',explanation:'批判する means to criticise or to find fault with.'},
  {id:'n3-v-014',type:'vocabulary',level:'n3',question:'「豊か」の意味はどれですか。',options:['A. 豊か・十分にある','B. 不足している','C. 大切な','D. 特別な'],answer:'A',explanation:'豊か means rich, abundant, or plentiful.'},
  {id:'n3-v-015',type:'vocabulary',level:'n3',question:'「怪しい」の意味はどれですか。',options:['A. 怖い','B. 珍しい','C. 怪しい・疑わしい','D. 難しい'],answer:'C',explanation:'怪しい means suspicious, dubious, or strange.'},
  {id:'n3-v-016',type:'vocabulary',level:'n3',question:'「積極的」の意味はどれですか。',options:['A. 積極的・前向き','B. 消極的','C. 慎重な','D. 楽観的'],answer:'A',explanation:'積極的 means proactive, positive, or assertive.'},
  {id:'n3-v-017',type:'vocabulary',level:'n3',question:'「適切」の意味はどれですか。',options:['A. 正確な','B. 便利な','C. 適切・ふさわしい','D. 十分な'],answer:'C',explanation:'適切 means appropriate or suitable for the situation.'},
  {id:'n3-v-018',type:'vocabulary',level:'n3',question:'「見直す」の意味はどれですか。',options:['A. 見直す・再検討する','B. 見つける','C. 見る','D. 見送る'],answer:'A',explanation:'見直す means to review, to reconsider, or to revise.'},
  {id:'n3-v-019',type:'vocabulary',level:'n3',question:'「判断する」の意味はどれですか。',options:['A. 考える','B. 判断する・決める','C. 相談する','D. 確認する'],answer:'B',explanation:'判断する means to judge or to make a decision.'},
  {id:'n3-v-020',type:'vocabulary',level:'n3',question:'「目標」の意味はどれですか。',options:['A. 目的','B. 目標・ゴール','C. 夢','D. 計画'],answer:'B',explanation:'目標 means goal or target — a specific objective to aim for.'},
  {id:'n3-v-021',type:'vocabulary',level:'n3',question:'「課題」の意味はどれですか。',options:['A. 課題・問題・宿題','B. 計画','C. 結果','D. 説明'],answer:'A',explanation:'課題 means task, challenge, or assignment.'},
  {id:'n3-v-022',type:'vocabulary',level:'n3',question:'「充実する」の意味はどれですか。',options:['A. 充実する・内容が豊かになる','B. 疲れる','C. 楽になる','D. 減る'],answer:'A',explanation:'充実する means to be fulfilling or to become rich in content.'},
  {id:'n3-v-023',type:'vocabulary',level:'n3',question:'「逆に」の意味はどれですか。',options:['A. 反対に・逆に','B. さらに','C. 特に','D. 次に'],answer:'A',explanation:'逆に means on the contrary or conversely.'},
  {id:'n3-v-024',type:'vocabulary',level:'n3',question:'「維持する」の意味はどれですか。',options:['A. 向上させる','B. 維持する・保つ','C. 壊す','D. 変える'],answer:'B',explanation:'維持する means to maintain or to keep up.'},
  {id:'n3-v-025',type:'vocabulary',level:'n3',question:'「羨ましい」の意味はどれですか。',options:['A. 悲しい','B. 嬉しい','C. 羨ましい・うらやましい','D. 怖い'],answer:'C',explanation:'羨ましい means envious or jealous.'},
  {id:'n3-v-026',type:'vocabulary',level:'n3',question:'「促進する」の意味はどれですか。',options:['A. 阻止する','B. 促進する・推進する','C. 妨害する','D. 遅らせる'],answer:'B',explanation:'促進する means to promote or to accelerate.'},
  {id:'n3-v-027',type:'vocabulary',level:'n3',question:'「なかなか〜ない」の意味はどれですか。',options:['A. すぐに〜できる','B. 〜するのが難しい','C. たまに〜できる','D. 絶対に〜しない'],answer:'B',explanation:'なかなか〜ない = not easily, hard to do. Expresses that something is difficult to accomplish.'},
  {id:'n3-v-028',type:'vocabulary',level:'n3',question:'「いわゆる」の意味はどれですか。',options:['A. いわゆる・いわば','B. 例えば','C. つまり','D. ちなみに'],answer:'A',explanation:'いわゆる means "what is called" or "so-called".'},
  {id:'n3-v-029',type:'vocabulary',level:'n3',question:'「取り組む」の意味はどれですか。',options:['A. 取り組む・挑む','B. 諦める','C. 避ける','D. 助ける'],answer:'A',explanation:'取り組む means to tackle, to work on, or to address a challenge.'},
  {id:'n3-v-030',type:'vocabulary',level:'n3',question:'「柔軟」の意味はどれですか。',options:['A. 柔軟・融通がきく','B. 厳しい','C. 正確な','D. 慎重な'],answer:'A',explanation:'柔軟 means flexible or adaptable.'},

  // ══════════════════════════════════════════════════════════════
  //  N3 — KANJI READING
  // ══════════════════════════════════════════════════════════════

  {id:'n3-k-001',type:'kanji',level:'n3',question:'「影響」の読み方はどれですか。',options:['A. えいきょう','B. かげひびき','C. えいこう','D. かげきょう'],answer:'A',explanation:'影響 = えいきょう (influence, effect).'},
  {id:'n3-k-002',type:'kanji',level:'n3',question:'「状況」の読み方はどれですか。',options:['A. じょうきょ','B. じょうきょう','C. ようきょう','D. じゅうきょう'],answer:'B',explanation:'状況 = じょうきょう (situation, circumstances).'},
  {id:'n3-k-003',type:'kanji',level:'n3',question:'「責任」の読み方はどれですか。',options:['A. せきにん','B. せきにむ','C. さくにん','D. せきじん'],answer:'A',explanation:'責任 = せきにん (responsibility).'},
  {id:'n3-k-004',type:'kanji',level:'n3',question:'「解決」の読み方はどれですか。',options:['A. かいしょ','B. げかつ','C. かいけつ','D. げけつ'],answer:'C',explanation:'解決 = かいけつ (solution, resolution).'},
  {id:'n3-k-005',type:'kanji',level:'n3',question:'「判断」の読み方はどれですか。',options:['A. はんだん','B. はんとう','C. ばんだん','D. はんだむ'],answer:'A',explanation:'判断 = はんだん (judgement, decision).'},
  {id:'n3-k-006',type:'kanji',level:'n3',question:'「課題」の読み方はどれですか。',options:['A. がだい','B. かだい','C. かてい','D. くだい'],answer:'B',explanation:'課題 = かだい (task, challenge, assignment).'},
  {id:'n3-k-007',type:'kanji',level:'n3',question:'「情報」の読み方はどれですか。',options:['A. じょうほ','B. じょうほう','C. じょうほん','D. にょうほう'],answer:'B',explanation:'情報 = じょうほう (information).'},
  {id:'n3-k-008',type:'kanji',level:'n3',question:'「法律」の読み方はどれですか。',options:['A. ほうりつ','B. ほうりゅ','C. ほいりつ','D. はうりつ'],answer:'A',explanation:'法律 = ほうりつ (law, legislation).'},
  {id:'n3-k-009',type:'kanji',level:'n3',question:'「経済」の読み方はどれですか。',options:['A. けいさい','B. きょうざい','C. けいざい','D. けいさ'],answer:'C',explanation:'経済 = けいざい (economy, economics).'},
  {id:'n3-k-010',type:'kanji',level:'n3',question:'「環境」の読み方はどれですか。',options:['A. かんきょ','B. かんきょう','C. えんきょう','D. かんけい'],answer:'B',explanation:'環境 = かんきょう (environment, surroundings).'},
  {id:'n3-k-011',type:'kanji',level:'n3',question:'「文化」の読み方はどれですか。',options:['A. ぶんか','B. もんか','C. ふんか','D. ぶっか'],answer:'A',explanation:'文化 = ぶんか (culture).'},
  {id:'n3-k-012',type:'kanji',level:'n3',question:'「政治」の読み方はどれですか。',options:['A. せいち','B. まつりごと','C. せいじ','D. まつりじ'],answer:'C',explanation:'政治 = せいじ (politics, government).'},
  {id:'n3-k-013',type:'kanji',level:'n3',question:'「社会」の読み方はどれですか。',options:['A. しゃかい','B. やしろかい','C. しゃかえ','D. しゃかい'],answer:'A',explanation:'社会 = しゃかい (society).'},
  {id:'n3-k-014',type:'kanji',level:'n3',question:'「目標」の読み方はどれですか。',options:['A. もくひょ','B. めひょう','C. もくひょう','D. めしるべ'],answer:'C',explanation:'目標 = もくひょう (goal, target).'},
  {id:'n3-k-015',type:'kanji',level:'n3',question:'「努力」の読み方はどれですか。',options:['A. どりょく','B. ぬりょく','C. どりき','D. つとめりょく'],answer:'A',explanation:'努力 = どりょく (effort, endeavour).'},
  {id:'n3-k-016',type:'kanji',level:'n3',question:'「成長」の読み方はどれですか。',options:['A. せいちょう','B. せいちょ','C. なりちょう','D. せいじょう'],answer:'A',explanation:'成長 = せいちょう (growth, development).'},
  {id:'n3-k-017',type:'kanji',level:'n3',question:'「批判」の読み方はどれですか。',options:['A. ひはん','B. ひばん','C. びはん','D. ひほん'],answer:'A',explanation:'批判 = ひはん (criticism).'},
  {id:'n3-k-018',type:'kanji',level:'n3',question:'「伝統」の読み方はどれですか。',options:['A. でんとう','B. つたえとう','C. でんとも','D. てんとう'],answer:'A',explanation:'伝統 = でんとう (tradition).'},
  {id:'n3-k-019',type:'kanji',level:'n3',question:'「地域」の読み方はどれですか。',options:['A. ちいき','B. じいき','C. ちいぎ','D. ちぎ'],answer:'A',explanation:'地域 = ちいき (region, area, community).'},
  {id:'n3-k-020',type:'kanji',level:'n3',question:'「権利」の読み方はどれですか。',options:['A. けんり','B. ごんり','C. けんれ','D. きんり'],answer:'A',explanation:'権利 = けんり (right, privilege).'},

  // ══════════════════════════════════════════════════════════════
  //  N3 — READING COMPREHENSION
  // ══════════════════════════════════════════════════════════════

  {id:'n3-r-001',type:'reading',level:'n3',passage:'近年、ボランティア活動に参加する人が増えています。お金をもらわずに社会のために働くことで、充実感や新しいスキルを得られるからです。しかし、継続するためには無理なく参加できる活動を選ぶことが大切です。',question:'ボランティアを継続するために最も大切なことは何ですか。',options:['A. 毎日参加する','B. 多くの人を誘う','C. 無理なく参加できる活動を選ぶ','D. お金を稼ぐこと'],answer:'C',explanation:'「継続するためには無理なく参加できる活動を選ぶことが大切です」と明記されています。'},
  {id:'n3-r-002',type:'reading',level:'n3',passage:'日本では「ワーク・ライフ・バランス」が重視されるようになっています。以前は長時間労働が当たり前でしたが、過労死などの問題が注目されたことで、働き方改革が進んでいます。',question:'働き方改革が進んだきっかけの一つは何ですか。',options:['A. 経済成長のため','B. 過労死などの問題が注目されたから','C. 外国から批判されたから','D. 政府が命令したから'],answer:'B',explanation:'「過労死などの問題が社会的に注目されたことで、働き方の改革が進んでいます」とあります。'},
  {id:'n3-r-003',type:'reading',level:'n3',passage:'スマートフォンの普及により、若い人の読書量が減っています。長い文章を読む集中力が育ちにくくなっているという指摘があります。しかし、読書には語彙力や想像力を高める効果があります。',question:'読書の効果として挙げられていないものはどれですか。',options:['A. 語彙力が高まる','B. 想像力が高まる','C. 体力がつく','D. 集中力が育つ可能性がある'],answer:'C',explanation:'体力については本文で述べられていません。'},
  {id:'n3-r-004',type:'reading',level:'n3',passage:'地球温暖化やプラスチックごみなど、環境問題が深刻です。一人ひとりが行動することが大切で、マイバッグを使う、食べ物を残さないなど、日常の中でできることはたくさんあります。',question:'本文で紹介されている個人の取り組みはどれですか。',options:['A. 太陽光パネルを設置する','B. 政府に手紙を書く','C. マイバッグを使う','D. 工場を閉める'],answer:'C',explanation:'「マイバッグを使う、食べ物を残さないなど」が個人の取り組みとして挙げられています。'},
  {id:'n3-r-005',type:'reading',level:'n3',passage:'SNSは離れた人とつながれる便利なツールですが、問題点もあります。誰でも情報を発信できるため、フェイクニュースが広まりやすい環境でもあります。情報の正確さを確認する習慣が重要です。',question:'SNSの問題点として述べられているものはどれですか。',options:['A. 使用料が高い','B. フェイクニュースが広まりやすい','C. 電池の消耗が激しい','D. 使い方が難しい'],answer:'B',explanation:'「フェイクニュースが広まりやすい環境でもあります」と述べられています。'},
  {id:'n3-r-006',type:'reading',level:'n3',passage:'留学することは語学力を伸ばすだけでなく、異文化の中で生活することで視野が広がります。様々な困難を乗り越えることで、自立心や問題解決能力が育まれます。',question:'留学の意義として述べられていないものはどれですか。',options:['A. 語学力が伸びる','B. 視野が広がる','C. 自立心が育まれる','D. 収入が増える'],answer:'D',explanation:'収入については本文で述べられていません。'},

  // ══════════════════════════════════════════════════════════════
  //  N2 — GRAMMAR
  // ══════════════════════════════════════════════════════════════

  {id:'n2-g-001',type:'grammar',level:'n2',question:'彼の意見は規則___いるものだ。',options:['A. に反して','B. に対して','C. について','D. によって'],answer:'A',explanation:'〜に反して = contrary to, against. His opinion goes against the rules.'},
  {id:'n2-g-002',type:'grammar',level:'n2',question:'その計画は実行する___に、いくつかの問題がある。',options:['A. うえ','B. ため','C. こと','D. よう'],answer:'A',explanation:'〜するうえに = in the process of doing. There are several problems in implementing the plan.'},
  {id:'n2-g-003',type:'grammar',level:'n2',question:'彼女は仕事が忙しい___、家族との時間を大切にしている。',options:['A. にもかかわらず','B. から','C. ので','D. ために'],answer:'A',explanation:'〜にもかかわらず = despite, in spite of. Despite being busy with work, she cherishes family time.'},
  {id:'n2-g-004',type:'grammar',level:'n2',question:'新しい制度を___にあたっては、十分な説明が必要だ。',options:['A. 導入する','B. 導入した','C. 導入して','D. 導入の'],answer:'A',explanation:'〜するにあたって = when doing, upon doing. When introducing the new system, sufficient explanation is needed.'},
  {id:'n2-g-005',type:'grammar',level:'n2',question:'子供の教育___、親は大きな責任を持つ。',options:['A. に関して','B. にとって','C. によって','D. に反して'],answer:'A',explanation:'〜に関して = regarding, concerning. Regarding children\'s education, parents have great responsibility.'},
  {id:'n2-g-006',type:'grammar',level:'n2',question:'あの映画は感動的___、何度も見てしまった。',options:['A. なあまり','B. なので','C. だから','D. なのに'],answer:'A',explanation:'〜なあまり = because of being too ~. Being so moving, I ended up watching it many times.'},
  {id:'n2-g-007',type:'grammar',level:'n2',question:'彼の才能___、今のポジションは当然だ。',options:['A. からすれば','B. のために','C. について','D. によると'],answer:'A',explanation:'〜からすれば = from the standpoint of, considering. Considering his talent, his current position is natural.'},
  {id:'n2-g-008',type:'grammar',level:'n2',question:'このプロジェクトは成功する___がない。',options:['A. どころ','B. わけ','C. はず','D. こと'],answer:'B',explanation:'〜わけがない = there\'s no reason / impossible. There\'s no way this project will succeed.'},
  {id:'n2-g-009',type:'grammar',level:'n2',question:'締め切りが近い___、作業を急ぐ必要がある。',options:['A. だけに','B. のに','C. けど','D. が'],answer:'A',explanation:'〜だけに = precisely because, all the more because. Precisely because the deadline is near, we need to hurry.'},
  {id:'n2-g-010',type:'grammar',level:'n2',question:'どう考えて___、この計画は無理だ。',options:['A. も','B. さえ','C. だって','D. でも'],answer:'A',explanation:'どう〜ても = no matter how. No matter how I think about it, this plan is impossible.'},
  {id:'n2-g-011',type:'grammar',level:'n2',question:'彼は弁護士___、法律についてよく知っている。',options:['A. だけあって','B. なので','C. ために','D. から'],answer:'A',explanation:'〜だけあって = as expected of, befitting. As expected of a lawyer, he knows a lot about law.'},
  {id:'n2-g-012',type:'grammar',level:'n2',question:'報告書を提出する___、必ず上司の確認を取ること。',options:['A. 際には','B. とき','C. 場合','D. ところ'],answer:'A',explanation:'〜際には = when, at the time of (formal). When submitting a report, always get your supervisor\'s approval.'},
  {id:'n2-g-013',type:'grammar',level:'n2',question:'時間が___、もっと詳しく説明できるのに。',options:['A. あれば','B. あって','C. あっても','D. あるのに'],answer:'A',explanation:'〜ば〜のに = if only (contrary to fact). If I had more time, I could explain in more detail.'},
  {id:'n2-g-014',type:'grammar',level:'n2',question:'彼の説明は長い___、要点が分からなかった。',options:['A. わりに','B. ために','C. のに','D. せいで'],answer:'A',explanation:'〜わりに = for/despite (unexpected result). Despite being long, his explanation\'s main points were unclear.'},
  {id:'n2-g-015',type:'grammar',level:'n2',question:'先生に言われた___、その本を読んでみた。',options:['A. とおりに','B. ように','C. ために','D. まま'],answer:'A',explanation:'〜とおりに = exactly as told. I read the book exactly as the teacher said.'},
  {id:'n2-g-016',type:'grammar',level:'n2',question:'彼は成功した___、周りの人への感謝を忘れなかった。',options:['A. ものの','B. のに','C. けど','D. が'],answer:'A',explanation:'〜ものの = although, even though. Although he succeeded, he didn\'t forget to be grateful to those around him.'},
  {id:'n2-g-017',type:'grammar',level:'n2',question:'費用___ともかく、まず計画を立てましょう。',options:['A. は','B. が','C. を','D. に'],answer:'A',explanation:'費用はともかく = setting aside the cost. Setting the cost aside, let\'s first make a plan.'},
  {id:'n2-g-018',type:'grammar',level:'n2',question:'あんなに練習した___、本番で失敗するとは。',options:['A. のに','B. から','C. ため','D. ので'],answer:'A',explanation:'〜のに = despite/unexpected contrast. Despite practising so much, to fail in the actual performance...'},
  {id:'n2-g-019',type:'grammar',level:'n2',question:'品質の高さ___、この商品は人気がある。',options:['A. から','B. もあって','C. のため','D. だけに'],answer:'B',explanation:'〜もあって = partly because of. Partly because of its high quality, this product is popular.'},
  {id:'n2-g-020',type:'grammar',level:'n2',question:'どんな困難も、努力___乗り越えられる。',options:['A. さえすれば','B. するなら','C. したら','D. するほど'],answer:'A',explanation:'〜さえすれば = if only, as long as. Any difficulty can be overcome as long as one makes the effort.'},
  {id:'n2-g-021',type:'grammar',level:'n2',question:'この書類は明日___提出しなければならない。',options:['A. までに','B. まで','C. から','D. ごろ'],answer:'A',explanation:'〜までに = by (deadline). This document must be submitted by tomorrow.'},
  {id:'n2-g-022',type:'grammar',level:'n2',question:'この映画は、見る___に、涙が出てくる。',options:['A. たびに','B. とおりに','C. ために','D. ように'],answer:'A',explanation:'〜たびに = every time, whenever. Every time I watch this movie, tears come.'},
  {id:'n2-g-023',type:'grammar',level:'n2',question:'彼の発言は、場の雰囲気を悪く___かねない。',options:['A. する','B. なる','C. させる','D. した'],answer:'A',explanation:'〜しかねない = might, could potentially. His remarks might worsen the mood of the place.'},
  {id:'n2-g-024',type:'grammar',level:'n2',question:'失業率が高い___、この政策は必要だ。',options:['A. だけに','B. ので','C. から','D. ため'],answer:'A',explanation:'〜だけに = precisely because. Precisely because the unemployment rate is high, this policy is necessary.'},
  {id:'n2-g-025',type:'grammar',level:'n2',question:'彼は約束を___はずだ。',options:['A. 守る','B. 守った','C. 守って','D. 守ろう'],answer:'A',explanation:'〜はずだ = should, supposed to. He is supposed to keep his promise.'},
  {id:'n2-g-026',type:'grammar',level:'n2',question:'新しい仕事___、毎日緊張している。',options:['A. とあって','B. なので','C. から','D. ため'],answer:'A',explanation:'〜とあって = because of being, since. Because of starting a new job, I am nervous every day.'},
  {id:'n2-g-027',type:'grammar',level:'n2',question:'この問題は、専門家___解決できるものではない。',options:['A. でさえ','B. だけが','C. のみが','D. でも'],answer:'A',explanation:'〜でさえ = even. Even experts cannot solve this problem.'},
  {id:'n2-g-028',type:'grammar',level:'n2',question:'あの選手は才能が___ことには疑いの余地がない。',options:['A. ある','B. あった','C. あれ','D. あり'],answer:'A',explanation:'〜ことには疑いの余地がない = there is no doubt that. There is no doubt that athlete has talent.'},
  {id:'n2-g-029',type:'grammar',level:'n2',question:'環境問題は、もはや無視できない___に至っている。',options:['A. 段階','B. 理由','C. 原因','D. 結果'],answer:'A',explanation:'〜段階に至っている = has reached the stage where. Environmental issues have reached the stage where they can no longer be ignored.'},
  {id:'n2-g-030',type:'grammar',level:'n2',question:'技術の進歩___、生活スタイルも大きく変わった。',options:['A. に伴い','B. につれて','C. とともに','D. のために'],answer:'A',explanation:'〜に伴い = along with, accompanying. Along with technological progress, lifestyles have also changed greatly.'},

  // ══════════════════════════════════════════════════════════════
  //  N2 — VOCABULARY
  // ══════════════════════════════════════════════════════════════

  {id:'n2-v-001',type:'vocabulary',level:'n2',question:'「把握する」の意味はどれですか。',options:['A. 把握する・正確に理解する','B. 計画する','C. 発表する','D. 確認する'],answer:'A',explanation:'把握する means to grasp, to understand accurately, or to get a handle on.'},
  {id:'n2-v-002',type:'vocabulary',level:'n2',question:'「達成する」の意味はどれですか。',options:['A. 挑戦する','B. 失敗する','C. 達成する・成し遂げる','D. 諦める'],answer:'C',explanation:'達成する means to achieve or to accomplish a goal.'},
  {id:'n2-v-003',type:'vocabulary',level:'n2',question:'「概要」の意味はどれですか。',options:['A. 詳細','B. 概要・あらまし','C. 結論','D. 目的'],answer:'B',explanation:'概要 means outline or summary.'},
  {id:'n2-v-004',type:'vocabulary',level:'n2',question:'「対策」の意味はどれですか。',options:['A. 問題','B. 対策・解決策','C. 批判','D. 調査'],answer:'B',explanation:'対策 means countermeasure or step taken to address a problem.'},
  {id:'n2-v-005',type:'vocabulary',level:'n2',question:'「透明性」の意味はどれですか。',options:['A. 正確さ','B. 透明性・公開性','C. 効率','D. 公平さ'],answer:'B',explanation:'透明性 means transparency or openness.'},
  {id:'n2-v-006',type:'vocabulary',level:'n2',question:'「拡大する」の意味はどれですか。',options:['A. 縮小する','B. 維持する','C. 拡大する・広げる','D. 削減する'],answer:'C',explanation:'拡大する means to expand, to enlarge, or to scale up.'},
  {id:'n2-v-007',type:'vocabulary',level:'n2',question:'「検討する」の意味はどれですか。',options:['A. 批判する','B. 検討する・よく考える','C. 実施する','D. 発表する'],answer:'B',explanation:'検討する means to consider, to examine, or to study carefully.'},
  {id:'n2-v-008',type:'vocabulary',level:'n2',question:'「格差」の意味はどれですか。',options:['A. 格差・差','B. 競争','C. 平等','D. 違い'],answer:'A',explanation:'格差 means disparity or gap, especially in socioeconomic terms.'},
  {id:'n2-v-009',type:'vocabulary',level:'n2',question:'「普及する」の意味はどれですか。',options:['A. 発展する','B. 普及する・広まる','C. 改善する','D. 進歩する'],answer:'B',explanation:'普及する means to spread or to become widespread.'},
  {id:'n2-v-010',type:'vocabulary',level:'n2',question:'「効率的」の意味はどれですか。',options:['A. 積極的','B. 効率的・無駄がない','C. 効果的','D. 合理的'],answer:'B',explanation:'効率的 means efficient — achieving results with minimal waste.'},
  {id:'n2-v-011',type:'vocabulary',level:'n2',question:'「実施する」の意味はどれですか。',options:['A. 計画する','B. 実施する・実行する','C. 中止する','D. 変更する'],answer:'B',explanation:'実施する means to implement or to carry out.'},
  {id:'n2-v-012',type:'vocabulary',level:'n2',question:'「根拠」の意味はどれですか。',options:['A. 結論','B. 原因','C. 根拠・証拠','D. 理由'],answer:'C',explanation:'根拠 means basis, grounds, or evidence for a claim.'},
  {id:'n2-v-013',type:'vocabulary',level:'n2',question:'「抑制する」の意味はどれですか。',options:['A. 促進する','B. 抑制する・抑える','C. 発展させる','D. 増やす'],answer:'B',explanation:'抑制する means to suppress, to restrain, or to curb.'},
  {id:'n2-v-014',type:'vocabulary',level:'n2',question:'「著しい」の意味はどれですか。',options:['A. 少ない','B. 著しい・目立つ','C. 普通の','D. 小さな'],answer:'B',explanation:'著しい means remarkable, striking, or conspicuous.'},
  {id:'n2-v-015',type:'vocabulary',level:'n2',question:'「持続可能」の意味はどれですか。',options:['A. 一時的な','B. 持続可能・長く続けられる','C. 効率的な','D. 革新的な'],answer:'B',explanation:'持続可能 means sustainable — able to be maintained long-term.'},
  {id:'n2-v-016',type:'vocabulary',level:'n2',question:'「促進する」の意味はどれですか。',options:['A. 阻止する','B. 遅らせる','C. 促進する・進める','D. 維持する'],answer:'C',explanation:'促進する means to promote, to advance, or to accelerate.'},
  {id:'n2-v-017',type:'vocabulary',level:'n2',question:'「多様」の意味はどれですか。',options:['A. 統一された','B. 多様・様々','C. 独自の','D. 普通の'],answer:'B',explanation:'多様 means diverse or varied.'},
  {id:'n2-v-018',type:'vocabulary',level:'n2',question:'「倫理的」の意味はどれですか。',options:['A. 効率的','B. 倫理的・道徳的','C. 合法的','D. 科学的'],answer:'B',explanation:'倫理的 means ethical or moral.'},
  {id:'n2-v-019',type:'vocabulary',level:'n2',question:'「分析する」の意味はどれですか。',options:['A. 調査する','B. 分析する・詳しく調べる','C. 評価する','D. 解決する'],answer:'B',explanation:'分析する means to analyse — to examine in detail.'},
  {id:'n2-v-020',type:'vocabulary',level:'n2',question:'「発揮する」の意味はどれですか。',options:['A. 隠す','B. 発揮する・能力を出す','C. 失う','D. 維持する'],answer:'B',explanation:'発揮する means to demonstrate or to show one\'s ability or talent.'},

  // ══════════════════════════════════════════════════════════════
  //  N2 — KANJI READING
  // ══════════════════════════════════════════════════════════════

  {id:'n2-k-001',type:'kanji',level:'n2',question:'「格差」の読み方はどれですか。',options:['A. かくさ','B. こうさ','C. かくちゃ','D. がくさ'],answer:'A',explanation:'格差 = かくさ (disparity, gap).'},
  {id:'n2-k-002',type:'kanji',level:'n2',question:'「持続可能」の読み方はどれですか。',options:['A. じぞくかのう','B. もちつづけかのう','C. じぞっかのう','D. じぞくかのうせい'],answer:'A',explanation:'持続可能 = じぞくかのう (sustainable).'},
  {id:'n2-k-003',type:'kanji',level:'n2',question:'「効率」の読み方はどれですか。',options:['A. こうりつ','B. こうそく','C. こりつ','D. こうりっ'],answer:'A',explanation:'効率 = こうりつ (efficiency).'},
  {id:'n2-k-004',type:'kanji',level:'n2',question:'「透明性」の読み方はどれですか。',options:['A. とうみょうせい','B. すきとおりせい','C. とうめいせい','D. とうめいしょう'],answer:'C',explanation:'透明性 = とうめいせい (transparency).'},
  {id:'n2-k-005',type:'kanji',level:'n2',question:'「発展」の読み方はどれですか。',options:['A. はってん','B. はっでん','C. はってい','D. はつてん'],answer:'A',explanation:'発展 = はってん (development, growth).'},
  {id:'n2-k-006',type:'kanji',level:'n2',question:'「根拠」の読み方はどれですか。',options:['A. こんく','B. こんきょ','C. こんきょう','D. ねもと'],answer:'B',explanation:'根拠 = こんきょ (basis, grounds, evidence).'},
  {id:'n2-k-007',type:'kanji',level:'n2',question:'「導入」の読み方はどれですか。',options:['A. どうにゅう','B. みちいれ','C. どにゅう','D. とうにゅう'],answer:'A',explanation:'導入 = どうにゅう (introduction, adoption of a system).'},
  {id:'n2-k-008',type:'kanji',level:'n2',question:'「削減」の読み方はどれですか。',options:['A. さくけん','B. さくげん','C. けずりへらし','D. しょうげん'],answer:'B',explanation:'削減 = さくげん (reduction, cut).'},
  {id:'n2-k-009',type:'kanji',level:'n2',question:'「均衡」の読み方はどれですか。',options:['A. きんこう','B. えいこう','C. きんごう','D. かたむき'],answer:'A',explanation:'均衡 = きんこう (balance, equilibrium).'},
  {id:'n2-k-010',type:'kanji',level:'n2',question:'「廃棄」の読み方はどれですか。',options:['A. はいきゃく','B. はいき','C. ふはい','D. すてつくり'],answer:'B',explanation:'廃棄 = はいき (disposal, abandonment).'},
  {id:'n2-k-011',type:'kanji',level:'n2',question:'「排出」の読み方はどれですか。',options:['A. はいしゅつ','B. だしはい','C. はいでる','D. はいすい'],answer:'A',explanation:'排出 = はいしゅつ (emission, discharge).'},
  {id:'n2-k-012',type:'kanji',level:'n2',question:'「収益」の読み方はどれですか。',options:['A. しゅうり','B. しゅうえき','C. おさめえき','D. しゅいき'],answer:'B',explanation:'収益 = しゅうえき (revenue, earnings).'},
  {id:'n2-k-013',type:'kanji',level:'n2',question:'「倫理」の読み方はどれですか。',options:['A. りんり','B. りんれ','C. りんぎ','D. えつり'],answer:'A',explanation:'倫理 = りんり (ethics, morality).'},
  {id:'n2-k-014',type:'kanji',level:'n2',question:'「需要」の読み方はどれですか。',options:['A. じゅよう','B. じゅうよう','C. もとめよう','D. すよう'],answer:'A',explanation:'需要 = じゅよう (demand).'},
  {id:'n2-k-015',type:'kanji',level:'n2',question:'「段階」の読み方はどれですか。',options:['A. だんかい','B. たんかい','C. だんがい','D. だかい'],answer:'A',explanation:'段階 = だんかい (stage, phase, step).'},

  // ══════════════════════════════════════════════════════════════
  //  N2 — READING COMPREHENSION
  // ══════════════════════════════════════════════════════════════

  {id:'n2-r-001',type:'reading',level:'n2',passage:'AIの急速な発展は、多くの産業における働き方を変えつつあります。単純な反復作業はAIに代替されつつある一方で、創造性や感情、複雑な対人コミュニケーションはAIには完全に代替できません。',question:'本文でAIが苦手とすることとして述べられているものはどれですか。',options:['A. データ処理','B. 反復作業','C. 創造性・感情・複雑なコミュニケーション','D. 計算'],answer:'C',explanation:'「創造性や感情、複雑な対人コミュニケーションといった人間固有の能力を完全に代替することはできない」とあります。'},
  {id:'n2-r-002',type:'reading',level:'n2',passage:'近年、消費者の間でエシカル消費への関心が高まっています。環境への配慮や人権の尊重、公正な取引を意識した商品選択が広まりつつあります。企業側も持続可能な事業活動への移行が求められています。',question:'エシカル消費として述べられていないものはどれですか。',options:['A. 環境への配慮','B. 人権の尊重','C. 公正な取引','D. 最安値の商品を選ぶこと'],answer:'D',explanation:'最安値を選ぶことはエシカル消費の説明ではありません。'},
  {id:'n2-r-003',type:'reading',level:'n2',passage:'日本では都市への人口集中が続いており、地方の過疎化が深刻です。若い世代が就職や進学を機に都市へ流出し、地方では高齢化が進んでいます。テレワークの普及により、地方移住を選ぶ人も増えています。',question:'テレワークの普及がもたらした変化は何ですか。',options:['A. 地方の財政が改善した','B. 地方移住を選ぶ人が増えた','C. 若者が農業を始めた','D. 都市の人口がさらに増えた'],answer:'B',explanation:'「テレワークの普及により地方への移住を選ぶ人も増えてきており」とあります。'},
  {id:'n2-r-004',type:'reading',level:'n2',passage:'科学技術の進歩は人類に恩恵をもたらす一方で、倫理的問題も生み出します。ゲノム編集は治療の可能性を広げますが、「命の設計」という問題を引き起こします。技術の開発と同時に社会全体での倫理的議論が不可欠です。',question:'筆者が最も伝えたいことはどれですか。',options:['A. 科学技術の発展は止めるべきだ','B. 技術開発と倫理的議論を同時に進める必要がある','C. ゲノム編集は禁止すべきだ','D. 科学は常に正しい'],answer:'B',explanation:'「技術の開発と同時に、社会全体での倫理的な議論が不可欠です」と結論づけています。'},
  {id:'n2-r-005',type:'reading',level:'n2',passage:'情報過多の時代において、大量の情報から正確なものを選び取る「情報リテラシー」が重要です。フィルターバブルにより、自分の価値観に合った情報しか見えなくなる危険性があります。',question:'「フィルターバブル」の危険性として述べられているものはどれですか。',options:['A. インターネットが遅くなる','B. 自分の価値観に合った情報しか目に入らなくなる','C. 情報が全く得られなくなる','D. 個人情報が漏洩する'],answer:'B',explanation:'「自分の意見や価値観に合った情報しか目に入らなくなる危険性があります」とあります。'},
  {id:'n2-r-006',type:'reading',level:'n2',passage:'日本の伝統工芸は職人の高齢化や後継者不足、安い大量生産品との競争により存続の危機に立たされています。若い職人がモダンなデザインと伝統技術を融合させ、SNSで海外に発信する動きが見られます。',question:'伝統工芸が存続の危機に立たされている理由として述べられていないものはどれですか。',options:['A. 職人の高齢化','B. 後継者不足','C. 政府の支援不足','D. 安い大量生産品との競争'],answer:'C',explanation:'政府の支援不足については本文で述べられていません。'},

  // ══════════════════════════════════════════════════════════════
  //  N1 — GRAMMAR
  // ══════════════════════════════════════════════════════════════

  {id:'n1-g-001',type:'grammar',level:'n1',question:'実力___、どんな困難も乗り越えられるはずだ。',options:['A. さえあれば','B. があれば','C. があっても','D. があるなら'],answer:'A',explanation:'〜さえあれば = if only one has. If only one has the ability, any difficulty can be overcome.'},
  {id:'n1-g-002',type:'grammar',level:'n1',question:'世界平和の実現こそ、人類共通の___にほかならない。',options:['A. 願い','B. 思い','C. 夢','D. 望み'],answer:'A',explanation:'〜にほかならない = is nothing other than, is precisely. The realisation of world peace is precisely humanity\'s shared wish.'},
  {id:'n1-g-003',type:'grammar',level:'n1',question:'いくら努力した___、才能がなければ限界がある。',options:['A. ところで','B. としても','C. からといって','D. のに'],answer:'A',explanation:'いくら〜ところで = no matter how much. No matter how much effort one makes, there are limits without talent.'},
  {id:'n1-g-004',type:'grammar',level:'n1',question:'これほど複雑な問題は、簡単に解決できる___がない。',options:['A. わけ','B. こと','C. もの','D. はず'],answer:'A',explanation:'〜わけがない = there\'s no way, impossible. There\'s no way such a complex problem can be solved easily.'},
  {id:'n1-g-005',type:'grammar',level:'n1',question:'現代人はSNSを使わ___にはいられない。',options:['A. ず','B. ない','C. て','D. で'],answer:'A',explanation:'〜ずにはいられない = cannot help but. Modern people cannot help but use SNS.'},
  {id:'n1-g-006',type:'grammar',level:'n1',question:'彼が言う___、その計画は実現可能だ。',options:['A. とすれば','B. なら','C. ところ','D. こと'],answer:'A',explanation:'〜とすれば = if one assumes that. If what he says is true, the plan is feasible.'},
  {id:'n1-g-007',type:'grammar',level:'n1',question:'どれほど批判を受けよう___、彼は信念を曲げなかった。',options:['A. とも','B. が','C. でも','D. と'],answer:'A',explanation:'〜ようとも = no matter what. No matter how much criticism he received, he didn\'t bend his convictions.'},
  {id:'n1-g-008',type:'grammar',level:'n1',question:'この問題は、当事者___考えるべき問題だ。',options:['A. をめぐって','B. に関して','C. について','D. によって'],answer:'A',explanation:'〜をめぐって = concerning, surrounding (a contested issue). This is an issue about which stakeholders should deliberate.'},
  {id:'n1-g-009',type:'grammar',level:'n1',question:'彼女の判断は、いかなる状況___、冷静さを保っている。',options:['A. においても','B. についても','C. に対しても','D. によっても'],answer:'A',explanation:'いかなる〜においても = in any situation whatsoever. Her judgement maintains composure in any situation whatsoever.'},
  {id:'n1-g-010',type:'grammar',level:'n1',question:'失敗を恐れる___、何も始まらない。',options:['A. あまり','B. ために','C. から','D. せいで'],answer:'A',explanation:'〜あまり = because of too much. Because of being too afraid of failure, nothing gets started.'},
  {id:'n1-g-011',type:'grammar',level:'n1',question:'この問題は、専門家___解決できるものではない。',options:['A. でさえ','B. だけが','C. のみが','D. でも'],answer:'A',explanation:'〜でさえ = even. Even experts cannot solve this problem.'},
  {id:'n1-g-012',type:'grammar',level:'n1',question:'公正とは___にほかならない。',options:['A. すべての人が平等に扱われること','B. 多数が幸せになること','C. 法律を守ること','D. 効率的であること'],answer:'A',explanation:'〜にほかならない = is precisely, is nothing other than. Justice is precisely the equal treatment of all people.'},
  {id:'n1-g-013',type:'grammar',level:'n1',question:'どんなに優秀な人___、一人で社会を変えることはできない。',options:['A. であれ','B. でも','C. だって','D. なら'],answer:'A',explanation:'〜であれ = even if one is. Even if one is an outstanding person, they cannot change society alone.'},
  {id:'n1-g-014',type:'grammar',level:'n1',question:'彼の功績___、改めて評価されるべきだ。',options:['A. こそ','B. だけ','C. ばかり','D. まで'],answer:'A',explanation:'〜こそ = precisely, exactly. His achievements are precisely what should be re-evaluated.'},
  {id:'n1-g-015',type:'grammar',level:'n1',question:'彼の演説は聴衆を感動させ___ものだった。',options:['A. ずにはいられない','B. ないでいられない','C. てしまう','D. てならない'],answer:'A',explanation:'〜ずにはいられないものだった = couldn\'t help but. His speech was something that couldn\'t help but move the audience.'},
  {id:'n1-g-016',type:'grammar',level:'n1',question:'社会の発展___、個人の自由が制限されることもある。',options:['A. とともに','B. のために','C. によって','D. にしたがって'],answer:'A',explanation:'〜とともに = along with. Along with social development, individual freedoms may sometimes be restricted.'},
  {id:'n1-g-017',type:'grammar',level:'n1',question:'努力した___にもかかわらず、結果が出なかった。',options:['A. ∅（修飾なし）','B. こと','C. のに','D. ため'],answer:'B',explanation:'〜にもかかわらず = despite. Despite having made efforts, the results didn\'t show.'},
  {id:'n1-g-018',type:'grammar',level:'n1',question:'彼は弁護士___をもって、依頼者の権利を守った。',options:['A. としての使命','B. のため','C. として','D. によって'],answer:'A',explanation:'〜をもって = with, by means of. With his mission as a lawyer, he protected his client\'s rights.'},
  {id:'n1-g-019',type:'grammar',level:'n1',question:'技術革新は、社会に恩恵を___とともに、新たな問題も生む。',options:['A. もたらす','B. もたらした','C. もたらして','D. もたらそう'],answer:'A',explanation:'〜とともに = while doing, at the same time as. While bringing benefits, technological innovation also creates new problems.'},
  {id:'n1-g-020',type:'grammar',level:'n1',question:'言語を学ぶことは、新しい世界観を身につけること___。',options:['A. にほかならない','B. にすぎない','C. ではない','D. に過ぎる'],answer:'A',explanation:'〜にほかならない = is nothing other than, is precisely. Learning a language is precisely gaining a new worldview.'},

  // ══════════════════════════════════════════════════════════════
  //  N1 — VOCABULARY
  // ══════════════════════════════════════════════════════════════

  {id:'n1-v-001',type:'vocabulary',level:'n1',question:'「矛盾」の意味はどれですか。',options:['A. 対立','B. 矛盾・つじつまが合わないこと','C. 問題','D. 複雑さ'],answer:'B',explanation:'矛盾 means contradiction or inconsistency.'},
  {id:'n1-v-002',type:'vocabulary',level:'n1',question:'「洞察」の意味はどれですか。',options:['A. 調査','B. 発見','C. 洞察・深い理解','D. 知識'],answer:'C',explanation:'洞察 means insight or deep discernment.'},
  {id:'n1-v-003',type:'vocabulary',level:'n1',question:'「傲慢」の意味はどれですか。',options:['A. 傲慢・おごり高ぶり','B. 謙虚','C. 厳しい','D. 誠実'],answer:'A',explanation:'傲慢 means arrogant or haughty.'},
  {id:'n1-v-004',type:'vocabulary',level:'n1',question:'「潜在的」の意味はどれですか。',options:['A. 明らかな','B. 潜在的・表に出ていない','C. 積極的な','D. 外部的な'],answer:'B',explanation:'潜在的 means latent or potential — existing but not yet manifested.'},
  {id:'n1-v-005',type:'vocabulary',level:'n1',question:'「普遍的」の意味はどれですか。',options:['A. 部分的な','B. 特別な','C. 普遍的・すべてに当てはまる','D. 一般的な'],answer:'C',explanation:'普遍的 means universal — applying to all cases.'},
  {id:'n1-v-006',type:'vocabulary',level:'n1',question:'「欺く」の意味はどれですか。',options:['A. 欺く・だます','B. 信じる','C. 尊敬する','D. 守る'],answer:'A',explanation:'欺く means to deceive or to trick.'},
  {id:'n1-v-007',type:'vocabulary',level:'n1',question:'「崇高」の意味はどれですか。',options:['A. 崇高・高尚','B. 傲慢','C. 厳格','D. 勇敢'],answer:'A',explanation:'崇高 means sublime, lofty, or noble.'},
  {id:'n1-v-008',type:'vocabulary',level:'n1',question:'「はかない」の意味はどれですか。',options:['A. はかない・儚い・長続きしない','B. 壊れやすい','C. 弱い','D. 悲しい'],answer:'A',explanation:'はかない means fleeting, transient, or ephemeral.'},
  {id:'n1-v-009',type:'vocabulary',level:'n1',question:'「偏見」の意味はどれですか。',options:['A. 偏見・先入観','B. 公平な見方','C. 批判','D. 判断'],answer:'A',explanation:'偏見 means prejudice or bias.'},
  {id:'n1-v-010',type:'vocabulary',level:'n1',question:'「誠実」の意味はどれですか。',options:['A. 誠実・正直で真剣','B. 積極的','C. 有能','D. 謙虚'],answer:'A',explanation:'誠実 means sincere, honest, and earnest.'},
  {id:'n1-v-011',type:'vocabulary',level:'n1',question:'「ひとえに」の意味はどれですか。',options:['A. ひとえに・ただ〜だけ','B. 次第に','C. かえって','D. 全く'],answer:'A',explanation:'ひとえに means solely, entirely, or purely.'},
  {id:'n1-v-012',type:'vocabulary',level:'n1',question:'「逆説」の意味はどれですか。',options:['A. 矛盾した意見','B. 逆説・一見矛盾するが真実','C. 誤解','D. 反論'],answer:'B',explanation:'逆説 means paradox — something that seems contradictory but contains truth.'},
  {id:'n1-v-013',type:'vocabulary',level:'n1',question:'「相克」の意味はどれですか。',options:['A. 協力','B. 相克・対立と葛藤','C. 共存','D. 統合'],answer:'B',explanation:'相克 means conflict or antagonism between opposing forces.'},
  {id:'n1-v-014',type:'vocabulary',level:'n1',question:'「謙虚」の意味はどれですか。',options:['A. 謙虚・素直で控えめ','B. 傲慢','C. 単純','D. 臆病'],answer:'A',explanation:'謙虚 means humble, modest, or unassuming.'},
  {id:'n1-v-015',type:'vocabulary',level:'n1',question:'「いわば」の意味はどれですか。',options:['A. 言うならば・例えるなら','B. それゆえ','C. ところが','D. とはいえ'],answer:'A',explanation:'いわば means "so to speak" or "as it were".'},
  {id:'n1-v-016',type:'vocabulary',level:'n1',question:'「鋭い」の意味はどれですか。',options:['A. 鋭い・するどい','B. 丸い','C. 鈍い','D. 広い'],answer:'A',explanation:'鋭い means sharp, keen, or acute.'},
  {id:'n1-v-017',type:'vocabulary',level:'n1',question:'「腐敗」の意味はどれですか。',options:['A. 腐敗・道徳的な堕落','B. 変化','C. 衰退','D. 混乱'],answer:'A',explanation:'腐敗 means corruption or moral decay.'},
  {id:'n1-v-018',type:'vocabulary',level:'n1',question:'「帰属する」の意味はどれですか。',options:['A. 帰属する・属する','B. 参加する','C. 依存する','D. 影響する'],answer:'A',explanation:'帰属する means to belong to or to be attributed to.'},
  {id:'n1-v-019',type:'vocabulary',level:'n1',question:'「諦観」の意味はどれですか。',options:['A. 諦観・悟りの境地','B. 失望','C. 後悔','D. 怒り'],answer:'A',explanation:'諦観 means philosophical resignation or resigned acceptance of reality.'},
  {id:'n1-v-020',type:'vocabulary',level:'n1',question:'「漸進的」の意味はどれですか。',options:['A. 急速な','B. 漸進的・少しずつ進む','C. 後退する','D. 周期的な'],answer:'B',explanation:'漸進的 means gradual or step-by-step.'},

  // ══════════════════════════════════════════════════════════════
  //  N1 — KANJI READING
  // ══════════════════════════════════════════════════════════════

  {id:'n1-k-001',type:'kanji',level:'n1',question:'「矛盾」の読み方はどれですか。',options:['A. むじゅん','B. ぼうじゅん','C. むじょん','D. まじゅん'],answer:'A',explanation:'矛盾 = むじゅん (contradiction).'},
  {id:'n1-k-002',type:'kanji',level:'n1',question:'「傲慢」の読み方はどれですか。',options:['A. ごうまん','B. こうまん','C. ごうばん','D. がうまん'],answer:'A',explanation:'傲慢 = ごうまん (arrogant, haughty).'},
  {id:'n1-k-003',type:'kanji',level:'n1',question:'「腐敗」の読み方はどれですか。',options:['A. ふはい','B. ふはし','C. くさり','D. ふぱい'],answer:'A',explanation:'腐敗 = ふはい (corruption, decay).'},
  {id:'n1-k-004',type:'kanji',level:'n1',question:'「普遍」の読み方はどれですか。',options:['A. ふへん','B. ふべん','C. ふうへん','D. ぷへん'],answer:'A',explanation:'普遍 = ふへん (universal, universality).'},
  {id:'n1-k-005',type:'kanji',level:'n1',question:'「洞察」の読み方はどれですか。',options:['A. どうさつ','B. とうさつ','C. どさつ','D. どうざつ'],answer:'A',explanation:'洞察 = どうさつ (insight, discernment).'},
  {id:'n1-k-006',type:'kanji',level:'n1',question:'「崇高」の読み方はどれですか。',options:['A. すうこう','B. そうこう','C. たかたか','D. すこう'],answer:'A',explanation:'崇高 = すうこう (sublime, lofty, noble).'},
  {id:'n1-k-007',type:'kanji',level:'n1',question:'「謙虚」の読み方はどれですか。',options:['A. けんきょ','B. けんきょう','C. きんきょ','D. けいきょ'],answer:'A',explanation:'謙虚 = けんきょ (humble, modest).'},
  {id:'n1-k-008',type:'kanji',level:'n1',question:'「偏見」の読み方はどれですか。',options:['A. へんけん','B. かたよりみ','C. へんみ','D. ふへんけん'],answer:'A',explanation:'偏見 = へんけん (prejudice, bias).'},
  {id:'n1-k-009',type:'kanji',level:'n1',question:'「逆説」の読み方はどれですか。',options:['A. ぎゃくせつ','B. さかせつ','C. ぎゃくぜつ','D. こうせつ'],answer:'A',explanation:'逆説 = ぎゃくせつ (paradox).'},
  {id:'n1-k-010',type:'kanji',level:'n1',question:'「潜在」の読み方はどれですか。',options:['A. せんざい','B. せんさい','C. もぐり','D. ひそみ'],answer:'A',explanation:'潜在 = せんざい (latent, potential).'},
  {id:'n1-k-011',type:'kanji',level:'n1',question:'「相克」の読み方はどれですか。',options:['A. そうこく','B. あいこく','C. そうかつ','D. そうけつ'],answer:'A',explanation:'相克 = そうこく (conflict, antagonism between opposing forces).'},
  {id:'n1-k-012',type:'kanji',level:'n1',question:'「帰属」の読み方はどれですか。',options:['A. きぞく','B. かえりぞく','C. きしょく','D. きそく'],answer:'A',explanation:'帰属 = きぞく (belonging to, being attributed to).'},
  {id:'n1-k-013',type:'kanji',level:'n1',question:'「脆弱」の読み方はどれですか。',options:['A. ぜいじゃく','B. きじゃく','C. ぜいよわ','D. ぜじゃく'],answer:'A',explanation:'脆弱 = ぜいじゃく (fragile, vulnerable).'},
  {id:'n1-k-014',type:'kanji',level:'n1',question:'「覇権」の読み方はどれですか。',options:['A. はけん','B. ばけん','C. はごん','D. こはけん'],answer:'A',explanation:'覇権 = はけん (hegemony, supremacy).'},
  {id:'n1-k-015',type:'kanji',level:'n1',question:'「飛躍」の読み方はどれですか。',options:['A. ひやく','B. とびやく','C. ひやっく','D. ひよく'],answer:'A',explanation:'飛躍 = ひやく (leap, rapid advance).'},

  // ══════════════════════════════════════════════════════════════
  //  N1 — READING COMPREHENSION
  // ══════════════════════════════════════════════════════════════

  {id:'n1-r-001',type:'reading',level:'n1',passage:'言語は単なるコミュニケーションの手段にとどまらず、私たちの思考そのものを形作るという見方があります。ある言語に存在する概念が他の言語には存在しないことがあり、それが文化的な認識の差を生み出すとも言われています。',question:'「言語が思考を形作る」という主張の根拠として述べられているものはどれですか。',options:['A. すべての言語は同じ概念を持つ','B. ある言語固有の概念が認識の差を生む','C. 言語は文化に影響されない','D. 翻訳で全概念が伝わる'],answer:'B',explanation:'「ある言語に存在する概念が他の言語には存在しないことがあり、それが文化的な認識の差を生み出す」が根拠として述べられています。'},
  {id:'n1-r-002',type:'reading',level:'n1',passage:'日本文化の根底には「無常」という仏教的な概念が流れています。すべてのものは移ろい消えゆくという諦観は悲観ではなく、はかなさの中にこそ美しさを見出すという独自の感性を育みました。侘び・寂びの美学もこの根底から生まれています。',question:'「無常」の概念が生み出した美意識として正しいものはどれですか。',options:['A. 永遠の美を追求する','B. 完璧さを重視する','C. はかなさの中に美しさを見出す','D. 大きさと力強さを美とする'],answer:'C',explanation:'「はかなさの中にこそ美しさを見出すという独自の感性を育みました」とあります。'},
  {id:'n1-r-003',type:'reading',level:'n1',passage:'公正の概念は哲学の歴史において中心的な主題であり続けてきました。ロールズは自分が社会のどの立場に置かれるか知らない状況で人々が選ぶ社会こそが公正だと論じました。一方、功利主義は最大多数の最大幸福を正義とみなします。',question:'ロールズの「公正」の考え方を正しく説明しているものはどれですか。',options:['A. 最大多数が幸せになる社会','B. 自分の立場を知らない状態で選ぶ社会が公正','C. 法律に従うことが公正','D. 強者が支配する社会'],answer:'B',explanation:'「自分が社会のどの立場に置かれるかを知らない状況で人々が選ぶ社会こそが公正だ」とあります。'},
  {id:'n1-r-004',type:'reading',level:'n1',passage:'科学は客観的な事実を探求するものですが、科学的な知見が社会に受け入れられるかは純粋に科学的な問題ではありません。社会的な信頼や政治的な思惑によって、科学的コンセンサスの受容が妨げられることがあります。',question:'本文が述べている「科学的知見が受け入れられない」理由はどれですか。',options:['A. 科学者が信頼できないから','B. 科学が常に間違えるから','C. 社会的信頼や政治的思惑が妨げになるから','D. 一般市民が科学を理解できないから'],answer:'C',explanation:'「社会的な信頼や政治的な思惑によってその受容が妨げられることがある」とあります。'},
  {id:'n1-r-005',type:'reading',level:'n1',passage:'近代化と伝統の相克は今日も続いており、グローバル化の波に乗る一方で伝統を守ろうとする動きとして現れています。重要なのは、近代化と伝統とは必ずしも対立するものではなく、固有の強みを保ちながら変化に適応することが文化の存続につながるという視点です。',question:'筆者が最も強調している「重要な視点」はどれですか。',options:['A. 近代化を全面的に受け入れる','B. 伝統のみを守り変化を拒む','C. 近代化と伝統は対立せず、強みを保ちながら適応することが大切','D. グローバル化は文化を破壊する'],answer:'C',explanation:'「近代化と伝統とは必ずしも対立するものではなく、固有の強みを保ちながら変化に適応することが、真の意味での文化の存続につながる」と述べています。'},
  {id:'n1-r-006',type:'reading',level:'n1',passage:'二十世紀の資本主義は経済成長を唯一の指標として追い求めてきました。しかし環境破壊や格差の拡大などの問題が深刻化するにつれ、成長に依存した経済モデルが問い直されています。GDPという単一の尺度を超えて、幸福や平等、環境の健全性を総合的に評価する指標の確立が急務となっています。',question:'本文が「急務」として述べていることはどれですか。',options:['A. GDPをさらに増やすこと','B. 幸福・平等・環境を総合的に評価する指標の確立','C. 経済成長を止めること','D. 格差をなくす法律を作ること'],answer:'B',explanation:'「幸福や平等、環境の健全性を総合的に評価する指標の確立が急務となっています」と述べられています。'},

];
