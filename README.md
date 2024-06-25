# 부스트캠프 베이직01-개발 환경 연습

## 요구사항 역분석하기

도메인지식 추가.  
국제전화는 국내로 들어올 때 식별번호 처음에 0을 붙여줘야한다.  

```js
if 국제전화
    tel <- "0" + tel[3:]

if 서울
    if tel.length === 10
    && all ending_code is not same                      // 이 규칙 뭐야?
    then correct

else if 휴대폰
    && top_code === "010"
    && tel.length === 11
    && middle_code[0] is even                           // 이 규칙 뭐야??
    then correct

else if 지역
    if tel.length in [9, 10, 11]
    && !(tel.length === 10 && middle_code[0] === "0")   // 이 규칙도 뭐야???
    then correct
```

## 디버깅해서 개선하기

\- 문자가 포함되어 있어도 동작해야 한다.

```js
const tel = telno;
```

```js
const tel = telno.replaceAll("-", "");
```

## 새로운 요구사항 추가하기

001과 002 로 시작하는 번호는 국제전화로 판단해서 앞 3자리를 제외하고 8자리~12자리까지만 허용하는 로직을 추가한다.

```js
if (tel.substring(0, 3) === "001" || tel.substring(0, 3) === "002") {
    const foreign_tel = tel.substring(3);
    if (8 <= foreign_tel.length && foreign_tel.length <= 12) return ["국제전화", "O"];
    else return ["국제전화", "X"];
}
```

## 테스트코드

```js
const check_rule = (number, answer) => [number, solution(number), solution(number) == answer];

console.log(check_rule("001-010-2234-1234", "국제,휴대폰,O"));
console.log(check_rule("001-010-123-1234", "국제,휴대폰,X"));
console.log(check_rule("002-010-43-34", "국제,전국,X"));
console.log(check_rule("003010-123-1234", "국내,전국,X"));
console.log(check_rule("010-123-1234", "국내,휴대폰,X"));
console.log(check_rule("010-2234-1234", "국내,휴대폰,O"));
console.log(check_rule("02-1234-1234", "국내,서울,O"));
console.log(check_rule("0212341111", "국내,서울,X"));
console.log(check_rule("0311237890", "국내,경기,O"));
console.log(check_rule("061-012-7890", "국내,전남,O"));
console.log(check_rule("011-0157899", "국내,휴대폰,X"));
console.log(check_rule("015-0157899", "국내,전국,X"));
console.log(check_rule("042-2123-7890", "국내,대전,X"));

```
