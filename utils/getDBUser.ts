import { DBUser } from "@types";

import { notionService } from "./api-service";
import { myDefaultUser } from "./constants";

export const getDBUser = async () => {
  let user = myDefaultUser;

  const db_users = await notionService.getDBUserByRolle();

  if (db_users) {
    const props = (db_users.results[0] as DBUser).properties;

    props.Person.people.length != 0 &&
      (user.name = props.Person.people[0].name);
    user.email = props.EMail.email;
    props.ProfileImage.files.length != 0 &&
      (user.picture_url = props.ProfileImage.files[0].file?.url || "");
    user.phone = props.Telefon.phone_number;
    props.Location.rich_text.length != 0 &&
      (user.location = props.Location.rich_text[0].text.content);
    //! Social links
    props.Github.url && (user.socialLinks.github = props.Github.url);
    props.LinkedIn.url && (user.socialLinks.linkedin = props.LinkedIn.url);
    props.Medium.url && (user.socialLinks.medium = props.Medium.url);
    props.Telegram.url && (user.socialLinks.telegram = props.Telegram.url);
    props.Stackoverflow.url &&
      (user.socialLinks.stackoverflow = props.Stackoverflow.url);
    props.YouTube.url && (user.socialLinks.youtube = props.YouTube.url);
    props.CV.files.length != 0 &&
      (user.CV_url = props.CV.files[0].file?.url || "");
    props.About.rich_text.length != 0 &&
      (user.about = props.About.rich_text[0].text.content);
    props.Experiences.multi_select.length != 0 &&
      (user.experiences = props.Experiences.multi_select);
    props.ArticlesList.multi_select.length != 0 &&
      (user.articles_list = props.ArticlesList.multi_select);
    //! Authorizations
    props.ShowAboutMe &&
      (user.authorization.show_about_me = props.ShowAboutMe.checkbox);
    props.ShowArticles &&
      (user.authorization.show_articles = props.ShowArticles.checkbox);
    props.ShowBirthday &&
      (user.authorization.show_birthday = props.ShowBirthday.checkbox);
    props.ShowEducation &&
      (user.authorization.show_education = props.ShowEducation.checkbox);
    props.ShowExperiences &&
      (user.authorization.show_experiences = props.ShowExperiences.checkbox);
    props.ShowRepos &&
      (user.authorization.show_repos = props.ShowRepos.checkbox);
    props.ShowLiveCode &&
      (user.authorization.show_live_code = props.ShowLiveCode.checkbox);
    props.ShowEMail &&
      (user.authorization.show_email = props.ShowEMail.checkbox);
    props.ShowGithub &&
      (user.authorization.show_github = props.ShowGithub.checkbox);
    props.ShowResume &&
      (user.authorization.show_resume = props.ShowResume.checkbox);
    props.ShowSkills &&
      (user.authorization.show_skills = props.ShowSkills.checkbox);
    props.ShowTelefon &&
      (user.authorization.show_telefon = props.ShowTelefon.checkbox);
    props.ShowLocation &&
      (user.authorization.show_location = props.ShowLocation.checkbox);
    props.ShowLinkedIn &&
      (user.authorization.show_linkedin = props.ShowLinkedIn.checkbox);
  }

  return user;
};

export type GetDBUserReturnType = Awaited<ReturnType<typeof getDBUser>>;
