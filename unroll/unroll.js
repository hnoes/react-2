function unroll(square) {
    const result = [];
  
    while (square.length > 0) {
      // Move right
      result.push(...square.shift());
  
      // Move down
      for (let i = 0; i < square.length - 1; i++) {
        result.push(square[i].pop());
      }
  
      // Move left (if there are elements left)
      if (square.length > 0) {
        result.push(...square.pop().reverse());
      }
  
      // Move up (if there are elements left)
      for (let i = square.length - 1; i >= 0; i--) {
        result.push(square[i].shift());
      }
    }
  
    return result;
  }
  
  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  const unrolled = unroll(square);
  console.log(unrolled); // Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
  
