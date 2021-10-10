// 1. กำหนดให้ salaries เป็น Object ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน 
// ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0

function sumSalaries(salaries) {
    let sum = 0;
    for (value of Object.values(salaries)) {
        sum += value;
        
    }
    return sum;
}

// 2.ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object

function count(obj) {
    let count = 0;
    for (key of Object.keys(obj)){
        count += 1;
    }
    return count;
}