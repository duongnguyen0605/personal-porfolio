import Title from "../../components/common/title";

const About = () => {
  return (
    <div className="text-xl text-gray-800 flex flex-col gap-4">
      <Title title="About Me" />
      <h4 className="mt-10 italic text-gray-500 dark:text-gray-200 flex flex-row items-center gap-2 text-xl animate-slide-in-left">
        <span className="material-symbols-outlined">question_mark</span>
        Who I am
      </h4>
      <p className="animate-slide-in-right">
        I am Duong Nguyen a front-end developer based in Ho Chi Minh, Viet Nam.
      </p>
      <h4 className="italic text-gray-500 dark:text-gray-200 flex flex-row items-center gap-2 text-xl animate-slide-in-left">
        <span className="material-symbols-outlined">question_mark</span>
        What I do
      </h4>
      <p className="animate-slide-in-right">
        I have 4 years of experience in web development, with a strong
        background in front-end technologies.
      </p>
      <p className="animate-slide-in-right">
        Always eager to learn and refine technical skills to achieve better
        results.
      </p>
      <h4 className="italic text-gray-500 dark:text-gray-200 flex flex-row items-center gap-2 text-xl animate-slide-in-left">
        <span className="material-symbols-outlined">question_mark</span>
        What drives my work
      </h4>
      <h5 className="text-lg text-green-600 dark:text-green-300 italic animate-slide-in-left">
        ---- Able ----
      </h5>
      <p className="animate-slide-in-right">
        I take pride in my strong technical foundation and ability to turn
        complex ideas into functional, user-friendly interfaces. <br />I always
        aim for clean, scalable code and continuously refine my skills to
        deliver reliable, high-quality solutions that meet both user and
        business needs.
      </p>
      <h5 className="text-lg text-green-600 dark:text-green-300 italic animate-slide-in-left">
        ---- Innovative ----
      </h5>
      <p className="animate-slide-in-right">
        I'm passionate about exploring new technologies, design trends, and
        performance optimizations to keep my work modern and impactful. <br />
        By experimenting with new ideas and tools, I strive to create unique and
        intuitive digital experiences that stand out.
      </p>
      <h5 className="text-lg text-green-600 dark:text-green-300 italic animate-slide-in-left">
        ---- Teamwork ----
      </h5>
      <p className="animate-slide-in-right">
        I believe great products are built through effective collaboration and
        open communication.
        <br />I enjoy working closely with designers, backend developers, and
        stakeholders to align visions and solve challenges together efficiently.
      </p>
      <h5 className="text-lg text-green-600 dark:text-green-300 italic animate-slide-in-left">
        ---- Flexible ----
      </h5>
      <p className="animate-slide-in-right">
        In a fast-changing tech landscape, adaptability is essential. <br />I
        embrace new challenges, learn quickly from feedback, and adjust my
        workflow to different project needs or priorities while maintaining a
        high standard of quality.
      </p>
    </div>
  );
};

export default About;
