### CodeCamp #10
ไพโรจน์ ธำรงธัญวงศ์

// ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร
let animal = {
	jumps: null,
};

let rabbit = {
	__proto__: animal,
	jumps: true,
};
// ใช้ __proto__ ในการกำหนด prototype object ดังนี้ 
pockets → bed → table → head.

// การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป

// การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี