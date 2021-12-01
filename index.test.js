const rockPaperScissor = require('./index');

describe('test the implementation of rock paper scissors', () => {
  it('should generates 27 sequence of throws over a three-round game', () => {
    expect(rockPaperScissor()).toHaveLength(27);
  });

  it('should generates 243 sequence of throws over a five-round game', () => {
    expect(rockPaperScissor(5)).toHaveLength(243);
  });

  it('should contain RRR in a three-round game', () => {
    expect(rockPaperScissor(3)).toContain('RRR');
  });

  it('should contain SPRRR in a five-round game', () => {
    expect(rockPaperScissor(5)).toContain('SPRRR');
  });
});
