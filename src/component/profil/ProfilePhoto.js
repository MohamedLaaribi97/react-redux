import myProfilPicture from "./profilphoto.jpg";
import myGmc from "./GMC.png";

const Profilepic = () => {
  return (
    <div className="boxes">
      <span>
        <img className="picture" src={myProfilPicture} alt="Myimage" />
      </span>
      <span>
        <img className="picture" src={myGmc} alt="Myimage" />
      </span>
    </div>
  );
};
export default Profilepic;
