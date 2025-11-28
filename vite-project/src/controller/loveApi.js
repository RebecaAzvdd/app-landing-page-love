import axios from "axios";

export async function calculateLove(nome1, nome2) {
  try {
    const response = await axios.get(
      "https://love-calculator.p.rapidapi.com/LoveCalculator/calculate",
      {
        params: {
          FirstName: nome1,
          SecondName: nome2,
        },
        headers: {
          "x-rapidapi-key": "58bcb62975msha0bdb00212cc120p12227bjsncc50adc2041a",
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "X-API-KEY": "de305d54-75b4-431b-adb2-eb6b9e546014",
        },
      }
    );

    return response.data;

  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }
}