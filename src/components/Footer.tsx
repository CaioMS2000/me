"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Info } from "@/models";
import Toast from "./Toast";
import { makeWhatsAppLink } from "@/utils";
import Copyable from "./Copyable";
import Redirector from "./Redirector";

interface NavbarProps extends PropsWithChildren {}

export default function Navbar({}: NavbarProps) {
	const [info, setInfo] = useState<Info | null>(null);

	async function fetchInfo() {
		const res = await fetch("/api/getInfo");
		const data: Info = await res.json();

		setInfo(data);
	}

	useEffect(() => {
		fetchInfo();
	}, []);

	return (
		<>
			<footer className="footer footer-center p-10 bg-zinc-900 text-zinc-400">
				<aside>
					<img
						src="img/icon.jpg"
						alt="Ícone do C"
						className="max-h-16"
					/>
					<p className="font-bold">
						<a
							rel="noopener"
							href="https://www.linkedin.com/in/caio-m-silva-5b42a9209"
							target="_blank"
						>
							@Caio M. Silva
						</a>
					</p>
					<p>Copyright © 2024 - Direitos reservados</p>
				</aside>
<<<<<<< HEAD
				<nav>
=======
				<nav className="">
>>>>>>> 9e71614cf5d4fef3d3991c8bfee710c31d3f53ea
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
						<Redirector
							link="https://www.linkedin.com/in/caio-m-silva-5b42a9209"
							target="_blank"
						>
							<span className="cursor-pointer inline-flex items-center gap-2">
								<FaLinkedin /> LinkedIn
							</span>
						</Redirector>
						<Copyable
							notificationText="Email copiado"
							data={info?.emails[0]}
						>
							<span className="cursor-pointer inline-flex items-center gap-2">
								<IoMail /> Email
							</span>
						</Copyable>
						<Redirector
							link="https://github.com/CaioMS2000"
							target="_blank"
						>
							<span className="cursor-pointer inline-flex items-center gap-2">
								<FaGithubSquare /> GitHub
							</span>
						</Redirector>
						<Redirector
							link={
								makeWhatsAppLink(
									info?.phones.find(
										(phone) => phone.whatsApp == true
									)?.phone || ""
								).link
							}
							target="_blank"
						>
							<span className="cursor-pointer inline-flex items-center gap-2">
								<IoLogoWhatsapp /> WhatsApp
							</span>
						</Redirector>
					</div>
				</nav>
			</footer>
		</>
	);
}
