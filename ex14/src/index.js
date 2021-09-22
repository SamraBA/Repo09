// Only change code below this line

function myForLoop1() {

    var evenNumbers = "";

    for (var i = 0; i < 10; i += 2) {

        evenNumbers += i + "," + " ";

    }
    return evenNumbers;
}

function myForLoop2() {
    var evenInverseNumbers = "";
    for (var i = 8; i >= 0; i -= 2) {
        evenInverseNumbers += i;
        if (i > 0) {
            evenInverseNumbers += "," + " ";
        }
    }
    return evenInverseNumbers;
}
console.log(myForLoop1() + myForLoop2());

// Only change code above this line

module.exports = {
    myForLoop1,
    myForLoop2
};





