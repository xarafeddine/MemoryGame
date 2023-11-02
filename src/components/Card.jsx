// eslint-disable-next-line react/prop-types
const Card = ({ image, selected, onClick }) => {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img alt="" src={image} className="card-face" />

        <img
          alt=""
          className="card-back"
          src={"/assets/webdev.jpg"}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
