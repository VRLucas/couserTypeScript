/* eslint-disable */
// Tipos básicos (aqui ocorre inferência de tipos)
// Type Annotations
let nome: string = 'Lucas'; // Qualquer tipo de Strings: '' "" ``
let sobrenome: string = 'Souza';
let idade: number = 22; // Número Inteiro ou Float
let isAtivo: boolean = true; // Boolean, verdadeiro ou falso
let simbolo: symbol = Symbol('qualquer-symbol'); //symbol
// let big: bigint = 10n;  // BigInt - Numero inteiro grande
// console.log(nome, idade, isAtivo,simbolo);

// Arrays
let arrayOfNumber:number[] = [1, 2, 3];
let arrayOfString:  Array<string> = ['Lucas','Souza','Souza'];
let arrayOfString2:  string[] = ['Lucas','Souza','Souza'];

// Objetos
export let pessoa: {
  nome: string;
  sobrenome: string;
  idade: number;
  adulto?: boolean;
} = {
  nome: nome,
  sobrenome: sobrenome,
  idade: idade,
  adulto: isAtivo,

};

console.log(pessoa.nome);
// Funções

function soma(a: number, b: number) : number{
  return a + b;
}
const resultado = soma(2,3);

