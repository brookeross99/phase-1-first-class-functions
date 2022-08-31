function receivesAFunction(callBackFunction) {
    callBackFunction();
}

function returnsANamedFunction() {
    const fn = () => {}
    return fn
}

function returnsAnAnonymousFunction(){
    return function (){};
};
