"use client";
import {
	HTMLAttributes,
	PropsWithChildren,
	forwardRef,
	useEffect,
	useRef,
} from "react";

interface DropdownProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
	optionalClass?: string;
}

export default forwardRef<HTMLElement, DropdownProps>(
	({ children, optionalClass }: DropdownProps, ref) => {
		const ref2 = useRef<HTMLElement | null>(null);
		const reference = ref || ref2;

		const classSwitcher = () => {
			optionalClass!.split(" ").forEach((c) => {
				if (
					typeof reference === "object" &&
					reference.hasOwnProperty("current")
				) {
					if (reference.current) {
						console.log(`avalidando ${c}`);
						let res = reference.current.classList.contains(c);

						if (res) {
							console.log(`${c} existe`);
							reference.current.classList.remove(c);
							console.log(`${reference.current.className}`);
						} else {
							console.log(`adicionarei ${c}`);
							reference.current.classList.add(c);
							console.log(`${reference.current.className}`);
						}
					}
				}
			});
		};

		useEffect(() => {
			if (optionalClass) {
				if (
					typeof reference === "object" &&
					reference.hasOwnProperty("current")
				) {
					reference.current?.addEventListener("click", classSwitcher);
				}
			}

			return () => {
				if (
					typeof reference === "object" &&
					reference.hasOwnProperty("current")
				)
					reference.current?.addEventListener("click", classSwitcher);
			};
		}, []);

		return (
			<>
				<details className="dropdown dropdown-end" open>
					<summary className="m-1 btn" ref={reference}>
						Contatos
					</summary>
					<ul className="p-3 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit font-bold underline underline-offset-2">
						{children}
					</ul>
				</details>
			</>
		);
	}
);
