/*키보드 매핑 만들었어요*/
console.log("키보드 매핑 임무 완수-. 이제 정말 '변환'하실 수 있는 겁니다-!");

/* 한글 유니코드는 그냥 계산해서 만들어져서 하나하나 다 값을 정해줘야대 */
const engToKor = {
  q: "ㅂ",
  w: "ㅈ",
  e: "ㄷ",
  r: "ㄱ",
  t: "ㅅ",
  y: "ㅛ",
  u: "ㅕ",
  i: "ㅑ",
  o: "ㅐ",
  p: "ㅔ",

  a: "ㅁ",
  s: "ㄴ",
  d: "ㅇ",
  f: "ㄹ",
  g: "ㅎ",

  h: "ㅗ",
  j: "ㅓ",
  k: "ㅏ",
  l: "ㅣ",

  z: "ㅋ",
  x: "ㅌ",
  c: "ㅊ",
  v: "ㅍ",
  b: "ㅠ",
  n: "ㅜ",
  m: "ㅡ",
};

const CHO = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

const JUNG = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
];

const JONG = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

function convert(text) {
  let jamo = "";

  for (let char of text) {
    jamo += engToKor[char] || char;
  }

  let result = "";

  for (let i = 0; i < jamo.length; i++) {
    const cho = CHO.indexOf(jamo[i]);
    const jung = JUNG.indexOf(jamo[i + 1]);

    /*핫ㅔ요 부분이 하세요로 바뀜 왜냐하면 뒤에 중성이 오면 받침이 뒤에 종성이랑 결합하게 코드를 짰응께!*/
    if (cho !== -1 && jung !== -1) {
      let jong = 0;

      const nextJong = JONG.indexOf(jamo[i + 2]);

      if (nextJong !== -1 && JUNG.indexOf(jamo[i + 3]) === -1) {
        jong = nextJong;
      }

      const unicode = 0xac00 + cho * 21 * 28 + jung * 28 + jong;

      result += String.fromCharCode(unicode);

      i += jong ? 2 : 1;
    } else {
      result += jamo[i];
    }
  }

  return result;
}
