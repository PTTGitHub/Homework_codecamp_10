// 1. คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร
alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) );  // 1 ,  2
alert( 1 && null && 2 );  //  null
alert( alert(1) && alert(2) );  // 1 ,  undefined
alert( null || 2 && 3 || 4 );  // 3


// 2. เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60

let age = null;
if (age >= 18 && age < 60) {
    alert("Yes");
} else {
    alert("No");
}

// 3. เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60

let age = null;
if (age >= 18 || age < 60) {
    alert("Yes");
} else {
    alert("No");
}

// 4. คำสั่ง alert ไหนที่จะถูกรันบ้าง
if (-1 || 0) alert( 'first' );  // run
if (-1 && 0) alert( 'second' );  //  not run
if (null || -1 && 0) alert( 'third' );  // not run


// 5. ให้เขียนระบบ login
// - ให้ใช้ prompt ในการถามใครเป็นคน login
// - ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password
// - วิธีเช็ค Password
// - ถ้า string นั้นเป็น “codecamp#5” ให้ alert “ยินดีต้อนรับ”
// - ถ้า string เป็นอย่างอื่นให้ alert เป็น “Wrong password”
// - ถ้าเป็น string ว่าง หรือ กด cancel ให้ alert ว่า “ยกเลิก”
// - ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ผมไม่รู้จักคุณ”
// - ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า “ยกเลิก”

let user = prompt("Who's logging in: ");

if (user == 'Admin') {
    let password = prompt("Enter password: ");
    if (password == 'codecamp#5') {
        alert('ยินดีต้อนรับ');
    } else {
        if (password == '' || password == null) {
        alert('ยกเลิก');
    } else {
        alert('Wrong password');
        }
    }
    } else {
        if (user == '' || user == null) {
            alert('ยกเลิก');
    } else {
        alert('ผมไม่รู้จักคุณ');
    }
}
