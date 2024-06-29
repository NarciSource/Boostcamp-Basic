function solution(telno) {
    const foreign_codes = {
        "001": "국제전화",
        "002": "국제전화",
    };
    const ident_codes = {
        "010": "휴대폰",
        "011": "휴대폰",
        "016": "휴대폰",
        "017": "휴대폰",
        "018": "휴대폰",
        "019": "휴대폰",
        "002": "서울",
        "031": "경기",
        "032": "인천",
        "033": "강원",
        "041": "충청",
        "042": "대전",
        "044": "세종",
        "051": "부산",
        "052": "울산",
        "053": "대구",
        "054": "경북",
        "055": "경남",
        "061": "전남",
        "062": "광주",
        "063": "전북",
        "064": "제주",
    };

    // - 문자가 포함되어 있어도 동작해야 한다.
    let tel = telno.replaceAll("-", "");
    // 올바른 전화번호 형태인지
    let is_correct = false;

    let is_foreign = foreign_codes[tel.substring(0, 3)] === "국제전화";
    if (is_foreign) {
        // 국제전화는 국내로 들어올 때 식별번호 처음에 0을 붙여줘야한다.
        tel = "0" + tel.substring(3);
    }
    // 서울 코드는 다른 코드들과의 코드형통일을 위해 임의로 0을 앞에 추가.
    tel = tel.substring(0, 2) == "02" ? "0" + tel : tel;

    const top_code = tel.substring(0, 3);
    const middle_code = tel.substring(3, tel.length - 4);
    const ending_code = tel.substring(tel.length - 4);
    const cate = ident_codes[top_code];
    const len = tel.length;

    if (cate === "서울") {
        if (new Set(ending_code).size !== 1 && len === 11) {
            is_correct = true;
        }
    } else if (cate === "휴대폰") {
        if (top_code === "010" && len === 11 && middle_code[0] % 2 === 0) {
            is_correct = true;
        }
    } else if (cate) {
        if ([9, 10, 11].includes(len) && !(len == 10 && middle_code[0] === "0")) {
            is_correct = true;
        }
    }

    const result = [is_foreign ? "국제" : "국내", cate || "전국", is_correct ? "O" : "X"];
    return result;
}

const check_rule = (number, answer) => solution(number) == answer;

console.log(check_rule("001-10-2234-1234", "국제,휴대폰,O"));
console.log(check_rule("001-10-123-1234", "국제,휴대폰,X"));
console.log(check_rule("002-10-43-34", "국제,휴대폰,X"));
console.log(check_rule("003010-123-1234", "국내,전국,X"));
console.log(check_rule("010-123-1234", "국내,휴대폰,X"));
console.log(check_rule("010-2234-1234", "국내,휴대폰,O"));
console.log(check_rule("02-1234-1234", "국내,서울,O"));
console.log(check_rule("0212341111", "국내,서울,X"));
console.log(check_rule("0311237890", "국내,경기,O"));
console.log(check_rule("061-012-7890", "국내,전남,X"));
console.log(check_rule("011-0157899", "국내,휴대폰,X"));
console.log(check_rule("015-0157899", "국내,전국,X"));
console.log(check_rule("042-2123-7890", "국내,대전,O"));
