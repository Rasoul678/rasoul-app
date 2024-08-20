import React from "react";

import { notionService } from "@utils/api-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "live coding",
};

interface IProps {}

const Codes: React.FC<IProps> = async (props) => {
  const records = await notionService.getDBMainByTag();
  console.log(records.results[0]);

  return <div>Codes</div>;
};

export default Codes;
