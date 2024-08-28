import React from "react";

interface Language {
  language: string;
  changeLanguage: Function;
}

export const Language: React.FC<Language> = React.memo(({ language, changeLanguage }) => {
  return (
    <div
      data-testid="divElement"
      className={"bg-beige-500 rounded-full font-caveat absolute top-3 right-3 w-[30px] h-[30px] cursor-pointer"}
      onClick={() => changeLanguage()}
    >
      <p className={"text-2xl"}>{language}</p>
    </div>
  );
});
