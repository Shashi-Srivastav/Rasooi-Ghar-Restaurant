import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
	// useContext --------------------------------
	const { user } = useContext(UserContext);
	return (
		<div className="footer">
			<div>
				<div className="footer-s">
					<div>
						<h3>Rasooi Ghar</h3>
						<p>© 2024 Shashi</p>
						<p>Pvt. Ltd</p>
					</div>
					<div className="social">
						<h3>Social Links</h3>
						<div>
							<i></i>
							<p>
								<a
									href="https://www.linkedin.com/in/shashi-srivastava01/"
									target="_blank"
								>
									LinkedIn
								</a>
							</p>
						</div>
						<div>
							<i></i>
							<p>
								<a
									href="https://github.com/Shashi-Srivastav"
									target="_blank"
								>
									GitHub
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="footer-s2">
					<h3>Company</h3>
					<p>Privacy Policy</p>
					<p>Terms & Conditions</p>
					<p>Help</p>
					<p>Contact Us</p>
					<p>About</p>
					<p>Careers</p>
				</div>
			</div>
			<div>
				<h4>Created By ❤️ {user.name}</h4>
				<h4>Email - {user.email}</h4>
			</div>
		</div>
	);
};
export default Footer;
