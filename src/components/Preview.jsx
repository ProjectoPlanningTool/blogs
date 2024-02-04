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
	const { html, heading, description } = useContentStore();
	return (
		<div className="flex items-center justify-center lg:mt-14 max-md:mx-3 max-md:mt-6">
			<div className="container max-w-3xl flex items-center justify-center">
				<div className="flex flex-col justify-center w-full">
					<div className="relative h-full text-white">
						<img
							src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*WP03XymAw2mQIrPi"
							alt="avatar"
							className="w-[800px] h-full object-cover absolute -z-10 blur-sm"
						/>
						<h1 className="text-5xl font-extrabold lg:px-5 lg:pt-5">
							{heading}
						</h1>
						<p className="text-xl font-medium lg:px-5">{description}</p>
						<div className="flex items-center mt-5 lg:p-5">
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
					</div>
					<div aria-hidden="true" className="border-b" />
					<div className="flex items-center justify-between lg:px-5">
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
					<div className="lg:m-5">{parse(html)}</div>
				</div>
			</div>
		</div>
	);
}

export default Preview;
