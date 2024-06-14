
import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/MatiasTMonti"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/matias-monti/"},
    {icon: <FaYoutube />, path: ""},
    {icon: <FaTwitter />, path: ""},
]

const Social = ({containerStyles, iconStyles}) => {
    return(
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return(
                    <a key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </a>
                );
            })}
        </div>
    );
}

export default Social;