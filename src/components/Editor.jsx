import { useState } from "react";
import ReactQuill from "react-quill";
import "../css/Editor.css";

import modules from "../toolbar";

function Editor() {
	const [value, setValue] = useState("");
	const [focused, setFocused] = useState(false);

	const handleOnFocus = () => {
		setFocused(true);
	};

	const handleOnBlur = () => {
		setFocused(false);
	};

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
				<div className="w-full my-5 text-2xl font-bold border-b">
					<input
						type="text"
						placeholder="Heading"
						className="px-3 py-5 w-full focus:outline-none"
					/>
				</div>
				<ReactQuill
					className={focused ? "focused-editor" : "blurred-editor"}
					theme="snow"
					value={value}
					onChange={setValue}
					placeholder="What is in your mind?"
					modules={modules}
					style={{ width: "100%" }}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
				/>
			</div>
		</div>
	);
}

export default Editor;
