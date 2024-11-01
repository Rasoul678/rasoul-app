import { Metadata } from "next";

import MyProfile from "./MyProfile";

export const metadata: Metadata = {
  title: "about",
};

const ProfilePage = () => {
  return (
    <div>
      <main className="md:p-14 mt-[5rem] md:mt-[1.5rem] mx-5 sm:mx-auto sm:w-[85%] lg:w-[67%]">
        <section className="px-3 bg-gray-900 rounded-xl flex flex-col justify-between min-h-[calc(100lvh-13.5rem)] sm:min-h-[auto]">
          <MyProfile />
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
