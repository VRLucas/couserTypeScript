// Union Types
// string | number | boolean;

export function addConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}
console.log(addConcat(10, 20));
console.log(addConcat('10', '30'));
