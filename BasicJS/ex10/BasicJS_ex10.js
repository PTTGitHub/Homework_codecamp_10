// Exercise Switch Cases
// 1.แปลง Code ดังกล่าวเป็น if-else statement

let browser = null;
if (browser == "Edge") {
    alert("You've got the Edge!");
} else if ( browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
    alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok!");
}

// 2.แปลง Code ดังกล่าวเป็น Switch cases

let a = +prompt('a?', '');

switch(a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert("No match!");
}
