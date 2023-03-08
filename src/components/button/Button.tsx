import { Link } from "react-router-dom";
import "./button.css";

type Props = {
  name: string;
  to?: string;
  path?: boolean;
  link?: string;
};

function Button({ name, to, path = true, link }: Props) {
  return (
    <div>
      {path ? (
        <Link to={`${to}`}>
          <button className="button__btn">{name}</button>
        </Link>
      ) : (
        <a target="_blank" href={`${link}`}>
          <button className="button__btn">{name}</button>
        </a>
      )}
    </div>
  );
}

export function Butto({ name, to, path = true, link }: Props) {
  return (
    <div>
      <button className="button__btn" type="submit">{name}</button>
    </div>
  );
}

export default Button;
