import { fetchData, makeWhatsAppLink, normalizeLanguageName } from "@/utils";
import { Info, LanguagesObject, Repository } from "@/models";
import { IoMail, IoSchool, IoGlobeSharp } from "react-icons/io5";
import { FaPhone, FaGithubSquare, FaReact, FaAngleRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBootstrap, FaGitAlt } from "react-icons/fa6";
import {
	SiNextdotjs,
	SiStyledcomponents,
	SiTailwindcss,
	SiDjango,
	SiChakraui,
} from "react-icons/si";
// import Dropdown from "@/components/Dropdown";
import RepositoryCard from "@/components/RepositoryCard";
import {
	CardAction,
	CardActions,
	CardBody,
	CardContent,
	CardRoot,
	CardTitle,
} from "@/components/card";
import {
	TypescriptIcon,
	PythonIcon,
	JavascriptIcon,
	CplusplusIcon,
	CIcon,
	HTMLIcon,
	CSSIcon,
	PhpIcon,
	SassIcon,
	ShellIcon,
	DockerIcon,
	JavaIcon,
	VueIcon,
} from "@/components/languageIcons";
import {
	bebas,
	bungee,
	lilita,
	orbitron,
	oswald,
	overlock,
	permanent_marker,
	russo_one,
	tektur,
} from "@/fonts/tailwind-like";
import { readFile } from "@/utils/server-side-only";
import Copyable from "@/components/Copyable";
import Redirector from "@/components/Redirector";
import { DropdownRoot } from "@/components/Dropdown";
import { DropdownContent } from "@/components/Dropdown";

export default async function Home() {
	const info: Info = await readFile("./src/info.json");
	const firstWhatsAppNumber = info.phones.find((phone) => phone.whatsApp);
	const res = await fetchData<Repository[]>(
		"https://api.github.com/users/caioms2000/repos"
	);
	// const res: Repository[] = [];

	const maybeHasError: Record<string, any> = res;
	if (maybeHasError.message) {
		throw Error(maybeHasError.message);
	}

	const repos = res.map((r) => ({ ...r, languages: new Array<string>(0) }));

	for (const repo of repos) {
		const languages: LanguagesObject = await fetchData(repo.languages_url);
		repo.languages = Object.keys(languages);
	}

	return (
		<>
			<header className="pb-10 bg-[url('./../../public/img/wallpaper.jpg')] bg-cover bg-[0%_20%] flex justify-between">
				<div className="bg-zinc-800 w-fit p-3 rounded-br-lg">
					<img
						src="img/perfil1.jpg"
						alt="Foto de perfil"
						className="max-h-96 rounded-lg"
					/>
					<div
						className={
							"flex flex-col justify-center text-white pt-2 " +
							tektur
						}
					>
						<p className="font-bold text-center">{info.fullName}</p>
						<p className="font-bold text-center">
							{info.location.city}, {info.location.state}
						</p>
					</div>
				</div>

				<div className="hidden sm:flex items-center">
					<p
						className={
							"font-bold bg-blue-900/90 p-5 rounded-lg text-2xl " +
							bungee
						}
					>
						Desenvolvedor Full Stack Jr.
					</p>
				</div>
				
				<DropdownRoot inactiveClass="text-white border-0 bg-blue-700 font-bold" label="Contatos">
					<DropdownContent>
					{info.emails.map((email) => (
						<div
							key={email}
							className="inline-flex items-center gap-1 font-bold underline underline-offset-2"
						>
							<IoMail className="text-red-500" />
							<li className="mb-3 last:mb-0">
								<Copyable
									data={email}
									notificationText="Email copiado"
								>
									{email}
								</Copyable>
							</li>
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
							<li className="mb-3 last:mb-0">
								<Redirector link={makeWhatsAppLink(phone).link} target="_blank">
									{phone}
								</Redirector>
							</li>
						</div>
					))}
					</DropdownContent>
				</DropdownRoot>
				{/* <Dropdown inactiveClass="text-white border-0 bg-blue-700 font-bold">
					{info.emails.map((email) => (
						<div
							key={email}
							className="inline-flex items-center gap-1 font-bold underline underline-offset-2"
						>
							<IoMail className="text-red-500" />
							<li className="mb-3 last:mb-0">
								<Copyable
									data={email}
									notificationText="Email copiado"
								>
									{email}
								</Copyable>
							</li>
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
							<li className="mb-3 last:mb-0">
								<Redirector link={makeWhatsAppLink(phone).link} target="_blank">
									{phone}
								</Redirector>
							</li>
						</div>
					))}
				</Dropdown> */}
			</header>

			<section className="bg-zinc-900/90">
				<div className="flex flex-wrap justify-center gap-4 p-3">
					<FaGitAlt
						className="text-4xl text-red-600"
						data-te-toggle="tooltip"
						title={`Git`}
					/>
					<TypescriptIcon
						className="text-4xl text-blue-600"
						data-te-toggle="tooltip"
						title={`Typescript`}
					/>
					<PythonIcon
						className="text-4xl text-red-400"
						data-te-toggle="tooltip"
						title={`Python`}
					/>
					<JavascriptIcon
						className="text-4xl text-yellow-300"
						data-te-toggle="tooltip"
						title={`Javascript`}
					/>
					<CplusplusIcon
						className="text-4xl text-purple-500"
						data-te-toggle="tooltip"
						title={`C++`}
					/>
					<CIcon
						className="text-4xl text-blue-300"
						data-te-toggle="tooltip"
						title={`C`}
					/>
					<HTMLIcon
						className="text-4xl text-orange-500"
						data-te-toggle="tooltip"
						title={`HTML`}
					/>
					<FaReact
						className="text-4xl text-blue-400"
						data-te-toggle="tooltip"
						title={`React`}
					/>
					<SiDjango
						className="text-4xl text-green-800"
						data-te-toggle="tooltip"
						title={`Django`}
					/>
					<SiNextdotjs
						className="text-4xl"
						data-te-toggle="tooltip"
						title={`Nextjs`}
					/>
					<SiStyledcomponents
						className="text-4xl text-pink-300"
						data-te-toggle="tooltip"
						title={`Styledcomponents`}
					/>
					<SiTailwindcss
						className="text-4xl text-cyan-400"
						data-te-toggle="tooltip"
						title={`Tailwindcss`}
					/>
					<FaBootstrap
						className="text-4xl text-purple-600"
						data-te-toggle="tooltip"
						title={`Bootstrap`}
					/>
					<SiChakraui
						className="text-4xl text-cyan-400"
						data-te-toggle="tooltip"
						title={`Chakraui`}
					/>
				</div>
			</section>

			<main className="my-5">
				<section className={"mb-10 bg-zinc-900/90 p-4 " + oswald}>
					<p className="text-center font-bold text-2xl mb-5">
						Apaixonado por tecnologia e estou sempre buscando novas
						formas de auto-aprimoramento. Pronto para dar vida à sua
						ideia.
					</p>
					<div className="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 justify-items-center gap-x-3">
						<div className="bg-zinc-950 p-3 rounded-lg font-bold text-lg text-center flex">
							Criar sites e sistemas intuitivos e fáceis de usar.
						</div>
						<div className="bg-zinc-950 p-3 rounded-lg font-bold text-lg text-center flex">
							Desenvolver soluções personalizadas para atender às
							suas necessidades.
						</div>
						<div className="bg-zinc-950 p-3 rounded-lg font-bold text-lg text-center flex">
							Garantir que seus projetos sejam seguros e
							confiáveis.
						</div>
					</div>
				</section>

				{firstWhatsAppNumber && (
					<section className="mb-10">
						<div className="bg-zinc-800 w-fit rounded-r-lg p-3 border-4 border-l-0 border-blue-700 text-lg flex flex-col gap-5">
							<p className="font-semibold">
								Precisa de uma solução tecnológica? Um sistema
								para auxiliar você?
							</p>
							<a
								href={
									makeWhatsAppLink(firstWhatsAppNumber.phone)
										.link
								}
								target="_blank"
							>
								<p className="inline-flex items-center font-bold">
									Entre em contato comigo
									<FaAngleRight className="text-blue-700 size-7" />
								</p>
							</a>
						</div>
					</section>
				)}

				{info.productionProjects && (
					<section className="mb-10">
						<div
							className={
								"font-bold text-xl pl-3 mb-5 inline-flex items-center gap-2 " +
								russo_one
							}
						>
							<IoGlobeSharp className="text-4xl" /> Projetos em
							produção
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-6">
							{info.productionProjects.map((proj, index) => (
								<a
									href={proj.link}
									className="flex flex-col items-center gap-3 p-2 text-left"
									key={index}
								>
									<p className="font-bold text-lg">
										{proj.name}
									</p>
									<img
										src={`img/${proj.preview}`}
										alt={`Preview${proj.name}`}
										className="max-h-40"
									/>
								</a>
							))}
						</div>
					</section>
				)}

				<div
					className={
						"font-bold text-xl pl-3 mb-5 inline-flex items-center gap-2 " +
						russo_one
					}
				>
					<FaGithubSquare className="text-4xl" /> Repositórios no
					Github
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-6">
					{repos
						.filter(
							(repo) =>
								!repositoriesExceptions.includes(
									repo.name.toLowerCase()
								)
						)
						.map((repo) => (
							<CardRoot key={repo.id} className="sm:w-64 lg:w-72">
								<CardBody className="p-0 pb-3 rounded-[inherit]">
									<CardTitle
										className={
											"bg-zinc-900 rounded-[inherit] rounded-b-none pl-3 py-1 " +
											orbitron
										}
									>
										{repo.name}
									</CardTitle>
									<CardContent className="p-5 flex flex-col flex-1">
										<p className="flex-grow">
											{repo.description}
										</p>
										<div className="">
											<div className="divider" />
											<div className="flex flex-wrap gap-3 w-fit">
												{repo.languages
													.filter(
														(language) =>
															!languagesExceptions.includes(
																language
															)
													)
													.map((language) => (
														<p
															key={language}
															className=""
															data-te-toggle="tooltip"
															title={`${language}`}
														>
															{normalizeIcons(
																normalizeLanguageName(
																	language
																)
															)}
														</p>
													))}
											</div>
										</div>
									</CardContent>
									<CardActions className="px-5">
										<CardAction>
											<button
												className={
													"btn bg-blue-700 text-white font-bold " +
													russo_one
												}
											>
												Visitar
											</button>
										</CardAction>
									</CardActions>
								</CardBody>
							</CardRoot>
						))}
					{
						// repos.map(repo => <RepositoryCard key={repo.id} repository={repo}/>)
					}
				</div>

				{info.education && (
					<section className="mt-5 px-2">
						<p className="inline-flex items-center gap-3 font-bold">
							<IoSchool className="text-xl" />
							Formação acadêmica
						</p>
						<div className="grid grid-cols-3">
							{info.education.map((ed, index) => (
								<div
									className="flex border-2 items-center gap-3 p-2 rounded-lg"
									key={index}
								>
									<img
										src={`img/${educationAreaImages[index]}`}
										alt={`Logo ${ed.name}`}
										className="max-h-12"
									/>
									<div className="divider divider-horizontal divider-info m-0"></div>
									<div className="div">
										<p className="font-bold">{ed.name}</p>
										<p className="font-semibold text-blue-700">
											{ed.course}
										</p>
										<p className="italic inline-flex gap-3 text-zinc-400">
											<span className="p">
												{ed.duration.start}
											</span>
											-
											<span className="p">
												{ed.duration.end}
											</span>
										</p>
									</div>
								</div>
							))}
						</div>
					</section>
				)}
			</main>
		</>
	);
}

const repositoriesExceptions = ["caioms2000"];
const languagesExceptions = [
	"Jupyter Notebook",
	"Procfile",
	"Makefile",
	"QMake",
];
const educationAreaImages: string[] = ["puc-logo.png"];

const languageIcons: Record<string, JSX.Element> = {
	TypeScript: <TypescriptIcon className="text-lg text-blue-600" />,
	Python: <PythonIcon className="text-lg text-red-400" />,
	JavaScript: <JavascriptIcon className="text-lg text-yellow-300" />,
	Cplusplus: <CplusplusIcon className="text-xl text-purple-500" />,
	C: <CIcon className="text-xl text-blue-300" />,
	HTML: <HTMLIcon className="text-xl text-orange-500" />,
	CSS: <CSSIcon className="text-xl text-blue-300" />,
	PHP: <PhpIcon className="text-2xl text-purple-800" />,
	Sass: <SassIcon className="text-xl text-rose-600" />,
	Shell: <ShellIcon className="text-xl text-lime-500" />,
	Dockerfile: <DockerIcon className="text-xl text-blue-700" />,
	Java: <JavaIcon className="text-xl" />,
	Vue: <VueIcon className="text-xl text-green-800" />,
};
function normalizeIcons(name: string) {
	const iconElement = languageIcons[name];

	return iconElement || name;
}
