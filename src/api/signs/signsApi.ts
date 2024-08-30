import axios from "axios";

export const getSigns = async (language: string) => {
  // const response = await axios.post("https://poker247tech.ru/get_horoscope/", {
  //   language: language === "RU"? "original":"translated",
  //   period: "today",
  // });
  const payload = {
    horoscope: {
      aquarius: "api is not working",
      aries: "api is not working",
      cancer: "api is not working",
      capricorn: "api is not working",
      gemini: "api is not working",
      leo: "api is not working",
      libra: "api is not working",
      pisces: "api is not working",
      sagittarius: "api is not working",
      scorpio: "api is not working",
      taurus: "api is not working",
      virgo: "api is not working",
    },
  };
  return payload;
};
