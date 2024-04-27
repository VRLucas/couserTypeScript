// Tipo never
export function criaErro(): never {
  throw new Error('Erro');
}

criaErro();
