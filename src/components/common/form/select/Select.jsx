const Select = ({
  error,
  placeholder,
  label,
  register,
  options,
  label2,
  ...rest
}) => {
  return (
    <div className="form-group  d-flex flex-column p-1">
      <label className={`${error && "text-danger"} blueColorDefaut`}>
        <span className="d-flex gap-1 flex-wrap">
          <b>{label}</b> <span>{label2}</span>
        </span>
      </label>
      <select
        className={error && "border border-danger bg-danger bg-opacity-10"}
        {...register}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.label ? option.value : option}>
              {option.label ? option.label : option}
            </option>
          );
        })}
      </select>
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default Select;
