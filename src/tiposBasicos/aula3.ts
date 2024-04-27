// Tipo Void
function semRetorno(...args: string[]): void {
  console.log(args.join(''));
}
const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Souza',
  idade: 23,

  exibirNome(): void {
    console.log(`Seu nome e ${this.nome} ${this.sobrenome} `);
  },
};

semRetorno('Luiz, Otávio');
pessoa.exibirNome();

export { pessoa };
