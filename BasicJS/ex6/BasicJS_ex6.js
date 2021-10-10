// Exercise การเขียนเงื่อนไข
// 1.Browser จะโชว์ข้อความ “Hello Codecamp #5” ไหม

ใช่ string ที่ไม่ว่างเปล่าจะให้ค่า boolean เป็น true

// 2.ใช้ if else ในการเขียนถามชื่อของคุณ
// - ถ้าตอบถูกให้แสดงคำว่า “เก่งมาก”
// - ถ้าตอบผิดให้แสดงคำว่า “คุณไม่รู้จักชื่อฉัน”

let myName = 'phairoj';
let answer = prompt("What is my name? ");

if (answer.toLocaleLowerCase() == myName) {
    alert("เก่งมาก");
}
else {
    alert("คุณไม่รู้จักชื่อฉัน");
}

// 3.ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
// - ถ้าคะแนน มากกว่าเท่ากับ 80    ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79     ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69     ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59     ได้ D
// - ถ้าคะแนน น้อยกว่า 50            ได้ F

let score = +prompt("Enter your score: ");
let grade = null;
if (score >= 80) {
    grade = 'A';
} else if (score >= 70 && score < 80) {
        grade = 'B';
    } else if (score >= 60 && score < 70) {
        grade = 'C';
        } else if (score >= 50 && score < 60) {
            grade = 'D';
            } else if (score < 50) {
                grade = 'D';
            }
console.log(grade);

// 4.เปลี่ยน if-else ข้างล่างในอยู่ในรูปของ Ternary Operators

let age = prompt('How old are you?');
let price = (age < 18)? 2000: 3500;