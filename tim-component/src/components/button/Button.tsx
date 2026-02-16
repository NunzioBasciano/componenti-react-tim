import "./button-module.css";

interface ButtonProps {
  label: string;
  icon?: string;
  href: string;
  omniture?: string;
}

export default function Button(props: ButtonProps) {
  const { label, icon, href, omniture } = props;
  return (
    <a
      className="button-module"
      href={href}
      target="_self"
      data-omniture={omniture}
    >
      <span>{label}</span>
      {icon && <img src={icon} alt="Icona" />}
    </a>
  );
}
