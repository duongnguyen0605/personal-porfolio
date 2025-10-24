import Title from "../../components/common/title";

const projects = [
  {
    name: "Financial Management System - Frontend Developer",
    description:
      "A web-based platform that helps businesses manage financial data and tax reports, while also providing additional features such as email communication and task management to improve workflow efficiency.",
    responsibilities: [
      "Implemented reusable Angular components to improve code maintainability and performance.",
      "Integrated front-end modules with RESTful APIs for real-time financial data synchronization.",
      "Implemented pages and features based on UX/UI designs to ensure a consistent and user-friendly interface.",
      "Ensured high code quality by writing and maintaining unit tests with over 80% coverage.",
      "Participated in code reviews to ensure code quality and consistency.",
      "Troubleshot and resolved blocker issues during development.",
    ],
    technologies: "Angular, HTML, SCSS, Tailwind, RESTfull APIs",
  },
  {
    name: "Booking and Service Management Platform (POC) - Frontend Developer",
    description:
      "A web-based booking platform that allows users and businesses to create and manage service booking pages",
    responsibilities: [
      "Collaborated with the team to clarify design requirements from the Product Owner (PO).",
      "Designed and developed template booking pages that enable users to customize content and create their own service booking websites.",
      "Troubleshoot issues.",
    ],
    technologies: "Angular, HTML, Tailwind Css",
  },
  {
    name: "Formbuilder Application - Frontend Developer",
    description:
      "An application that converts JSON configurations into dynamic forms with drag-and-drop, accessibility, and multi-language support.",
    responsibilities: [
      "Developed core features for dynamic form generation from JSON configurations, such as buttons, dropdowns, text inputs, containers, and nested container components.",
      "Ensured accessibility compliance (WCAG 2.1)",
      "Wrote unit tests to maintain code quality and stability.",
      "Troubleshoot issues.",
    ],
    technologies: "Angular, HTML, Typescript, Tailwind Css, RESTfull APIs",
  },
  {
    name: "Employee Management & Income Calculation System - Frontend Developer",
    description:
      "A web-based system designed to manage employee information, calculate employee income and company profit, and provide auditing features.",
    responsibilities: [
      "Participated in regular meetings with clients to clarify business requirements and propose technical solutions.",
      "Implemented and integrated features based on client requests.",
      "Optimized code performance and ensured maintainability through refactoring.",
      "Collaborated with the backend and QA teams to ensure high-quality deliverables and smooth deployment.",
      "Troubleshot and resolved blocker issues during development.",
    ],
    technologies: "Angular, HTML, CSS, Typescript, Tailwind, RESTfull APIs",
  },
  {
    name: "Marketing website - Frontend Developer",
    description:
      "A website used to showcase the company’s products and provide detailed information about various projects, such as Building Access Management, Healthcare solutions.",
    responsibilities: [
      "Worked with the design team to complete the website based on their designs.",
      "Developed the website with SEO-friendly structure and best practices.",
    ],
    technologies: "NextJS, HTML, CSS, strapi",
  },
  {
    name: "Building Access Management - Frontend Developer",
    description:
      "A building access control system, at its most basic form, is a way to ensure only authorized people are able to enter your building. This adds an additional layer of security and protection for your residents, employees, information, and assets.",
    responsibilities: [
      "Collaborated with the design team to implement user interface designs and ensure a seamless user experience.",
      "Performed frontend development activities, including code development and maintenance work.",
      "Stroubleshoot blocker issues.",
      "Participated in code reviews to ensure quality",
    ],
    technologies:
      "ReactJS, Typescript, Redux, HTML, CSS, Material UI,  AWS Amplify, irebase, mosquitto (MQTT), sonarqube",
  },
];
const Projects = () => {
  return (
    <div className="flex flex-col gap-8 flex-1">
      <Title title="My Projects" />
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-50 dark:bg-gray-300 rounded-2xl p-4 flex flex-col gap-2 text-gray-600 xl:text-[1.125rem] text-base animate-slide-in-center"
        >
          <h3 className="text-gray-900">{project.name}</h3>
          <p>
            <b>Descriptoin:</b> {project.description}
          </p>
          <div>
            <b>Responsibilities:</b>
            <ul className="list-disc pl-4">
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p>
            <b>Technologies:</b> {project.technologies}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
