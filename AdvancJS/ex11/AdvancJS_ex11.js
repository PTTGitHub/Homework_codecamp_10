// 1.ให้ arr เป็น Array สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr

function unique(arr) {
    let mySet = new Set(arr);
    return Array.from(mySet);
}


// 2.Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )




// 3.เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้เราจะทำยังไงให้ keys.push สามารถทำงานได้

ต้องทำ keys ให้เป็น array  ก่อน

let keys = Array.from(map.keys());


