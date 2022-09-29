function receivesAFunction(callBack) {
    return callBack()
}

function returnsANamedFunction () {
    return (function named() {})
}

function returnsAnAnonymousFunction () {
    return (function () {}) ;
}