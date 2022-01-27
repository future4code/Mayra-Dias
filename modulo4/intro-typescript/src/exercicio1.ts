function checaTriangulo():string{
    const a:string = process.argv[2]
    const b:string = process.argv[3]
    const c:string = process.argv[4]

    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";

    }
  }
  console.log(checaTriangulo)