// 1.การทำงานของ code ดังกล่าวจะได้อะไรออกมา

ได้ alert John


// 2.การทำงานของ code ดังกล่าวจะได้อะไรออกมา

ได้ alert  ที่ไม่มีข้อความ


// 3.สร้าง object calculator จาก 3 methods นี้:
// - read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
// - sum() คืนค่าผลบวกของ 2 ค่านั้น.
// - mul() คืนค่าผลคูณของ 2 ค่านั้น.

function Calculator() {
    this.read = function() {
        this.num1 = +prompt("Enter first number: ");
        this.num2 = +prompt("Enter second number: ");
    }
    this.sum = function() {
        return this.num1 + this.num2;
    }
    this.mul = function() {
        return this.num1 * this.num2;
    }
}

let calculator = new Calculator();



// 4.ให้ Object ชื่อ ladder มี method ขึ้น และ ลง
// - Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
// - ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

let ladder = {
    step: 0,
    up: function() {
        this.step += 1;
        return this;
    },
    down: function() {
        this.step -= 1;
        return this;
    },
    showStep: function() {
        alert(this.step);
        
    }
}

