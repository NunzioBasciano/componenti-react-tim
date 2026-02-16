import { bento } from "../../constants/Bento";
import Box from "../box/Box";
import Button from "../button/Button";
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
          icon={bento.HEADING.CTA.cta_icon /* || "/arrow.svg" */}
          omniture={bento.HEADING.CTA.cta_omniture}
        />
      </div>

      {/* IMG-SECTION */}

      <div className="container-img"></div>
    </Box>
  );
}
