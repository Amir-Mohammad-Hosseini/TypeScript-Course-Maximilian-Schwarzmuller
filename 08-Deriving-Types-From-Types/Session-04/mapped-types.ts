// Mapped types feature

type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

// (-?) is for removing optional props
// readonly flag to make a property readonly => readonly [Key in keyof T] ?: number

// (-readonly) flag is for remove readonly props => -readonly [Key in keyof T] ?: number

type Results<T> = {
  [Key in keyof T]?: number;
};

let mathOperations: Operations = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

let mathResults: Results<Operations> = {
  add: mathOperations.add(18, 19),
  subtract: mathOperations.add(15, 20),
};

mathResults.add = 25;
