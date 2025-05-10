function shortcut(str1, str2) {
  if (!str1 || !str2) {
    return '';
  }
  return str1[0] + str2[0];
}

const str1 = prompt("Enter first word:");
const str2 = prompt("Enter second word:");

const result = shortcut(str1, str2);
alert(result);

