// switch: 값을 이미 알고 있을 때 사용하는 분기문
// switch(값){}

const choice = "한식"
switch(choice){
//     case "중식":
//         console.log("짜장면")
//     case "한식":
//         console.log("텀블러비어")
//     case "일식":
//         console.log("돈까스")
//     default:
//         console.log("굶기")
// // break가 없어서 true부터 쭉 출력됨 
// }
    case "중식":
        console.log("짜장면")
        break
    case "한식":
        console.log("텀블러비어")
        break
    case "일식":
        console.log("돈까스")
        break
    default:
        console.log("굶기")
        break
// break 넣어서 true값만 출력되게함 
}

const choice = "한식"
switch(choice){
    case "중식" {
        let menu ="짜장면"
        console.log(menu)
        break
    } // {} : 영역, 영역안에 같은 변수 쓰면안되고 , let도 여러먼 쓸 수 없음 
    case "한식"{
        let menu ="텀블러비어"
        console.log(menu)
        break
    }
    case "일식"{
        let menu ="돈가스"
        console.log(menu)
        break
    }
    default {
        let menu ="굶기"
        console.log(menu)
        break
    }
// break 넣어서 true값만 출력되게함 
}


