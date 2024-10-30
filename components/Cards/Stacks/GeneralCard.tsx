import CustomLink from "@components/CustomLink";
import { iconsList } from "@components/icons";
import { routes } from "@utils";

type IProps = {
  children?: React.ReactNode;
  title?: string;
  href?: routes;
  colors?: {
    border: string;
    bg: string;
    bgHover: string;
    textHover: string;
    text: string;
  };
};

const GeneralCard: React.FC<IProps> = ({ children, title, href, colors }) => {
  return (
    <div
      className={`stack-card group ${colors?.border} ${colors?.text} ${colors?.bg}`}
    >
      {children}
      <div className="card-title">{title}</div>
      <CustomLink
        href={href || "#"}
        className={`group app-button ${colors?.border} ${colors?.textHover} ${colors?.bgHover}`}
        data-vi={`vi-${title}-card`}
      >
        <div className="group-hover:hidden sm:hidden">
          {iconsList.folder({ width: 25 })}
        </div>
        <div className="hidden group-hover:block sm:group-hover:hidden">
          {iconsList["opened_folder"]({ width: 25 })}
        </div>
        <span className="hidden sm:inline">Read more</span>
      </CustomLink>
    </div>
  );
};

export default GeneralCard;
