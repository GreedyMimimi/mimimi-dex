export function hexToAscii(hex: string): string {
  let ascii = ''
  for (let i = 0; i < hex.length; i += 2) {
    // sliceで2文字ずつ取り出して数値に変換
    const part = hex.slice(i, i + 2)
    const charCode = parseInt(part, 16)

    // charCodeが0の場合は終端文字と解釈しスキップ
    if (charCode === 0) continue

    ascii += String.fromCharCode(charCode)
  }
  return ascii
}
