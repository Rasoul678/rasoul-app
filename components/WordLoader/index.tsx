import { useContext } from "react";

import { IntlContext } from "@components/intl-provider";

type Props = {};

const typewriter = ["Programming", "Design", "Music", "Art"];

const WordLoader = ({}: Props) => {
  const intl = useContext(IntlContext);

  return (
    <div className="cardLoader ">
      <div className="loader">
        <p className="">I like</p>
        <div className="words">
          {typewriter.map((word) => (
            <span className="word" key={word}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordLoader;
