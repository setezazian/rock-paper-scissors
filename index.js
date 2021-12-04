const rockPaperScissor = (input) => {
  let numberOfRounds = input;
  if (input === undefined) {
    numberOfRounds = 3;
  }

  const result = [];
  const plays = ['R', 'P', 'S'];

  const outcome = (playedSoFar, roundsLeft) => {
    if (roundsLeft === 0) {
      result.push(playedSoFar);
    } else {
      for (let i = 0; i < plays.length; i += 1) {
        outcome(playedSoFar.concat(plays[i]), roundsLeft - 1);
      }
    }
  };

  outcome('', numberOfRounds);
  return result;
};

module.exports = rockPaperScissor;
