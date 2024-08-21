
import { Direction, arrows } from "./svg/arrows";

type IProps = {
  dir?: Direction;
  onClick?: () => void;
};

export const ArrowIcon = ({ dir = "left" }: IProps) => {
  return <>{arrows[dir]}</>;
};
