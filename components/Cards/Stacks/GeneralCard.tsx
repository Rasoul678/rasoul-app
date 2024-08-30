import CustomLink from "@components/CustomLink";
import { iconsList } from "@components/icons";
import { routes } from "@utils";

type IProps = {
  children?: React.ReactNode;
  title?: string;
  href?: routes;
  colors?: {
    main: string;
    bg: string;
    textHover: string;
    text?: string;
  };
};

const GeneralCard: React.FC<IProps> = ({ children, title, href, colors }) => {
  return (
    <div
      className={`stack-card group border-[${colors?.main}] text-[${
        colors?.text || colors?.main
      }] bg-[${colors?.bg}]`}
    >
      {children}
      <div className="card-title">{title}</div>
      <CustomLink
        href={href || "#"}
        className={`group app-button border-[${colors?.main}] hover:text-[${colors?.textHover}] hover:bg-[${colors?.main}]`}
        data-vi={`vi-${title}-card`}
      >
        <div className="group-hover:hidden sm:hidden">
          {iconsList.folder({ width: 25 })}
        </div>
        <div className="hidden group-hover:block sm:group-hover:hidden">
          {iconsList.openFolder({ width: 25 })}
        </div>
        <span className="hidden sm:inline">Read more</span>
      </CustomLink>
    </div>
  );
};

export default GeneralCard;
