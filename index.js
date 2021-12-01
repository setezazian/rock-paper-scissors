var rockPaperScissor = function(numOfRounds) {
  if (numOfRounds === undefined) {
    numOfRounds = 3;;
  };
  
  var result = [];
  var plays = ['R', 'P', 'S'];
  
  var outcome = function(playedSoFar, roundsLeft) {
    if (roundsLeft === 0) {
      result.push(playedSoFar);
    }
    
    for (var i = 0; i < plays.length; i++) {
      outcome(playedSoFar.concat(plays[i]),roundsLeft--);
    }
  }
  
  outcome("", numOfRounds);
  return result;
}
