import Logo from "/logo.png";

function Navbar() {
	return (
		<div className="flex justify-center items-center h-16 border-b sticky z-50 top-0 bg-white">
			<div className="container max-w-6xl flex items-center">
				<div className="flex-auto">
					<a href="/">
						<img
							src={Logo}
							alt="projecto logo"
							className="object-cover h-16 w-16"
						/>
					</a>
				</div>
				<div>
					<ul className="flex items-center *:mx-3">
						<li>
							<a href="/our-story">Our Story</a>
						</li>
						<li>
							<a href="/membership">Membership</a>
						</li>
						<li>
							<a href="/write">Write</a>
						</li>
						<li>
							<a href="/sign-in">Sign In</a>
						</li>
						<li className="bg-black text-white px-3 py-2 rounded-full">
							<a href="/get-started">Get Started</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
