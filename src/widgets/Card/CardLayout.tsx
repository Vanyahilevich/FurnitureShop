
const CardLayout = ({image, info, actions}) => {

  return (
    <div className="group relative">
      <div>{image}</div>
      <div className="bg-blue-200 p-2">{info}</div>
      <div
        className="bg-blue-200 p-2 opacity-0 transition duration-300
                  absolute top-0 right-0
                  group-hover:opacity-100"
      >
        {actions}
      </div>
    </div>
  );
};

export default CardLayout;
