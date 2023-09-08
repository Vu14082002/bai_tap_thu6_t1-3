// Cau 1
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
let scrorDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log(` AVG Score Team Dolphins :`, scrorDolphins);
console.log(` AVG Score Team Koalas :`, scoreKoalas);
///////////////////////////////////////////////////////
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
if (scrorDolphins > scoreKoalas) {
  console.log("Team Dolphins win the game  ");
} else if (scrorDolphins < scoreKoalas) {
  console.log("Team Koalas win the game  ");
} else if (scrorDolphins === scrorDolphins) {
  console.log("Draw");
}
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
scrorDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;
console.log(` AVG Score Team Dolphins :`, scrorDolphins);
console.log(` AVG Score Team Koalas :`, scoreKoalas);
if (scrorDolphins > scoreKoalas && scrorDolphins >= 100) {
  console.log("Team Dolphins win the game  ");
} else if (scrorDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Team Koalas win the game  ");
} else if (scrorDolphins === scrorDolphins) {
  console.log("Draw");
}
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
scrorDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;
console.log(` AVG Score Team Dolphins :`, scrorDolphins);
console.log(` AVG Score Team Koalas :`, scoreKoalas);
if (scrorDolphins > scoreKoalas && scrorDolphins >= 100) {
  console.log("Team Dolphins win the game  ");
} else if (scrorDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Team Koalas win the game ");
} else if (
  scrorDolphins === scrorDolphins &&
  scrorDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Draw");
}
