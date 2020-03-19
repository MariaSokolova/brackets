module.exports = function check(str, bracketsConfig) {
    let openBr = '';
    let closeBr = '';
    let pairs = {};
    let equalBr = '';

    for (let i = 0; i < bracketsConfig.length; i++) {
        let el = bracketsConfig[i];
        if (el[0] === el[1]) {
            equalBr += el[0];
            continue;
        }
        openBr += el[0];
        closeBr += el[1];
        pairs[el[1]] = el[0];
    }

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        const ch = str.charAt(i);
        if (equalBr.includes(ch)) {
            if (ch === stack[stack.length - 1]) {
                stack.pop();
            } else {
                stack.push(ch);
            }
        }

        if (openBr.includes(ch)) {
            stack.push(ch);
        }
        if (closeBr.includes(ch)) {
            if (pairs[ch] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};
