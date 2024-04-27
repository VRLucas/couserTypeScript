// O Structural type system do TypeScript
type User = { username: string; password: string };
type ValidaToFor = (user: User, setValue: User) => boolean;

const ValidateUser: ValidaToFor = (user, setValue) => {
  return (
    user.username === setValue.username && user.password === setValue.password
  );
};
const bdUser = { username: 'Joao', password: '123456' };
const sentUser = { username: 'Joao', password: '123456' };
const loggedIn = ValidateUser(bdUser, sentUser);
console.log(loggedIn);
