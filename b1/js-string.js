let text = 'Learn Javasrcipt is easy and easy';
let text2 = "String2";

console.log(text);
console.log(text2);

console.log(text.slice(-4, -1));

console.log(text.substring(0,5));

// console.log(text.replace("easy", "very easy"));

console.log(text.replace(/easy/g, 'very easy'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text + ' ' + text2);
console.log(text.concat(' ', text2));

let textTrim = '        learn          js to easy          '
console.log(textTrim.replace(/\s+/g, " ").trim());
console.log(textTrim.trim());

console.log(text.indexOf('Javasrcipt'));