import CV from "../../assets/documents/Nguyen_Van_Duong_CV.pdf";
import Myself from "../../assets/images/duong_nguyen_van.jpg";
import "./style.css";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-20 gap-10 xl:w-5xl 2xl:w-7xl w-full mx-auto h-fit lg:h-full items-center">
      <>
        <div className="flex flex-col gap-8 animate-slide-in-center">
          <p className="xl:text-3xl text-xl dark:text-gray-200">
            Hi there, I'm Duong Nguyen, a ...
          </p>
          <h1 className="text-gray-900 md:text-4xl lg:text-5xl text-3xl dark:text-gray-200 font-bold">
            Frontend Developer
          </h1>
          <p className="xl:text-3xl text-xl dark:text-gray-200 font-normal">
            Experienced Frontend Developer with 4 years of experience building
            scalable, responsive web applications using React and Angular.
            Skilled in creating intuitive interfaces and optimizing performance.
            Always eager to learn and refine technical skills to achieve better
            results.
          </p>
          <a href={CV} download className="button w-fit animate-bounce mt-8">
            <span className="fold"></span>

            <div className="points_wrapper">
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
            </div>

            <span className="inner">
              <span className="material-symbols-outlined text-3xl!">
                download
              </span>
              Download My CV
            </span>
          </a>
        </div>
        <img
          src={Myself}
          alt=""
          className="rounded-3xl lg:w-[30rem] lg:h-[26rem] w-full h-fit mx-auto animate-slide-in-center"
        />
      </>
    </div>
  );
};

export default Home;
