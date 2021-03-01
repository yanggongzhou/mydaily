//登录
export interface LoginForm {
  username: string;
  password: string;
}
export interface LoginRules {
  username: any;
  password: any;
}

export interface ListData {
  page: number;
  pageSize:number;
}



// 基础
export interface Meta {
  views: number;
  likes: number;
  comments: number;
}


export interface UserInfo {
  _id: string;
  name: string;
  avatar: string | any;
}
export interface RegAndLogParams {
  email: string;
  name: string;
  password: string;
  phone: string;
  desc: string;
}

// 导航 nav
export interface NavListItem {
  index: string;
  path: string;
  name: string;
}

// 文章归档
export interface ParamsArchive {
  keyword: string;
  likes: string; // 是否是热门文章
  state: number; // 文章发布状态 => 0 草稿，1 已发布,'' 代表所有文章
  article: number;
  tag_id: string;
  category_id: string;
  pageNum: number;
  pageSize: number;
}
export interface ArchiveListItem {
  create_time: string;
  title: string;
  _id: string;
}
export interface ArchiveList {
  year: string;
  list: ArchiveListItem[];
}
export interface ArchiveData {
  count: number;
  list: ArchiveList | any;
}

export interface ArticleDetailParams {
  id: string | string[];
  type: number;
}
export interface LikeParams {
  id: string;
  user_id: string;
}

// 文章列表
export interface ArticlesParams {
  keyword: string;
  likes: string; // 是否是热门文章
  state: number; // 文章发布状态 => 0 草稿，1 已发布,'' 代表所有文章
  tag_id: string;
  category_id: string;
  pageNum: number;
  pageSize: number;
}

export interface List {
  category: string[];
  create_time: string;
  desc: string;
  img_url: string;
  meta: Meta;
  tags: string[];
  title: string;
  _id: string;
}
export interface ArticlesData {
  count: number;
  list: List | any;
}

// 留言
export interface MessageParams {
  email: string;
  phone: string;
  name: string;
  content: string;
}
export interface RulesItem {
  validator: Function;
  trigger: string;
}
export interface Rules {
  email: RulesItem[];
  phone: RulesItem[];
  name: RulesItem[];
  content: RulesItem[];
}

// 项目
export interface ProjectList {
  content: string;
  end_time: string;
  img: string;
  start_time: string;
  title: string;
  url: string;
  _id: string;
}
export interface ProjectsData {
  count: number;
  list: ProjectList | any;
}

// 历程
export interface TimelineList {
  content: string;
  end_time: string;
  start_time: string;
  title: string;
  state: number;
  _id: string;
}
export interface TimelinesData {
  count: number;
  list: TimelineList | any;
}

// 标签
export interface TagList {
  name: string;
  _id: string;
}
export interface TagsData {
  count: number;
  list: TagList | any;
}
