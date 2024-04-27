// Tipo Objeto
const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Novo Valor A',
  chaveB: 'Novo Valor B',
};
objetoA.chaveA = 'Mundado o Valor';
objetoA.chaveC = 'Adicionada a Chave';
objetoA.chaveD = 'Lucas';

console.log(objetoA.chaveA);
console.log(objetoA.chaveC);
console.log(objetoA['chaveD']);
