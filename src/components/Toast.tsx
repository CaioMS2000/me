"use client";
import { PropsWithChildren } from "react";

interface ToastProps extends PropsWithChildren {
    text: string
}

export default function Toast({text}: ToastProps) {
	return (
		<>
			{/* <div className="fixed flex bottom-0 top-auto bg-red-300"> */}
			<div className="toast toast-center">
				<div className="flex p-3 rounded-lg bg-success"><span className="font-bold text-white">{text}</span></div>
			</div>
		</>
	);
}
