"use client";
import Copyable from "./Copyable";

export default function Background({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<>
			<div className="w-full h-full flex justify-center">
				<div
					id="background"
					className="bg-[url('./../../public/img/wallpaper1.jpg')] bg-cover bg-[60%_0%] max-w-screen-xl flex flex-col"
				>
					<div className="bg-black/80 w-full h-full">{children}</div>

					<div className="bg-black/80 w-full flex justify-end pr-1">
						<Copyable data="https://www.pexels.com/photo/design-templates-on-a-flat-screen-computer-monitor-1714202/">
							<p className="text-zinc-700 text-sm w-fit cursor-pointer">
								Photo by Josh Sorenson
							</p>
						</Copyable>
					</div>
				</div>
			</div>
		</>
	);
}
