import ReactQuill from "react-quill";
import "../css/Editor.css";

import useContentStore from "../store";
import modules from "../toolbar";

function Editor() {
	const { html, setHTML, heading, setHeading, description, setDescription } =
		useContentStore();
	return (
		<div className="flex justify-center items-center my-10">
			<div className="container max-w-3xl flex items-center justify-center flex-col">
				<div className="w-full mt-6">
					<img
						src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*WP03XymAw2mQIrPi"
						alt="avatar"
						className="w-[800px] h-32 object-cover"
					/>
				</div>
				<div className="w-full mt-5 text-2xl font-bold border-b">
					<input
						value={heading}
						onChange={(e) => setHeading(e.target.value)}
						type="text"
						placeholder="Heading"
						className="px-3 py-5 w-full focus:outline-none"
					/>
				</div>
				<div className="w-full mb-5 text-lg font-medium border-b">
					<input
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						type="text"
						placeholder="Description"
						className="px-3 py-5 w-full focus:outline-none"
					/>
				</div>
				<ReactQuill
					theme="snow"
					value={html}
					onChange={setHTML}
					placeholder="What is in your mind?"
					modules={modules}
					style={{ width: "100%" }}
				/>
			</div>
		</div>
	);
}

export default Editor;
