/* 北歐教育大冒險（IJ-8-5、IJS-8-5）成果網站：網頁內容
   來源：青年百億計畫/_網站素材/網站內容抽取_20261020.md（由 11 份參訪整理 docx、學生報平安.docx、
   學生成果報告書附件 12 逐日期程表、前後測分析、專欄稿_v6.md 彙整，每條均可回溯）。
   交付前檢查：[x] 破折號 0　[x] 不寫學生姓名　[x] 只寫來源有載的事　[x] 網頁文字直述，不寫「依期程表」等來源說明
   地圖座標見 _build/build_map.py；照片對應見 _build/build_photos.py */
window.NE = {
  title: "北歐教育大冒險",
  en: "Nordic Education Adventure: Finland and Estonia, Summer 2026",
  dates: "2026 年 8 月 8 日（六）～ 8 月 24 日（一）",
  roc: "民國 115 年 8 月",
  code: "IJ-8-5、IJS-8-5",
  guide: "教育部青年發展署　青年百億海外圓夢基金計畫　海外翱翔組",
  host: "國立臺灣師範大學教育研究與創新中心、滔滔學教育學社",
  memberLine: "20 位 15 歲至未滿 18 歲、以高中在學生為主的青少年，分為 5 組，每組 4 人",
  notice: "本網頁為計畫成果紀錄，照片中多為未滿 18 歲的參與學生，內容專供教育部青年發展署、計畫團隊與參與學生及其家長作為成果交流與內部參考使用。未經授權，請勿公開播送或散布於任何公開網路平台。",

  /* 五組學生的組成（只寫統計，不列姓名） */
  group: {
    total: 20, teams: 5, perTeam: 4,
    gender: "女 17 位、男 3 位",
    grade: "高三 10 位、高一 5 位、大學 3 位、國三 1 位、高二 1 位",
    note: "分組方式：7 月 22 日行前培訓時，學生先各自寫下想問兩國的問題，再依問題相近程度重新組成探究小組。"
  },

  /* 17 天：country 決定顏色帶；unitsNote 為當天沒有參訪整理檔的行程 */
  days: [
    { n: 1, date: "8/8", wd: "六", color: "#8A8F98", loc: "臺灣　土耳其", theme: "啟程",
      summary: "自桃園國際機場起飛，經土耳其伊斯坦堡轉機，並在轉機空檔走訪城市。" },
    { n: 2, date: "8/9", wd: "日", color: "#8A8F98", loc: "芬蘭赫爾辛基", theme: "抵達赫爾辛基",
      summary: "自伊斯坦堡機場搭機抵達芬蘭，入住赫爾辛基的旅館，進行參訪前準備。" },
    { n: 3, date: "8/10", wd: "一", color: "#2F6DB5", loc: "赫爾辛基", theme: "國家政策與師資培育",
      summary: "從政策端開始：先聽芬蘭國家教育署說明國家教育制度，再到赫爾辛基大學的師培論壇，了解研究本位的師資培育。" },
    { n: 4, date: "8/11", wd: "二", color: "#2F6DB5", loc: "坦佩雷", theme: "北上坦佩雷",
      summary: "前往坦佩雷，參訪姆明博物館與坦佩雷大學。從社會情緒學習的角度參觀校園；當天另有自由活動，學生自行規劃路線、搭乘大眾運輸並向當地人問路。", links: [["姆明博物館", "https://www.muumimuseo.fi/en/"], ["坦佩雷大學", "https://www.tuni.fi/en"]] },
    { n: 5, date: "8/12", wd: "三", color: "#2F6DB5", loc: "赫爾辛基　埃斯波", theme: "設計與社會創新",
      summary: "參訪阿爾托大學與其設計工廠，看學生討論、製作原型與執行專案的空間，並走訪校園。", links: [["阿爾托大學", "https://www.aalto.fi/en"], ["阿爾托設計工廠", "https://designfactory.aalto.fi"]] },
    { n: 6, date: "8/13", wd: "四", color: "#0E8C7E", loc: "赫爾辛基", theme: "新創生態與教育創新",
      summary: "上午搭電車到 Maria 01 聽創業分享並導覽園區；之後到頌歌中央圖書館（Oodi）參加 HundrED 的創意工作坊。", links: [["頌歌中央圖書館 Oodi", "https://oodihelsinki.fi/en/"]] },
    { n: 7, date: "8/14", wd: "五", color: "#0E8C7E", loc: "赫爾辛基", theme: "走進芬蘭的課堂",
      summary: "上午到雷蘇綜合學校入班觀課，中午在校內用餐；下午走訪 Heureka 芬蘭科學中心。", links: [["Heureka 芬蘭科學中心", "https://www.heureka.fi/en"]] },
    { n: 8, date: "8/15", wd: "六", color: "#8A8F98", loc: "赫爾辛基", theme: "美術館與自由行",
      summary: "上午參觀 Amos Rex 美術館，看空間設計與策展；下午自由行，學生分別前往芬蘭堡等地。", links: [["Amos Rex 美術館", "https://amosrex.fi/en/"]] },
    { n: 9, date: "8/16", wd: "日", color: "#8A8F98", loc: "赫爾辛基　塔林", theme: "渡輪過芬蘭灣",
      summary: "上午參觀赫爾辛基城市博物館，認識芬蘭的歷史與文化脈絡；當日自赫爾辛基碼頭搭渡輪抵達塔林。", links: [["赫爾辛基城市博物館", "https://www.helsinginkaupunginmuseo.fi/en/"]] },
    { n: 10, date: "8/17", wd: "一", color: "#7356B0", loc: "塔林", theme: "數位國家與智慧城市",
      summary: "到 e-Estonia Showroom 了解愛沙尼亞如何成為數位國家，並走訪 Ülemiste 智慧城市，認識座落其中的愛沙尼亞創業應用大學。" },
    { n: 11, date: "8/18", wd: "二", color: "#7356B0", loc: "塔林", theme: "學生帶路的國際學校",
      summary: "上午參訪塔林國際學校，由該校學生負責解說，這是該校服務學習的案例之一；下午到 PROTO 發明工廠分組解任務，體驗 VR 與 4D 設施。", links: [["PROTO 發明工廠", "https://www.prototehas.ee/en"]] },
    { n: 12, date: "8/19", wd: "三", color: "#C2416B", loc: "塔林", theme: "心理健康與城市教育治理",
      summary: "上午到 Peaasjad 認識心理健康教育與社會情緒學習；下午在塔林德語中學與塔林市政府教育局交流，並參觀這所一到十二年級的跨齡校園。" },
    { n: 13, date: "8/20", wd: "四", color: "#8A8F98", loc: "塔林　Põhja-Kõrvemaa", theme: "自然與歷史",
      summary: "到 Põhja-Kõrvemaa 自然保護區騎行，並參觀 Vabamu 自由與佔領博物館，了解愛沙尼亞的歷史與文化脈絡。", links: [["Vabamu 自由與佔領博物館", "https://vabamu.ee/en"]] },
    { n: 14, date: "8/21", wd: "五", color: "#C2416B", loc: "塔林", theme: "AI 時代還需要老師嗎",
      summary: "到塔林大學聽「愛沙尼亞 AI 教育課題」講座。當天學生另自主參訪 Telliskivi 創意城，並在校內的公共討論空間進行約一個半小時的學習歷程回顧。" },
    { n: 15, date: "8/22", wd: "六", color: "#8A8F98", loc: "塔林　赫爾辛基", theme: "渡輪返回芬蘭",
      summary: "舊城區自由行與城市觀光，當日自塔林碼頭搭渡輪返回赫爾辛基。" },
    { n: 16, date: "8/23", wd: "日", color: "#8A8F98", loc: "赫爾辛基　伊斯坦堡", theme: "踏上歸途",
      summary: "赫爾辛基自由行與城市觀光，自赫爾辛基機場搭機抵達伊斯坦堡轉機。" },
    { n: 17, date: "8/24", wd: "一", color: "#8A8F98", loc: "臺灣", theme: "平安返抵",
      summary: "經伊斯坦堡轉機，平安抵達桃園國際機場，完成這趟圓夢之旅。" }
  ],

  /* 地圖上的站點；座標在 assets/map.js，由 _build/build_map.py 產生 */
  places: {
    "hel-air": { short: "赫爾辛基萬塔機場", icon: "✈", dir: "r" },
    tampere:   { short: "坦佩雷：姆明博物館・坦佩雷大學", icon: "🧳", dir: "l" },
    edufi:     { short: "芬蘭國家教育署", icon: "🏛", dir: "r" },
    uhel:      { short: "赫爾辛基大學", icon: "🎓", dir: "r" },
    aalto:     { short: "阿爾托大學・設計工廠", icon: "🛠", dir: "l" },
    maria:     { short: "Maria 01", icon: "🚀", dir: "l" },
    oodi:      { short: "頌歌中央圖書館（HundrED）", icon: "📚", dir: "l" },
    ressu:     { short: "雷蘇綜合學校", icon: "🏫", dir: "b" },
    "port-h":  { short: "赫爾辛基西港", icon: "⚓", dir: "b" },
    "port-t":  { short: "塔林港", icon: "⚓", dir: "t" },
    eest:      { short: "e-Estonia Showroom", icon: "💻", dir: "b" },
    euas:      { short: "愛沙尼亞創業應用大學", icon: "🎓", dir: "r" },
    ist:       { short: "塔林國際學校", icon: "🏫", dir: "b" },
    peaasi:    { short: "Peaasjad", icon: "💚", dir: "l" },
    tlnedu:    { short: "塔林市政府教育局", icon: "🏛", dir: "l" },
    tlu:       { short: "塔林大學", icon: "🎓", dir: "t" },
    heureka:   { short: "Heureka 科學中心", icon: "🔬", dir: "r" },
    amosrex:   { short: "Amos Rex 美術館", icon: "🎨", dir: "l" },
    citymus:   { short: "赫爾辛基城市博物館", icon: "🏛", dir: "r" },
    proto:     { short: "PROTO 發明工廠", icon: "💡", dir: "t" },
    korvemaa:  { short: "Põhja-Kõrvemaa 自然保護區", icon: "🚲", dir: "l" },
    vabamu:    { short: "Vabamu 博物館", icon: "🏛", dir: "b" }
  },

  /* 路線：mode 為抵達該站所用的交通工具（plane 飛機、bus 巴士、ferry 渡輪） */
  route: [
    { place: "hel-air", day: 2, mode: "plane", label: "抵達赫爾辛基萬塔機場" },
    { place: "edufi", day: 3, mode: "bus", unit: "edufi" },
    { place: "uhel", day: 3, mode: "bus", unit: "uhel" },
    { place: "tampere", day: 4, mode: "bus", label: "坦佩雷：姆明博物館、坦佩雷大學" },
    { place: "aalto", day: 5, mode: "bus", label: "阿爾托大學與設計工廠" },
    { place: "maria", day: 6, mode: "bus", unit: "maria" },
    { place: "oodi", day: 6, mode: "bus", unit: "hundred" },
    { place: "ressu", day: 7, mode: "bus", unit: "ressu" },
    { place: "heureka", day: 7, mode: "bus", label: "Heureka 芬蘭科學中心" },
    { place: "amosrex", day: 8, mode: "bus", label: "Amos Rex 美術館" },
    { place: "citymus", day: 9, mode: "bus", label: "赫爾辛基城市博物館" },
    { place: "port-h", day: 9, mode: "bus", label: "赫爾辛基西港：搭渡輪前往塔林" },
    { place: "port-t", day: 9, mode: "ferry", label: "抵達塔林港" },
    { place: "eest", day: 10, mode: "bus", unit: "eest" },
    { place: "euas", day: 10, mode: "bus", unit: "euas" },
    { place: "ist", day: 11, mode: "bus", unit: "ist" },
    { place: "proto", day: 11, mode: "bus", label: "PROTO 發明工廠" },
    { place: "peaasi", day: 12, mode: "bus", unit: "peaasi" },
    { place: "tlnedu", day: 12, mode: "bus", unit: "tlnedu" },
    { place: "korvemaa", day: 13, mode: "bus", label: "Põhja-Kõrvemaa 自然保護區騎行" },
    { place: "vabamu", day: 13, mode: "bus", label: "Vabamu 自由與佔領博物館" },
    { place: "tlu", day: 14, mode: "bus", unit: "tlu" },
    { place: "port-t", day: 15, mode: "bus", label: "塔林港：搭渡輪返回赫爾辛基" },
    { place: "port-h", day: 15, mode: "ferry", label: "返抵赫爾辛基西港" },
    { place: "hel-air", day: 16, mode: "bus", label: "赫爾辛基萬塔機場：搭機返臺" }
  ],

  units: {
    edufi: {
      short: "芬蘭國家教育署", day: 3, place: "edufi",
      zh: "芬蘭國家教育署", en: "Finnish National Agency for Education（EDUFI, Opetushallitus）",
      type: "國家政策", city: "赫爾辛基", url: "https://www.oph.fi/en",
      speaker: "Ida Immonen（國際合作部顧問，英語學科教師出身，曾任中小學課堂教師）",
      pos: "統籌全國核心課綱與教育發展目標的國家層級主管機關，從政策端說明芬蘭教育為何以公平與信任為底。",
      points: [
        "人人有免費基礎教育權，離家最近的學校就是最好的學校。",
        "1990 年代末廢除督學制度，以訓練有素的教師加上信任取代查核。",
        "全國唯一的標準化測驗是大學入學資格考，學校不排名。",
        "師培錄取率約一成，須完成五年制碩士，教師不需上繳教案。",
        "簡報用語「少即是多」，低年級一天上課大約四到五小時。"
      ]
    },
    uhel: {
      short: "赫爾辛基大學師培論壇", day: 3, place: "uhel",
      venue: "學習中心 Minerva",
      zh: "赫爾辛基大學教育科學院　師培論壇", en: "University of Helsinki, Faculty of Educational Sciences｜Teacher Education Forum",
      type: "師資培育", city: "赫爾辛基", url: "https://www.helsinki.fi/en/networks/teacher-education-forum",
      speaker: "Katri Kleemola（學術協調人，博士）、Tiina Lindfors（學術協調人）、Auli Toom（論壇主席，教授）",
      pos: "串連全國師培機構與教師工會的全國性協作平臺，呈現芬蘭研究本位師資培育的運作方式。",
      points: [
        "研究本位貫穿課程、內容與學習，學士與碩士論文都是實證研究。",
        "師資原則上為碩士層級，一般教學資格需 60 ECTS 的教育學研究。",
        "成員含 10 所研究型大學、5 所應用科技大學與多個工會，2016 年起運作。",
        "全國沒有單一師培課綱，改以一年數次的固定聚會對齊目標。",
        "講者坦承缺口：沒有師培專屬的共同品質保證框架。"
      ]
    },
    maria: {
      short: "Maria 01 新創園區", day: 6, time: "上午", place: "maria",
      zh: "Maria 01 新創園區", en: "Maria 01 Startup Campus",
      type: "創新園區", city: "赫爾辛基", url: "https://maria.io",
      speaker: "Milo Mutka（Ecosystem Facilitator）、Oli Elton（投資經理）",
      pos: "由舊醫院改建的北歐最大新創聚落，以社群與資源互助加速新創孵化。",
      points: [
        "2016 年由舊醫院改建，非營利，主要收入來自會員費。",
        "2025 年在館 230 家新創，社群 2,000 人，一年辦 395 場活動。",
        "四個價值是社群為本、創辦人優先、影響力驅動、全球企圖心。",
        "失敗可以，講者兩年前創業沒有成功，仍從中學到很多。",
        "免學費、學生補助與創業補助，讓年輕人幾乎沒有什麼好失去。"
      ]
    },
    hundred: {
      short: "HundrED", day: 6, time: "接在 Maria 01 之後", place: "oodi",
      venue: "頌歌中央圖書館 Oodi",
      zh: "HundrED 教育創新工作坊", en: "HundrED",
      type: "教育創新 NGO", city: "赫爾辛基", url: "https://hundred.org/en",
      speaker: "Meghan Hammond（專案負責人）、Mariah Voutilainen（研究，曾任教師）",
      pos: "發掘、驗證並支持全球 K12 教育創新的社群型組織，每年選出百大創新。",
      points: [
        "創新的定義很平實，就是一個行得通的點子，任何人都能是創新者。",
        "累計 6,000 多件創新、180 多國，1,600 多位來自 110 多國的大使。",
        "兩把尺是影響力與可規模化，影響力要求在脈絡中實施滿一年。",
        "本年度由 239 位專家做 3,589 次評審，從約 800 件選出 100 個。",
        "規模化的障礙不只是錢，還有創新者放手與信任的難題。"
      ]
    },
    ressu: {
      short: "雷蘇綜合學校", day: 7, time: "上午", place: "ressu",
      zh: "雷蘇綜合學校", en: "Ressu Comprehensive School（Ressun peruskoulu）",
      type: "中小學現場", city: "赫爾辛基", url: "https://www.hel.fi/fi/kasvatus-ja-koulutus/ressun-peruskoulu",
      speaker: "學校導覽教師與數學教師",
      pos: "公立免費的雙語綜合學校，是芬蘭「平等與就近入學」在課堂裡的實景。",
      points: [
        "午餐、課本、教材、電腦全部免費，學校不能向家庭收任何費用。",
        "一半學生以芬蘭語學習，一半以英語，英語軌需通過語言測試。",
        "現象為本學習由不同科目共同研究一個現象，通常橫跨一到兩週。",
        "特殊需求學生留在住家附近的學校，全校沒有小型特教班。",
        "數學題組分四級由學生自設目標，課本附答案供自行訂正。"
      ]
    },
    eest: {
      short: "e-Estonia Showroom", day: 10, place: "eest",
      zh: "e-Estonia Showroom", en: "Ülemiste City, Tallinn",
      type: "數位治理", city: "塔林", url: "https://e-estonia.com",
      speaker: "e-Estonia Showroom 導覽講者",
      pos: "愛沙尼亞對外說明數位國家如何從教育起步、又如何走到 AI 政策的官方窗口。",
      points: [
        "蘇聯占領四十多年，1991 年後幾乎從零重建國家服務。",
        "第一個大型計畫，讓全國每一所學校都有電腦教室與網路。",
        "全部服務可線上辦理，報稅約 3 分鐘，99.6% 的銀行交易在線上。",
        "資料由公民掌控，查學歷或看病歷都要先經本人同意。",
        "AI Leap 的客製 AI 拒絕代寫，改成陪學生腦力激盪。"
      ]
    },
    euas: {
      short: "愛沙尼亞創業應用大學", day: 10, place: "euas",
      venue: "Ülemiste 智慧城市",
      zh: "愛沙尼亞創業應用大學", en: "Estonian Entrepreneurship University of Applied Sciences（EUAS）",
      type: "高等教育", city: "塔林", url: "https://euas.eu",
      speaker: "校方國際處講者（姓名未載）、遊戲設計系負責人 Andres",
      pos: "長在智慧城市裡的私立創業型大學，以兩次實習與國際流動把產業帶進課程。",
      points: [
        "1992 年創立，是愛沙尼亞最大的私立大學，約 1,100 名在學生。",
        "所在的智慧城市有約 400 家公司、1.8 萬名人才、73 國國籍。",
        "每個學程含兩次實習，三年內的國際移動可超過 12 個月。",
        "教學法先傳統後 AI，第一年視覺要手繪，3D 從 Blender 做起。",
        "誠實點出能長期存活的獨立遊戲約僅一成，手機市場約 1%。"
      ]
    },
    ist: {
      short: "塔林國際學校", day: 11, time: "上午", place: "ist",
      zh: "塔林國際學校", en: "International School of Tallinn（IST）",
      type: "中小學現場", city: "塔林", url: "https://ist.ee",
      speaker: "由該校十二年級在校學生負責解說",
      pos: "由在校學生自己介紹學校的國際文憑學校，強調獨立學習與學生的幸福感。",
      points: [
        "2016 年創立，約 360 人、超過 50 國，師生比約 1 比 8。",
        "有自由節可以自習，學生說把一切握在自己手裡。",
        "AI 的立場是為了學習不是為了作弊，作業會偵測 AI 與抄襲比例。",
        "探究循環是提問、探索、創造、反思、分享。",
        "坦承挑戰：部分老師不熟國際文憑，選擇送師培而不是換人。"
      ]
    },
    peaasi: {
      short: "Peaasjad", day: 12, time: "上午", place: "peaasi",
      zh: "Peaasjad 心理健康非營利組織", en: "MTÜ Peaasjad（NGO HeadMatters）",
      type: "心理健康 NGO", city: "塔林", url: "https://peaasi.ee",
      speaker: "Laura Ombler（同時帶領 Let's Talk about Children 教師培訓）",
      pos: "把心理健康從治療前移到預防與早期介入的愛沙尼亞非營利組織。",
      points: [
        "2009 年創立，核心團隊 17 人，含培訓師與志工共約 111 人。",
        "年輕人約四成自陳長期壓力、焦慮或憂鬱，看心理師要等 2 至 6 個月。",
        "心理健康維他命五種是關係、睡眠、飲食、身體活動、愉悅情緒。",
        "心理健康急救培訓 8 至 10 小時，每位受訓者半年內平均支持三人。",
        "青少年簡短介入九個模組，憂鬱臨床閾值以上由 79% 降到 32%。"
      ]
    },
    tlnedu: {
      short: "塔林市政府教育局", day: 12, time: "下午", place: "tlnedu",
      venue: "塔林德語中學（Tallinna Saksa Gümnaasium）",
      zh: "塔林市政府教育局", en: "City of Tallinn Education Department（Tallinna Haridusamet）",
      type: "地方教育行政", city: "塔林", url: "https://www.tallinn.ee/en/haridus/tallinn-education-department",
      speaker: "塔林市政府教育局官員與高級教育專員",
      pos: "在國家課綱之上給學校高度自主的城市教育主管機關，對 AI 採取不禁止而要學會用的立場。",
      points: [
        "校長可自行聘用或解聘校內教職員，學校自選教材與軟體。",
        "基礎教育學生免費餐食與交通，並提供多種課後與興趣教育。",
        "明白表示「我們不禁止 AI」，客製 AI 不直接給學生答案。",
        "一年前約 46% 受訪教師還沒用 AI，高中生已有 90% 在用。",
        "辨識 AI 濫用靠師生關係與課堂寫作，不用 AI 檢測軟體。"
      ]
    },
    tlu: {
      short: "塔林大學", day: 14, place: "tlu",
      venue: "校內 Edspace 教室",
      zh: "塔林大學", en: "Tallinn University（Tallinna Ülikool）",
      type: "高等教育", city: "塔林", url: "https://www.tlu.ee/en",
      speaker: "塔林大學 Janika 教授",
      pos: "以「AI 時代我們還需要老師嗎」為題，從大學課堂現場檢驗國家 AI 政策的落差。",
      points: [
        "核心提問是老師若只照投影片念，和 AI 虛擬主播有什麼差別。",
        "評量對策含 AI 揭露聲明、課末紙筆測驗、長專案與口頭檢核。",
        "研究顯示 300 人課程的 AI 自動回饋只有約 57% 覺得有幫助。",
        "歐洲計畫顯示學生的 AI 能力幾乎全面高於老師，相當危險。",
        "AI Leap 帳號幾乎全數建立，但實際啟用約 63%。"
      ]
    }
  },

  /* 每日照片：只寫照片看得到的內容，不寫學生姓名 */
  photos: {
    3: [
      { f: "edufi-1", c: "學生在芬蘭國家教育署的會議室合影，手持計畫布條" },
      { f: "forum-1", c: "赫爾辛基大學校園外，紅磚建築前的合影" },
      { f: "forum-2", c: "師培論壇的討論教室，綠色地毯與可移動座椅" },
      { f: "walk-1", c: "前往下一站途中，在赫爾辛基大學聆聽師長說明" },
      { f: "tram-1", c: "在電車站候車，準備前往下一個參訪地點" },
      { f: "forum-3", c: "師培論壇的簡報與分組座位" },
      { f: "metro-1", c: "在赫爾辛基地鐵月台合影" }
    ],
    5: [
      { f: "adf-1", c: "阿爾托大學設計工廠「A!」建築前的大合照" },
      { f: "adf-2", c: "設計工廠內，導覽人員向學生說明工作區" },
      { f: "adf-3", c: "設計工廠的工具牆與工作檯" },
      { f: "adf-4", c: "設計工廠的開放式原型製作空間" },
      { f: "aalto-1", c: "阿爾托大學「A!」招牌前的合影" },
      { f: "aalto-4", c: "走進阿爾托大學的階梯講堂" }
    ],
    6: [
      { f: "maria-1", c: "Maria 01 講座：簡報寫著園區把最亮的點子聚在同一個屋簷下" },
      { f: "maria-3", c: "講者在寫著 IMPACT DRIVEN 的簡報前說明" },
      { f: "hundred-1", c: "HundrED 創意工作坊，學生分組圍坐討論" },
      { f: "hundred-2", c: "工作坊進行中，學生在地板與座位上討論" },
      { f: "hundred-4", c: "工作坊簡報列出提案要涵蓋的項目" },
      { f: "hundred-3", c: "工作坊結束後的大合照" },
      { f: "maria-4", c: "Maria 01 園區招牌前的大合照" }
    ],
    10: [
      { f: "eest-1", c: "e-Estonia Showroom，學生手持計畫布條合影" },
      { f: "euas-1", c: "講者在螢幕前說明，旁邊立著愛沙尼亞國旗" },
      { f: "euas-2", c: "愛沙尼亞創業應用大學的合影" }
    ],
    11: [
      { f: "ist-1", c: "塔林國際學校的體育館，學生圍坐進行活動" },
      { f: "ist-2", c: "塔林國際學校的合影" },
      { f: "proto-1", c: "PROTO 發明工廠門口的合影" }
    ],
    12: [
      { f: "peaasi-1", c: "講者以簡報說明心理健康主題" },
      { f: "peaasi-3", c: "Peaasjad 參訪後的合影" },
      { f: "tlnedu-1", c: "學生在明亮的空間圍坐，與當地人員交流" }
    ],
    14: [
      { f: "tlu-1", c: "塔林大學 TALLINNA ÜLIKOOL 標誌前的合影" }
    ],
    1: [
      { f: "dep-1", c: "桃園國際機場出境大廳，啟程前手持計畫布條合影" }
    ],
    2: [
      { f: "arr-1", c: "抵達赫爾辛基萬塔機場，在入境大廳合影" }
    ],
    4: [
      { f: "tampere-1", c: "在坦佩雷的戶外大合照" },
      { f: "tampere-2", c: "在坦佩雷街頭的合影" }
    ],
    7: [
      { f: "ressu-1", c: "雷蘇綜合學校校舍前的大合照" },
      { f: "ressu-2", c: "學生在明亮的餐廳圍桌，與當地師長座談" },
      { f: "heureka-1", c: "Heureka 芬蘭科學中心前的合影" },
      { f: "heureka-2", c: "科學中心內的互動展品" }
    ],
    8: [
      { f: "amos-1", c: "Amos Rex 美術館圓點天花板下的展間" },
      { f: "amos-2", c: "展場中的現場舞蹈表演" },
      { f: "amos-3", c: "以電子零件組成的裝置作品" }
    ],
    9: [
      { f: "ferry-1", c: "赫爾辛基港航廈，搭渡輪前往塔林前的合影" }
    ],
    13: [
      { f: "bike-1", c: "在 Põhja-Kõrvemaa 自然保護區的林道騎行" },
      { f: "bike-2", c: "騎行途中在濕地觀景台合影" }
    ],
    17: [
      { f: "ret-1", c: "平安返抵桃園國際機場，全團手持計畫布條合影" }
    ]
  },

  /* 執行摘要：數字與對照均來自抽取檔，分組名稱為整理者所擬 */
  summary: {
    benefits: [
      { b: "17 天", t: "8/8 至 8/24" },
      { b: "2 國", t: "芬蘭、愛沙尼亞" },
      { b: "11 場", t: "機構參訪與講座" },
      { b: "20 位", t: "高中生，分 5 組" }
    ],
    compare: [
      { a: "北歐", b: "管控被信任取代：芬蘭廢除督學、教師不上繳教案，愛沙尼亞讓校長自己聘人、學校自選教材。",
        t: "臺灣", d: "學生在報告中反覆指出，這份自主的前提是碩士級師培與社會互信，不是把制度直接搬回來。" },
      { a: "北歐", b: "兩國都不禁用 AI，而要求學生留下思考的過程，也坦承教師能力落在學生後面。",
        t: "臺灣", d: "學生把觀察轉成自己的使用規則：先自行思考，再請 AI 整理，並保留草稿與修改過程。" },
      { a: "北歐", b: "幾乎每一場講者都主動說出自己做不到的部分，包括學習成果下滑與等待心理師的時間。",
        t: "臺灣", d: "學生因此不再把兩國當成標準答案，改問這項做法原本想解決什麼問題。" }
    ],
    directions: [
      { icon: "🧭", t: "先問為什麼，再談借鏡", d: "把「可以帶回什麼」換成「它原本想解決什麼問題、在當地為什麼成立」。", lessons: [0, 1] },
      { icon: "🪞", t: "看見自由的條件與代價", d: "自由要配上專業信任，也要面對自由不等於自動自主的落差。", lessons: [2, 3] },
      { icon: "🗣", t: "把疑問說出口", d: "心理健康與開口提問都需要環境，敢開口比說得完美重要。", lessons: [4, 5] }
    ]
  },

  themes: [
    { icon: "🤝", t: "信任撐起專業自主",
      d: "管控被信任取代，教師與學校因此有空間自己決定怎麼做。這份自主不是放任，背後有碩士級師培、公民對資料的掌控權，以及一再被講者提起的社會互信。",
      units: ["edufi", "uhel", "ressu", "tlnedu", "eest", "ist"] },
    { icon: "🤖", t: "AI 不禁止，而是學會怎麼用",
      d: "兩國的共同立場是不禁用 AI，但要求學生留下思考的過程。講者也誠實指出副作用：教師能力落在學生後面，評量的信任被侵蝕，免費授權到期後怎麼辦還沒有答案。",
      units: ["eest", "tlnedu", "tlu", "ist", "euas", "edufi"] },
    { icon: "🪟", t: "誠實面對限制與缺口",
      d: "幾乎每一場講者都主動說出自己做不到的部分。芬蘭國家教育署說「這不是天堂」，赫爾辛基大學承認沒有師培專屬的品質保證框架，Peaasjad 說看心理師要等 2 到 6 個月。",
      units: ["edufi", "uhel", "tlnedu", "tlu", "ist", "peaasi", "maria"] },
    { icon: "🌱", t: "容錯文化與創業精神",
      d: "失敗被當成資料而不是污點。Maria 01 的講者談自己創業失敗仍有收穫，塔林教育局用「快速失敗」形容自己的心態，學校端則刻意把環境做到安全得可以嘗試。",
      units: ["maria", "hundred", "euas", "eest", "ressu", "tlnedu", "ist"] }
  ],

  lessons: [
    { t: "從找標準答案，變成問制度為何在當地成立",
      d: "19 份成果報告中至少 17 位學生明確寫到，不再把芬蘭或愛沙尼亞當成標準答案。一位學生把最大的改變描述為，從尋找哪個國家的教育比較好，轉成理解為什麼不同國家會發展出不同的教育。" },
    { t: "自由要配上條件，信任是它的前提",
      d: "至少 8 位學生把芬蘭教師的教學自主，連回研究本位的碩士級師培與社會對專業的信任。一位學生寫道，芬蘭教師的自由並非憑空而降，而是源自社會對其專業的高度信任。" },
    { t: "自由不等於自動自主",
      d: "至少 13 位學生在課堂現場看到自律落差與只有一個人在做事的小組。一位學生寫下，自由並不會自動使每一位學生變得自主或學會自律；也有學生追問，制度努力確保所有人跟上時，是否忽略了已經走在前面的人。" },
    { t: "科技的重點是什麼時候用與怎麼用",
      d: "至少 12 位學生以獨立章節處理 AI 與數位教育，結論落在工具而不是主角。一位學生寫道，科技不一定要大量出現在每一堂課才代表教育進步，更重要的是知道什麼時候需要使用，以及如何使用。" },
    { t: "心理健康是預防工作，不是事後處理",
      d: "至少 10 位學生以獨立章節處理心理健康與社會情緒學習。一位學生寫道，這是自己第一次比較明確地把心理健康看成教育制度中的預防工作，而不是等問題已經很嚴重後才介入。" },
    { t: "敢開口比說得完美重要",
      d: "至少 13 位學生談到跨文化溝通與同儕共學。一位學生寫道，真正重要的並不是能不能說出一口完美的英文，而是是否願意跨出第一步；另一位把收穫寫成，與其說在旅程中找到了答案，不如說找到了一群願意一起把問題想得更深的人。" }
  ],

  /* 前後測：N＝20、28 題五點量表，數字照錄自前後測分析，不重算 */
  prepost: {
    note: "學生在出發前與返國後各填一次相同的自評問卷，五個構面、28 題、五點量表，20 位學生前後測全數完成，可逐一配對。",
    dims: [
      { t: "對兩國的了解", pre: 3.83, post: 4.36, up: 16, same: 3, down: 1 },
      { t: "英文溝通", pre: 4.28, post: 4.28, up: 6, same: 7, down: 7 },
      { t: "陌生環境參與", pre: 4.63, post: 4.63, up: 8, same: 6, down: 6 },
      { t: "團隊合作", pre: 4.75, post: 4.74, up: 4, same: 10, down: 6 },
      { t: "探究心態", pre: 4.70, post: 4.69, up: 5, same: 9, down: 6 },
      { t: "整體（28 題平均）", pre: 4.42, post: 4.53, up: 15, same: 1, down: 4 }
    ],
    ups: [
      { t: "我了解愛沙尼亞教育制度的主要特色", pre: 3.45, post: 4.40 },
      { t: "我知道愛沙尼亞的自然環境、歷史或社會背景如何影響文化與教育", pre: 3.25, post: 4.15 },
      { t: "我了解芬蘭教育制度的主要特色", pre: 3.85, post: 4.55 }
    ],
    downs: [
      { t: "就算英文不完美，我仍願意開口交談", pre: 4.65, post: 4.40 },
      { t: "對於芬蘭和愛沙尼亞，我有具體、想要深入探究的問題", pre: 4.50, post: 4.25 },
      { t: "我願意主動和不認識的當地人互動", pre: 4.75, post: 4.55 }
    ],
    limits: [
      "樣本僅 20 人且全為自評，只能呈現學生自己感受到的變化，不宜視為能力的客觀測量。",
      "四個構面在前測時已在 4.28 分以上，有天花板效應。",
      "英文與提問相關題目微降，較可能的原因是學生到了全英語的現場，才具體看見自己能力的邊界，自評因此轉為保守。"
    ]
  },

  /* 籌備到成果的時間軸 */
  timeline: [
    { p: "增能與行前培訓", d: "4/25 至 5/3", t: "圓夢助力方案成長營" },
    { p: "增能與行前培訓", d: "7/1", t: "行前線上培訓", n: "課後完成〈從國家文化到教育樣貌〉學習單" },
    { p: "增能與行前培訓", d: "7/22", t: "行前實體培訓", n: "主軸為勇氣與好奇心" },
    { p: "增能與行前培訓", d: "7/23 至 29", t: "前測評估" },
    { p: "出訪見學", d: "8/8 至 8/24", t: "芬蘭與愛沙尼亞見學", n: "17 天" },
    { p: "返國評估與成果", d: "8/27 至 9/9", t: "後測評估" },
    { p: "返國評估與成果", d: "9/21", t: "成果報告繳交" },
    { p: "返國評估與成果", d: "10/30 至 11/1", t: "成果策展" }
  ],

  /* 來源未載、需要再確認的事項，直接列在網頁上 */
  todo: [
    "8/10 兩場（芬蘭國家教育署、赫爾辛基大學師培論壇）的上下午分配。",
    "渡輪公司、船名與時刻，以及去回程的航空公司與航班號。",
    "9 個參訪單位的官方網址，以及數位講者的姓名與完整職稱。",
    "帶隊教授與計畫主持人的完整姓名與職稱。",
    "成果策展（10 月 30 日至 11 月 1 日）的地點、名稱與形式。"
  ]
};
