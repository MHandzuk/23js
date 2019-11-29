let year = prompt("Рік народження, цифрами?");

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
  alert("Високосний");
} else {
  alert("Невисокосний");
}
