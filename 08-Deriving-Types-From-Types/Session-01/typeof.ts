// Use typeof

const userName = "Amir";

console.log(typeof userName);

type UserName = typeof userName;

const settings = {
  difficulty: "easy",
  minLevel: 10,
  didStart: false,
  players: ["Amir", "Ava"],
};

// type Settings = typeof settings;

function loadData(s : typeof settings) {
  // ...
}

loadData(settings);
