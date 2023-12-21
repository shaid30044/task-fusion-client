const Button = ({ value }) => {
  return (
    <button className="btn normal-case text-base text-white bg-primary hover:bg-primary border-2 border-primary hover:border-primary hover:shadow-xl hover:shadow-primary/60 duration-300 px-6">
      {value}
    </button>
  );
};

export default Button;
