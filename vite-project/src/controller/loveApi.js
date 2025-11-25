export async function calculateLove(nome1, nome2) {
  const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {
      sname: nome1,
      fname: nome2,
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST
    },
  };

  try {
    const response = await axios.request(options);
    return response.data; 
  } catch (error) {
    console.error('Erro na requisição:', error);
    return null;
  }
}