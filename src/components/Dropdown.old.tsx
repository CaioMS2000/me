"use client";
import {
    HTMLAttributes,
    PropsWithChildren,
    forwardRef,
    useEffect,
    useRef,
} from "react";

interface DropdownProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
    inactiveClass?: string;
}

const Dropdown = forwardRef<HTMLElement, DropdownProps>(
    ({ children, inactiveClass }: DropdownProps, ref) => {
        const internalRef = useRef<HTMLElement | null>(null);
        const reference = ref || internalRef;

        const isRefObject = (ref: any): ref is React.MutableRefObject<HTMLElement | null> =>
            typeof ref === "object" && ref.hasOwnProperty("current");

        const classSwitcher = () => {
			if (!isRefObject(reference))return;

            inactiveClass?.split(" ").forEach((c) => {
                if (reference.current){
					const classList = reference.current.classList
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
			if (!isRefObject(reference))return;

            if (inactiveClass) {
                reference.current?.addEventListener("click", classSwitcher);
            }

            return () => {
                reference.current?.removeEventListener("click", classSwitcher);
            };
        }, []);

        return (
            <>
                <details className="dropdown dropdown-end" open>
                    <summary className="m-1 btn" ref={reference}>
                        Contatos
                    </summary>
                    <ul className="p-3 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
                        {children}
                    </ul>
                </details>
            </>
        );
    }
);

export default Dropdown;
