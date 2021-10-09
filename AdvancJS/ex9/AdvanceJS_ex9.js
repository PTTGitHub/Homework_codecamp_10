// 1.ผลลัพธ์ของความยาว array คืออะไร

4

// 2.ให้ทำตามขั้นตอนต่อไปนี้
// - สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
// - เพิ่ม “Rock-n-Roll” ต่อท้าย
// - นำค่า Classics ไปทับค่าตรงกลางของ Array
// - นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
// - เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array

let styles = ["jazz", "Blues"];
styles.push("Rock-n-Roll");
styles.splice(1,1,"Classics");
styles.shift();
styles.unshift("Rap", "Raggae");


// 3.เขียนฟังก์ชัน sumInput() ที่
// - ใช้ propmt รับ value มาเก็บใน array
// - หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
// - คำนวณผลรวมของตัวเลขทั้งหมดใน Array

function sumInput() {
    let arr = [];
    let sum = 0;
    let value = +prompt("Enter number to add: ");

    while (isFinite(value)) {
        arr.push(value);
        value = +prompt("Enter number to add: ");
    }
    for ( item of arr) {
        sum += item;
    }
    return sum;
}


// 4.Maximal contiguous subarray (**Optional**)
// - ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน

function getMaxSubSum(arr) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            sum = sumRange(arr,i,j);
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

// sum from index a to b

function sumRange(arr,a,b) {
    let sum = 0;
    for(let i = a; i <= b; i++) {
        sum += arr[i];
    }
    return sum;
}