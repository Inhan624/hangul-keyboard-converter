/*키보드 매핑 만들었어요*/
console.log("키보드 매핑 임무 완수-. 이제 정말 '변환'하실 수 있는 겁니다-!");

/* 키보드 매핑 */
const engToKor = {
  q: "ㅂ",
  Q: "ㅃ",
  w: "ㅈ",
  W: "ㅉ",
  e: "ㄷ",
  E: "ㄸ",
  r: "ㄱ",
  R: "ㄲ",
  t: "ㅅ",
  T: "ㅆ",

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

/* 초성/중성/종성 */
const CHO = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];

const JUNG = ["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"];

const JONG = ["","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];

/* 쌍모음 처리 */
function combineVowel(v1, v2) {
  if (v1 === "ㅗ" && v2 === "ㅏ") return "ㅘ";
  if (v1 === "ㅗ" && v2 === "ㅐ") return "ㅙ";
  if (v1 === "ㅗ" && v2 === "ㅣ") return "ㅚ";

  if (v1 === "ㅜ" && v2 === "ㅓ") return "ㅝ";
  if (v1 === "ㅜ" && v2 === "ㅔ") return "ㅞ";
  if (v1 === "ㅜ" && v2 === "ㅣ") return "ㅟ";

  if (v1 === "ㅡ" && v2 === "ㅣ") return "ㅢ";

  return null;
}

/* 핵심 변환 함수 */
function convert(text) {
  // 1️⃣ 영어 → 자모 변환
  let jamoArr = [];

  for (let char of text) {
    jamoArr.push(engToKor[char] || char);
  }

  // 2️⃣ 쌍모음 합치기
  let processed = [];

  for (let i = 0; i < jamoArr.length; i++) {
    const current = jamoArr[i];
    const next = jamoArr[i + 1];

    const combined = combineVowel(current, next);

    if (combined) {
      processed.push(combined);
      i++;
    } else {
      processed.push(current);
    }
  }

  // 3️⃣ 한글 조합
  let result = "";

  for (let i = 0; i < processed.length; i++) {
    const cho = CHO.indexOf(processed[i]);
    const jung = JUNG.indexOf(processed[i + 1]);

    if (cho !== -1 && jung !== -1) {
      let jong = 0;

      const nextJong = JONG.indexOf(processed[i + 2]);

      if (nextJong !== -1 && JUNG.indexOf(processed[i + 3]) === -1) {
        jong = nextJong;
      }

      const unicode = 0xac00 + cho * 21 * 28 + jung * 28 + jong;

      result += String.fromCharCode(unicode);

      i += jong ? 2 : 1;
    } else {
      result += processed[i];
    }
  }

  return result;
}