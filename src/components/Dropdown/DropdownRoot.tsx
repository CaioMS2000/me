"use client";
import {
	HTMLProps,
	PropsWithChildren,
	forwardRef,
	useEffect,
	useRef,
} from "react";

interface DropdownRootProps
	extends PropsWithChildren,
		HTMLProps<HTMLDetailsElement> {
	inactiveClass?: string;
	displayLabel: string|JSX.Element;
}

const DropdownRoot = forwardRef<HTMLElement, DropdownRootProps>(
	({ children, inactiveClass, displayLabel, className }: DropdownRootProps, ref) => {
		const internalRef = useRef<HTMLElement | null>(null);
		const reference = ref || internalRef;

		const isRefObject = (
			ref: any
		): ref is React.MutableRefObject<HTMLElement | null> =>
			typeof ref === "object" && ref.hasOwnProperty("current");

		const classSwitcher = () => {
			if (!isRefObject(reference)) return;

			inactiveClass?.split(" ").forEach((c) => {
				if (reference.current) {
					const classList = reference.current.classList;
					let res = classList.contains(c);

					if (res) {
						classList.remove(c);
					} else {
						classList.add(c);
					}
				}
			});
		};

		useEffect(() => {
			if (!isRefObject(reference)) return;

			if (inactiveClass) {
				reference.current?.addEventListener("click", classSwitcher);
			}

			return () => {
				reference.current?.removeEventListener("click", classSwitcher);
			};
		}, []);

		return (
			<>
				<details className={"dropdown " + className} open>
					<summary className="m-1 btn" ref={reference}>
						{displayLabel}
					</summary>
					{children}
				</details>
			</>
		);
	}
);

export default DropdownRoot;