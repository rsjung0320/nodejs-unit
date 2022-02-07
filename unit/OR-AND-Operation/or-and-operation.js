// Javascript 의 아직도 유용한 코드

function isAdult(age) {
    if (age && age > 17) {
        return true;
    }
    else {
        return false;
    }
}

// && 는 첫째 표현식이 true 일때만 두 번째 표현식을 체크함
// return은 boolean 값
function isAdult1(age) {
    return age && age > 17 ;
}

console.log(isAdult())
console.log(isAdult(123))
console.log(isAdult(1))

const test = (theTitle) => {
    if (!theTitle) {
        theTitle = "Untitled Document";
    }
    return theTitle;
}

console.log(test())
console.log(test(123))

const test1 = (theTitle) => {
    // theTitle 이 false, null, undefined 일 때 뒤의 값을 리턴
    return theTitle || "Untitled Document"
}

const test2 = (age) => {
    // isAdult1() false 이면 뒤의 결과 값을 리턴
    return isAdult1() || isAdult1(age)
}

const test3 = (age) => {
    // isAdult1() false 이면 뒤의 결과 값을 리턴
    return null || isAdult1(age)
}

const test4 = (age) => {
    // isAdult1() false 이면 뒤의 결과 값을 리턴
    return undefined || isAdult1(age)
}

console.log(test1())
console.log(test1(123))
console.log('test2 : ' + test2(123))
console.log('test3 : ' + test3(123))
console.log('test4 : ' + test4(123))

// Arrow function 은 Hoisting 이 안된다.
// 그러니 항상 맨 위에 작성해야 한다.!
const logIn = (userName) => {
    console.log(`logIn + ${userName}`)
}

const signUp = () => {
    console.log(`signUp`)
}

const exp3 = (userName) => {
    if (userName) {
        // userName이 있으면 로그인 로직으로
        logIn(userName);
    }
    else {
        // userName이 없으면 회원가입 로직으로
        signUp();
    }
}

console.log(`exp3 = ` + exp3("test"))
console.log(`exp3 = ` + exp3())

// userName이 true 이면 logIn(userName) 실행
// userName이 false 이면 signUp() 실행
const exp4 = (userName) => {
    userName && logIn(userName) || signUp()
}

console.log(`exp4 = ` + exp4("test"))
console.log(`exp4 = ` + exp4())


