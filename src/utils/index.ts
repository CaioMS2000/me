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

	const link = `https://api.whatsapp.com/send?phone=55${phone}`
	return {link,}
}