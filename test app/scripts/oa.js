var app = app || {};

app.Oa = (function() {
    'use strict';
    
    var oaViewModel = (function () {
        
        var arrangeOrderClick = function () {
            alert("1");
        };
        
        var checkInClick = function () {
            alert("2");
        };
        
        
        return {
            arrangeOrderClick: arrangeOrderClick,
            checkInClick: checkInClick
        };
        
    }());
    
    return oaViewModel;
}());