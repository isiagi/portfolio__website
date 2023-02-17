import "./min.css";

type Props = {
  name: string;
};

function Min({name}: Props) {
  return (
    <div>
      <div className="mini">
        <h2 className="mini__title">{name}</h2>
      </div>
    </div>
  );
}

export default Min;
