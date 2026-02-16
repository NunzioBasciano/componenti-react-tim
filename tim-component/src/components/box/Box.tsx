import "./box-module.css";

interface BoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: BoxProps) {
  return (
    <section id="modulo-bento" role="main">
      {children}
    </section>
  );
}
