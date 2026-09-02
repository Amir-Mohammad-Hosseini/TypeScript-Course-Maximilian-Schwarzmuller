// indexed access type

const appUser = {
  name: "Amir",
  age: 21,
  permissions: [
    {
      id: "a15",
      title: "admin",
      description: "admin access",
    },
  ],
};

type AppUSer = typeof appUser

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
}[];
};


// indexed access type feature is this :
type Perms = AppUSer["permissions"]


// Access to array elements with indexed access type :
type Perm =Perms[number]

type Names = string[]

type Name = Names[number]