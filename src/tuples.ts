let product: [number, number];


//wykorzystanie krotki do definicji okregu
type SQUARE = [number, number];

let roomDimension: SQUARE = [20, 20]//tuple are iterable

//iterowanie po krotce
// for (let dimension of roomDimension) {
//     console.log(dimension);
// }
//iterowanie po krotce
roomDimension.forEach(dim => console.log(dim))

//open ended tuples
type Scores = [string, ...number[]];
const playScore: Scores = ["test", 12, 34, 56];

//konwertowanie tablicy na spead

const scores: [number, number, number] = [75, 65, 80];

function logScore1(score1, score2, score3) {
    console.log(score1 + ", " + score2 + ", " + score3);
}
logScore1(...scores);
type ScoresDef = [] | [number] | [number, number] | [number, number, number]


//tuple z opcjonalną liczba parametrow
type ScoresWithOptional = [number, number?, number?];
const samScores: ScoresWithOptional = [55];
const bobScores: ScoresWithOptional = [95, 75];
const jayneScores: ScoresWithOptional = [65, 50, 70];