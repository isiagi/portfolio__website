import "./button.css"

type Props = {
  name: string;
};

function Button({ name }: Props) {
  return (
    <div>
      <button className="button__btn">{name}</button>
    </div>
  );
}

export default Button;
