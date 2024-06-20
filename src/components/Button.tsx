import "../styles/button.css";

interface IProps {
  handleClick:  ()=> void;
  isOpen: boolean;
}

function Button({handleClick, isOpen}:IProps) {
  return (
    <button className="button" onClick={handleClick}>
      { !isOpen && <div className="button__sign-1"></div>}
      <div className="button__sign-2"></div>
    </button>
  )
}

export default Button;
