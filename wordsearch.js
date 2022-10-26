//Paired programming done by Rahim and Ron
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const horizontalJoinB = letters.map(ls => ls.reverse().join(''));
  
    const newArr = [];
    for (let i = 0; i < letters[0].length; i++) {
      const newNewArr = [];
      for (let j = 0; j < letters.length; j++) {
        newNewArr.push(letters[j][i]);
      }
      newArr.push(newNewArr);
    }
  
    const verticalLetters = letters.reverse();
    const newArrB = [];
    for (let i = 0; i < verticalLetters[0].length; i++) {
      const newNewArr = [];
      for (let j = 0; j < verticalLetters.length; j++) {
        newNewArr.push(verticalLetters[j][i]);
      }
      newArrB.push(newNewArr);
    }
    
    const verticalJoin = newArr.map(ls => ls.join(''));
    const verticalJoinB = newArrB.map(ls => ls.join(''));
  
  
    if (!word) return false;
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    for (v of verticalJoin) {
      if (v.includes(word)) return true;
    }
    for (vb of verticalJoinB) {
      if (vb.includes(word)) return true;
    }
    for (hb of horizontalJoinB) {
      if (hb.includes(word)) return true;
    }
    return false;
  };
  
  module.exports = wordSearch;
  
  wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'LAUQ');

  