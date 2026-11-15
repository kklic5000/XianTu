/**
 * 品质 → 局内品阶色令牌（见 styles/game-theme.css 的 --q-*）
 * 用法：:style="{ '--quality': qualityTone(item.品质) }"，样式里用 var(--quality)
 * 上色规则：颜色档位 = max(品阶档位, 品级档位)。
 * 品阶（武侠版）：凡 / 良 / 上 / 珍 / 秘 / 绝；品级：grade 0-10（粗制/寻常/精良/上乘/珍稀/秘制/绝世）。
 * 这样凡品里做工好的（精良以上）也会显色，不会整包全灰。
 */
const QUALITY_TOKEN: Record<string, string> = {
  凡: '--q-fan',
  良: '--q-huang',
  上: '--q-xuan',
  珍: '--q-di',
  秘: '--q-tian',
  绝: '--q-sheng',
  // 旧品阶别名（旧存档或旧提示词产物仍可上色）
  黄: '--q-huang',
  玄: '--q-xuan',
  地: '--q-di',
  天: '--q-tian',
  仙: '--q-tian',
  神: '--q-sheng',
  圣: '--q-sheng',
  道: '--q-sheng',
};

/** 品阶 → 颜色档位（0-7） */
const TIER_RANK: Record<string, number> = {
  凡: 1,
  良: 2,
  上: 4,
  珍: 5,
  秘: 6,
  绝: 7,
  黄: 2,
  玄: 4,
  地: 5,
  天: 6,
  仙: 6,
  神: 7,
  圣: 7,
  道: 7,
};

/** 颜色档位（0-7） → 色票：灰 / 灰 / 铜金 / 青 / 蓝 / 紫 / 橙 / 亮金 */
const RANK_TOKEN = [
  '--q-fan',
  '--q-fan',
  '--q-huang',
  '--q-di',
  '--q-xuan',
  '--q-tian',
  '--q-xian',
  '--q-sheng',
];

/** 品级（grade 0-10） → 颜色档位 */
function gradeRank(grade: number): number {
  if (grade <= 0) return 0;
  if (grade <= 2) return 1; // 寻常
  if (grade <= 4) return 2; // 精良
  if (grade <= 6) return 3; // 上乘
  if (grade <= 8) return 5; // 珍稀
  if (grade === 9) return 6; // 秘制
  return 7; // 绝世
}

/** 品级词 → 颜色档位（quality 直接写成「精良」等旧词时用） */
const GRADE_WORD_RANK: [string, number][] = [
  ['绝世', 7],
  ['秘制', 6],
  ['珍稀', 5],
  ['上乘', 3],
  ['精良', 2],
  ['寻常', 1],
  ['粗制', 0],
];

/** 品级词（粗制/寻常/精良/上乘/珍稀/秘制/绝世）→ 就近品阶，保证旧词产物也能上色 */
const GRADE_WORD_TIER: [string, string][] = [
  ['绝世', '绝'],
  ['秘制', '秘'],
  ['珍稀', '珍'],
  ['上乘', '上'],
  ['精良', '良'],
];

/** 从品质字段（字符串 / { quality } / { 品质 }）取出单字品阶，取不到返回「凡」 */
export function qualityKey(quality: unknown): string {
  let raw: unknown = quality;
  if (raw && typeof raw === 'object') {
    const o = raw as Record<string, unknown>;
    raw = o.quality ?? o.品质 ?? o.品阶 ?? '';
  }
  const text = String(raw ?? '').trim();
  for (const ch of text) {
    if (ch in QUALITY_TOKEN) return ch;
  }
  for (const [word, tier] of GRADE_WORD_TIER) {
    if (text.includes(word)) return tier;
  }
  return '凡';
}

/** 品质 → 颜色档位（0-7）：品阶与品级取高者 */
export function qualityRank(quality: unknown): number {
  let tierText = '';
  let grade: number | null = null;
  if (quality && typeof quality === 'object') {
    const o = quality as Record<string, unknown>;
    tierText = String(o.quality ?? o.品质 ?? o.品阶 ?? '');
    const g = typeof o.grade === 'number' ? o.grade : Number(o.grade);
    if (Number.isFinite(g)) grade = g;
  } else {
    tierText = String(quality ?? '');
  }
  let rank = 0;
  for (const ch of tierText) {
    if (ch in TIER_RANK) {
      rank = Math.max(rank, TIER_RANK[ch]);
      break;
    }
  }
  if (grade !== null) {
    rank = Math.max(rank, gradeRank(grade));
  } else {
    for (const [word, r] of GRADE_WORD_RANK) {
      if (tierText.includes(word)) {
        rank = Math.max(rank, r);
        break;
      }
    }
  }
  return rank;
}

export function qualityTone(quality: unknown): string {
  return `var(${RANK_TOKEN[qualityRank(quality)]})`;
}
