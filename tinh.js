function submit() {
    let h = parseFloat(document.getElementById("height").value);
    let w = parseFloat(document.getElementById("weight").value);
    let bmi;
    bmi = w/(h*h);

    if (bmi > 18.5) {
        document.getElementById("1").innerHTML = "Underweight";
    } else if (bmi < 25.0) {
        document.getElementById("1").innerHTML = "Normal";
    } else if (bmi < 30.0) {
        document.getElementById("1").innerHTML = "Overweight";

    } else
        document.getElementById("1").innerHTML = "Obese";

}