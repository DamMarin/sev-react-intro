type ButtonProps = {
  label: string;
  disabled?: boolean;
  addClass?: string;
  onClick: () => void;
}

const Button = ({onClick, disabled=false, label, addClass="bg-cf-dark-gray"}: ButtonProps) => {
  return (
    <>
      <button
        className={"disabled:bg-gray-400 text-white px-4 py-2 " + addClass}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  )
}

export default Button;