"use client";
import { Fragment, PropsWithChildren, useState } from "react";
import Toast from "./Toast";

interface CopyableProps extends PropsWithChildren {
	notificationText?: string;
	data?: string;
}

export default function Copyable({
	children,
	notificationText,
	data,
}: CopyableProps) {
	const [showToast, setShowToast] = useState(false);

	function handleToast() {
		setShowToast(true);

		setTimeout(() => setShowToast(false), 2 * 1000);
	}

	return (
		<>
			<div className="p-0 m-0 border-0"
				onClick={() => {
					navigator.clipboard.writeText(data || "");
					handleToast();
				}}
			>
				{children}
			</div>
			{showToast && (
				<>
					<Toast text={notificationText || "Link copiado"} />
				</>
			)}
		</>
	);
}
