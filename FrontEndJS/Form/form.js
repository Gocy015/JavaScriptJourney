function registerSubmit() {
    // var button = document.getElementById('input_confirm');
    // button.addEventListener('click', confirmClicked);

    var form = document.userinfo;
    form.onsubmit = function (event) {
        console.log('onsubmit', event);
        return true;
    }
    form.submit = function (event) {
        console.log('submit', event); //没有这个方法？
    }

}


function confirmClicked(event) {
    // console.log(event);
    var inputForm = document.userinfo; // 不能写成 document.body.userinfo
    console.log('user name : ', inputForm.username.value);
    console.log('user passworkd : ', inputForm.userpsw.value);
}

window.onload = function () {
    // registerButtonTap();
    registerSubmit();
}