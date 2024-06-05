import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaSwift,
  FaPhp,
  FaRuby,
  FaDocker,
  FaAws,
  FaAzure,
  FaGoogle,
} from "react-icons/fa";
import {
  SiAngular,
  SiAndroid,
  SiVueDotJs,
  SiSpring,
  SiKubernetes,
  SiGit,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { GrGolang } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";
import { IoLogoPython, IoLogoAngular, IoLogoVue } from "react-icons/io5";
import { DiReact } from "react-icons/di";
import { RiKotlinFill } from "react-icons/ri";
import { IoLogoSwift } from "react-icons/io";
import { FaRProject } from "react-icons/fa";
import { SiLaravel, SiGraphql, SiRedux, SiAws } from "react-icons/si";
import { FaDev } from "react-icons/fa";


const SkillIcons = {
    html: <FaHtml5 size={35} />,
    css: <FaCss3Alt size={35} />,
    js: <FaJs size={35} />,
    reactjs: <FaReact size={35} />,
    angular: <SiAngular size={35} />,
    android: <SiAndroid size={35} />,
    swift: <FaSwift size={35} />,
    vuejs: <SiVueDotJs size={35} />,
    nodejs: <FaNodeJs size={35} />,
    expressjs: <IoLogoNodejs size={35} />,
    mongodb: <BiWorld size={35} />,
    sql: <SiSpring size={35} />,
    python: <IoLogoPython size={35} />,
    django: <FaPython size={35} />,
    java: <FaJava size={35} />,
    spring: <SiSpring size={35} />,
    kotlin: <RiKotlinFill size={35} />,
    ios: <IoLogoSwift size={35} />,
    ruby: <FaRuby size={35} />,
    "ruby on rails": <FaRProject size={35} />,
    php: <FaPhp size={35} />,
    laravel: <SiLaravel size={35} />,
    typescript: <IoLogoJavascript size={35} />,
    redux: <SiRedux size={35} />,
    graphql: <SiGraphql size={35} />,
    "restful api": <FaDev size={35} />,
    docker: <FaDocker size={35} />,
    kubernetes: <SiKubernetes size={35} />,
    git: <SiGit size={35} />,
    aws: <FaAws size={35} />,
    azure: <FaAzure size={35} />,
    "google cloud platform": <FaGoogle size={35} />,
  };
  
  

const SkillComponent = ({ skill }) => {
  return (
    <div className="flex flex-wrap">
      {Object.keys(SkillIcons).includes(skill) ? (
        <div key={skill} className="flex items-center flex-col justify-center gap-1">
          {SkillIcons[skill]}
          <p className="text-sm">{skill}</p>
        </div>
      ) : (
        <div key={skill} className="flex items-center gap-2">
          {/* Default icon or text */}
          <span>{skill}</span>
        </div>
      )}
    </div>
  );
};

export default SkillComponent;
