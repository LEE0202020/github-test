// 최우선 연산자는 값 또는 맅턴값의 enter를 사용할 떄 사용한다 
let data1 =(
    30
)

console.log(data1++)
console.log(++data1)
console.log(data1)

console.log(data1--)
console.log(--data1)
console.log(data1)

console.log(data1--)
// ! 연산자를 사용하면 결과값은 항상 boolean 타입이다 
console.log(!data1)
console.log(!!data1)

console.log(data1 / 7)

let money = 3000000
money = 2700000
money = money - 2700000


let data1 = 10
let data2 = "10"

// 타입 비교 xx. (이유: 강제 형변환 시킴)  (쓰면 안됌 !)
console.log(data1 == data2)

// === : 타입 비교함  
console.log(data1 === data2)

// !== : 타입 비교함  
console.log(data1 !== data2)

