let b = prompt("введіть п'ятизначне число");

if (b.length == 5) {
  if (b[0] == b[4] && b[1] == b[3]) {
    alert("Це число паліндром");
  } else {
    alert("ні, не паліндром");
  }
} else {
  alert(" п'ятизначне число!");
}
