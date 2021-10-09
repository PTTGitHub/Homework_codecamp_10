// 1.ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()
// 1.1
array2 = array1.map((item) => item*2)

// 1.2
array2 = array1.map((item) => String(item))

// 1.3
array2 = array1.map((item) => typeof item)

// 1.4
array2 = array1.map((item) => item.toUpperCase())

// 1.5
array2 = array1.map((item) => item.name)

// 1.6
array2 = array1.map((item) => item.age)

// 1.7
array2 = array1.map((item) => `${item.name} ${item.surname}`)

// 1.8
array2 = array1.map(function(item) {
    if (item%2 == 0) {
        return "even";
    } else return "odd";})

// 1.9
array2 = array1.map((item) => Math.abs(item))

// 1.10
array2 = array1.map((item) => item.toFixed(2))

// 1.11
array2 = array1.map(function(item) {
    let birthArr = item.birth.split("-");
    let obj = {};
    obj.name = item.name;
    obj.birth = item.birth;
    obj.age = 2021 - birthArr[0];
    return obj;
})

// 1.12
array2 = array1.map(function(item) {
    let birthArr = item.birth.split("-");
    let day = birthArr[2];
    let month = birthArr[1];
    let year = birthArr[0];
    switch(month) {
        case "01": month = "Jan"; break;
        case "02": month = "Feb"; break;
        case "03": month = "Mar"; break;
        case "04": month = "Apr"; break;
        case "05": month = "May"; break;
        case "06": month = "Jun"; break;
        case "07": month = "Jul"; break;
        case "08": month = "Aug"; break;
        case "09": month = "Sep"; break;
        case "10": month = "Oct"; break;
        case "11": month = "Nov"; break;
        case "12": month = "Dec"; break;
    }
    return `<tr><td>${item.name}</td><td>${day} ${month} ${year}</td></tr>`;
})

// 2.ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()
// 2.1
array2 = array1.filter((item) => item > 10)

// 2.2
array2 = array1.filter((item) => item%2 == 1)

// 2.3
array2 = array1.filter((item) => typeof(item) == "number")

// 2.4
array2 = array1.filter((item) => item.length > 6)

// 2.5
array2 = array1.filter((item) => item.age < 18)

// 2.6
array2 = array1.filter((item) => item.age != 32)

// 2.7
array2 = array1.filter((item) => item > 0)

// 2.8
array2 = array1.filter((item) => item % 3 == 0)

// 2.9
array2 = array1.filter((item) => typeof(item) == "string")

// 2.10
array2 = array1.filter((item) => item == item.toUpperCase())

// 2.11
array2 = array1.filter((item) => item.birth.split("-")[1] == 10)

// 2.12
array2 = array1.filter((item) => item.birth.split("-")[0] < 2000)
