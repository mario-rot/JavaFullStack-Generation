// ToDo hacer la importacion
/*
* HAcer pruebas unitarias a una funcion que
* verifique si una palabra es palindromo 
* 
* "Ana" -> true
* "Bob" -> true
* "Radar" -> false
* "Saoko" -> false
* "Palabra" -> false
* "Somos o no somos" -> true*/

const { isPalindrome } = require('../scripts/palindromo.js');


// test("Prueba de 1+3 = 4")
test("Ana is palindrome: ", () => {
  expect(isPalindrome("Ana")).toBe(true);
})

test("Palabra", () => {
  expect(isPalindrome("Palabra")).toBe(false);
})

test("Bob", () => {
  expect(isPalindrome("Bob")).toBe(true);
})


test("'Somos o no somos' is palindrome: ", () => {
  expect(isPalindrome("Somos o no somos")).toBe(true);
})

