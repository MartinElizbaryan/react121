export const greaterOrEqualZero = (value) => value >= 0;

export const getYear = (age) => {
  console.log(age);
  return new Date().getFullYear() - age;
};
