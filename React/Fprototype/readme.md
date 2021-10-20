### CodeCamp #10
ไพโรจน์ ธำรงธัญวงศ์

// จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา
// ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา

function Rabbit() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true

Rabbit.prototype = {};

alert(rabbit.eats); // ?  true

// ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร

Rabbit.prototype.eats = false;

alert(rabbit.eats); // ?  false

// ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร

delete rabbit.eats;

alert(rabbit.eats); // ? true

// ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร

delete Rabbit.prototype.eats;

alert(rabbit.eats); // ? undefined

// ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม

let obj2 = new obj.constructor(); //  ได้จ๊ะ
