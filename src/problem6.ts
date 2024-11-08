interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (obj: Profile, updateData: Partial<Profile>): Profile => {
  const updatedObj = {
    ...obj,
    ...updateData,
  };
  return updatedObj;
};

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
