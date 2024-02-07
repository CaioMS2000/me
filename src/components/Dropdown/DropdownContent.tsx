"use client";
import { PropsWithChildren } from "react";

interface DropdownContentProps extends PropsWithChildren {}

export default function DropdownContent({
	children,
}: DropdownContentProps) {
	return (
		<>
			<ul className="p-3 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
				{children}
			</ul>
		</>
	);
}
