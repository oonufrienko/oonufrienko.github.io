var arr = [];

for ( var i = 0; i < 5; i ++ ) {
    arr[i] = prompt("Введите "+ (i+1) +"-е имя", ""); 
}

var userName = prompt("Введите имя пользователя", "");

var flag = 0;

for ( var j = 0; j < arr.length; j++ ) {
    if ( arr[j] === userName ) {
        flag++;
    }
}

if (flag) {
    
    alert(userName + ", вы успешно вошли");

    } else {
    
        alert("Такого имени не найдено!");
}

