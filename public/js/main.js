//前台的js代码

    let login = document.getElementById('dl');          //登录按钮
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let loginTip  = document.querySelector('h3 .lt');      //登录的提示信息

    let regUser = document.getElementById('regUser');
    let regPsd = document.getElementById('regPsd');
    let regRepsd = document.getElementById('regRepsd');
    let register = document.getElementById('zz');    //注册按钮
    let regTip  = document.querySelector('h3 .rt');     //注册的提示信息


//点击登录按钮

    login.onclick = function () {

        ajax({
            url: '/api/login',
            type: 'post',
            data: {
                username: username.value,
                password: password.value,
            },
            success(msg) {
                let data = JSON.parse(msg);
                loginTip.innerText = data.message;

                //刷新页面
                setTimeout(() => {
                    if (!data.code) {
                        window.location.reload();
                    }
                }, 1000)
            }
        })

    }


//点击注册按钮

    register.onclick = function () {
        ajax({
            url: '/api/register',
            type: 'post',
            data: {
                username: regUser.value,
                password: regPsd.value,
                repassword: regRepsd.value,
            },
            success(msg) {
                let data = JSON.parse(msg);
                regTip.innerText = data.message;

                //刷新页面
                setTimeout(() => {
                    if (!data.code) {
                        window.location.reload();
                    }
                }, 1000)
            }
        })
    }









//点击退出按钮
let loginOut = document.getElementById('out');    //退出按钮
if(loginOut){
    loginOut.onclick = function () {
        ajax({
            url:'/api/loginout',
            type:'get',
            data:{},
            success(msg){
              window.location.reload();
            }
        })
    }

}




