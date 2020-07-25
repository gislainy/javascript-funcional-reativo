function exec (callback, a, b) {
    if (typeof callback === "function") {
        return callback(a, b)
    }
}

const somarNoTerminal = (a, b) =>  {
    return a + b;
}

const subtrairNoTerminal = (a, b) => {
    return a - b
}

exec(somarNoTerminal, 56, 68);
exec(subtrairNoTerminal, 182, 27);