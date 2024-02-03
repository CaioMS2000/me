"use client";

import { useEffect, useRef, useState } from "react";
import Toast from "./Toast";

export default function Background({
	children,
}: {
	children: React.ReactNode;
}) {
	const [showToast, setShowToast] = useState(false);
	const [toastText, setToastText] = useState("");

	function handleToast(newText: string = "") {
		setToastText(newText);

		setShowToast(true);

		setTimeout(() => setShowToast(false), 2 * 1000);
	}

	return (
		<>
			<div
				id="background"
				className="bg-[url('./../../public/img/wallpaper1.jpg')] w-full h-full bg-cover bg-[60%_0%] relative"
			>
				<div className="bg-black/80 w-full h-full">{children}</div>
				<div className="absolute top-[100%] w-full flex justify-end pr-1">
                    <p
                        className="text-zinc-700 text-sm w-fit cursor-pointer"
                        onClick={() => {
                            navigator.clipboard.writeText("");
                            handleToast("Link copiado");
                        }}
                    >
                        Photo by Josh Sorenson
                    </p>
                </div>
			</div>
			{showToast && (
				<>
					<Toast text={toastText} />
				</>
			)}
		</>
	);
}
