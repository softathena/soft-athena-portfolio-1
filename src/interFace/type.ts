import { StaticImageData } from "next/image";
import React from "react";
//define interface for a context api
export interface AppContextType {
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  niceSelectData: string;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string>>;
}

//define interface for a blog
export type TBlog = {
  id: number;
  image: StaticImageData;
  date: string;
  month?: string;
  blogTitle: string;
  desc?: string;
  blogTag?: string;
  authorName?: string;
  desination?: string;
  wowDelay?: string;
  authorImg?: StaticImageData;
  comment?: number;
  videoId?: string;
};

// Define interface for social media links
type TSocial = {
  id: number;
  icon: string;
  url: string;
};

// Define interface for a team member
export type TTeam = {
  id: number;
  image: StaticImageData;
  authorName: string;
  desination: string;
  yearsOfExperience: number;
  skills: TCounter[];
  bio: string;
  socialIcon: TSocial[];
  wowDelay?: string;
  expart: string;
};
//define interface for a service
export type TService = {
  id: number;
  wowDelay: string;
  icon: string;
  title: string;
  desc: string;
};
//define interface for a portfolio
export type TPortfolio = {
  id: number;
  image: StaticImageData;
  tagName: string;
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  clientFeedback: string;
  link: string;
  date: string;
};
//define interface for a counter data type
export type TCounter = {
  id: number;
  cunterNum: number;
  image?: StaticImageData;
  skillName?: string;
  bgColor?: string;
  wowDelay?: string;
  text?: string;
  icon?: string;
  desc?: string;
};
//define interface for a menu
export interface Imenu {
  id: number;
  label: string;
  link: string;
}

//define interface for a team
export interface TTestimonial {
  id: number;
  rating?: number;
  description: string;
  image: StaticImageData;
  userName: string;
  designation: string;
}
//define interface for a banner
export interface TBanner {
  id: number;
  bannerBg: StaticImageData;
  title: string;
  subTitle: string;
  desc: string;
  videoId: string;
}
//define interface for a nice select
export interface niceSelectType {
  id: number;
  option: string;
}
