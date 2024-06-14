window.onload = function() {

    //скрываем попапчик крестиком или нажатием за пределами оного
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('callback-open-form') || e.target.classList.contains('form-close')) {
            document.querySelector('.callback-open-form').classList.remove('form-active')
        }
    });

    //функция, собирающая данные и далее работущая с ними

    function SignIn(e){
        e.preventDefault();
        let mailOrName = document.getElementById('mail');
        let pass = document.getElementById('pass');
        let checkRemember = document.getElementById('remember');
        let rememberMe = 'нет';
        let hasError = false;
        if (!checkRemember.checked) {
            rememberMe = 'нет';
        } else {
            rememberMe = 'да';
        }

        if (!hasError) {
           // если все проверки на ошибки (их мы не придумали) пройдены - отправляем полученные данные на сервер или бд,
            // и дальше, в зависимости от целей и задач. По обстоятельства
        }
        console.log("Моя почта/номер -" + mailOrName.value + ", Мой пароль" + pass.value + ". Нужно меня запомнить? -" + rememberMe);
    }

    //событие при нажатии на кнопку Войти
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn_signin')) {
            SignIn(e);
        }
    });


}