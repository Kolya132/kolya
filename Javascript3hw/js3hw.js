// Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
const x = +prompt('enter your number')
if (x!=0) {
    console.log('virno');
} else{
    console.log('nevirno')
}
// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
const time = +prompt('what time is now');
if (time<=15 && time>0 ) {
    console.log('firstQuater');
} else if (time<=30 && time>15) {
console.log('secondQuater');
}else if (time<=45 && time>15) {
    console.log('thirdQuater');
} else if (time<=60 && time>45) {
    console.log('fourthQuater');
} else {
    console.log('???')
}
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
const day = +prompt('enter the day')
if (day<=10 && day>0) {
    console.log('first part of month');
} else if(day<=20 && day>10) {
    console.log('second part of month');
} else if (day<=31 && day>20) {
    console.log('third part of month')
} else {
    console.log('??!!')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const days = +prompt('choose the day')
switch (days) {
    case 1:
        console.log('monday')
        break;
    case 2:
        console.log('tuesday')
        break;
    case 3:
        console.log('wednesday')
        break;
    case 4:
        console.log('thursday')
        break;
    case 3:
        console.log('friday')
        break;
    case 6:
        console.log('saturday')
        break;
    case 7:
        console.log('sunday')
}
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
const firstNumber= +prompt('number1')
const secondNumber= +prompt('number2')
if (firstNumber>secondNumber) {
    console.log(firstNumber);
} else if (firstNumber<secondNumber) {
    console.log(secondNumber);
} else if (firstNumber===secondNumber) {
    console.log('these values are the same');
} else{
    console.log('???')
}
// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
const y=''|| 'default';

