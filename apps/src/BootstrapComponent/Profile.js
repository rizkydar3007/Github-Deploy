import "../assets/style/index.css";
import profileImage from "../assets/img/profile pict 2.png";
import { Image } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="jumbotron text-center section">
      <Image src={profileImage} alt="profile-pict" width="150" className="rounded-circle img-thumbnail" />
      <h1 className="display-4">Rizky Darisman Fauzi</h1>
      <p className="lead">Full Stack Developer | UI/UX Designer</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,320L0,160L480,160L480,64L960,64L960,128L1440,128L1440,320L960,320L960,320L480,320L480,320L0,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default Profile;
