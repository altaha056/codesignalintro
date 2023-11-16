function solution(n) {
  // Initialize the empty matrix with zeros
  const matrix = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  let counter = 1;
  let startRow = 0,
    endRow = n - 1,
    startCol = 0,
    endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Traverse top row
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter++;
    }
    startRow++;

    // Traverse right column
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter++;
    }
    endCol--;

    // Traverse bottom row
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        matrix[endRow][i] = counter++;
      }
      endRow--;
    }

    // Traverse left column
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startCol] = counter++;
      }
      startCol++;
    }
  }

  return matrix;
}

// Example with n=3
const resultMatrix = solution(3);
console.log(resultMatrix);
