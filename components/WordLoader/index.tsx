type Props = {};

const typewriter = [
  "",
  "Programming",
  "Designing",
  "Technology",
  "Fotoshooting",
];

const WordLoader = ({}: Props) => {
  return (
    <div className="loader">
      <p>I love</p>
      <div className="words">
        {typewriter.map((name) => (
          <span className="word" key={name}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordLoader;
