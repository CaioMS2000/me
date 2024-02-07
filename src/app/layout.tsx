import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export const metadata: Metadata = {
	title: "Caio Marques Silva",
	description: "Portifólio do Caio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-zinc-950 min-h-screen max-w-screen">
				<Background>{children}</Background>
				<Footer />
			</body>
		</html>
	);
}
