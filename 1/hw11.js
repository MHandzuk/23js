let age = prompt("Age?");

if (age <= "2") {
  document.write("Ти дитина");
} else if (age <= "18") {
  document.write("Ти підліток");
} else if (age <= "60") {
  document.write("Дорослий");
} else {
  document.write("Скоро на пенсію");
}
