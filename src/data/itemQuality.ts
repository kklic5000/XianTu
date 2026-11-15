/**
 * 物品品质系统定义（武侠版）
 * 品质等级（品阶）：凡、良、上、珍、秘、绝
 * 品级：0 粗制；1-2 寻常；3-4 精良；5-6 上乘；7-8 珍稀；9 秘制；10 绝世
 */

export interface QualityInfo {
  color: string;
  rarity: string; // 文案描述
}

export interface GradeInfo {
  name: string; // 残缺/下品/中品/上品/极品
  description: string;
  effect: string; // 可用于UI特效描述
}

export interface ItemQualitySystem {
  // 品质等级（品阶：凡、良、上、珍、秘、绝）
  qualities: {
    凡: QualityInfo;
    良: QualityInfo;
    上: QualityInfo;
    珍: QualityInfo;
    秘: QualityInfo;
    绝: QualityInfo;
  };

  // 品级（0 残缺；1-3 下品；4-6 中品；7-9 上品；10 极品）
  grades: {
    0: GradeInfo;
    1: GradeInfo;
    2: GradeInfo;
    3: GradeInfo;
    4: GradeInfo;
    5: GradeInfo;
    6: GradeInfo;
    7: GradeInfo;
    8: GradeInfo;
    9: GradeInfo;
    10: GradeInfo;
  };
}

export const ITEM_QUALITY_SYSTEM: ItemQualitySystem = {
  qualities: {
    凡: { color: '#9CA3AF', rarity: '市井百姓所用之物，平平无奇，仅具基本功能。' },
    良: { color: '#CFA95F', rarity: '做工扎实的好物，江湖上广泛流通，是行走江湖的可靠家伙。' },
    上: { color: '#8EA2F2', rarity: '出自名家之手，材质与工艺俱佳，是江湖中难得的上品。' },
    珍: { color: '#5FC4A8', rarity: '珍稀难得之物，多为门派世家所藏，寻常人难得一见。' },
    秘: { color: '#B894F4', rarity: '秘法所制或门派不传之秘，威能赫赫，足以镇压一方。' },
    绝: { color: '#F2D27A', rarity: '绝世之物，百年难得一见，只存于传说与前人遗物之中。' },
  },

  grades: {
    0: { name: '粗制', description: '做工粗糙', effect: '破损效果' },
    1: { name: '寻常', description: '品质一般', effect: '淡色光效' },
    2: { name: '寻常', description: '品质一般', effect: '淡色光效' },
    3: { name: '精良', description: '做工精良', effect: '淡色光效' },
    4: { name: '精良', description: '做工精良', effect: '中等光效' },
    5: { name: '上乘', description: '品质上乘', effect: '中等光效' },
    6: { name: '上乘', description: '品质上乘', effect: '中等光效' },
    7: { name: '珍稀', description: '珍稀难得', effect: '强烈光效' },
    8: { name: '珍稀', description: '珍稀难得', effect: '强烈光效' },
    9: { name: '秘制', description: '秘法所制', effect: '强烈光效' },
    10: { name: '绝世', description: '完美无瑕', effect: '炫目特效' },
  },
};

export type QualityType = keyof typeof ITEM_QUALITY_SYSTEM.qualities;
export type GradeType = keyof typeof ITEM_QUALITY_SYSTEM.grades;

export function getQualityInfo(quality: QualityType): QualityInfo {
  return ITEM_QUALITY_SYSTEM.qualities[quality];
}

export function getGradeInfo(grade: GradeType): GradeInfo {
  return ITEM_QUALITY_SYSTEM.grades[grade];
}

export function getFullQualityDescription(quality: QualityType, grade: GradeType): string {
  const qualityInfo = getQualityInfo(quality);
  const gradeInfo = getGradeInfo(grade);
  return `${quality}·${gradeInfo.name} - ${qualityInfo.rarity}`;
}

export function getItemColor(quality: QualityType, grade: GradeType): string {
  if (grade === 0) return '#666666';
  return getQualityInfo(quality).color;
}

export function getGradeRange(grade: number): string {
  if (grade === 0) return '粗制';
  if (grade >= 1 && grade <= 2) return '寻常';
  if (grade >= 3 && grade <= 4) return '精良';
  if (grade >= 5 && grade <= 6) return '上乘';
  if (grade >= 7 && grade <= 8) return '珍稀';
  if (grade === 9) return '秘制';
  if (grade === 10) return '绝世';
  return '未知';
}

export function generateQualitySystemPrompt(): string {
  return `
## 物品品质系统 (重要参考)
此世界的物品分为两个维度：品质等级 与 品级

### 品质等级 (品阶，从低到高):
- 凡品: ${ITEM_QUALITY_SYSTEM.qualities.凡.rarity}
- 良品: ${ITEM_QUALITY_SYSTEM.qualities.良.rarity}
- 上品: ${ITEM_QUALITY_SYSTEM.qualities.上.rarity}
- 珍品: ${ITEM_QUALITY_SYSTEM.qualities.珍.rarity}
- 秘品: ${ITEM_QUALITY_SYSTEM.qualities.秘.rarity}
- 绝品: ${ITEM_QUALITY_SYSTEM.qualities.绝.rarity}

### 品级 (物品完美程度):
- 粗制 (0): 做工粗糙，效果大减
- 寻常 (1-2): 品质一般，淡色光效
- 精良 (3-4): 做工精良，中等光效
- 上乘 (5-6): 品质上乘，中等光效
- 珍稀 (7-8): 珍稀难得，强烈光效
- 秘制 (9): 秘法所制，强烈光效
- 绝世 (10): 完美无瑕，炫目特效

### 物品命名规则 (建议):
两种推荐的命名格式：

格式1 - 简洁版（推荐）: [物品名]
示例：
- "金创药" (凡品寻常的金创药)
- "续骨膏" (凡品精良的续骨膏)
- "铁剑" (凡品寻常的铁剑)
- "精钢剑" (上品精良的精钢剑)

格式2 - 完整版（特殊情况）: [品质][品级][物品名]
示例：
- "凡品寻常金创药"
- "上品精良精钢剑"
- "珍品上乘雁翎刀"
- "秘品绝世金疮药王"

命名建议：
- 日常物品使用简洁版命名
- 高品质或特殊物品可使用完整版
- 避免使用 "凡寻" 这种连写格式
- 如需标注品级，使用 "凡品寻常" 的分离格式

重要提示：初始角色通常只有凡品或良品的寻常物品，高品阶物品极其稀少。
`;
}

