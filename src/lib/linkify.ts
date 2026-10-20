// 极简内联链接解析：只支持 [文字](URL)，用于内容里偶尔需要指向外部仓库的场景
export function linkify(text?: string): string {
  if (!text) return '';
  return text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    (_m, label: string, url: string) =>
      `<a href="${url}" target="_blank" rel="noopener" class="text-mark hover:underline">${label} ↗</a>`,
  );
}
