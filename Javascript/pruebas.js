const higherOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
}

const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
}

console.log(higherOrderFunc(anotherFunc));

