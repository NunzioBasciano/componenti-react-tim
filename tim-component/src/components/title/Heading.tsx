import "./heading-module.css";

interface HeadingProps {
  text: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function Heading(props: HeadingProps) {
  const { text, type } = props;
  return (
    <>
      {type === "h2" && <h2>{text}</h2>}
      {type === "h3" && (
        <h3 className="text-robin-egg-clue text-[28px] leading-[31px] font-bold mb-[24px] lg:text-[32px] lg:leading-[36px]">
          {text}
        </h3>
      )}
      {type === "h4" && (
        <h4 className="text-white text-[16px] leading-[18px] font-bold lg:text-[18px] lg:leading-[20px] mb-[16px]">
          {text}
        </h4>
      )}
    </>
  );
}

export default Heading;
