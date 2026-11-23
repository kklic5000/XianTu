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
  { id: 1, name: "山野遗孤", description: "襁褓时被遗弃深山，由老猎户与一条瘸腿猎犬养大。识草木、辨兽迹，筋骨比寻常孩子硬上三分。", talent_cost: 0, attribute_modifiers: { root_bone: 1 }, rarity: 3 },
  { id: 2, name: "书香门第", description: "诗礼传家的官宦之后，七岁通读四书，十岁能诵兵法。书读得多，心眼也比旁人多转两个弯。", talent_cost: 2, attribute_modifiers: { comprehension: 2 }, rarity: 3 },
  { id: 3, name: "商贾之子", description: "生在盐商之家，自小在柜台后头看人下菜碟。银钱过手、笑脸迎人——江湖上最难买的是人心，他打小就懂行情。", talent_cost: 2, attribute_modifiers: { charm: 2 }, rarity: 3 },
  { id: 4, name: "将门之后", description: "祖上是镇守边关的虎将，祠堂里还供着断了口的雁翎刀。血脉里的煞气压不住，握惯了笔的手总想去摸刀柄。", talent_cost: 3, attribute_modifiers: { temperament: 2, root_bone: 1 }, rarity: 3 },
  { id: 5, name: "独行客传人", description: "师父是位游戏风尘的老独行客，一壶酒一把剑走遍南北。他没教你成套的武功，只教你看人、看路、看天色。", talent_cost: 4, attribute_modifiers: { comprehension: 1, temperament: 1 }, rarity: 4 },
  { id: 6, name: "无间卧底", description: "正派出身，却奉命潜入邪派多年。两边的话都会说，两边的人都不全信——活到今天，靠的是心比别人多沉三分。", talent_cost: 1, attribute_modifiers: { temperament: 3 }, rarity: 4 },
  { id: 7, name: "重生者", description: "大梦一场，醒来竟回到少年时。前世的仇家名单、宝藏方位、哪一年哪一派要出大事，你都记得清清楚楚——只是这一世，棋盘还来得及重下。", talent_cost: 5, attribute_modifiers: { comprehension: 2, luck: 1 }, rarity: 5 },
  { id: 8, name: "名宿后裔", description: "武林名宿的直系血脉，襁褓时便被前辈探过根骨。经脉天生灵动，练起功来一日千里，只是这姓氏既是招牌，也是靶子。", talent_cost: 6, attribute_modifiers: { spirit: 2, root_bone: 1 }, rarity: 5 },
  { id: 9, name: "老怪传功", description: "将死之际遇上位脾气古怪的江湖老怪，他大限将至无人可托，索性把一辈子的阅历见识一股脑塞进你脑子里。魂魄还是你的，眼睛却老了六十岁。", talent_cost: 7, attribute_modifiers: { comprehension: 3, temperament: -1 }, rarity: 5 },
  { id: 10, name: "山神庙祝", description: "在山神庙的香火里长大，替十里八乡的猎户樵夫主持祭祀。夜里听得见山风过庙的声响，心神比常人更静、更敏。", talent_cost: 2, attribute_modifiers: { spirit: 2 }, rarity: 3 },
  { id: 11, name: "东海渔家", description: "在江河湖海上讨生活的人家，撒网、潜水、看潮汐都是童子功。一身水性极佳，筋骨也被海风浪头打熬得结实。", talent_cost: 1, attribute_modifiers: { root_bone: 2 }, rarity: 2 },
  { id: 12, name: "王朝皇子", description: "生在帝王家，锦衣玉食、名师环绕，骑射礼乐无一不精。只是宫墙太高，江湖太远——你对那片天地的向往，比谁都重。", talent_cost: 3, attribute_modifiers: { charm: 2, temperament: 1 }, rarity: 4 },
  { id: 13, name: "药童出身", description: "在药房的药香里泡大，抓药从不用秤，鼻子一闻便知年份产地。掌柜的说你这双手，天生就是碾药粉、辨毒草的。", talent_cost: 2, attribute_modifiers: { spirit: 1, comprehension: 1 }, rarity: 3 },
  { id: 14, name: "机关学徒", description: "师从机关阵法名家，自小在齿轮簧片里打滚，方位、距离、力道，一眼便能估出八九分。唐门中人见了都要多看你两眼。", talent_cost: 3, attribute_modifiers: { comprehension: 2, spirit: 1 }, rarity: 4 },
  { id: 15, name: "猎户世家", description: "祖辈在深山里与虎豹争食，传下来的不只是猎弓，还有一身辨踪、设陷、屏息的本事。你的筋骨，是兽血喂出来的。", talent_cost: 4, attribute_modifiers: { root_bone: 2, temperament: 1 }, rarity: 4 },
  { id: 16, name: "流浪乞丐", description: "自小在街头巷尾讨饭，桥洞里睡过，泔水里抢过。命比纸薄，皮比铁厚——活下去这件事，你比谁都在行。", talent_cost: -1, attribute_modifiers: { temperament: 2, luck: -1 }, rarity: 2 },
  { id: 17, name: "矿奴余生", description: "在暗无天日的矿洞里做了三年苦工，镐头抡出的臂力，煤尘呛出的忍性。如今重见天日，文墨不通，一双手却能捏碎核桃。", talent_cost: 0, attribute_modifiers: { root_bone: 3, spirit: -1 }, rarity: 2 },
  { id: 18, name: "江南画匠", description: "姑苏画铺的学徒出身，替官府画过缉捕画像，替镖局绘过山川舆图。一双眼睛过目不忘，江湖人物的相貌、机关图谱的线条，看一眼便刻在心里。", talent_cost: 3, attribute_modifiers: { comprehension: 1, charm: 2 }, rarity: 3 },
  { id: 19, name: "古墓守陵人", description: "世代替人守着深山里的古墓，陪葬坑、机关道、守陵兽的脾性门儿清。死人见得多了，胆子与心性都磨得异于常人。", talent_cost: 2, attribute_modifiers: { temperament: 2, spirit: 1 }, rarity: 4 },
  { id: 20, name: "戏班伶人", description: "梨园行里长大，唱念做打样样来得，一张脸能哭能笑、千人千面。只是台上演惯了别人的悲欢，自己的向武之心，总差着一口气。", talent_cost: 1, attribute_modifiers: { charm: 3, temperament: -1 }, rarity: 2 },
  { id: 21, name: "星象世家", description: "家族世代为朝廷观星测运，你自小在钦天监的浑天仪下打转。星象历法之外，你还学会了一件事——天意这东西，信三分就够了。", talent_cost: 5, attribute_modifiers: { comprehension: 2, luck: 2 }, rarity: 5 },
  { id: 22, name: "部落巫祝", description: "塞外大漠部落的巫祝血脉，能从鹰唳狼嗥里听出天气与祸福。族人敬你三分，汉人忌你三分，你的江湖路从一开始就不走寻常道。", talent_cost: 4, attribute_modifiers: { spirit: 2, root_bone: 1 }, rarity: 4 },
  { id: 23, name: "孤岛遗民", description: "生在海外孤岛，岛民练的是上古传下的原始武法，招式不花哨，一拳一脚都要命。与世隔绝十八年，你第一次踏上中原的土地。", talent_cost: 3, attribute_modifiers: { temperament: 2, comprehension: 1 }, rarity: 4 },
  { id: 24, name: "亡国遗孤", description: "故国倾覆那夜，你从死人堆里爬出来。仇家的名字刻在心里，念了十年——这条命是捡来的，所以你比谁都不怕死。", talent_cost: 2, attribute_modifiers: { temperament: 3, luck: -1 }, rarity: 3 },
  { id: 25, name: "镖局趟子手", description: "替镖局喊镖的趟子手，走南闯北，黑白两道的切口都懂。腿脚是跑出来的，胆气是吓出来的。", talent_cost: 3, attribute_modifiers: { root_bone: 2, temperament: 1 }, rarity: 3 },
  { id: 26, name: "说书先生之后", description: "父亲是茶馆的说书先生，醒木一拍，满座听他讲三侠五义。你从小听着江湖故事长大，真到了江湖里，发现故事只说对了一半。", talent_cost: 3, attribute_modifiers: { comprehension: 1, charm: 2 }, rarity: 3 },
  { id: 27, name: "仵作之子", description: "世代仵作，验尸是祖传的手艺。刀伤箭伤中毒伤，你扫一眼便知来历；死人不会说谎，所以你比活人更信死人。", talent_cost: 2, attribute_modifiers: { spirit: 1, temperament: 2 }, rarity: 3 },
  { id: 28, name: "勾栏琴师", description: "在勾栏瓦舍里抚琴卖艺，指尖功夫与眼力都是人堆里练出来的。达官贵人的秘辛听得多了，嘴却比琴弦还紧。", talent_cost: 3, attribute_modifiers: { charm: 2, spirit: 1 }, rarity: 3 },
  { id: 29, name: "药王谷弃徒", description: "曾是药王谷的记名弟子，因偷学谷中禁方被逐出山门。一身药理毒理是真的，师门的追责也是真的。", talent_cost: 4, attribute_modifiers: { spirit: 2, comprehension: 1 }, rarity: 4 },
  { id: 30, name: "海岛采珠人", description: "东海疍家后人，赤足潜入十丈深海采珠，与鲨鱼抢过食。运气这东西，你一向是拿命换的——而且换赢了好几次。", talent_cost: 3, attribute_modifiers: { root_bone: 1, luck: 2 }, rarity: 4 },
  { id: 31, name: "铸剑山庄学徒", description: "在铸剑山庄的炉火边打了五年铁，淬火声里听得出钢的成色。庄主说你这双手，将来不是握剑的，是铸剑的。", talent_cost: 4, attribute_modifiers: { root_bone: 1, spirit: 1, comprehension: 1 }, rarity: 4 },
  { id: 32, name: "世家逃婚者", description: "武林世家给你订的婚约对象是个人面兽心的货色，你在花轿临门那夜翻墙跑了。身后是两家的追兵，前头是整个江湖——反而是你这辈子最自由的一天。", talent_cost: 4, attribute_modifiers: { charm: 2, luck: 1, temperament: 1 }, rarity: 4 },
  { id: 33, name: "藏经阁扫地人", description: "在藏经阁扫了十年地，扫帚之余，阁里的经书武典你也‘顺便’看了十年。没人记得你的名字，你却记得每一本书放在第几格。", talent_cost: 5, attribute_modifiers: { comprehension: 3 }, rarity: 5 },
  { id: 34, name: "藏宝图传人", description: "祖上传下一张残破的藏宝图，图上的地名有一半已经不存在了。江湖上惦记这张图的人，比惦记你的人多得多。", talent_cost: 6, attribute_modifiers: { luck: 3, comprehension: 1 }, rarity: 5 },
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
    description: "跳崖得秘籍、落水遇高人，连客栈最后一间上房都总是留给你的。气运这东西看不见摸不着，但它偏心你，偏得明目张胆。",
    talent_cost: 15,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "气运", 数值: 8 }, { 类型: "特殊能力", 名称: "逢凶化吉", 数值: 0.1 }]
  },
  {
    id: 2,
    name: "剑道独尊",
    description: "剑在你手里像长在身上。任何剑谱看一遍便能使出七分神韵，剑客们苦练十年的关窍，你往往一眼看破。",
    talent_cost: 12,
    rarity: 5,
    effects: [{ 类型: "技能加成", 技能: "剑法", 数值: 0.2 }, { 类型: "后天六司", 目标: "根骨", 数值: 3 }]
  },
  {
    id: 3,
    name: "药道圣手",
    description: "药材过手便知真伪年份，同一张方子，你配出来的药就是比别人多三分药力。药王谷的长老见了都要叹一声天授。",
    talent_cost: 12,
    rarity: 5,
    effects: [{ 类型: "技能加成", 技能: "炼丹", 数值: 0.15 }, { 类型: "后天六司", 目标: "悟性", 数值: 2 }]
  },
  {
    id: 4,
    name: "机关大师",
    description: "齿轮、簧片、牵线、伏弩——机关在你眼里没有秘密，只有还没拆开的锁。布阵破阵，皆如掌纹般分明。",
    talent_cost: 8,
    rarity: 4,
    effects: [{ 类型: "技能加成", 技能: "阵法", 数值: 0.12 }, { 类型: "后天六司", 目标: "悟性", 数值: 2 }]
  },
  {
    id: 5,
    name: "铸器鬼才",
    description: "铁料矿石一上手，便知火候与成色。别人铸的是兵器，你铸出来的东西，像是自己长了脾气。",
    talent_cost: 8,
    rarity: 4,
    effects: [{ 类型: "技能加成", 技能: "炼器", 数值: 0.1 }, { 类型: "特殊能力", 名称: "材料感知", 数值: 1 }]
  },
  {
    id: 6,
    name: "多宝童子",
    description: "出门踩到的石头都比别人圆润三分。山洞里、破庙中、河滩上，总有些别人看不见的好东西在等你弯腰。",
    talent_cost: 7,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "气运", 数值: 3 }, { 类型: "特殊能力", 名称: "寻宝天赋", 数值: 0.15 }]
  },
  {
    id: 7,
    name: "横练奇才",
    description: "筋骨皮肉天生强横，金钟罩铁布衫这类功夫练起来事半功倍，一拳打上去，先疼的是对方的拳头。",
    talent_cost: 5,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "根骨", 数值: 3 }, { 类型: "特殊能力", 名称: "体修天赋", 数值: 0.1 }]
  },
  {
    id: 8,
    name: "感知过人",
    description: "耳聪目明之外，还有一种说不清的直觉。暗器破空前的那一丝风声、心怀恶意者的目光，你总能先一步察觉。",
    talent_cost: 5,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 3 }, { 类型: "特殊能力", 名称: "心魔抗性", 数值: 0.1 }]
  },
  {
    id: 9,
    name: "身法鬼魅",
    description: "身子轻得像没有重量，屋檐瓦片上走过不留声。打不过的时候跑得掉，跑不掉的时候——你还没遇到过。",
    talent_cost: 4,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "灵性", 数值: 2 }, { 类型: "特殊能力", 名称: "闪避天赋", 数值: 0.08 }]
  },
  {
    id: 10,
    name: "农夫之子",
    description: "田里长大的孩子，手脚勤快，心也踏实。侍弄草药灵植格外有心得——庄稼不会骗人，你也不会。",
    talent_cost: 2,
    rarity: 2,
    effects: [{ 类型: "后天六司", 目标: "心性", 数值: 1 }, { 类型: "特殊能力", 名称: "灵植亲和", 数值: 0.1 }]
  },
  {
    id: 11,
    name: "过目不忘",
    description: "看过的书页、走过的路、见过的人脸，全都刻在脑子里。秘籍这种东西，你翻一遍就是你的了。",
    talent_cost: 2,
    rarity: 2,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 2 }]
  },
  {
    id: 12,
    name: "老实人",
    description: "一张老实脸是天生的护身符，奸商想宰你都要先犹豫三分。江湖险恶，你靠的全是别人对你的低估。",
    talent_cost: 1,
    rarity: 1,
    effects: [{ 类型: "特殊能力", 名称: "防欺诈", 数值: 1 }]
  },
  {
    id: 13,
    name: "一诺千金",
    description: "你答应的事，江湖人当真金白银收。信誉这东西攒起来慢，但你天生起步就比别人高一截。",
    talent_cost: 3,
    rarity: 2,
    effects: [{ 类型: "后天六司", 目标: "魅力", 数值: 2 }]
  },
  {
    id: 14,
    name: "天生毒体",
    description: "自幼误食毒物大难不死，反落得百毒不侵。毒功在你手里如虎添翼，只是寻常人闻到你指尖的药气，总要退开半步。",
    talent_cost: 6,
    rarity: 4,
    effects: [{ 类型: "特殊能力", 名称: "毒素免疫", 数值: 1 }, { 类型: "技能加成", 技能: "毒术", 数值: 0.15 }, { 类型: "后天六司", 目标: "魅力", 数值: -2 }]
  },
  {
    id: 15,
    name: "画龙点睛",
    description: "落笔之处，图谱生辉。你绘制的机关图、舆图偶尔会多出一分神髓，连老师傅都要拿去临摹。",
    talent_cost: 4,
    rarity: 3,
    effects: [{ 类型: "技能加成", 技能: "符箓", 数值: 0.1 }, { 类型: "特殊能力", 名称: "图谱变异", 数值: 0.05 }]
  },
  {
    id: 16,
    name: "顶级魅力",
    description: "眉目生得太好，气质又压得住场。酒楼上你一开口，满座的刀都慢了三分——美貌在江湖上，从来都是兵器。",
    talent_cost: 8,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "魅力", 数值: 5 }, { 类型: "特殊能力", 名称: "魅力光环", 数值: 0.2 }, { 类型: "特殊能力", 名称: "社交天赋", 数值: 0.15 }]
  },
  {
    id: 17,
    name: "武心坚固",
    description: "心志如铁，泰山崩于前而色不变。走火入魔、幻术蛊惑这些软刀子，在你这里很难找到下口的地方。",
    talent_cost: 6,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "心性", 数值: 3 }, { 类型: "特殊能力", 名称: "心魔抗性", 数值: 0.3 }]
  },
  {
    id: 18,
    name: "天生神力",
    description: "单臂能举石狮子的那种力气，还在长。近身搏杀你从不讲理，因为你的拳头就是道理。",
    talent_cost: 5,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "根骨", 数值: 4 }, { 类型: "特殊能力", 名称: "近战增幅", 数值: 0.2 }]
  },
  {
    id: 19,
    name: "灵觉敏锐",
    description: "第六感准得吓人。杀气未至，你后颈的汗毛先立起来了——靠这一手，你已经躲过不止一次暗算。",
    talent_cost: 4,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "灵性", 数值: 3 }, { 类型: "特殊能力", 名称: "危险感知", 数值: 1 }]
  },
  {
    id: 20,
    name: "夜猫子",
    description: "白日里呵欠连天，入夜反而精神百倍。月亮底下练功读书，效率远胜晨光——江湖夜行人，说的就是你。",
    talent_cost: 1,
    rarity: 2,
    effects: [{ 类型: "特殊能力", 名称: "夜间修炼加速", 数值: 0.3 }]
  },
  {
    id: 21,
    name: "福缘深厚",
    description: "逢凶化吉的命。突破瓶颈时总差的那一口气，命运往往替你补上；别人九死一生，你总能多出那一生。",
    talent_cost: 10,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "气运", 数值: 5 }, { 类型: "特殊能力", 名称: "突破成功率", 数值: 0.2 }, { 类型: "特殊能力", 名称: "天劫削弱", 数值: 0.15 }]
  },
  {
    id: 22,
    name: "剑骨天成",
    description: "脊骨如剑，宁折不弯。剑意这种玄之又玄的东西，你领悟起来像认亲——它本来就是你的一部分。",
    talent_cost: 10,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "根骨", 数值: 2 }, { 类型: "技能加成", 技能: "剑法", 数值: 0.25 }, { 类型: "特殊能力", 名称: "剑意感悟", 数值: 0.2 }]
  },
  {
    id: 23,
    name: "天生武体",
    description: "经脉宽阔如江河，丹田深不见底，任何功法到了你身上都如百川归海。老一辈见了要摇头：这种体质，一代人里出不了一个。",
    talent_cost: 18,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 4 }, { 类型: "后天六司", 目标: "灵性", 数值: 4 }, { 类型: "特殊能力", 名称: "万法精通", 数值: 0.3 }]
  },
  {
    id: 24,
    name: "图谱奇才",
    description: "线条在你眼里是活的。机关图的咬合、阵图的生克、舆图的山川走向，一眼看去便如掌上观纹。",
    talent_cost: 7,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 2 }, { 类型: "技能加成", 技能: "符箓", 数值: 0.2 }, { 类型: "特殊能力", 名称: "图谱精通", 数值: 0.15 }]
  },
  {
    id: 25,
    name: "驭兽亲和",
    description: "凶犬见你摇尾，烈马任你抚鬃。兽类对你的善意毫无道理可讲，就像你天生是它们那一边的。",
    talent_cost: 6,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "魅力", 数值: 2 }, { 类型: "特殊能力", 名称: "灵兽契约", 数值: 0.3 }, { 类型: "特殊能力", 名称: "灵兽战力", 数值: 0.2 }]
  },
  {
    id: 26,
    name: "天生魔心",
    description: "心思走的是险路。邪派功法到了你手里进境一日千里，只是悬崖边上走路，风一大，就容易出事。",
    talent_cost: 5,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "心性", 数值: -2 }, { 类型: "特殊能力", 名称: "魔功加速", 数值: 0.4 }, { 类型: "特殊能力", 名称: "走火入魔", 数值: 0.15 }]
  },
  {
    id: 27,
    name: "铸器宗师",
    description: "宗师级的铸造直觉。你开炉之前就知道这一炉出什么，江湖上排队等你兵器的人，能从山门排到山脚。",
    talent_cost: 9,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 2 }, { 类型: "技能加成", 技能: "炼器", 数值: 0.25 }, { 类型: "特殊能力", 名称: "极品概率", 数值: 0.1 }]
  },
  {
    id: 28,
    name: "孤星命格",
    description: "天煞孤星，亲近你的人总多灾多难。气运差到了极点，反而把心志磨成了铁——绝境对你来说，是家常便饭。",
    talent_cost: -3,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "气运", 数值: -5 }, { 类型: "特殊能力", 名称: "绝境突破", 数值: 0.3 }]
  },
  {
    id: 29,
    name: "先知梦境",
    description: "梦里偶尔会去到几天之后的某个场景，醒来只记得碎片。靠这些碎片，你躲过了几场本该要命的祸事。",
    talent_cost: 8,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 2 }, { 类型: "后天六司", 目标: "气运", 数值: 3 }, { 类型: "特殊能力", 名称: "预知危险", 数值: 1 }]
  },
  {
    id: 30,
    name: "龟息之体",
    description: "呼吸慢得像冬眠的老龟，寿元比常人绵长许多。武道路远，你最不缺的就是时间。",
    talent_cost: 12,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "根骨", 数值: 3 }, { 类型: "特殊能力", 名称: "寿命延长", 数值: 0.3 }]
  },
  {
    id: 31,
    name: "左右互搏之资",
    description: "左手画方、右手画圆，心能两用。常人练双手兵器是折磨，你练起来像天生就该如此——这份资质，世上没几个人有。",
    talent_cost: 9,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 2 }, { 类型: "特殊能力", 名称: "一心二用", 数值: 0.2 }]
  },
  {
    id: 32,
    name: "梦中授艺",
    description: "睡梦里总有个看不清面目的老人喂招，醒来招式便多懂了三分。这梦做了十几年，你至今不知道他是谁。",
    talent_cost: 8,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 3 }, { 类型: "特殊能力", 名称: "梦境传承", 数值: 0.1 }]
  },
  {
    id: 33,
    name: "顺风耳",
    description: "三十步外的落叶、隔墙的低语、弓弦将响未响的那一颤，都逃不过你的耳朵。暗器想偷袭你，先得问过风声。",
    talent_cost: 5,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "灵性", 数值: 3 }, { 类型: "特殊能力", 名称: "危险感知", 数值: 1 }]
  },
  {
    id: 34,
    name: "夜眼如昼",
    description: "瞳仁天生异于常人，无月之夜也能视物如昼。夜行、夜袭、夜读秘籍，你占尽便宜。",
    talent_cost: 3,
    rarity: 2,
    effects: [{ 类型: "后天六司", 目标: "灵性", 数值: 2 }, { 类型: "特殊能力", 名称: "夜间修炼加速", 数值: 0.2 }]
  },
  {
    id: 35,
    name: "乌鸦嘴",
    description: "好的不灵坏的灵，‘这趟镖肯定出事’一说出口，镖师们脸都绿了。朋友们又爱带你出门，又怕你开口。",
    talent_cost: -1,
    rarity: 2,
    effects: [{ 类型: "后天六司", 目标: "气运", 数值: -2 }, { 类型: "后天六司", 目标: "魅力", 数值: 1 }, { 类型: "特殊能力", 名称: "言出祸随", 数值: 0.1 }]
  },
  {
    id: 36,
    name: "风流命格",
    description: "桃花运旺得不像话，走到哪都有人多看你两眼、多帮你一把。情债也是债——这笔账，迟早要还。",
    talent_cost: 6,
    rarity: 4,
    effects: [{ 类型: "后天六司", 目标: "魅力", 数值: 4 }, { 类型: "特殊能力", 名称: "社交天赋", 数值: 0.1 }]
  },
  {
    id: 37,
    name: "痛觉迟钝",
    description: "断骨之痛在你这里只算钝痒。敌人最怕你这种人：打不疼，就吓不退。",
    talent_cost: 5,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "根骨", 数值: 2 }, { 类型: "后天六司", 目标: "心性", 数值: 2 }, { 类型: "特殊能力", 名称: "体修天赋", 数值: 0.1 }]
  },
  {
    id: 38,
    name: "鹰眼",
    description: "目光锐利如鹰隼，百步之外穿针引线也看得真切。飞石暗器到了你手里，指哪打哪。",
    talent_cost: 4,
    rarity: 3,
    effects: [{ 类型: "后天六司", 目标: "灵性", 数值: 2 }, { 类型: "特殊能力", 名称: "危险感知", 数值: 0.5 }]
  },
  {
    id: 39,
    name: "铁齿铜牙",
    description: "一张嘴能把死人说活、把价钱砍到掌柜哭。谈判桌上你从没输过，因为你根本不按对方的剧本接话。",
    talent_cost: 3,
    rarity: 2,
    effects: [{ 类型: "后天六司", 目标: "魅力", 数值: 2 }, { 类型: "后天六司", 目标: "心性", 数值: 1 }, { 类型: "特殊能力", 名称: "防欺诈", 数值: 1 }]
  },
  {
    id: 40,
    name: "无招胜有招",
    description: "你学招忘招比谁都快。临敌之时心中无招，手上便无处不是招——这份境界，许多宗师临死都没摸到门槛。",
    talent_cost: 11,
    rarity: 5,
    effects: [{ 类型: "后天六司", 目标: "悟性", 数值: 3 }, { 类型: "特殊能力", 名称: "剑意感悟", 数值: 0.15 }]
  },
];
