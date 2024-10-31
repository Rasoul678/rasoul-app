import { DBUser } from "@types";

import { notionService } from "./api-service";
import { myDefaultUser } from "./constants";

export const getDBUser = async () => {
  let user = myDefaultUser;

  const db_users = await notionService.getDBUserByRolle();

  if (db_users) {
    const {
      Person,
      EMail,
      Location,
      ProfileImage,
      Telefon,
      Github,
      LinkedIn,
      Medium,
      Telegram,
      Stackoverflow,
      YouTube,
      CV,
    } = (db_users.results[0] as DBUser).properties;

    user.name = Person.people[0].name;
    user.email = EMail.email;
    user.picture_url = ProfileImage.files[0].file?.url || "";
    user.phone = Telefon.phone_number;
    user.location = Location.rich_text[0].plain_text;
    //! social links
    Github.url && (user.socialLinks.github = Github.url);
    LinkedIn.url && (user.socialLinks.linkedin = LinkedIn.url);
    Medium.url && (user.socialLinks.medium = Medium.url);
    Telegram.url && (user.socialLinks.telegram = Telegram.url);
    Stackoverflow.url && (user.socialLinks.stackoverflow = Stackoverflow.url);
    YouTube.url && (user.socialLinks.youtube = YouTube.url);
    CV.files[0].file?.url && (user.CV_url = CV.files[0].file?.url);
  }

  return user;
};

export type GetDBUserReturnType = Awaited<ReturnType<typeof getDBUser>>;
