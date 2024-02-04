import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [profileBtn, setProfileBtn] = useState(false);
	const drawerRef = useRef();
	const profileMenuRef = useRef();

	useEffect(() => {
		function handleClickOutside(e) {
			if (
				drawerRef.current &&
				!drawerRef.current.contains(e.target) &&
				e.target.closest(".md\\:hidden") === null
			) {
				setIsOpen(false);
			}
		}

		function handleProfileMenuFocus(e) {
			if (
				profileMenuRef.current &&
				!profileMenuRef.current.contains(e.target) &&
				e.target.closest(".max-md\\:hidden") === null
			) {
				setProfileBtn(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("mousedown", handleProfileMenuFocus);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const genericHamburgerLine =
		"h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300";
	return (
		<div className="flex justify-center items-center h-16 border-b sticky z-50 top-0 bg-white">
			<div className="container max-w-6xl flex items-center relative">
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
							<Link to="/my-blogs">My Blogs</Link>
						</li>
						<li>
							<Link to="/write">Write</Link>
						</li>
						<li>
							<Link to="/preview">Preview</Link>
						</li>
						<li>
							<Link to="http://auth.yogendersingh.tech">Sign In</Link>
						</li>
						<li className="bg-black text-white px-3 py-2 rounded-full">
							<Link to="http://auth.yogendersingh.tech">Create Account</Link>
						</li>
						<button type="button" onClick={() => setProfileBtn(!profileBtn)}>
							<img
								src="https://miro.medium.com/v2/resize:fill:176:176/2*pZPMtIONqtJYi2xHYD_Ivg.jpeg"
								alt="avatar"
								className="rounded-full w-10 h-10"
							/>
						</button>
					</ul>
				</div>
				{/* Profile Menu */}
				<div
					className={`max-md:hidden h-36 w-36 bg-slate-100 absolute right-0 top-[63px] rounded-lg flex flex-col justify-start items-end p-3 *:my-1 ${
						profileBtn ? "-translate-x-0" : "translate-x-96"
					} transition-transform duration-300`}
					ref={profileMenuRef}
				>
					<button
						type="button"
						className="bg-black text-white px-3 py-2 rounded-full"
					>
						Sign Out &rarr;
					</button>
					<Link to="/profile">Profile</Link>
					<Link to="/my-blogs">My Blogs</Link>
				</div>

				{/* Hamburger Menu */}
				<button
					type="button"
					className="md:hidden flex flex-col relative z-50 mx-3"
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
				className={`md:hidden shadow-lg absolute right-0 top-0 bg-white h-screen w-3/4 trans ${
					isOpen ? "" : "translate-x-full"
				} transition-all duration-300`}
				ref={drawerRef}
			>
				<div>
					<ul className="flex flex-col items-start justify-center *:m-3 pt-2">
						<li>
							<Link to="/my-blogs">My Blogs</Link>
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
							<Link to="/get-started">Create Account</Link>
						</li>
						<li>
							<Link to="/profile">Profile</Link>
						</li>
						<button
							type="button"
							className="bg-black text-white px-3 py-2 rounded-full"
						>
							Sign Out &rarr;
						</button>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
