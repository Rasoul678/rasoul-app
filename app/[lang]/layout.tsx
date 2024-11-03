import Footer from "@components/footer";
import ServerIntlProvider from "@components/intl-provider";
import Navbar from "@components/navbar";
import TopLoader from "@components/top-loader";
import UserProvider from "@components/user-provider";
import type { Locale } from "@i18n-config";

import "@styles/globals.css";

import {
  caveat,
  concert,
  edu,
  exo2,
  getDBUser,
  getMyMetadata,
  iranSans,
  lilita,
  quicksand,
} from "@utils";
import RQProvider from "@utils/react-query/provider";

import { getDictionary } from "./dictionaries";

export const metadata = getMyMetadata();

type IProps = {
  children: React.ReactNode;
  params: { lang: Locale };
};

const RootLayout: React.FC<IProps> = async (props) => {
  const {
    children,
    params: { lang },
  } = props;

  const user = await getDBUser();

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
            <UserProvider user={user}>
              <TopLoader />
              <Navbar />
              <div className="main_gradient">
                <div className="gradient" />
              </div>
              <main>{children}</main>
              <Footer />
            </UserProvider>
          </ServerIntlProvider>
        </RQProvider>
      </body>
    </html>
  );
};

export default RootLayout;
