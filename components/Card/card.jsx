import { FaCloudUploadAlt } from "react-icons/fa";
import "../../styles/Card/CardStyles.css";
export default function Card({ text, icon, children }) {
  console.log(icon);
  return (
    <div className="card">
      {icon ? (
        icon
      ) : (
        <div
          style={{
            backgroundColor: "#ff5a5f",
            color: "#fff",
            width: "48px",
            height: "48px",
            borderRadius: "6px",
          }}
        >
          <FaCloudUploadAlt
            style={{
              fontSize: "2em",
            }}
          />
        </div>
      )}
      {children}
    </div>
  );
}
