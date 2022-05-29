import { ReactComponent as TeaSvg } from "../../images/svg/preloader.svg";
import "./preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <TeaSvg className="tea" />
    </div>
  );
};

export default Preloader;
