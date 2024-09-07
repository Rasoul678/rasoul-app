import { useContext } from "react";

import { IntlContext } from "@components/intl-provider";
import { UserContext } from "@components/user-provider";

type Props = {};

const typewriter = ["", "Programming", "Designing", "Music", "Art", "Movie"];

const WordLoader = ({}: Props) => {
  const intl = useContext(IntlContext);
  const userContext = useContext(UserContext);

  return (
    <div className="loader">
      <p>I love</p>
      <div className="words">
        {userContext?.user.Hobbys.multi_select.map(({ id, name }) => (
          <span className="word" key={id}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordLoader;
