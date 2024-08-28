import React from "react";
import imageMap from "../../asset/images";
import cross from "../../asset/images/cross.svg";

import { useSwipeable } from "react-swipeable";

//custom hooks
import useWindowHeight from "../../hook/heightWindowHook";

interface PopUpInterface {
  title: string;
  description: string;
  closePopup: Function;
}

export const PopUp: React.FC<PopUpInterface> = React.memo(
  ({ title, description, closePopup }) => {
    const windowsHeight: number = useWindowHeight();

    const handler = useSwipeable({
      onSwipedRight: () => closePopup()
    })

    return (
      <div
        {...handler}
        onClick={() => closePopup()}
        className={
          "bg-black bg-opacity-70 fixed w-full top-0 left-0 flex justify-center"
        }
        style={{ minHeight: windowsHeight }}
      >
        <div className={"absolute top-10 max-w-w78_5 w-w97 "}>
          <div className={"font-caveat max-w-7xl mx-auto px-3"}>
            <div
              className={`bg-beige-500 rounded-xl h-[${window.innerHeight}]`}
            >
              <ul
                className={
                  "grid relative justify-items-center items-center p-10"
                }
              >
                <li
                  onClick={() => closePopup()}
                  className={
                    "bg-white rounded-full absolute top-4 right-5 cursor-pointer"
                  }
                >
                  <img className="w-14 h-14" src={cross} alt="" />
                </li>
                <li>
                  <img
                    className={"bg-white rounded-full h-44 mb-3"}
                    src={imageMap[title]}
                    alt=""
                  />
                </li>
                <li className={"text-6xl mb-4 max-[600px]:text-4xl"}>
                  {title}
                </li>
                <li
                  className={
                    "text-4xl text-justify max-[780px]:text-2xl max-[460px]:text-xl max-[370px]:text-base"
                  }
                >
                  {description}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
