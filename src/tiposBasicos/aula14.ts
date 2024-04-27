// Intersection types
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // And

const pessoa: Pessoa = {
  nome: 'Lucas',
  sobrenome: 'Souza',
  idade: 23,
};
console.log(pessoa);
