const receivesAFunction = function (cb) {
    return cb();
}

function returnsANamedFunction () {
    const defFc = () => `hi peeps`;

    return defFc;
}

const returnsAnAnonymousFunction = () => {
    return (() => `what it do`);
}