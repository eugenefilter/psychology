import { useState, useEffect } from 'react';

const ButtonUp = () => {
  const [scrollBlockIsDisplayed, setScrollBlockIsDisplayed] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      if (!scrollBlockIsDisplayed && scrollTop > windowHeight) {
        setScrollBlockIsDisplayed(true);
      }

      if (scrollBlockIsDisplayed) {
        const newOpacity = Math.min((scrollTop - windowHeight) / windowHeight, 1);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollBlockIsDisplayed]);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      style={{ opacity: scrollBlockIsDisplayed ? opacity : 0, display: scrollBlockIsDisplayed ? 'block' : 'none' }}
      className="
      fixed 
      shadow shadow-slate-400
      z-10 
      w-11 h-11 
      rounded-full 
      bg-main-khaki bg-[url('/public/arrow_up_icon.svg')] bg-no-repeat bg-center
      bottom-4 
      right-4 
      cursor-pointer">
    </div>
  );
}

export default ButtonUp;