import { LinkProps } from "next/link";

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

export type NotionUserType = {
  avatar_url: string;
  id: string;
  name: string;
  object: string;
  person: { email: string };
  type: NotionUser;
};

export type NotionRespondType<RT> = {
  has_more: boolean;
  next_cursor: null | number;
  object: string;
  request_id: string;
  results: Array<RT>;
  type: NotionUser;
  user: {};
};

type NotionFileType = { url: string; expiry_time: string } | null;

export type NotionDBResultsType<T> = {
  archived: boolean;
  cover: { type: string; file: NotionFileType };
  created_by: { object: string; id: string };
  created_time: string;
  icon: {
    type: string;
    emoji?: string;
    external?: { url: string };
  } | null;
  id: string;
  in_trash: boolean;
  last_edited_by: { object: string; id: string };
  last_edited_time: string;
  object: string;
  parent: { type: string; database_id: string };
  properties: T | MainDBPropertiesType;
  public_url: null | string;
  url: string;
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
  Button: { id: string; type: string; button: {} };
  CreatedAt: { id: string; type: string; created_time: string };
  CreatedBy: { id: string; type: string; created_by: NotionUserType };
  Data: {
    id: string;
    type: string;
    files: Array<{ name: string; type: string; file: NotionFileType }>;
  };
  Date: { id: string; type: string; date: null | string };
  ID: { id: string; type: string; unique_id: {} };
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
