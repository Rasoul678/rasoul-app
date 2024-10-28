import Preview from "../Preview";
import ProgressBar from "../ProgressBar";

type IProps = {
  isBundling: boolean;
  code: string;
  error: string;
};

const CodeView: React.FC<IProps> = ({ isBundling, code, error }) => {
  return (
    <>{isBundling ? <ProgressBar /> : <Preview code={code} err={error} />}</>
  );
};

export default CodeView;
