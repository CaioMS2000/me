"use client";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Info } from "@/models";

interface ErrorProps {
	error: Error & { digest?: string };
	reset?: Function;
}
export default function Error({ error, reset }: ErrorProps) {
  const [info, setInfo] = useState<Info|null>(null)

	function hideNextJSErrorDisplay() {
		const styleElement = document.createElement("style");
		styleElement.textContent = `body > nextjs-portal { display: none; }`;
		document.head.appendChild(styleElement);
	}

  async function fetchInfo(){
    const res = await fetch("/api/getInfo");
    const data: Info = await res.json()
    
    setInfo(data)
  }

	useEffect(() => {
		console.clear();
		// console.error(error);
	}, [error]);

	useEffect(() => {
		hideNextJSErrorDisplay();

    fetchInfo();
	}, []);

	return (
		<>
			<section className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
				<div className="container flex flex-1 items-center px-6 py-12 mx-auto">
					<div className="flex flex-col items-center max-w-sm mx-auto text-center">
						<p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
								/>
							</svg>
						</p>
						<h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
							{error?.message}
						</h1>
						<div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
							<a
								href="/"
								className="btn w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600 font-bold"
							>
								Voltar
							</a>
						</div>
					</div>
				</div>
				{info && (<div className="flex flex-col p-5">
					<p className="font-bold text-center">Caso queira entrar em contato</p>

					<div className="flex justify-center gap-10">
          {info.emails.map((email) => (
						<div
							key={email}
							className="inline-flex items-center gap-1 font-bold underline underline-offset-2"
						>
							<IoMail className="text-red-500" />
							<p className="mb-3 last:mb-0">{email}</p>
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
							<p className="mb-3 last:mb-0">{phone}</p>
						</div>
					))}
					</div>
				</div>)}
			</section>
		</>
	);
}
