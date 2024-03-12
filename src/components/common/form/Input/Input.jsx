const Input = ({ label, register, error, ...rest }) => {
  return (
    <div className="form-group d-flex flex-column p-1">
      <label className={error && "text-danger"}>
        <b>{label}</b>
      </label>
      <input
        className={error && "border border-danger bg-danger bg-opacity-10"}
        {...register}
        {...rest}
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default Input;
