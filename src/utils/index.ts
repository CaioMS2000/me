export async function fetchData<T=any>(url: string, options?:RequestInit|Record<string, string>){
	const res = await fetch(url, options)
	const data: T = await res.json()

	return data
}

export function normalizeLanguageName(name: string){
	const language = normalizedLanguageName[name]

	return language || name
}
const normalizedLanguageName: Record<string, string> = {'C++':'Cplusplus'}

export function makeWhatsAppLink(phone: string){

	// const message = "Olá,%20vi%20seu%20portifólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
	const message = "Olá, vi seu portifólio e gostaria de conversar sobre um projeto."
	const link = `https://api.whatsapp.com/send?phone=55${phone}` + `&text=${message}`
	return {link,}
}