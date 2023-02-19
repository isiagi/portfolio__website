import Header from "../header/Header";
import Port from "./Port";

function Index() {
  return (
    <div>
      <Header text="Portfolio" para="hello there" />
      <div className="middle">

      <Port />
      </div>
    </div>
  );
}

export default Index;
