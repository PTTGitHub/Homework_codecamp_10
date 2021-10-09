// 1.เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่

function ucFirst(string) {
    let firstChar = string[0];
    firstChar = firstChar.toUpperCase();
    let newStr = firstChar + string.slice(1);
    return newStr;
}

// 2.เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false

function checkSpam(str) {
    if (str.includes("xxx") || str.includes("viagra")) {
        return true;
    }
    return false;
}

// 3.เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string 
// ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.substr(0, maxlength) + "..."
    }
    return str;
}

// 4.เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar 
// ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้

function extractCurrencyValue(string, rate) {
    return (+string * rate);
}