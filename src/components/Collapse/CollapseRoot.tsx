import { HTMLProps, PropsWithChildren } from "react";

interface CollapseRootProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
}

export default async function CollapseRoot({children, className, ...rest}: CollapseRootProps) {
	return (
		<>
			<div
            {...rest}
				tabIndex={0}
				className={"collapse collapse-arrow border border-base-300 bg-base-200 " + className}
			>
                {children}
			</div>
		</>
	);
}
