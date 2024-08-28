import axios from "axios";

export const getSigns = async (language:string) => {
  const response = await axios.post("https://poker247tech.ru/get_horoscope/", {
    language: language === "RU"? "original":"translated",
    period: "today",
  });

  return response.data;
};
