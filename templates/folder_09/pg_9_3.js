function myFunction() {
    var_one = document.getElementById('f_num').value;
    var_two = document.getElementById('s_num').value;
    var_three = Number(var_one) + Number(var_two);
    console.log(var_three);
    console.log(100);
    document.getElementById('display1').innerHTML = var_three;
    document.getElementById('display2').innerHTML = var_three;
    alert(var_three);
    document.getElementById('display1').innerHTML = var_three;
    document.getElementById('display2').innerHTML = var_three;
    console.log(var_three);
}
