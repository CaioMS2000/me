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

interface NavbarProps extends PropsWithChildren {}

export default function Navbar({}: NavbarProps) {
	const [info, setInfo] = useState<Info | null>(null);
    const [showToast, setShowToast] = useState(false)
	const [toastText, setToastText] = useState("")

    function handleToast(newText: string = ""){
		setToastText(newText)

        setShowToast(true)

        setTimeout(() => setShowToast(false), 2 * 1000)
    }
	
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
							href="https://www.linkedin.com/in/caio-m-silva-5b42a9209"
							target="_blank"
						>
							@Caio M. Silva
						</a>
					</p>
					<p>Copyright © 2024 - Direitos reservados</p>
				</aside>
				<nav>
					<div className="grid grid-flow-col gap-6">
						<span className="cursor-pointer inline-flex items-center gap-2" onClick={() => window.open("https://www.linkedin.com/in/caio-m-silva-5b42a9209", "_blank")}>
							<FaLinkedin/> LinkedIn
						</span>
						<Copyable notificationText="Email copiado" data={info?.emails[0]}>
							<span className="cursor-pointer inline-flex items-center gap-2">
								<IoMail/> Email
							</span>
						</Copyable>
						<span className="cursor-pointer inline-flex items-center gap-2" onClick={() => window.open("https://github.com/CaioMS2000", "_blank")}>
							<FaGithubSquare/> GitHub
						</span>
						<span className="cursor-pointer inline-flex items-center gap-2" onClick={() => {
                            if(!info)return;
                            
                            const phone = info.phones.find(phone => phone.whatsApp == true)
                            
                            if(!phone)return;

							const {link} = makeWhatsAppLink(phone.phone)
                            
                            window.open(link, "_blank")
                            handleToast("Número copiado")
                        }}>
							<IoLogoWhatsapp/> WhatsApp
						</span>
					</div>
				</nav>
			</footer>
		    {showToast && (
				<>
				<Toast text={toastText} />
				</>
			)}
		</>
	);
}