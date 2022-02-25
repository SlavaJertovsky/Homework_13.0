//дана строка цифр вы должны заменить любую цифру ниже 5 на« 0», а любую цифру выше или равную 5 на« 1».Функция возвращает строку.


function fakeStr(test) {
    let result = '';
    for (let i = 0;  test[i]; i++){
        if (test[i] < 5 ) {
            result = result + '0';
        } else if (test[i] > 5 ) {
            result = result + '1';
        }
    }
    return result;


}

 console.log(fakeStr('45385593107843568')); // '01011110001100111'
 console.log(fakeStr('509321967506747')); // 101000111101101
