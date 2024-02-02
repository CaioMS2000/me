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
    const imageAuthorReferenceRef = useRef<HTMLParagraphElement|null>(null)

	function handleToast(newText: string = "") {
		setToastText(newText);

		setShowToast(true);

		setTimeout(() => setShowToast(false), 2 * 1000);
	}

    function resizeHandler(){
        if(!imageAuthorReferenceRef) return;
        if(!imageAuthorReferenceRef.current) return;

        const background = document.querySelector('#background');

        if(!background)return;

        const left = background.clientWidth - imageAuthorReferenceRef.current.clientWidth - 10

        imageAuthorReferenceRef.current.style.left = `${left}px`;
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);

        if(!imageAuthorReferenceRef) return;
        if(!imageAuthorReferenceRef.current) return;

        resizeHandler()
    }, [])

	return (
		<>
			<div
				id="background"
				className="bg-[url('./../../public/img/pexels-josh-sorenson-1714202-1000.jpg')] w-full h-full bg-cover bg-[50%_0%] relative"
			>
				{/* <div className="bg-[url('./../../public/img/pexels-danny-meneses-943096-1000.jpg')] w-full h-full bg-cover bg-[80%_0%]"> */}
				{/* <div className="bg-[url('./../../public/img/pexels-luis-gomes-546819-1000.jpg')] w-full h-full bg-cover bg-[10%_0%]"> */}
				{/* <div className="bg-[url('./../../public/img/pexels-pixabay-50711-1000.jpg')] w-full h-full bg-cover bg-[20%_0%]"> */}
				{/* <div className="bg-[url('./../../public/img/technology-linkedin-background-lh8lf9sg6gog8ad0.jpg')] w-full h-full bg-cover bg-[0%_0%]"> */}
				<div className="bg-black/80 w-full h-full">{children}</div>
				<p
					className="text-zinc-700 absolute top-[97%] text-sm left-[0%] w-fit cursor-pointer"
					onClick={() => {
						navigator.clipboard.writeText("");
						handleToast("Link copiado");
					}}
                    ref={imageAuthorReferenceRef}
				>
					Photo by Josh Sorenson
				</p>
			</div>
			{showToast && (
				<>
					<Toast text={toastText} />
				</>
			)}
		</>
	);
}
