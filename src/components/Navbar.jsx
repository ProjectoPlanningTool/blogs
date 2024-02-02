import { Link } from "react-router-dom";
import Logo from "/logo.png";

function Navbar() {
	return (
		<div className="flex justify-center items-center h-16 border-b sticky z-50 top-0 bg-white">
			<div className="container max-w-6xl flex items-center">
				<div className="flex-auto">
					<Link to="/">
						<img
							src={Logo}
							alt="projecto logo"
							className="object-cover h-16 w-16"
						/>
					</Link>
				</div>
				<div>
					<ul className="flex items-center *:mx-3">
						<li>
							<Link to="/our-story">Our Story</Link>
						</li>
						<li>
							<Link to="/membership">Membership</Link>
						</li>
						<li>
							<Link to="/write">Write</Link>
						</li>
						<li>
							<Link to="/preview">Preview</Link>
						</li>
						<li>
							<Link to="/sign-in">Sign In</Link>
						</li>
						<li className="bg-black text-white px-3 py-2 rounded-full">
							<Link to="/get-started">Get Started</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
