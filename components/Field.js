function Field({ label, name, type, classname }) {
  const addClassname = classname ? `${classname}` : "";
  const formControlClassName = `bg-transparent border border-primarygray-300 py-3 px-6 w-full${addClassname}`;
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-1 text-sm font-semibold">
        {label}
      </label>
      {type == "text" && (
        <input
          type="text"
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type == "textarea" && (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  );
}

export default Field;
