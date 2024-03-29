import { HTMLProps, PropsWithChildren } from "react";

interface CardRootProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {}

export default async function CardRoot({children, className, ...rest}: CardRootProps) {
	return (
		<>
			<div className={"card bg-base-100 shadow-xl " + className} {...rest}>{children}</div>
		</>
	);
}
