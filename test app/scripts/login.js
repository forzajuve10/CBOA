/**
 * Login view model
 */

var app = app || {};

app.Login = (function () {
    'use strict';

    var loginViewModel = (function () {

        var $loginUsername;
        var $loginPassword;

        var init = function () {
            $loginUsername = $('#loginUsername');
            $loginPassword = $('#loginPassword');
        };

        // Authenticate to use Backend Services as a particular user
        var login = function () {

            var username = $loginUsername.val();
            var password = $loginPassword.val();
            
            app.mobileApp.showLoading();

            
            if(username===""||username===null||password===""||password===null){
                app.mobileApp.hideLoading();
                app.showError("用户名与密码不能为空！");
            }else{
                app.mobileApp.hideLoading();
                app.mobileApp.navigate('views/personOA.html');
            }    
                      
        };
        
        var logout = function(){
            $loginUsername.val("");
            $loginPassword.val("");
            app.mobileApp.navigate('index.html');
        };

        

        return {
            init: init,
            login: login,
            logout:logout
        };

    }());

    return loginViewModel;

}());
