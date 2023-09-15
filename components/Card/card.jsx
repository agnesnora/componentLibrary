import { FaCloudUploadAlt } from "react-icons/fa";

export default function Card({ text, icon, children }) {
  console.log(icon);
  return (
    <div className="card">
      {icon ? (
        icon
      ) : (
        <div
          style={{
            backgroundColor: "#9D174D",
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
