import "./style.css";

const Title = ({ title, className }: { title: string; className?: string }) => {
  const handledTitle = title.split("");
  return (
    <h2 className={"text-5xl font-bold title-linear" + className}>
      {handledTitle.map((item) => (
        <span className="animate-ball-drop">{item}</span>
      ))}
    </h2>
  );
};

export default Title;
