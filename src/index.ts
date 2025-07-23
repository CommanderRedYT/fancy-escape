const characterMap: Record<string, string> = {
    '/': '／',
    '\\': '＼',
    '#': '＃',
    '!': '！',
    '"': '＂',
    "'": '＇',
    '(': '（',
    ')': '）',
    '[': '［',
    ']': '］',
    '{': '｛',
    '}': '｝',
    '|': '｜',
    '*': '＊',
    '+': '＋',
    ',': '，',
    '.': '．',
    '-': '－',
    ':': '：',
    ';': '；',
    '<': '＜',
    '>': '＞',
    '=': '＝',
    '?': '？',
};

export const escapeString = (input: string): string => input.split('').map((char) => characterMap[char] || char).join('');

export default escapeString;
