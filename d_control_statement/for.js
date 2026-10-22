// 선언 , 초기화 (초기값 집어넣어야됌)
let num = 0

// for 문
// 횟수를 알 떄 사용하는 문장 
for(let i = 0; i < 10; i++){
    console.log(i)
}     //10

// 조건문이 만족하지 않을때 탈출



const arr1 = [10, 20, 30, 40]
// 배열.length: 배열의 데이터 수
// enumerate(arr1) -> (1, 10)   // i++ : ++를 뒤에적는게 관례
for(let i =0; i < arr1.length; i++){
    console.log(arr1[i])
}

// 빠른 for 문 (파이썬은 빠른 for 문이다 )
// for ~ in(index) 객체 : index를 접근하는 반복문 
for(let i in arr1){
    console.log(i)
}
// for ~ of : of는 값을 접근하는 반복문
for(let i of arr1){
    console.log(i)
}

// i+=2 : 2씩 증가
for(let i =0; i < arr1.length; i+=2){
    console.log(arr1[i])
}



