import { cn } from "../utils/cn";
import { Link } from "react-scroll";

type ButtonPros = {
  type: 'square' | 'circle';
  className?: string;
}

export default function SignUp({ type, className }: ButtonPros) {
  const btnClass = cn(
    className,
    'flex items-center justify-center cursor-pointer',
    type === 'square' ? 'button-square' : 'button-circle'
  );

  return (
    <Link
      className={btnClass}
      to={'form'}
      spy={true}
      smooth={true}
      duration={500}
    >
      Записаться
    </Link>
  );
}