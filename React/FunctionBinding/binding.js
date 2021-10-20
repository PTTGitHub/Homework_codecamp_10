// lab  this มีค่าเป็นอะไร
function f() {
	alert(this); // ?
}
let user = {
	g: f.bind(null),
};

user.g();

// เป็น null

// lab  ผลลัพธ์ที่ได้คืออะไร

function f() {
	alert(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f(); // John

// lab  ค่าของ value ในฟังก์ชันจะเปลี่ยนไปไหมหลังจาก bind

function sayHi() {
	alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
	name: "John",
});

alert(bound.test); // ผลลัพธ์คืออะไร แล้ว ทำไมจึงได้อย่างนั้น undefined เพราะ bind กับ obj อื่น ที่ไม่มี test แล้ว

// lab  ทำให้ code ด้านล่างนี้ทำงานได้

function askPassword(ok, fail) {
	let password = prompt("Password?", "");
	if (password == "rockstar") ok();
	else fail();
}

let user = {
	name: "John",

	loginOk() {
		alert(`${this.name} logged in`);
	},

	loginFail() {
		alert(`${this.name} failed to log in`);
	},
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // คำตอบ
