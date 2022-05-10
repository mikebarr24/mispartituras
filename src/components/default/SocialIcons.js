import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

function SocialIcons(props) {
  const STYLES = {
    color: props.color,
    fontSize: props.size,
  };
  return (
    <div className={props.className} style={STYLES}>
      <a href="/" className="social-link">
        <FaTwitter />
      </a>
      <a href="/" className="social-link">
        <FaInstagram />
      </a>
      <a href="/" className="social-link">
        <FaFacebook />
      </a>
    </div>
  );
}

export default SocialIcons;
