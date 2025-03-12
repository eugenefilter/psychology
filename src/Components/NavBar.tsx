import { ReactNode } from "react";

interface NavBarProps {
  className?: string;
  children: ReactNode;
}

export default function NavBar({
  children,
  className
}: NavBarProps) {
  return (
    <nav className={className}> 
      {children}
    </nav>
  );
}