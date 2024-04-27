type MapStringsCallBack = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringsCallBack): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}
const abc = ['a', 'b', 'c'];
const abcMap = mapStrings(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMap);
