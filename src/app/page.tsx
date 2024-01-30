import { fetchData, readFile } from "@/utils";
import { Info, LanguagesObject, Repository } from "@/models";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Dropdown from "@/components/Dropdown";
import RepositoryCard from "@/components/RepositoryCard";

export default async function Home() {
	const info: Info = await readFile("./src/info.json");
	const res = await fetchData<Repository[]>(
		"https://api.github.com/users/caioms2000/repos"
	);
	const repos = res.map(r => ({...r, languages: new Array<string>(0)}))

	repos.forEach(async (repo, index) => {
		const languages: LanguagesObject = await fetchData(repo.languages_url);
		repos[index].languages = Object.keys(languages)
	});

	return (
		<>
			<header className="pb-10 bg-[url('./../../public/img/wallpaper.jpg')] bg-cover bg-[0%_20%] flex justify-between">
				<div className="bg-zinc-800 w-fit p-3 rounded-br-lg">
					<img
						src="img/perfil1.jpg"
						alt="Foto de perfil"
						className="max-h-96 rounded-lg"
					/>
					<div className="flex flex-col justify-center text-white pt-2">
						<p className="font-bold text-center">{info.fullName}</p>
						<p className="font-bold text-center">
							{info.location.city}, {info.location.state}
						</p>
					</div>
				</div>

				<Dropdown inactiveClass="text-white border-0 bg-blue-700 font-bold">
					{info.emails.map((email) => (
						<div
							key={email}
							className="inline-flex items-center gap-1 font-bold underline underline-offset-2"
						>
							<IoMail className="text-red-500" />
							<li className="mb-3 last:mb-0">{email}</li>
						</div>
					))}
					{info.phones.map(({ phone, whatsApp }) => (
						<div
							key={phone}
							className="inline-flex items-center gap-1 font-bold underline underline-offset-2"
						>
							{whatsApp ? (
								<IoLogoWhatsapp className="text-green-600" />
							) : (
								<FaPhone />
							)}
							<li className="mb-3 last:mb-0">{phone}</li>
						</div>
					))}
				</Dropdown>
			</header>

			<main>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
					{
						repos.map(repo => <RepositoryCard key={repo.id} repository={repo}/>)
					}
				</div>
			</main>
		</>
	);
}
