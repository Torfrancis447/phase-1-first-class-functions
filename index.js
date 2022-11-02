function receivesAFunction(callBackFuction) {
    return callBackFuction();
}
function returnsANamedFunction() {
    return function fn() {
        console.log("Function");
    };
}

function returnsAnAnonymousFunction() {
    return (function () {
        console.log('Anonymous');
    });
}