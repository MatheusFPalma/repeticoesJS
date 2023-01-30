/*Inicialize uma variável com o valor de 5.000 (cinco mil), utilizando
While adicione a este valor 30% de acréscimo até que este valor
seja maior ou igual a 10.000 (dez mil). Imprima no console os
salários parciais.*/

let salario = 5000;

while (salario < 10000) {
  salario += salario * 0.3;
  console.log(salario);
}
