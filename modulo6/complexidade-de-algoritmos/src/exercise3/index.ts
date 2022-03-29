export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
  ): void => {
    if (
      matrix[rowIndex] === undefined ||
      matrix[rowIndex][columnIndex] === undefined
      
    ) {
      throw new Error("Fora do intervalo da matriz");

    }
    console.log("matrix:", matrix, "rowIndex:", rowIndex, "columnIndex:", columnIndex, "value:", value )

    matrix[rowIndex][columnIndex] = value;
  };

