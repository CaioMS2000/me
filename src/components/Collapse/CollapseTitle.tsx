import { HTMLProps, PropsWithChildren } from "react";

interface CollapseTitleProps
	extends PropsWithChildren,
		HTMLProps<HTMLDivElement> {
	title?: string;
}

export default async function CollapseTitle({
	title,
	className,
	children,
	...rest
}: CollapseTitleProps) {
	return (
		<>
			<div
				{...rest}
				className={"collapse-title text-xl font-medium " + className}
			>
				{children || title}
			</div>
		</>
	);
}
