import ReactIcon from "../../assets/icons/react-svg.svg";
import AngularIcon from "../../assets/icons/angular-svgrepo-com.svg";
import CssIcon from "../../assets/icons/css-3-svg.svg";
import BootstrapIcon from "../../assets/icons/bootstrap-svg.svg";
import JavascriptIcon from "../../assets/icons/javascript-svg.svg";
import MaterialUiIcon from "../../assets/icons/material-ui-svg.svg";
import ScssIcon from "../../assets/icons/scss-svg.svg";
import TailwindIcon from "../../assets/icons/tailwind-svg.svg";
import TypeScriptIcon from "../../assets/icons/typescript-official-svg.svg";
import StrapiIcon from "../../assets/icons/strapi.svg";
import EslintIcon from "../../assets/icons/eslint.svg";
import PrettierIcon from "../../assets/icons/prettier.svg";
import JasmineIcon from "../../assets/icons/jasmine.svg";
import HtmlIcon from "../../assets/icons/html.svg";
import GitIcon from "../../assets/icons/git.svg";
import GithubIcon from "../../assets/icons/github.svg";
import GitlabIcon from "../../assets/icons/gitlab.svg";
import NpmIcon from "../../assets/icons/npm.svg";
import YarnIcon from "../../assets/icons/yarn.svg";
import VsCodeIcon from "../../assets/icons/vscode.svg";
import FigmaIcon from "../../assets/icons/figma.svg";
import FirebaseIcon from "../../assets/icons/firebase.svg";
import RxjsIcon from "../../assets/icons/rxjs.svg";
import Title from "../../components/common/title";

const fontendSkills = [
  {
    icon: ReactIcon,
    alt: "react-icon",
    name: "React",
    type: "Framework",
  },
  {
    icon: AngularIcon,
    alt: "angular-icon",
    name: "Angular",
    type: "Framework",
  },
  {
    icon: RxjsIcon,
    alt: "rxjs-icon",
    name: "Rxjs",
    type: "Library",
  },
  {
    icon: TypeScriptIcon,
    alt: "typescript-icon",
    name: "TypeScript",
    type: "Language",
  },
  {
    icon: JavascriptIcon,
    alt: "javascript-icon",
    name: "Javascript",
    type: "Language",
  },
  {
    icon: HtmlIcon,
    alt: "html-icon",
    name: "HTML",
    type: "Language",
  },
  {
    icon: CssIcon,
    alt: "css-icon",
    name: "CSS",
    type: "CSS",
  },
  {
    icon: TailwindIcon,
    alt: "tailwind-icon",
    name: "Tailwind CSS",
    type: "CSS",
  },
  {
    icon: MaterialUiIcon,
    alt: "materialUi-icon",
    name: "Material UI",
    type: "CSS",
  },
  {
    icon: ScssIcon,
    alt: "scss-icon",
    name: "SCSS",
    type: "CSS",
  },
  {
    icon: BootstrapIcon,
    alt: "bootstrap-icon",
    name: "Bootstrap",
    type: "CSS",
  },
  {
    icon: StrapiIcon,
    alt: "strapi-icon",
    name: "Strapi",
    type: "CMS",
  },
  {
    icon: EslintIcon,
    alt: "eslint-icon",
    name: "ESlint",
    type: "Library",
  },
  {
    icon: FirebaseIcon,
    alt: "firebase-icon",
    name: "Firebase",
    type: "Library",
  },
  {
    icon: PrettierIcon,
    alt: "prettier-icon",
    name: "Prettier",
    type: "Library",
  },
  {
    icon: JasmineIcon,
    alt: "jasmine-icon",
    name: "Jasmine",
    type: "Testing",
  },
];

const versionControls = [
  {
    icon: GitIcon,
    alt: "git-icon",
    name: "Git",
    type: "Version Control",
  },
  {
    icon: GithubIcon,
    alt: "github-icon",
    name: "Github",
    type: "Version Control",
  },
  {
    icon: GitlabIcon,
    alt: "gitlab-icon",
    name: "Gitlab",
    type: "Version Control",
  },
];

const packageControls = [
  {
    icon: NpmIcon,
    alt: "npm-icon",
    name: "Npm",
    type: "Package Control",
  },
  {
    icon: YarnIcon,
    alt: "yarn-icon",
    name: "Yarn",
    type: "Package Control",
  },
];

const tools = [
  {
    icon: VsCodeIcon,
    alt: "vscode-icon",
    name: "VSCode",
    type: "Tools",
  },
  {
    icon: FigmaIcon,
    alt: "figma-icon",
    name: "Figma",
    type: "Tools",
  },
];

const Skills = () => {
  return (
    <div className="">
      <p className="italic mb-4 text-base text-gray-500 dark:text-gray-200 flex flex-row items-center gap-2">
        Programing languages I have learned
        <span className="material-symbols-outlined">book_ribbon</span>
      </p>
      <Title title="My Skills" />
      <h4 className="my-4 text-lg text-green-600 dark:text-green-300 italic">
        ---- Frontend ----
      </h4>

      <div className="grid  xl:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:gap-x-20 gap-x-10 gap-y-10">
        {fontendSkills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-300 flex flex-col gap-4 border border-gray-300 animate-slide-in-center"
          >
            <img src={skill.icon} alt={skill.alt} className="w-1/2 m-auto" />
            <div className="flex flex-row justify-between">
              <p className="font-bold xl:text-lg">{skill.name}</p>
              <p className="px-2 bg-gray-50 rounded-lg text-gray-500 text-xs font-bold h-fit p-1">
                {skill.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mb-4 mt-12 text-lg text-green-600 dark:text-green-300 italic">
        ---- Verson Control ----
      </h4>
      <div className="grid  xl:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:gap-x-20 gap-x-10 gap-y-10">
        {versionControls.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-300 flex flex-col gap-4 border border-gray-300 animate-slide-in-center"
          >
            <img src={skill.icon} alt={skill.alt} className="w-1/2 m-auto" />
            <div className="flex flex-row justify-between">
              <p className="font-bold xl:text-lg">{skill.name}</p>
              <p className="px-2 bg-gray-50 rounded-lg text-gray-500 text-xs font-bold h-fit p-1">
                {skill.type}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h4 className="mb-4 mt-12 text-lg text-green-600 dark:text-green-300 italic">
        ---- Package Control ----
      </h4>
      <div className="grid  xl:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:gap-x-20 gap-x-10 gap-y-10">
        {packageControls.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-300 flex flex-col gap-4 border border-gray-300 animate-slide-in-center"
          >
            <img src={skill.icon} alt={skill.alt} className="w-1/2 m-auto" />
            <div className="flex flex-row justify-between">
              <p className="font-bold xl:text-lg">{skill.name}</p>
              <p className="px-2 bg-gray-50 rounded-lg text-gray-500 text-xs font-bold h-fit p-1">
                {skill.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mb-4 mt-12 text-lg text-green-600 dark:text-green-300 italic">
        ---- Tools ----
      </h4>
      <div className="grid  xl:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:gap-x-20 gap-x-10 gap-y-10">
        {tools.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-300 flex flex-col gap-4 border border-gray-300 animate-slide-in-center"
          >
            <img src={skill.icon} alt={skill.alt} className="w-1/2 m-auto" />
            <div className="flex flex-row justify-between">
              <p className="font-bold xl:text-lg">{skill.name}</p>
              <p className="px-2 bg-gray-50 rounded-lg text-gray-500 text-xs font-bold h-fit p-1">
                {skill.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
