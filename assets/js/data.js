/*
 * Sakura Sangeet — shared content data (band members + gigs)
 * Edit this file to update the Members and Gigs pages across both languages.
 * Each entry has an "en" and "ja" version of its text fields.
 *
 * TODO (band): replace the placeholder member entries below with real
 * names/roles/bios. Everything marked isPlaceholder: true will show a
 * "placeholder" flag on the site until it's swapped out.
 */

var SITE_DATA = {
  members: [
    {
      id: "m1",
      isPlaceholder: true,
      initials: "N",
      photo: "assets/images/nainy-kaur.jpg",
      instagram: "nainysinger",
      name: { en: "Nainy Kaur", ja: "ナイニー・カウル" },
      role: { en: "Lead Vocalist", ja: "リードボーカル" },
      taste: { en: "Sufi, Bollywood classics, ghazals", ja: "スーフィー、ボリウッドの名曲、ガザル" },
      experience: { en: "10+ years performing across India and Japan", ja: "インドと日本での舞台経験10年以上" }
    },
    {
      id: "m2",
      isPlaceholder: true,
      initials: "A",
      photo: "assets/images/anshul-goswami.jpg",
      instagram: "urbonsage",
      name: { en: "Anshul Goswami", ja: "アンシュル・ゴスワミ" },
      role: { en: "Guitarist Vocalist", ja: "ギタリスト ボーカル" },
      taste: { en: "Bollywood, fusion, folk rock", ja: "ボリウッド、フュージョン、フォークロック" },
      experience: { en: "8 years, formerly with a Delhi-based live band", ja: "デリー出身のライブバンドで8年の経験" }
    },
    {
      id: "m3",
      isPlaceholder: true,
      initials: "S",
      photo: "assets/images/swarnpal-singh.jpg",
      instagram: "swee89",
      name: { en: "Swarnpal Singh", ja: "スワンパル・シン" },
      role: { en: "Tabla Player", ja: "タブラ奏者" },
      taste: { en: "Sufi qawwali, devotional rhythms", ja: "スーフィー・カッワーリー、バジャンのリズム" },
      experience: { en: "Trained classically, 12 years on stage", ja: "古典音楽を修め、舞台経験12年" }
    },
    {
      id: "m4",
      isPlaceholder: true,
      initials: "K",
      photo: "assets/images/karamveer-bishnoi.jpg",
      instagram: "karam_drums",
      name: { en: "Karamveer Bishnoi", ja: "カラムヴィール・ビシュノイ" },
      role: { en: "Drummer / Percussion", ja: "ドラム・パーカッション" },
      taste: { en: "Bollywood dance beats, world percussion", ja: "ボリウッドのダンスビート、ワールドパーカッション" },
      experience: { en: "6 years performing with bands across Tokyo", ja: "東京のバンドで6年の演奏経験" }
    }
  ],

  // Guest/collaborating musicians Sakura Sangeet has performed with (not core band members).
  // TODO (band): confirm Hanano Akeo's Instagram handle — currently left unlinked since
  // "Hanano Akeo" was given as the handle, which isn't a valid @handle format.
  collaborators: [
    {
      id: "c1",
      initials: "T",
      photo: "assets/images/takayuki-ueda.jpg",
      instagram: "rubab_japan",
      name: { en: "Takayuki Ueda", ja: "タカユキ ウエダ" }
    },
    {
      id: "c2",
      initials: "K",
      photo: "assets/images/kota-shibui.jpg",
      instagram: "danli.sitar",
      name: { en: "Kota Shibui", ja: "コウタ シブイ" }
    },
    {
      id: "c3",
      initials: "H",
      photo: "assets/images/hanano-akeo.jpg",
      instagram: null,
      name: { en: "Hanano Akeo", ja: "ハナノ アケオ" }
    },
    {
      id: "c4",
      initials: "N",
      photo: "assets/images/nathan.jpg",
      instagram: "ngc4594",
      name: { en: "Nathan Hornsby", ja: "ネイサン ホーンズビー" }
    },
    {
      id: "c5",
      initials: "A",
      photo: "assets/images/amit-chauhan.jpg",
      instagram: "_amit.c_",
      name: { en: "Amit Chauhan", ja: "アミット チャウハン" }
    },
    {
      id: "c6",
      initials: "A",
      photo: "assets/images/rajat.jpg",
      instagram: "rajat_joshi0927",
      name: { en: "Rajat Joshi", ja: "ラジャット ジョシ" }
    }
  ],

  events: [
    {
      id: "e1",
      date: "2026-02-28",
      title: { en: "Ruh-e-Punjab — A Sufi Music Night", ja: "ルーエ・パンジャブ ～魂を癒すスーフィー音楽の夜～" },
      venue: { en: "Tower Hall Funabori, Tokyo", ja: "タワーホール船堀、東京" },
      description: {
        en: "Presented with Smiles Mobile Remittance — an evening of soulful Sufi music.",
        ja: "Smiles Mobile Remittance 共催 ― 魂を癒すスーフィー音楽の夕べ。"
      },
      image: "assets/images/event-ruh-e-punjab.jpg"
    },
    {
      id: "e2",
      date: "2026-08-08",
      title: { en: "Bhajan Jamming", ja: "バジャン・ジャミング" },
      venue: { en: "Seishincho Community Hall, Tokyo", ja: "清新町コミュニティ会館、東京" },
      description: {
        en: "Presented with the Indo Nihon Cultural Committee (INCC) — devotion, music, and togetherness, for the first time ever in Japan.",
        ja: "Indo Nihon Cultural Committee（INCC）共催 ― 日本で初めての、信仰と音楽とつながりのひととき。"
      },
      image: "assets/images/event-bhajan-jamming.jpg"
    },
    {
      id: "e3",
      date: "2026-08-22",
      title: { en: "Sufi + Bollywood Night", ja: "スーフィー＋ボリウッド・ナイト" },
      venue: { en: "Bhintuna Dining, Tokyo (2 min walk from Shin-Koiwa Station)", ja: "Bhintuna Dining、東京（新小岩駅より徒歩2分）" },
      description: {
        en: "Live Sufi numbers from Sakura Sangeet plus Bollywood dance beats from DJ PindDrop. No entry fee, reservation required.",
        ja: "Sakura Sangeetによるライブ・スーフィーと、DJ PindDropによるボリウッド・ダンスビート。入場無料・要予約。"
      },
      image: "assets/images/event-sufi-bollywood-night.jpg"
    },
    {
      id: "e4",
      date: "2026-03-24",
      title: { en: "Tribute to Pankaj Tripathi — \"Kaleen Bhaiya\"", ja: "パンカジ・トリパティへのトリビュート ～「カリーン・バイヤ」～" },
      venue: { en: "Edogawa Cultural Center, Tokyo", ja: "江戸川区文化センター、東京" },
      description: {
        en: "A musical tribute performance featuring Nainy Kaur (vocals), Karamveer Bishnoi (drums), and Anshul Goswami (guitar).",
        ja: "ナイニー・カウル（ボーカル）、カラムヴィール・ビシュノイ（ドラム）、アンシュル・ゴスワミ（ギター）による音楽トリビュート公演。"
      },
      image: "assets/images/event-pankaj-tripathi-tribute.jpg"
    },
    {
      id: "e5",
      date: "2026-05-30",
      title: { en: "International Festival 2026 — International University of Japan", ja: "国際フェスティバル2026 ～国際大学（新潟）～" },
      venue: { en: "IUJ Campus, Niigata", ja: "国際大学キャンパス、新潟" },
      description: {
        en: "A cultural performance celebrating diversity and connection at the International University of Japan's annual festival.",
        ja: "国際大学の年次フェスティバルにおける、多様性とつながりを祝う文化公演。"
      },
      image: "assets/images/event-niigata-international-festival.jpg"
    },
    {
      id: "e6",
      date: "2025-12-31",
      title: { en: "New Year's Eve Live Performance", ja: "ニューイヤーズ・イブ ライブ演奏" },
      venue: { en: "Madhuram Vilas (Patria 1F), Tokyo", ja: "マドゥラム・ヴィラス（パトリア1F）、東京" },
      description: {
        en: "Live Sufi, Bollywood and Bhajan performance to ring in the New Year.",
        ja: "新年を祝うスーフィー・ボリウッド・バジャンのライブ演奏。"
      },
      image: "assets/images/event-new-year-eve-2025.jpg"
    }
  ],

  // TODO (band): confirm/replace these links.
  links: {
    youtube: "https://youtu.be/EkjawUIs3w8",
    instagram: "https://www.instagram.com/sakura_sangeet",
    email: "mailto:sakurasangeet@gmail.com"
  }
};
