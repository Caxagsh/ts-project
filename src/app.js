"use strict";
//HW #29
const MAX_ASC = 122;
const MIN_ASC = 97;
//shift any positive number
//adds "shift" to ASCII codes of lower case letters
//if the shifted code will be greater than ASCII code 'z'
// the code should be begun from ASCII code 'a'
//source letter 'a' will be 'c' if "shift" == 2
//source letter 'z' will be 'b' if shift ==2
//example: shiftRound("aabx!", 4) => ("eefb!")
function shiftRound(str, shift) {
    let isShiftRound = true;
    return getNewString(str, isShiftRound, shift);
}
//subtracts "shift" from ASCII codes of lower case letters
//if the shifted code will be less than ASCII code 'a'
// the code should be begun from ASCII code 'z'
//source letter 'c' will be 'a' if "shift" == 2
//source letter 'b' will be 'z' if shift ==2
//example: ushiftRound("eefb!", 4) => ("aabx!") 
function unshiftRound(str, shift) {
    let isShiftRound = false;
    return getNewString(str, isShiftRound, shift);
}
function getNewString(str, isShiftRound, shift) {
    let res = "";
    let arrStr;
    arrStr = str.split("");
    res = arrStr.map(elm => {
        if (elm.charCodeAt(0) >= MIN_ASC && elm.charCodeAt(0) <= MAX_ASC) {
            let newShift = getNewShift(shift);
            let newElm = getNewLetter(elm.charCodeAt(0), newShift, isShiftRound);
            elm = String.fromCharCode(newElm);
        }
        return elm;
    }).join("");
    return res;
}
function getNewShift(shift) {
    shift > MAX_ASC - MIN_ASC ? shift = (shift % (MAX_ASC - MIN_ASC)) : shift;
    return shift;
}
function getNewLetter(ascLetNum, newShift, isShiftRound) {
    let res = 0;
    if (isShiftRound) {
        (ascLetNum + newShift > MAX_ASC) ? res = ascLetNum - (MAX_ASC - MIN_ASC + 1) + newShift : res = ascLetNum + newShift;
    }
    else {
        (ascLetNum - newShift < MIN_ASC) ? res = ascLetNum + (MAX_ASC - MIN_ASC + 1) - newShift : res = ascLetNum - newShift;
    }
    return res;
}
let unShift1 = unshiftRound("a", 51);
let unShift2 = unshiftRound("b", 2);
let unShift3 = unshiftRound("eefb!", 4);
let shift1 = shiftRound("a", 2);
let shift2 = shiftRound("z", 2);
let shift3 = shiftRound("aabx!", 4);
let aaa;
//# sourceMappingURL=app.js.map