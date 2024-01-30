import { HTMLProps, PropsWithChildren } from "react";

interface CardActionsProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {}

export default async function CardActions({children, className, ...rest}: CardActionsProps) {
	return (
		<>
			<div className={"card-actions justify-end " + className} {...rest}>{children}</div>
		</>
	);
}
