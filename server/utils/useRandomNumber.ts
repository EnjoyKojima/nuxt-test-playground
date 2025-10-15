/**
 * ランダムな数値を返す
 * @returns 
 */
export default function useRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100)
  return randomNumber
}
