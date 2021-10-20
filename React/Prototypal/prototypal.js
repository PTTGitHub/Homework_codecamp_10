// ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร
let animal = {
	jumps: null,
};

let rabbit = {
	__proto__: animal,
	jumps: true,
};

// alert( rabbit.jumps ); // ? (1)  true

// delete rabbit.jumps;

// alert( rabbit.jumps ); // ? (2) null

// delete animal.jumps;

// alert( rabbit.jumps ); // ? (3) undefined

// ใช้ __proto__ ในการกำหนด prototype object ดังนี้ 		pockets → bed → table → head.

let head = {
	glasses: 1,
};

let table = {
	pen: 3,
	__proto__: head,
};

let bed = {
	sheet: 1,
	pillow: 2,
	__proto__: table,
};

let pockets = {
	money: 2000,
	__proto__: bed,
};

// การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป

let animal = {
	eat() {
		this.full = true;
	},
};

let rabbit = {
	__proto__: animal,
};

rabbit.eat();

// rabbit เพระา this.full ถูกเรียกใช้จาก rabbit

// การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี

let hamster = {
	stomach: [],

	eat(food) {
		this.stomach.push(food);
	},
};
let speedy = {
	__proto__: hamster,
};

let lazy = {
	__proto__: hamster,
};
// This one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// This one also has it, why? fix please.
alert(lazy.stomach); // apple

// ต้องเพิ่ม prperty stomach ใน speedy, lazy ของใครของมัน
