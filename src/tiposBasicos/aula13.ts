// Type alias
type Idade = number;
type Pessoa = {
  nome: string;
  sobrenome: string;
  salario: number;
  idade: Idade;
  corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYX = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorWP = 'Preto' | 'Branco';
type corPreferida = CorRGB | CorCMYX | CorWP;

const person: Pessoa = {
  nome: 'Lucas',
  sobrenome: 'Souza',
  salario: 1000,
  idade: 23,
};
export function setCorPreferida(person: Pessoa, cor: corPreferida): Pessoa {
  return { ...person, corPreferida: cor };
}
console.log(setCorPreferida(person, 'Preto'));
console.log(person);
