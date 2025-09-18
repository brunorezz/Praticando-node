const getUser = process.argv[2];
greetUser(getUser);

function greetUser(name) {
  console.log(`Alô, ${name}`);
}
