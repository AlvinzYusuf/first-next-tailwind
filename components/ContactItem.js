import classNames from "classnames";

function ContactItem({ label, value, icon, classname }) {
  return (
    <div className={classNames("flex items-start mt-6", classname)}>
      <img src={icon} className="w-8" alt="" />
      <div className="ml-4">
        <div className="text-sm font-semibold mb-1">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}

export default ContactItem;
