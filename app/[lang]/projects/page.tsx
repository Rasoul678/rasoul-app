import ClassicCard from "@components/Cards/Classic";
import Astronaut from "@components/Cards/Astronaut";
import React from "react";

interface IProps {}

const Projects: React.FC<IProps> = (props) => {
  return (
    <div>
      Cards:
      <ClassicCard />
      <br />
      <Astronaut />
    </div>
  );
};

export default Projects;
