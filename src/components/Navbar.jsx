import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine =
		"h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300";
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
				<div className="max-md:hidden">
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
				{/* Hamburger Menu */}
				<button
					type="button"
					className="lg:hidden flex flex-col relative z-50 mx-3"
					onClick={() => setIsOpen(!isOpen)}
				>
					<div
						className={`${genericHamburgerLine} ${
							isOpen
								? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
								: "opacity-50 group-hover:opacity-100"
						}`}
					/>
					<div
						className={`${genericHamburgerLine} ${
							isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
						}`}
					/>
					<div
						className={`${genericHamburgerLine} ${
							isOpen
								? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
								: "opacity-50 group-hover:opacity-100"
						}`}
					/>
				</button>
			</div>
			{/* Mobile Drawer */}
			<div
				className={`lg:hidden shadow-lg absolute right-0 top-0 bg-white h-screen w-3/4 trans ${
					isOpen ? "" : "translate-x-full"
				} transition-all duration-300`}
			>
				<div>
					<ul className="flex flex-col items-start justify-center *:m-3 pt-2">
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
