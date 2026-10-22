// 즉시 실행 함수 ()()
// (function(){})()

// let num = 10 이렇게만 적으면 자동으로 let num = 10()이렇게 됨 
// 그래서 ; 붙여야됌 
let num = 10;
(() => {
    console.log("hellow")
})()