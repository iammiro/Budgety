var budgetController = (function () {
    var x = 24;

    var add = function (a) {
        return x + a;
    };
    return {
        publickTest: function (b) {
            console.log(add(b));
        }
    }
})();

var UIController = (function () {

})();

var controller = (function (budgetCtrl, UICtrl) {

})(budgetController, UIController); 