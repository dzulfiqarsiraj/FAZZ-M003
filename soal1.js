// Soal 1

function scoreCheck(scores){
    let finalScores = []
    for(let score of scores){
        let tempScore = 0
        if(score < 38){
            finalScores = [...finalScores, score]
        } else {
            const roundScore = Math.ceil(score/5)*5
            if(roundScore - score < 3){
                finalScores = [...finalScores, roundScore]
            } else {
                finalScores = [...finalScores, score]
            }
        }
    }
    return finalScores
}

console.log(scoreCheck([29,37,38,39,57]))