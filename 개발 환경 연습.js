function solution(telno) {
    // - 문자가 포함되어 있어도 동작해야 한다.
    const tel = telno.replaceAll("-","");
    const failure = ["전국", "X"];
    const map = {
        "010": "휴대폰",
        "011": "휴대폰", "016": "휴대폰", "017": "휴대폰", "018": "휴대폰", "019": "휴대폰",
        "031": "경기", "032": "인천", "033": "강원",
        "041": "충청", "042": "대전", "044": "세종",
        "051": "부산", "052": "울산", "053": "대구",
        "054": "경북", "055": "경남",
        "061": "전남", "062": "광주", "063": "전북",
        "064": "제주"
    };

    // 001과 002 로 시작하는 번호는 국제전화로 판단해서 앞 3자리를 제외하고 8자리~12자리까지만 허용하는 로직을 추가한다.
    if (tel.substring(0,3) === "001" || tel.substring(0,3) === "002") {
        const foreign_tel = tel.substring(3);
        if (8<=foreign_tel.length && foreign_tel.length<=12) return ["국제전화", "O"];
        else return ["국제전화", "X"]
    }

    if (tel.length > 11 || tel.length < 9) return failure;
    else if (tel[0] !== '0') return failure;

    const top = tel.substring(0, 3);
    const ext = tel.substring(tel.length - 4);

    if (tel[1] === '2') {
        if (tel.length !== 10) return ["서울", "X"];
        if (ext[0] === ext[1] && ext[1] === ext[2] && ext[2] === ext[3]) return ["서울", "X"];
        return ["서울", "O"];
    }
    else if (tel[1] === '1') {
        if (!map[top]) return failure;
        if (tel[2] !== '0') return ["휴대폰", "X"];
        if (tel.length === 11 && parseInt(tel[3]) % 2 === 0) return ["휴대폰", "O"];
        return ["휴대폰", "X"];
    }
    else if (map[top]) {
        if (tel.length === 10 && tel[3] === '0') return [map[top], "X"];
        return [map[top], "O"];
    }

    return failure;
}

console.log(solution("001010-123-1234"));
console.log(solution("002010-43-34"));
console.log(solution("003010-123-1234"));
console.log(solution("010-123-1234"));
console.log(solution("010-2234-1234"));
console.log(solution("02-1234-1234"));
console.log(solution("0212341111"));
console.log(solution("0311237890"));
console.log(solution("061-012-7890"));
console.log(solution("015-0157899"));
console.log(solution("042-2123-7890"));
