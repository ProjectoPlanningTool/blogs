import parse from "html-react-parser";
import {
	BookmarkPlus,
	Heart,
	MessageCircle,
	PlayCircle,
	Share,
} from "lucide-react";
import useContentStore from "../store";

function Preview() {
	const { html, heading } = useContentStore();
	return (
		<div className="flex items-center justify-center lg:mt-14 max-md:mx-3 max-md:mt-6">
			<div className="container max-w-3xl flex items-center justify-center">
				<div className="flex flex-col justify-center">
					<h1 className="text-5xl font-extrabold">{heading}</h1>
					<div className="flex items-center mt-8">
						<div>
							<img
								src="https://miro.medium.com/v2/resize:fill:176:176/2*pZPMtIONqtJYi2xHYD_Ivg.jpeg"
								alt="avatar"
								className="rounded-full w-12 h-12 mr-2"
							/>
						</div>
						<div className="flex flex-col">
							<div className="font-bold m-1">
								<p>Admiral Cloudberd</p>
							</div>
							<div className="flex items-center *:mx-1">
								<span>27 min read</span>
								<span aria-hidden="true">|</span>
								<span>1 day ago</span>
							</div>
						</div>
					</div>
					<div aria-hidden="true" className="border-b mt-6" />
					<div className="flex items-center justify-between">
						<div className="flex items-center my-2 *:mr-4 ml-1">
							<div className="flex items-center">
								<Heart className="text-gray-400 mr-1" strokeWidth="1.25" />
								<span className="text-gray-500 text-sm">500</span>
							</div>

							<div className="flex items-center">
								<MessageCircle
									className="-rotate-90 text-gray-400 mr-1"
									strokeWidth="1.25"
								/>
								<span className="text-gray-500 text-sm">10</span>
							</div>
						</div>
						<div className="flex items-center my-2 *:mx-4">
							<BookmarkPlus className="text-gray-400" strokeWidth="1.25" />
							<PlayCircle className="text-gray-400" strokeWidth="1.25" />
							<Share className="text-gray-400" strokeWidth="1.25" />
						</div>
					</div>
					<div aria-hidden="true" className="border-b mb-6" />
					<div className="my-5">
						<img
							src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*WP03XymAw2mQIrPi"
							alt="men in black"
						/>
					</div>
					<div className="my-5">{parse(html)}</div>
				</div>
			</div>
		</div>
	);
}

export default Preview;
