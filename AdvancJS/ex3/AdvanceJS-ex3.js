// 1.ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop 
// และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา


let obj = {};
let key = prompt("Enter key (type 'stop' to end): ");

while( key != 'stop') {
    let value = prompt("Enter value: ");
    
    obj[key] = value;
    key = prompt("Enter key (type 'stop' to end): ");
}

console.log(obj);


// 2.ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ 
// และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

let fruits = {};
let fName = prompt("Enter fruit name (type 'stop' to end'): ");

while(fName != 'stop') {
    let fNumber = +prompt("Enter number: ");
    if (fNumber > 1) {
        fName = fName + 's'
    }

    fruits[fName] = fNumber;
    fName = prompt("Enter fruit name (type 'stop' to end'): ");
}

console.log(fruits);

