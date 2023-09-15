import classNames from "classnames";

export default function Badge({ children, color, variant }) {
  let colorClass = color && `badge-${color}`;
  let variantClass = variant && `badge-${variant}`;
  let allClasses = classNames(colorClass, variantClass);

  return <div className={allClasses}>{children}</div>;
}
