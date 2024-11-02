import { LinkProps } from "next/link";

import { Locale } from "@i18n-config";

export type SelectEvent = React.ChangeEvent<HTMLSelectElement>;

export type InfiniteResponseDataType<T> = {
  data: T;
  metaData: {
    lastCursor: string;
    hasNextPage: boolean;
  };
};

export type IconType = {
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
  className?: string;
};

export type RepoType = {
  all_languages: [string, number][];
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
  };
};

// Notion Types
type NotionUser = "person" | "bot";
type ID_Type = { id: string; type: string };

export type NotionUserType = {
  avatar_url: string;
  id: string;
  name: string;
  object: string;
  person: { email: string };
  type: NotionUser;
};

type EmptyObject = Record<string, never>;

export type NotionRespondType<RT> = {
  has_more: boolean;
  next_cursor: null | number;
  object: string;
  request_id: string;
  results: Array<RT>;
  type: NotionUser;
  user: EmptyObject;
};

type NotionFileType = { url: string; expiry_time: string } | null;
type DateienUndMedien = {};
type Parent = {
  type: string;
  database_id: string;
};
type Createdby = {
  object: string;
  id: string;
};
type Cover = { type: string; file: NotionFileType } | null;
type Icon = {
  type: string;
  emoji?: string;
  external?: { url: string };
} | null;

export type NotionDBResultsType<T> = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Createdby;
  last_edited_by: Createdby;
  cover: Cover;
  icon: Icon;
  parent: Parent;
  archived: boolean;
  in_trash: boolean;
  properties: T;
  url: string;
  public_url: null | string;
};

type DBTitleType = {
  annotations: {
    bold: boolean;
    code: boolean;
    color: string;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  };
  href: null | string;
  plain_text: string;
  text: { content: string | null; link: null | string };
  type: string;
};

export type MainDBPropertiesType = {
  ArticlePage: { id: string; type: string; rich_text: [] };
  Author: { id: string; type: string; people: Array<NotionUserType> };
  Button: { id: string; type: string; button: EmptyObject };
  CreatedAt: { id: string; type: string; created_time: string };
  CreatedBy: { id: string; type: string; created_by: NotionUserType };
  Data: {
    id: string;
    type: string;
    files: Array<{ name: string; type: string; file: NotionFileType }>;
  };
  Date: { id: string; type: string; date: null | string };
  ID: { id: string; type: string; unique_id: EmptyObject };
  LastChangeAt: { id: string; type: string; last_edited_time: string };
  LastChangeBy: { id: string; type: string; last_edited_by: NotionUserType };
  Likes: { id: string; type: string; number: null | number };
  Rating: {
    id: string;
    type: string;
    select: { color: string; id: string; name: string };
  };
  Status: {
    id: string;
    type: string;
    status: { color: string; id: string; name: string };
  };
  Tags: {
    id: string;
    type: string;
    multi_select: Array<{ color: string; id: string; name: string }>;
  };
  Text: { id: string; type: string; rich_text: Array<DBTitleType> };
  Title: { id: string; type: string; title: Array<DBTitleType> };
  URL: { id: string; type: string; url: null | string };
  Users: {
    id: string;
    type: string;
    relation: Array<{ id: string }>;
    has_more: boolean;
  };
};

export type CustomLinkType = LinkProps & React.HTMLProps<HTMLAnchorElement>;

export type NextParamsType = {
  lang: Locale;
  article: string;
};

export type NextSearchParamsType = {
  [key: string]: string | string[] | undefined;
};

export type DBUserPropertiesType = {
  ProfileImage: MediaType;
  CV: MediaType;
  LinkedIn: UrlType;
  Stackoverflow: UrlType;
  YouTube: UrlType;
  Website: UrlType;
  Telegram: UrlType;
  Medium: UrlType;
  Github: UrlType;
  X: UrlType;
  EMail: EMailType;
  Birthday: DateType;
  Education: MultiSelectType;
  Experiences: MultiSelectType;
  About: TextType;
  Rolle: SelectType;
  Telefon: TelefonType;
  ID: EmptyObject;
  Hobbys: MultiSelectType;
  Bachelor: UrlType;
  Master: UrlType;
  Person: PersonType;
  Rasoulmedia: RasoulmediaType;
  Name: NameType;
  Location: TextType;
};

type DateType = {
  id: string;
  type: string;
  date: Date;
};

type Date = {
  start: string;
  end: null;
  time_zone: null;
};

type EMailType = {
  id: string;
  type: string;
  email: string;
};

type TextType = {
  id: string;
  type: string;
  rich_text: Richtext[];
};

type SelectType = {
  id: string;
  type: string;
  select: Select;
};

type Select = {
  id: string;
  name: string;
  color: string;
};

type TelefonType = {
  id: string;
  type: string;
  phone_number: string;
};

type MultiSelectType = {
  id: string;
  type: string;
  multi_select: Select[];
};

type RasoulmediaType = {
  id: string;
  type: string;
  relation: Relation[];
  has_more: boolean;
};

type Relation = {
  id: string;
};

type PersonType = {
  id: string;
  type: string;
  people: People[];
};

type People = {
  object: string;
  id: string;
  name: string;
  avatar_url: string;
  type: string;
  person: {
    email: string;
  };
};

type MediaType = {
  id: string;
  type: string;
  files: Files[];
};

type Files = {
  name: string;
  type: string;
  file: NotionFileType;
};

type UrlType = ID_Type & {
  url: string;
};

type NameType = {
  id: string;
  type: string;
  title: Richtext[];
};

type Richtext = {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: string | null;
};

type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

type Text = {
  content: string;
  link: string | null;
};

export type DBUser = NotionDBResultsType<DBUserPropertiesType>;
