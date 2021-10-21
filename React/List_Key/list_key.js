// lab 1
// ให้สร้าง ตัวแปร มาเก็บค่า array [“a”, “b”, “c”, “d”, “e”]
// นำ array มา map แล้ว แสดงผลเป็น list
// ใน <li> </li> ไม่ต้องใส่ key
// เปิด Console.log ใน browser สังเกตุ warning ที่เกิดขึ้น

const myArr = ["a", "b", "c", "d", "e"];

function App() {
	return (
		<div>
			<ul>
				{myArr.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
}

// lab 2
// ให้สร้าง ตัวแปร มาเก็บค่า array [“a”, “b”, “c”, “d”, “e”]
// นำ array มา map แล้ว แสดงผลเป็น list
// ใน <li> </li> ใส่ key เข้าไปใน tag li
// เปิด Console.log ใน browser สังเกตุ warning ที่เกิดขึ้น

const count = 0;

function App() {
	return (
		<div>
			<ul>
				{myArr.map((item) => {
					count += 1;
					return <li key={count}>{item}</li>;
				})}
			</ul>
		</div>
	);
}
