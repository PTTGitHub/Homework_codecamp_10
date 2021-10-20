// ; ให้เขียน Destrcutring assignment ที่ให้
// ; property ที่ชื่อ name ไปอยู่ในตัวแปร name
// ; property ที่ชื่อ years ไปอยู่ในตัวแปร age
// ; property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin (ให้เป็น false ถ้าไม่มีค่าให้กำหนด)

let user = {
	name: "John",
	years: 30,
};

let { name: name, years: age, isAdmin: isAdmin = false } = user;

// ถ้าเรามี Object ชื่อ salaries
// ให้สร้าง function topSalary(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงสุด
// ถ้า salaries ไม่มีข้อมูลให้คืนค่าเป็น null
// ถ้าสูงสุดมีหลายคน ก็ให้คืนใครก็ได้สักคน

let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};

function topSalary(salaries) {
	if (Object.keys(salaries).length == 0) return null;
	let valueArr = Object.values(salaries);

	let max = Math.max(...valueArr);

	for (let [key, value] of Object.entries(salaries)) {
		if (value == max) {
			return key;
		}
	}
}
