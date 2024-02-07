import { HTMLProps, PropsWithChildren } from "react";

interface CollapseContentProps
	extends PropsWithChildren,
		HTMLProps<HTMLDivElement> {}

export default async function CollapseContent({
	children,
	className,
	...rest
}: CollapseContentProps) {
	return (
		<>
			<div {...rest} className={"collapse-content " + className}>
				{children}
			</div>
		</>
	);
}
