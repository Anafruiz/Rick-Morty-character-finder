const ResetButton = (props) => {
  const handleReset = () => {
    props.resetInputs();
  };
  return (
    <button className="button">
      <i className="fa fa-trash" aria-hidden="true" onClick={handleReset}></i>
    </button>
  );
};
export default ResetButton;
