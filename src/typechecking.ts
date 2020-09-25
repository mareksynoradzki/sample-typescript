const scoresCheck = (scores: any): scores is { name: string; scores: number[] } => {
    return "name" in scores && "scores" in scores;
};

type tScores = { name: string; scores: number[] }

const tscoresCheck = (scores: any): scores is tScores => {
    return "name" in scores && "scores" in scores;
};