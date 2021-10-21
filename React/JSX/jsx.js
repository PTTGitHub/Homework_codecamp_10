// Lab 1
// สร้าง obj ชื่อ myComponent
// มี 3 key เป็น one , two, three
// value ของแต่ละ key ให้เขียนในรูปแบบ JSX
// one ให้ค่าเป็น function ที่ Return JSX ที่ไม่มี props
// two ให้ค่าเป็น function ที่ Return JSX ที่มี props ชื่อ name แล้วใช้ชื่อเราลงไป
// three ให้ค่าเป็น React.creteElement()
// จากนั้นให้นำ ทุกๆ component ใน obj มาแสดงผลโดยใช้ dot Notation

const myComponent = {
	one: () => <h1>Hello</h1>,
	two: () => <div name="Phairoj"></div>,
	three: React.createElement(),
};

function App() {
	return (
		<div>
			{myComponent.one}
			{myComponent.two}
			{myComponent.three}
		</div>
	);
}

// Lab 2
// ให้สร้าง ตัวแปร 5 ตัวแปร (ชื่ออะไรก็ได้)มาเก็บค่า Datatype ชนิดต่าง string, number, boolean, null, undefined
// ให้สร้าง ตัวแปร 2 ตัวแปร (ชื่ออะไรก็ได้) มาเก็บค่า Data structure เช่น array และ Obj
// นำค่าตัวแปรแต่ละตัวมาใส่ใน <p> </p>
// แสดงผลออกมาบนหน้าเว็บ ของตัวแปรแต่ละตัว
// สังเกตการแสดงผลของตัวแปรแต่ละตัวว่าตัวไหน แสดงผลออกมาได้บ้าง

const myStr = "Hello";
const myNum = 99;
const myBool = true;
const myNull = null;
const myUndefined = undefined;

const myArr = [1, 2, 3, 4];
const myObj = { name: "John", age: 54 };

function App() {
	return (
		<div>
			<p>{myStr}</p>
			<p>{myNum}</p>
			<p>{myBool}</p>
			<p>{myNull}</p>
			<p>{myUndefined}</p>
			<p>{myArr}</p>
			<p>{myObj}</p>
		</div>
	);
}

// แสดงผลได้เฉพาะ string, number array

// Lab 3
// ให้สร้าง ตัวแปร มาเก็บค่า array [“a”, “b”, “c”, “d”, “e”]
// ให้สร้าง ตัวแปร มาเก็บค่า array [ <p> a </p>,  <p> b </p>,  <p> c </p>,
// <p> d </p>, <p> e </p>]
// แสดงผล array ในข้อ 1 และ ข้อ 2
// ให้นำ array ตัวที่  1 มาผ่าน map function แล้ว แสดงผลให้ได้เหมือน array แบบที่ 2

const myArr = ["a", "b", "c", "d", "e"];
const myPArr = [<p> a </p>, <p> b </p>, <p> c </p>, <p> d </p>, <p> e </p>];

const myMap = myArr.map((item) => {
	return <p>{item}</p>;
});

function App() {
	return (
		<div className="container">
			<Setup />
			{myPArr}
			{myMap}
		</div>
	);
}
