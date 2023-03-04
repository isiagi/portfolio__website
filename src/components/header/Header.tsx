import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./header.css";

type Props = {
  text: string;
  para: string;
};

function Header({ text, para }: Props) {
  return (
    <div className="header__container">
      <div className="header__wrapper">
      <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutTop"><h2 className="header__h2">{text}</h2></AnimationOnScroll>
        <p className="header__para">{para}</p>
        <div className="header__under" />
      </div>
    </div>
  );
}

export default Header;
