var arr = [];

for (var i = 0; i < 5; i ++) {
    arr[i] = prompt("Введите "+ (i+1) +"-е имя", ""); 
}

var userName = prompt("Введите имя пользователя", "");

var isNameMatch = false;

for (var j = 0; j < arr.length; j++) {
    if (arr[j] === userName) {
        isNameMatch = true;
        break;
    }
}

if (isNameMatch) {
  alert(userName + ", вы успешно вошли");
} else {
  alert("Такого имени не найдено!");
}

