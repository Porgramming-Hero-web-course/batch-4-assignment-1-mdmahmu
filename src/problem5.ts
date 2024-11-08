const getProperty = <T, K extends keyof T>(myObj: T, key: K): T[K] => {
  return myObj[key];
};

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
