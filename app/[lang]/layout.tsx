import "@styles/globals.css";
import Footer from "@components/footer";
import ServerIntlProvider from "@components/intl-provider";
import Navbar from "@components/navbar";
import TopLoader from "@components/top-loader";
import type { Locale } from "@i18n-config";
import {
  iranSans,
  quicksand,
  exo2,
  caveat,
  concert,
  edu,
  lilita,
} from "@utils";
import RQProvider from "@utils/react-query/provider";

import { getDictionary } from "./dictionaries";

export const metadata = {
  title: "Rasoul Portfolio",
  description: "My portfolio website",
};

interface IProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

const RootLayout: React.FC<IProps> = async (props) => {
  const {
    children,
    params: { lang },
  } = props;

  const dict = await getDictionary(lang);

  const htmlDir = lang === "fa" ? "rtl" : "ltr";
  const htmlClasses = `${iranSans.variable} ${quicksand.variable} ${
    exo2.variable
  } ${caveat.variable} ${concert.variable} ${edu.variable} ${lilita.variable} ${
    lang == "fa" ? "font-iransans" : "font-my_quicksand"
  }`;

  return (
    <html lang={lang} className={htmlClasses} dir={htmlDir}>
      <body className="select-none">
        <RQProvider>
          <ServerIntlProvider dict={dict} lang={lang}>
            <TopLoader />
            <Navbar />
            <div className="main_gradient">
              <div className="gradient" />
            </div>
            <main>{children}</main>
            <Footer />
          </ServerIntlProvider>
        </RQProvider>
      </body>
    </html>
  );
};

export default RootLayout;
