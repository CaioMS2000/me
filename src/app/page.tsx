import { readFile } from "@/utils";
import { Info } from "@/models";

export default async function Home() {
	const info: Info = await readFile("./src/info.json");
	// console.log(info)

	return (
		<>
			<header
				className={"pb-10 bg-[url('./../../public/img/wallpaper.jpg')] bg-cover bg-[0%_20%]"}
			>
				<div className={"bg-zinc-800 w-fit p-3 rounded-br-lg"}>
					<img
						src="img/perfil1.jpg"
						alt="Foto de perfil"
						className={"max-h-96 rounded-lg"}
					/>
					<div className={"flex-col text-white pt-2"}>
						<p className={"font-bold text-center"}>
							{info.fullName}
						</p>
						<p className={"font-bold text-center"}>
							{info.location.city}, {info.location.state}
						</p>
					</div>
				</div>
			</header>
		</>
	);
}
