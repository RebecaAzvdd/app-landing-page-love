export const calculateLove = (name1, name2) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const percentage = Math.floor(Math.random() * 101);
      
      let resultText = "O destino é incerto.";
      
      if (percentage > 80) {
        resultText = "Almas Gêmeas! O universo conspira a favor.";
      } else if (percentage > 50) {
        resultText = "Grande potencial, mas o diálogo é chave.";
      } else {
        resultText = "Os astros sugerem cautela e paciência.";
      }

      resolve({
        fname: name1,
        sname: name2,
        percentage: percentage,
        result: resultText
      });
    }, 1500); 
  });
};