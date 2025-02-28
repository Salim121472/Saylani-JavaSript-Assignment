function AgeCalculator() {
    let birthdate = +prompt("Enter Your Birth Date");
    let year = new Date().getFullYear();
    let Age =year-birthdate;
    console.log("You Age Year is   :",Age);

}


AgeCalculator();