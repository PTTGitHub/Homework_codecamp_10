// 1.แปลง function ข้างล่างให้อยู่ในรูป arrow function

function ask(question, yes, no)  {
    if (confirm(question)) yes();
    else no();
}

ask("Do you agree?", ()=> alert("You agree."), () => alert("You canceled the execution."));