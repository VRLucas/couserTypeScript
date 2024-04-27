// Tipo null e undefined
/* eslint-disable */
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createrPeson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOF(x: any) {
  if (typeof x === 'number') {
    return x * x;
  }
  return null;
}
