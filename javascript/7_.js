var globalVar = "xyz";

function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
}

function outerFunc(outerArg) {
    var outerVar = 'a'
    innerFunc(456)
}

innerFunc(123)