// มี Object Dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs
// ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั้นด้วย comma

let dictionary = Object.create(null);

// your code to add dictionary.toString method

let dictionary = Object.create(null, {
	toString: {
		// define toString property
		value() {
			// the value is a function
			return Object.keys(this).join();
		},
	},
});

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
	alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"

// คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม่

function Rabbit(name) {
	this.name = name;
}
Rabbit.prototype.sayHi = function () {
	alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined
