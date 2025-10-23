import Title from "../../components/common/title";

const Resume = () => {
  return (
    <>
      <Title title="My Resume" />
      <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-1 mt-20 space-y-10 space-x-8">
        <div className="md:col-span-2 xl:col-span-3 col-span-1 animate-slide-in-left">
          <h4 className="italic mb-2 text-gray-500 dark:text-gray-200 flex flex-row items-center gap-2 text-xl">
            My Experience
            <span className="material-symbols-outlined">work_history</span>
          </h4>
          <span className="my-4 text-lg text-green-600 dark:text-green-300 italic">
            ---- 02/2021 - 06/2025 ----
          </span>
          <p className="font-bold text-2xl my-2">
            Working as a Frontend developer at TMA Solutions
          </p>
          <ul className="text-xl text-gray-800">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">star</span>
              Developed and maintained user interfaces for web applications.
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">star</span>
              Collaborated closely with UX/UI designers and backend teams to
              ensure seamless integration.
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">star</span>
              Improved website performance and accessibility across multiple
              browsers.
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">star</span>{" "}
              Participated in code reviews.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 animate-slide-in-right">
          <div>
            <h4 className="italic mb-2 text-gray-500 dark:text-gray-200 flex flex-row items-center gap-2 text-xl">
              Achivements
              <span className="material-symbols-outlined">license</span>
            </h4>
            <span className="my-4 text-lg text-green-600 dark:text-green-300 italic">
              ---- 2022 ----
            </span>
            <p className="text-lg text-gray-800">Team Star Performer Q4/2022</p>
          </div>
          <div>
            <h4 className="italic mb-2 text-gray-500 dark:text-gray-200 flex flex-row items-center gap-2 text-xl">
              Education
              <span className="material-symbols-outlined">school</span>
            </h4>
            <span className="my-4 text-lg text-green-600 dark:text-green-300 italic">
              ---- 2017 - 2021 ----
            </span>
            <p className="text-lg text-gray-800">
              Bachelor of Information Technology
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
