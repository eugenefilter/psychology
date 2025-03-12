import MySVGComponent from "./MySVGComponent";

interface ComponentProps extends React.SVGProps<SVGSVGElement> { }

const BurgerMenuSvg = (props: ComponentProps) => (
  <MySVGComponent viewBox="0 0 512 512" {...props}>
    <g xmlns="http://www.w3.org/2000/svg" transform="translate(0,512) scale(0.1,-0.1)" {...props}>
      <path d="M834 4008 c-44 -21 -52 -80 -16 -120 14 -17 110 -18 1742 -18 1632 0 1728 1 1742 18 37 41 28 100 -19 121 -33 15 -3418 14 -3449 -1z" />
      <path d="M824 2617 c-35 -30 -37 -79 -5 -110 l22 -22 1719 0 1719 0 22 22 c32 31 30 80 -5 110 l-27 23 -1709 0 -1709 0 -27 -23z" />
      <path d="M818 1233 c-37 -42 -28 -101 19 -122 17 -8 273 -11 878 -11 605 0 861 3 878 11 47 21 56 80 19 122 -14 16 -70 17 -897 17 -827 0 -883 -1 -897 -17z" />
    </g>
  </MySVGComponent>
);

export default BurgerMenuSvg;