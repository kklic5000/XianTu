// 仙途 by 千夜 | github.com/qianye60 | CC BY-NC-SA 4.0
import type { World, TalentTier, Origin, SpiritRoot, Talent } from '@/types';

// =======================================================================
//                           本地世界数据（武侠版）
// =======================================================================
export const LOCAL_WORLDS: Omit<World, 'source'>[] = [
  {
    id: 1,
    name: "金庸江湖",
    era: "架空融合之世：金庸十五部武俠同處一個江湖，朝廷與武林並立，外族政權環伺，門派林立、恩怨縱橫",
    description: "本世界融合金庸十五部武俠：《天龍八部》《射鵰英雄傳》《神鵰俠侶》《倚天屠龍記》《笑傲江湖》《碧血劍》《鹿鼎記》《書劍恩仇錄》《飛狐外傳》《雪山飛狐》《連城訣》《俠客行》《白馬嘯西風》《鴛鴦刀》《越女劍》。\n地理：中原嵩山洛陽、江南姑蘇嘉興太湖、華山與終南山、西南大理與峨眉、西域崑崙天山與回疆、塞外大漠與雁門關、東海桃花島與俠客島，皆在版圖之內。\n勢力：少林、武當為泰山北斗；峨眉、崑崙、華山、崆峒、青城、全真、古墓、桃花島各據一方；丐幫遍布天下、消息最靈；大理段氏、姑蘇慕容為武學世家；另有朝廷、鏢局與遼、金、蒙古、西夏、吐蕃等外族政權介入江湖。\n武功：無靈氣、無法術，一切以內力、招式、心境為本。層級分不入流、三流、二流、一流、絕頂、宗師，實力以戰績、師承、聲望認定。五絕、掃地僧、張三丰、獨孤求敗、阿青等原著頂尖人物只以傳說、遺跡、秘笈與傳承存在，不與當代人物同場。",
  },
  {
    id: 2,
    name: "宋金天下",
    era: "靖康之後，宋金對峙，蒙古崛起於漠北",
    description: "南宋偏安江南，金國虎視中原，蒙古鐵騎正在漠北崛起。江湖上全真教坐鎮終南山，丐幫弟子遍布天下，桃花島、鐵掌幫、白駝山莊各懷心思。華山論劍的餘暉未散，五絕之名仍是武人仰望的高山。這是一個家國與江湖糾纏的時代：俠之大者，為國為民；俠之小者，快意恩仇。襄陽城頭烽火將起，每個江湖人都躲不過這場天下大變。",
  },
  {
    id: 3,
    name: "明清風雲",
    era: "明末清初，朝廷、闖軍與滿清三方角力",
    description: "大明江山風雨飄搖，華山、武當、峨眉等名門正派各懷立場，日月神教與五嶽劍派明爭暗鬥，紅花會、天地會在暗處圖謀反清復明。朝廷的東廠與錦衣衛把手伸進了江湖，鏢局、鹽幫、漕幫在亂世中求存。這裡沒有絕對的正邪，只有立場與恩仇；一本秘笈、一柄神兵，都能掀起一場腥風血雨。",
  },
  {
    id: 4,
    name: "江南煙雨",
    era: "太平年月，江南富庶之地",
    description: "太湖煙波、姑蘇城牆、嘉興煙雨樓。江南是天下最富庶的地方，也是江湖消息最靈通的地方：慕容世家盤踞燕子塢，鹽商巨賈與水寨幫會明爭暗鬥，鏢局的旗幟插遍運河兩岸。這裡的江湖不尚血勇，尚的是人情、面子與算計；一幅畫、一局棋、一場詩會，背後都可能是武林勢力的角力。適合從市井小人物一步步走進江湖的人。",
  },
  {
    id: 5,
    name: "塞外大漠",
    era: "出嘉峪關向西，黃沙萬里",
    description: "大漠孤煙，駝鈴聲聲。西域之地有崑崙、天山諸派盤踞，回疆部族與中原商隊在絲路上你來我往，馬賊與鏢師是這條路上最常見的兩種人。這裡的武功帶著大漠的粗獷，恩仇也來得直接：欠債還錢，殺人償命。冰川、綠洲、古城遺跡之間，埋著前代高手的傳承，也埋著無數無名屍骨。",
  },
  {
    id: 6,
    name: "蜀道江湖",
    era: "巴蜀險地，山高水急，劍門天險",
    description: "蜀道之難，難於上青天。巴蜀之地有唐門盤踞百年，以暗器與毒術聞名天下，峨眉、青城分庭抗禮，長江水道上排幫、袍哥勢力交錯。這裡的江湖講究的是機巧與耐心：暗器無聲，毒藥無形，一招之差便是生死之別。自古巴蜀多奇人，山城霧氣裡藏著的故事，比別處更深三分。",
  },
  {
    id: 8,
    name: "東海群島",
    era: "海外孤島，波濤之間自有天地",
    description: "東海之上島嶼星羅棋布：桃花島機關遍布、黃藥師性情孤僻；俠客島十年一邀，臘八粥嚇退天下高手；冰火島遠在極北，相傳藏著屠龍刀的秘密。海商、水寇、漁幫與島主們在這片水域討生活，武功也沾了海風的飄忽。這是一個離中原最遠、規矩最不一樣的一方江湖。",
  },
];

// =======================================================================
//                           本地天资数据（武侠版）
// =======================================================================
export const LOCAL_TALENT_TIERS: Omit<TalentTier, 'source'>[] = [
  { id: 1, name: "废柴", description: "资质平平，毫无出奇之处，武路渺茫。虽有向武之心，奈何天赋所限，每一步都需付出常人百倍的努力。", total_points: 10, rarity: 1, color: "#718096" },
  { id: 2, name: "凡人", description: "芸芸众生中的一员，不好不坏，有缘可入江湖。若有大机缘，亦可成就一番事业。", total_points: 20, rarity: 2, color: "#E2E8F0" },
  { id: 3, name: "俊杰", description: "百里挑一的人才，略有不凡，在门派中可为内门弟子。悟性尚可，勤勉练功有望窥得武道门径。", total_points: 35, rarity: 3, color: "#63B3ED" },
  { id: 4, name: "天骄", description: "千年难遇的奇才，注定耀眼，是门派未来的希望。天资聪颖，练功速度远超常人，往往能越阶而战。", total_points: 50, rarity: 4, color: "#9F7AEA" },
  { id: 5, name: "妖孽", description: "万古无一的怪物，逆天而行，可与传说中的宗师比肩。打破常理的存在，命运似乎都对其格外宽容或格外严苛。", total_points: 70, rarity: 5, color: "#F6E05E" },
  { id: 6, name: "宗师转世", description: "前代宗师转世重修，根骨悟性皆非凡俗，前世武学记忆蒙尘未醒，练功一日千里。周身自带一股渊渟岳峙的气度，江湖规矩难以束缚。", total_points: 85, rarity: 6, color: "#F56565" },
  { id: 7, name: "武道之子", description: "天生与武道相合，诸般武学一学即会、一会即精，是这一世江湖的应劫之人。气运惊人，整个江湖的风浪都仿佛在为其让路。", total_points: 100, rarity: 7, color: "#ED8936" },
];

// =======================================================================
//                           本地出身数据（武侠版）
// =======================================================================
export const LOCAL_ORIGINS: Omit<Origin, 'source'>[] = [
  { id: 1, name: "山野遗孤", description: "自幼在山野中长大，与猛兽为伴，磨练出坚韧的意志和过人的体魄。", talent_cost: 0, attribute_modifiers: { root_bone: 1 }, rarity: 3 },
  { id: 2, name: "书香门第", description: "出身于官宦世家，饱读诗书，对世事至理有超乎常人的理解力。", talent_cost: 2, attribute_modifiers: { comprehension: 2 }, rarity: 3 },
  { id: 3, name: "商贾之子", description: "生于富贵之家，精通人情世故，处事圆滑，魅力非凡。", talent_cost: 2, attribute_modifiers: { charm: 2 }, rarity: 3 },
  { id: 4, name: "将门之后", description: "名将的后代，血脉中流淌着勇武与煞气，心性坚定。", talent_cost: 3, attribute_modifiers: { temperament: 2, root_bone: 1 }, rarity: 3 },
  { id: 5, name: "独行客传人", description: "你的师父是一位游戏风尘的江湖独行客，你继承了他的部分衣钵和见识。", talent_cost: 4, attribute_modifiers: { comprehension: 1, temperament: 1 }, rarity: 4 },
  { id: 6, name: "邪派卧底", description: "你出身名门正派，却被派往邪派执行卧底任务，心性远超常人。", talent_cost: 1, attribute_modifiers: { temperament: 3 }, rarity: 4 },
  { id: 7, name: "重生者", description: "你保留着前世的记忆，虽然修为尽失，但对功法和未来的大事了如指掌。", talent_cost: 5, attribute_modifiers: { comprehension: 2, luck: 1 }, rarity: 5 },
  { id: 8, name: "名宿后裔", description: "你的血脉中流淌着武林名宿的传承，天生经脉灵性十足，练功速度略快于常人。", talent_cost: 6, attribute_modifiers: { spirit: 2, root_bone: 1 }, rarity: 5 },
  { id: 9, name: "老怪传功", description: "你本是将死之人，却遇一位行将就木的江湖老怪，将毕生经验与见识倾囊相授。魂魄未换，阅历陡增。", talent_cost: 7, attribute_modifiers: { comprehension: 3, temperament: -1 }, rarity: 5 },
  { id: 10, name: "山神庙祝", description: "你从小在山神庙长大，日夜与香火为伴，心神受到滋养，对山野传说与祭祀之事有特殊感应。", talent_cost: 2, attribute_modifiers: { spirit: 2 }, rarity: 3 },
  { id: 11, name: "渔家少年", description: "常年在江河湖海中讨生活，水性极佳，体魄强健。", talent_cost: 1, attribute_modifiers: { root_bone: 2 }, rarity: 2 },
  { id: 12, name: "王朝皇子", description: "生于凡人王朝的权力之巅，自幼享受锦衣玉食和最好的教育，但与武林的接触较少。", talent_cost: 3, attribute_modifiers: { charm: 2, temperament: 1 }, rarity: 4 },
  { id: 13, name: "药童出身", description: "自幼在药房长大，日夜与药材为伴，对药理有超常的敏感。", talent_cost: 2, attribute_modifiers: { spirit: 1, comprehension: 1 }, rarity: 3 },
  { id: 14, name: "阵法学徒", description: "师从阵法大师，自小研习阵法纹路，对方位距离的感知极其敏锐。", talent_cost: 3, attribute_modifiers: { comprehension: 2, spirit: 1 }, rarity: 4 },
  { id: 15, name: "猎户世家", description: "祖上世代以狩猎猛兽为生，体魄强健，对野兽的气息与动静极其敏感。", talent_cost: 4, attribute_modifiers: { root_bone: 2, temperament: 1 }, rarity: 4 },
  { id: 16, name: "流浪乞丐", description: "自幼流落街头，饱经风霜，磨练出超凡的意志和适应能力。", talent_cost: -1, attribute_modifiers: { temperament: 2, luck: -1 }, rarity: 2 },
  { id: 17, name: "矿奴余生", description: "曾是矿洞苦工，在暗无天日的矿洞中挣扎求生，体魄强健但不通文墨。", talent_cost: 0, attribute_modifiers: { root_bone: 3, spirit: -1 }, rarity: 2 },
  { id: 18, name: "画师传人", description: "师承名家，精通丹青之道，对图谱线条有天生的理解力。", talent_cost: 3, attribute_modifiers: { comprehension: 1, charm: 2 }, rarity: 3 },
  { id: 19, name: "古墓守陵人", description: "世代守护古墓，长期与死气阴气打交道，对鬼道有独特感悟。", talent_cost: 2, attribute_modifiers: { temperament: 2, spirit: 1 }, rarity: 4 },
  { id: 20, name: "戏班伶人", description: "自幼学戏，擅长察言观色，魅力非凡，但向武之心不够坚定。", talent_cost: 1, attribute_modifiers: { charm: 3, temperament: -1 }, rarity: 2 },
  { id: 21, name: "星象世家", description: "家族世代观星测运，你自小研习星象之术，对天地规律有独特理解。", talent_cost: 5, attribute_modifiers: { comprehension: 2, luck: 2 }, rarity: 5 },
  { id: 22, name: "部落巫祝", description: "出身塞外部落，继承了巫祝的血脉，对自然之力与牲畜鸟兽有天生的亲和。", talent_cost: 4, attribute_modifiers: { spirit: 2, root_bone: 1 }, rarity: 4 },
  { id: 23, name: "孤岛遗民", description: "生于与世隔绝的孤岛，保留着上古时代原始的练武法门。", talent_cost: 3, attribute_modifiers: { temperament: 2, comprehension: 1 }, rarity: 4 },
  { id: 24, name: "亡国遗孤", description: "国破家亡，历经苦难，心性坚韧如铁，但背负着沉重的仇恨。", talent_cost: 2, attribute_modifiers: { temperament: 3, luck: -1 }, rarity: 3 },
];

// =======================================================================
//                           本地武学资质数据（原灵根，武侠版）
// =======================================================================
export const LOCAL_SPIRIT_ROOTS: Omit<SpiritRoot, 'source'>[] = [
  {
    id: 1,
    name: "锐金经脉",
    tier: "上品",
    description: "经脉如金铁般坚韧锐利，练剑、刀等兵刃武功事半功倍，出手凌厉，是天生的兵刃好手。",
    cultivation_speed: "1.6x",
    special_effects: ["兵刃威力+50%", "器物亲和+30%", "兵器感知"],
    base_multiplier: 1.6,
    talent_cost: 10,
    rarity: 3
  },
  {
    id: 2,
    name: "青木经脉",
    tier: "上品",
    description: "生机盎然，气血恢复极快，练养生、疗愈类内功事半功倍，对草药有天生的亲和力。",
    cultivation_speed: "1.6x",
    special_effects: ["气血恢复+40%", "草药亲和", "疗愈武功威力+50%"],
    base_multiplier: 1.6,
    talent_cost: 10,
    rarity: 3
  },
  {
    id: 3,
    name: "寒水经脉",
    tier: "上品",
    description: "内力绵长如流水，变化多端，练阴柔掌法与身法时适应性极强。",
    cultivation_speed: "1.6x",
    special_effects: ["内力恢复+40%", "水体感知", "阴柔武功威力+50%"],
    base_multiplier: 1.6,
    talent_cost: 10,
    rarity: 3
  },
  {
    id: 4,
    name: "烈火经脉",
    tier: "上品",
    description: "经脉如烈火奔腾，内力刚猛爆烈，练阳刚拳掌威力惊人，只是性子也容易急躁。",
    cultivation_speed: "1.6x",
    special_effects: ["阳刚武功威力+50%", "爆发力+30%", "火毒抗性"],
    base_multiplier: 1.6,
    talent_cost: 10,
    rarity: 3
  },
  {
    id: 5,
    name: "厚土经脉",
    tier: "上品",
    description: "根基沉稳如大地，内力厚重，练横练与守势武功时坚不可摧。",
    cultivation_speed: "1.6x",
    special_effects: ["防御+50%", "气血上限+30%", "下盘稳固"],
    base_multiplier: 1.6,
    talent_cost: 10,
    rarity: 3
  },
  {
    id: 9,
    name: "锋锐之脉",
    tier: "中品",
    description: "经脉天生锋锐，出招自带三分锐气，练快剑、快刀最是相得益彰。",
    cultivation_speed: "1.3x",
    special_effects: ["出手速度+30%", "兵刃威力+25%"],
    base_multiplier: 1.3,
    talent_cost: 6,
    rarity: 2
  },
  {
    id: 10,
    name: "烈阳之脉",
    tier: "中品",
    description: "内力如烈日当空，至刚至阳，练刚猛外功时进境神速。",
    cultivation_speed: "1.3x",
    special_effects: ["刚猛武功威力+40%", "内力恢复+20%"],
    base_multiplier: 1.3,
    talent_cost: 6,
    rarity: 2
  },
  {
    id: 11,
    name: "奔雷之脉",
    tier: "极品",
    description: "出手如雷霆，身法与掌力都带着一股迅疾爆烈之气。",
    cultivation_speed: "2.0x",
    special_effects: ["身法速度+40%", "掌力爆发+30%", "先手优势"],
    base_multiplier: 2,
    talent_cost: 15,
    rarity: 4
  },
  {
    id: 12,
    name: "玄冰之脉",
    tier: "极品",
    description: "内力阴寒彻骨，掌风所至如坠冰窖，练阴寒武功事半功倍。",
    cultivation_speed: "2.0x",
    special_effects: ["阴寒武功威力+50%", "寒毒抗性", "内力凝练"],
    base_multiplier: 2,
    talent_cost: 15,
    rarity: 4
  },
  {
    id: 6,
    name: "混元之体",
    tier: "神品",
    description: "经脉浑然一体，不分阴阳五行，任何武功都能练，任何内力都能容，是传说中的练武奇才。",
    cultivation_speed: "0.8x(前期) → 2.8x(后期)",
    special_effects: ["诸般武功皆可修习", "内力兼容并蓄", "练功速度大幅提升"],
    base_multiplier: 2.8,
    talent_cost: 25,
    rarity: 5
  },
  {
    id: 7,
    name: "天妒之体",
    tier: "特殊",
    description: "资质逆天却命格多舛，练功快得吓人，麻烦也来得比别人多。",
    cultivation_speed: "0.5x",
    special_effects: ["练功速度极快", "机遇与凶险并存"],
    base_multiplier: 0.5,
    talent_cost: -5,
    rarity: 4
  },
  {
    id: 8,
    name: "五行杂脉",
    tier: "凡品",
    description: "经脉五行皆有却驳杂不堪，练功慢如龟爬，武路渺茫，是凡人中最常见的资质。",
    cultivation_speed: "1.0x",
    special_effects: ["平凡之道", "大器晚成"],
    base_multiplier: 1,
    talent_cost: 0,
    rarity: 1
  },
  {
    id: 13,
    name: "疾风之脉",
    tier: "下品",
    description: "身法天赋异禀，轻功一点就透，跑起来连影子都追不上。",
    cultivation_speed: "1.1x",
    special_effects: ["轻功天赋+50%", "身法速度+30%"],
    base_multiplier: 1.1,
    talent_cost: 3,
    rarity: 1
  },
  {
    id: 14,
    name: "幽冥之脉",
    tier: "极品",
    description: "内力阴沉诡谲，适合暗器、毒功与夜行潜伏。",
    cultivation_speed: "2.0x",
    special_effects: ["暗器威力+40%", "夜行潜伏", "毒功亲和"],
    base_multiplier: 2,
    talent_cost: 15,
    rarity: 4
  },
  {
    id: 15,
    name: "昊阳之脉",
    tier: "极品",
    description: "内力堂堂正正如日之升，邪门武功难近其身。",
    cultivation_speed: "2.0x",
    special_effects: ["正派武功威力+40%", "邪功抗性", "气势压人"],
    base_multiplier: 2,
    talent_cost: 15,
    rarity: 4
  },
  {
    id: 16,
    name: "血煞之脉",
    tier: "特殊",
    description: "气血异常旺盛，越战越勇，只是这身煞气容易被江湖正派侧目。",
    cultivation_speed: "1.8x",
    special_effects: ["气血上限+40%", "越战越勇", "煞气逼人"],
    base_multiplier: 1.8,
    talent_cost: 10,
    rarity: 4
  },
  {
    id: 17,
    name: "铁骨之躯",
    tier: "特殊",
    description: "天生骨骼惊奇，横练功夫事半功倍，抗打击能力远超常人。",
    cultivation_speed: "1.7x",
    special_effects: ["横练天赋+50%", "抗打击+40%"],
    base_multiplier: 1.7,
    talent_cost: 8,
    rarity: 4
  },
  {
    id: 18,
    name: "草木之脉",
    tier: "中品",
    description: "亲和草木，辨药识草如数家珍，练木属性内功颇有进境。",
    cultivation_speed: "1.3x",
    special_effects: ["草药亲和", "气血恢复+20%", "疗愈武功威力+25%"],
    base_multiplier: 1.3,
    talent_cost: 6,
    rarity: 2
  },
  {
    id: 19,
    name: "流水之脉",
    tier: "中品",
    description: "内力运转如流水不息，绵绵不绝，最适合持久战。",
    cultivation_speed: "1.3x",
    special_effects: ["内力恢复+25%", "耐力过人"],
    base_multiplier: 1.3,
    talent_cost: 6,
    rarity: 2
  },
  {
    id: 20,
    name: "磐石之脉",
    tier: "中品",
    description: "下盘稳如磐石，根基扎实，练守势与硬功最是合适。",
    cultivation_speed: "1.3x",
    special_effects: ["防御+25%", "下盘稳固"],
    base_multiplier: 1.3,
    talent_cost: 6,
    rarity: 2
  },
  {
    id: 21,
    name: "五毒之脉",
    tier: "极品",
    description: "百毒不侵之余更能驭毒，练毒功如鱼得水。",
    cultivation_speed: "2.0x",
    special_effects: ["百毒不侵", "毒功威力+50%", "驭毒"],
    base_multiplier: 2,
    talent_cost: 15,
    rarity: 4
  },
  {
    id: 22,
    name: "双生经脉",
    tier: "极品",
    description: "体内有两套内力运转路线，切换自如，可同修两门路数迥异的武功。",
    cultivation_speed: "1.8x",
    special_effects: ["可同修两门武功", "内力切换自如"],
    base_multiplier: 1.8,
    talent_cost: 14,
    rarity: 4
  },
  {
    id: 23,
    name: "空灵之脉",
    tier: "神品",
    description: "感知异常敏锐，对距离、方位的把握近乎直觉，身法鬼魅难测。",
    cultivation_speed: "0.9x(前期) → 3.0x(后期)",
    special_effects: ["感知大幅提升", "身法鬼魅", "听声辨位"],
    base_multiplier: 3,
    talent_cost: 25,
    rarity: 5
  },
  {
    id: 24,
    name: "宿慧之脉",
    tier: "神品",
    description: "偶有既视之感，练功时常有「早已练过」的错觉，领悟招式快得不合常理。",
    cultivation_speed: "0.8x(前期) → 3.2x(后期)",
    special_effects: ["领悟速度+50%", "招式领悟", "偶有灵光一闪"],
    base_multiplier: 3.2,
    talent_cost: 28,
    rarity: 5
  },
  {
    id: 25,
    name: "星象之脉",
    tier: "神品",
    description: "夜间练功事半功倍，对星象、方位有天生的敏感。",
    cultivation_speed: "0.85x(前期) → 2.9x(后期)",
    special_effects: ["夜间练功加成", "星象感知", "方位直觉"],
    base_multiplier: 2.9,
    talent_cost: 26,
    rarity: 5
  },
  {
    id: 26,
    name: "阴阳双脉",
    tier: "神品",
    description: "体内阴阳二气并行，刚柔并济，调和诸般武功的造诣极高。",
    cultivation_speed: "0.9x(前期) → 3.1x(后期)",
    special_effects: ["刚柔并济", "武功调和", "内力平衡"],
    base_multiplier: 3.1,
    talent_cost: 27,
    rarity: 5
  },
];

// =======================================================================
//                           本地天赋数据（武侠版）
// =======================================================================
export const LOCAL_TALENTS: Omit<Talent, 'source'>[] = [
  {
    id: 1,
    name: "天命主角",
    description: "气运惊人，总是能在绝境中逢生，获得意想不到的机缘。",
    talent_cost: 15,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "气运", 数值: 8 }, { 类型: "特殊能力", 名称: "逢凶化吉", 数值: 0.1 }]
  },
  {
    id: 2,
    name: "剑道独尊",
    description: "天生剑心通明，任何剑法一看便会，且威力倍增。",
    talent_cost: 12,
    rarity: 5,
    effects: [{ 类型: "技能加成", 技能: "剑法", 数值: 0.2 }, { 类型: "后天六司", 目标: "根骨", 数值: 3 }]
  },
  {
    id: 3,
    name: "药道圣手",
    description: "对药理有超凡的领悟力，炼药成功率与品质大幅提升。",
    talent_cost: 12,
    rarity: 5,
    effects: [{ 类型: "技能加成", 技能: "炼丹", 数值: 0.15 }, { 类型: "后天六司", 目标: "悟性", 数值: 2 }]
  },
  {
    id: 4,
    name: "阵法大师",
    description: "对阵法有极高的天赋，学习和布置阵法的效率大大提高。",
    talent_cost: 8,
    rarity: 4,
    effects: [{ 类型: "技能加成", 技能: "阵法", 数值: 0.12 }, { 类型: "后天六司", 目标: "悟性", 数值: 2 }]
  },
  {
    id: 5,
    name: "铸器鬼才",
    description: "天生对各种材料有敏锐的感知，炼器时更容易出现极品。",
    talent_cost: 8,
    rarity: 4,
    effects: [{ 类型: "技能加成", 技能: "炼器", 数值: 0.1 }, { 类型: "特殊能力", 名称: "材料感知", 数值: 1 }]
  },
  {
    id: 6,
    name: "多宝童子",
    description: "出门历练时，更容易发现天材地宝。",
    talent_cost: 7,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "气运", 数值: 3 }, { 类型: "特殊能力", 名称: "寻宝天赋", 数值: 0.15 }]
  },
  {
    id: 7,
    name: "横练奇才",
    description: "肉身天生强横，气血旺盛，适合修炼体修功法。",
    talent_cost: 5,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "根骨", 数值: 3 }, { 类型: "特殊能力", 名称: "体修天赋", 数值: 0.1 }]
  },
  {
    id: 8,
    name: "感知过人",
    description: "天生感知强大，不易被心魔入侵，施展感知秘术效果更佳。",
    talent_cost: 5,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 3 }, { 类型: "特殊能力", 名称: "心魔抗性", 数值: 0.1 }]
  },
  {
    id: 9,
    name: "身法鬼魅",
    description: "身法飘逸，战斗中闪避能力更强。",
    talent_cost: 4,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "灵性", 数值: 2 }, { 类型: "特殊能力", 名称: "闪避天赋", 数值: 0.08 }]
  },
  {
    id: 10,
    name: "农夫之子",
    description: "出身凡人，心性坚韧，对灵植有额外的亲和力。",
    talent_cost: 2,
    rarity: 2,
    effects: [{ 类型: "后天六司", 目标: "心性", 数值: 1 }, { 类型: "特殊能力", 名称: "灵植亲和", 数值: 0.1 }]
  },
  {
    id: 11,
    name: "过目不忘",
    description: "记忆力超群，学习功法秘籍速度加快。",
    talent_cost: 2,
    rarity: 2,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 2 }]
  },
  {
    id: 12,
    name: "老实人",
    description: "与人交易时，不容易被欺骗。",
    talent_cost: 1,
    rarity: 1,
    effects: [{ 类型: "特殊能力", 名称: "防欺诈", 数值: 1 }]
  },
  {
    id: 13,
    name: "一诺千金",
    description: "你的承诺极具分量，更容易获得他人的信任与好感。",
    talent_cost: 3,
    rarity: 2,
    effects: [{ 类型: "后天六司", 目标: "魅力", 数值: 2 }]
  },
  {
    id: 14,
    name: "天生毒体",
    description: "百毒不侵，且能更好地驾驭毒功，但常人不敢轻易接近。",
    talent_cost: 6,
    rarity: 4,
    effects: [{ 类型: "特殊能力", 名称: "毒素免疫", 数值: 1 }, { 类型: "技能加成", 技能: "毒术", 数值: 0.15 }, { 类型: "后天六司", 目标: "魅力", 数值: -2 }]
  },
  {
    id: 15,
    name: "画龙点睛",
    description: "在制作图谱时，有一定几率产生意想不到的强大效果。",
    talent_cost: 4,
    rarity: 3,
    effects: [{ 类型: "技能加成", 技能: "符箓", 数值: 0.1 }, { 类型: "特殊能力", 名称: "图谱变异", 数值: 0.05 }]
  },
  {
    id: 16,
    name: "顶级魅力",
    description: "天生丽质，气质非凡，魅力超群。无论走到哪里都是众人瞩目的焦点，极容易获得他人的好感与信任。在社交场合如鱼得水，能够以言语和魅力化解大部分冲突。",
    talent_cost: 8,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "魅力", 数值: 5 }, { 类型: "特殊能力", 名称: "魅力光环", 数值: 0.2 }, { 类型: "特殊能力", 名称: "社交天赋", 数值: 0.15 }]
  },
  {
    id: 17,
    name: "武心坚固",
    description: "道心如铁，心魔难侵。突破时更不容易走火入魔，受到诱惑和幻术影响的几率大幅降低。",
    talent_cost: 6,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "心性", 数值: 3 }, { 类型: "特殊能力", 名称: "心魔抗性", 数值: 0.3 }]
  },
  {
    id: 18,
    name: "天生神力",
    description: "天生力大无穷，体质远超常人。擅长近战搏杀，气血旺盛。",
    talent_cost: 5,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "根骨", 数值: 4 }, { 类型: "特殊能力", 名称: "近战增幅", 数值: 0.2 }]
  },
  {
    id: 19,
    name: "灵觉敏锐",
    description: "六感超凡，对危险有本能的预感。在战斗和探险中能够提前感知到威胁。",
    talent_cost: 4,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "灵性", 数值: 3 }, { 类型: "特殊能力", 名称: "危险感知", 数值: 1 }]
  },
  {
    id: 20,
    name: "夜猫子",
    description: "夜晚精神百倍，修炼效率提升。但白天会感到困倦。",
    talent_cost: 1,
    rarity: 2,
    effects: [{ 类型: "特殊能力", 名称: "夜间修炼加速", 数值: 0.3 }]
  },
  {
    id: 21,
    name: "福缘深厚",
    description: "受天道眷顾，突破时成功率更高，遭遇天劫时威力减弱。",
    talent_cost: 10,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "气运", 数值: 5 }, { 类型: "特殊能力", 名称: "突破成功率", 数值: 0.2 }, { 类型: "特殊能力", 名称: "天劫削弱", 数值: 0.15 }]
  },
  {
    id: 22,
    name: "剑骨天成",
    description: "天生剑骨，与剑有莫名的契合。剑法威力倍增，领悟剑意速度极快。",
    talent_cost: 10,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "根骨", 数值: 2 }, { 类型: "技能加成", 技能: "剑法", 数值: 0.25 }, { 类型: "特殊能力", 名称: "剑意感悟", 数值: 0.2 }]
  },
  {
    id: 23,
    name: "天生武体",
    description: "传说中的道体，天生契合天地大道，修炼任何功法都事半功倍。",
    talent_cost: 18,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 4 }, { 类型: "后天六司", 目标: "灵性", 数值: 4 }, { 类型: "特殊能力", 名称: "万法精通", 数值: 0.3 }]
  },
  {
    id: 24,
    name: "纹谱奇才",
    description: "对图谱有超凡的领悟，绘制图谱成功率高，威力强大。",
    talent_cost: 7,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 2 }, { 类型: "技能加成", 技能: "符箓", 数值: 0.2 }, { 类型: "特殊能力", 名称: "图谱精通", 数值: 0.15 }]
  },
  {
    id: 25,
    name: "驭兽亲和",
    description: "天生亲和灵兽，更容易收服和沟通灵兽，灵兽战力提升。",
    talent_cost: 6,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "魅力", 数值: 2 }, { 类型: "特殊能力", 名称: "灵兽契约", 数值: 0.3 }, { 类型: "特殊能力", 名称: "灵兽战力", 数值: 0.2 }]
  },
  {
    id: 26,
    name: "天生魔心",
    description: "心性偏向魔道，修炼魔功速度极快，但容易走火入魔。正道功法修炼困难。",
    talent_cost: 5,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "心性", 数值: -2 }, { 类型: "特殊能力", 名称: "魔功加速", 数值: 0.4 }, { 类型: "特殊能力", 名称: "走火入魔", 数值: 0.15 }]
  },
  {
    id: 27,
    name: "铸器宗师",
    description: "对炼器有非凡的天赋，炼制的法器品质更高，成功率更高。",
    talent_cost: 9,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 2 }, { 类型: "技能加成", 技能: "炼器", 数值: 0.25 }, { 类型: "特殊能力", 名称: "极品概率", 数值: 0.1 }]
  },
  {
    id: 28,
    name: "孤星命格",
    description: "天煞孤星，注定孤独一生。气运极低，但在绝境中更容易突破。",
    talent_cost: -3,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "气运", 数值: -5 }, { 类型: "特殊能力", 名称: "绝境突破", 数值: 0.3 }]
  },
  {
    id: 29,
    name: "先知梦境",
    description: "偶尔能在梦中窥见未来的片段，提前规避危险或把握机缘。",
    talent_cost: 8,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 2 }, { 类型: "后天六司", 目标: "气运", 数值: 3 }, { 类型: "特殊能力", 名称: "预知危险", 数值: 1 }]
  },
  {
    id: 30,
    name: "龟息之体",
    description: "天生寿元悠长，比常人更不易衰老，有更多时间追求大道。",
    talent_cost: 12,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "根骨", 数值: 3 }, { 类型: "特殊能力", 名称: "寿命延长", 数值: 0.3 }]
  },
];
