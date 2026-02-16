import { bento } from "../../constants/Bento";
import BentoSlider from "../bento-slider/BentoSlider";

import Box from "../box/Box";
import Button from "../button/Button";
import Solution from "../solution/Solution";
import Heading from "../title/Heading";
import "./bento-module.css";

export default function Bento() {
  return (
    <Box>
      {/*HEADING*/}
      <div className="container-heading">
        <Heading text={bento.HEADING.title_module} type="h2" />
        <Button
          href={bento.HEADING.CTA.cta_href}
          label={bento.HEADING.CTA.cta_heading}
          /* icon={bento.HEADING.CTA.cta_icon} */ //commentare riga in basso per la build
          icon="/arrow.svg"
          omniture={bento.HEADING.CTA.cta_omniture}
        />
      </div>

      {/* IMG-SECTION */}

      <div className="container-solutions">
        {bento.SOLUTIONS.map((solution, i) => (
          <Solution
            key={i}
            icon={solution.img}
            title={solution.title}
            description={solution.desc}
            cta={solution.cta}
            visual={solution.visual}
          />
        ))}
      </div>
      <BentoSlider></BentoSlider>
    </Box>
  );
}
