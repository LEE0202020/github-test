// 11월 생일자 구별하기 
const students = ["오준승", "김진휘", "정우영", "채진성", "이상아", "조수민", "이예나"]

// for i in list == for(let i of list){}
for(let student of students) {
    if(student === "오준승" || student === "김진휘" || student === "정우영") {
        console.log(`${student}생일 축하합니다! `)
        // `${변수명}` : 탬플릿 리터럴(ES6) == f""
    }else if{
        console.log("그냥 학생")
    }
    }else{
        continue;
    }
}

