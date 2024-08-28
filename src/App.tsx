import React, { useCallback, useEffect, useState } from "react";
import { PopUp } from "./components/PopUp/PopUp";
import axios, { AxiosResponse } from "axios";
import imageMap from "./asset/images";
import { Language } from "./components/language/Language";
import { scrollbarWidth } from '@xobotyi/scrollbar-width';
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getSigns } from "./features/signs/signsSlice";

interface AppInterface {
  horoscope: {
    horoscope: {
      aquarius: string;
      aries: string;
      cancer: string;
      capricorn: string;
      gemini: string;
      leo: string;
      libra: string;
      pisces: string;
      sagittarius: string;
      scorpio: string;
      taurus: string;
      virgo: string;
    };
  } | null;
  sign: {
    title: string;
    description: string;
  } | null;
}

const App: React.FC = () => {
  const { horoscope } = useAppSelector((state) => state.signs);
  const dispatch = useAppDispatch();

  const [currentSign, setCurrentSign] = useState<AppInterface["sign"]>(null);
  const [language, setLanguage] = useState<string>("RU");

  useEffect(() => {
    dispatch(getSigns(language));
  }, [language]);

  const clearCurrentSign = useCallback(() => {
    setCurrentSign(null);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }, []);

  const changeLanguage = useCallback(() => {
    language === "RU" ? setLanguage("EN") : setLanguage("RU");
  }, [language]);

  const currentDate = new Date().toLocaleDateString();
  return (
    <div className="App">
      <div className={"font-caveat max-w-7xl mx-auto px-3"}>
        <Language language={language} changeLanguage={changeLanguage} />
        <div>
          {horoscope !== null && (
            <div>
              <ul
                className={
                  "grid grid-cols-3 justify-items-center h100 text-4xl text-center mt-10 max-[836px]:grid-cols-2 max-[400px]:grid-cols-1"
                }
              >
                {Object.keys(horoscope).map((sign) => {
                  return (
                    <li
                      key={sign}
                      className={
                        "bg-beige-500 flex flex-col items-center justify-center py-7 px-14 mb-14 cursor-pointer rounded-xl max-[580px]:px-4"
                      }
                      onClick={() => {
                        document.body.style.overflow = "hidden";
                        document.body.style.paddingRight = scrollbarWidth() + "px";
                        setCurrentSign({
                          title: sign,
                          description:
                            horoscope[sign as keyof typeof horoscope],
                        });
                      }}
                    >
                      <img
                        className={"bg-white rounded-full"}
                        src={imageMap[sign]}
                        alt=""
                      />
                      <br />
                      {sign}
                      <br />
                      <span>{currentDate}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {currentSign !== null && (
            <PopUp
              title={currentSign?.title}
              description={currentSign?.description}
              closePopup={clearCurrentSign}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
