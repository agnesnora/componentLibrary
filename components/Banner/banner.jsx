import classNames from "classnames";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";

import "../../styles/Banner/BannerStyles.css";

export default function Banner({ theme, children, variant, className }) {
  const colorClass =
    theme == "success"
      ? "green"
      : theme == "warning"
      ? "yellow"
      : theme == "error"
      ? "coral"
      : theme == "neutral"
      ? "indigo"
      : null;

  const allClasses = classNames(colorClass, className);

  return (
    <div className={allClasses}>
      {theme == "success" ? (
        <h4>
          {" "}
          <FaCheckCircle className="icon" />
          Congratulations
        </h4>
      ) : theme == "warning" ? (
        <h4>
          {" "}
          <FaExclamationCircle className="icon" />
          Attention
        </h4>
      ) : theme == "error" ? (
        <h4>
          {" "}
          <FaTimesCircle className="icon" />
          There is a problem with your application
        </h4>
      ) : theme == "neutral" ? (
        <h4>
          {" "}
          <FaInfoCircle className="icon" />
          Update available
        </h4>
      ) : null}

      <p>{variant == "titleWithText" ? children : null}</p>
    </div>
  );
}
