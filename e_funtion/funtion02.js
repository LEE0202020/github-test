// 어떤 값을 전달하면 그 값까지 모두 더해주는 함수 
// 화살표 함수 

const add = (num) => {
    let total = 0

    for(let i = 0; i < num; i++){
        let n = i + 1;
        total += n
    }
    // for , if 는 한줄로 하면 안됨 
}

let total = add(20)
console.log(total)


// 어떤값을 전달하면 "홀수" 또는 "짝수"인지 확인하는 함수 = 함줄로 적음 
// const getOddAndEven = (num) => num % 2 === 0? "짝수" : "홀수"  <-  전체가 리턴값 
const getOddAndEven = (num) => num % 2 === 0? "짝수" : "홀수"
let odd = getOddAndEven(15)
console.log(odd)