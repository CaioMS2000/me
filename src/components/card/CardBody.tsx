import { HTMLProps, PropsWithChildren } from "react";

interface CardBodyProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {}

export default async function CardBody({children, className, ...rest}: CardBodyProps) {
	return (
		<>
			<div className={"card-body " + className} {...rest}>{children}</div>
		</>
	);
}
