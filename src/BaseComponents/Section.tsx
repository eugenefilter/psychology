import { ReactNode } from "react";
import { Element } from "react-scroll";

interface SectorProps {
  name: string;
  children: ReactNode;
}

export default function Section({ name, children }: SectorProps) {
  return (
    <Element name={name}>
      {children}
    </Element>
  );
}