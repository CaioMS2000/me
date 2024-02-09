"use client";
import { HTMLProps, PropsWithChildren } from "react";

interface DropdownContentProps extends PropsWithChildren, HTMLProps<HTMLUListElement> {}

export default function DropdownContent({
	children,
	className,
	...rest
}: DropdownContentProps) {
	return (
		<>
			<ul className={"p-3 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit " + className}>
				{children}
			</ul>
		</>
	);
}
