import Button from "../button/Button";
import Heading from "../title/Heading";
import "./solution-module.css";

interface SolutionProps {
  icon: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
    omniture: string;
  };
  visual: {
    src: string;
    alt: string;
    title: string;
  };
}

function Solution(props: SolutionProps) {
  const { icon, title, description, cta, visual } = props;

  return (
    <div className="solution">
      <div className="solution-text">
        <img src={icon} alt="" className="solution-icon" />
        <Heading text={title} type="h3" />
        <p className="solution-description">{description}</p>
        <Button
          href={cta.href}
          label={cta.label}
          /* icon={bento.HEADING.CTA.cta_icon} */ //commentare riga in basso per la build
          icon="/arrow.svg"
          omniture={cta.omniture}
        />
      </div>
      <div className="solution-image">
        <img src={visual.src} title={visual.alt} alt={visual.title} />
      </div>
    </div>
  );
}
export default Solution;
