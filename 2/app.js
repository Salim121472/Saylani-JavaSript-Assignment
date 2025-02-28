function calculator() {
    let valuesFirst = +prompt("Enter Your values");
    let valuesSecound = +prompt("Enter Your values");
    let operator = prompt("Enter Your Operators");
    if (operator === "+") {
        let add = valuesFirst + valuesSecound;
        console.log(add);
    } else if (operator === "-") {
        let sub = valuesFirst - valuesSecound;
        console.log(sub);
    } else if (operator === "x") {
        let Mul = valuesFirst * valuesSecound;
        console.log(Mul);
    } else if (operator === "/") {
        let Div = valuesFirst / valuesSecound;
        console.log(Div);
    } else if (operator === "%") {
        let Modulas = valuesFirst % valuesSecound;
        console.log(Modulas)
    }


}


calculator();
