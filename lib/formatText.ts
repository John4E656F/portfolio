export function formatText(text: string) {
  return text.replace(/__(.*?)__/g, '<b>$1</b>');
}
