interface IProps {
  direction: "horizontal" | "vertical";
}
const Handle: React.FC<IProps> = ({ direction }) => {
  return (
    <div
      className={
        direction === "horizontal" ? "resizableHhandle" : "resizableVhandle"
      }
    >
      <div>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default Handle;
