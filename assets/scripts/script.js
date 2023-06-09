

let test = prompt("Введите имя и фамилию")
alert(`Привет, ${test}!`)

let age = prompt ("Введите сколько вам лет?");
switch(age){
    case "10":
        alert ("Школьник, еще учиться и учиться");
        break;
    case "14":
        alert ("Получение первого серьезного документа, паспорт");
        break;
    case "18":
        alert ("Совершеннолетний");
        break;
    case "30":
        alert ("Работа-дом, дом-работа");
        break;
    case "45":
        alert ("Опыт есть, но местами здоровье подводит");
        break;
    default:
        alert ("Не унывай, все круто");
        break;
}


let element = document.getElementById("el1");
console.log(element);

let count = 0;

function clickButton()
{
 
   let element = document.getElementById("el1");
   if (count % 2 ==0 ) element.classList.add('active');
   else element.classList.remove('active');
   count ++;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", clickButton);


let element1 = document.getElementsByClassName("dis");
console.log(element1);

let count1 = 0;

function clickButton2()
{
 
   let element1 = document.getElementsByClassName("dis");
   if (count % 2 ==0 ) element1.classList.add('active');
   else element1.classList.remove('active');
   count1 ++;
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", clickButton2);
