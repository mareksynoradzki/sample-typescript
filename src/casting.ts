type CScores = {
    name: string;
    scores: number[]
};

function logScores(scores: unknown) {
    console.log((scores as CScores).name);
    console.log((scores as CScores).scores);
}