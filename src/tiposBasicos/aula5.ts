// Tipo Array
// Array<T> - T[]
export function multArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}
const result = multArgs(1, 2, 3);
const result2 = concatenaStrings('Lucas', 'Rodrigues', 'Souza');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(result2);
console.log(upper);
