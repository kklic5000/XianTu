/**
 * 品阶 → 局内品阶色令牌（见 styles/game-theme.css 的 --q-*）
 * 用法：:style="{ '--quality': qualityTone(item.品质) }"，样式里用 var(--quality)
 * 品阶（武侠版）：凡（灰）/ 良（铜金）/ 上（蓝）/ 珍（青）/ 秘（紫）/ 绝（亮金）
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

export function qualityTone(quality: unknown): string {
  return `var(${QUALITY_TOKEN[qualityKey(quality)]})`;
}
