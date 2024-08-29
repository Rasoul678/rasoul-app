import { useContext } from "react";

import { IntlContext } from "@components/intl-provider";

type Props = {};

const typewriter = ["", "Programming", "Designing", "Music", "Art", "Movie"];

const WordLoader = ({}: Props) => {
  const intl = useContext(IntlContext);

  return (
    <div className="loader">
      <p>I love</p>
      <div className="words">
        {typewriter.map((word) => (
          <span className="word" key={word}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordLoader;
