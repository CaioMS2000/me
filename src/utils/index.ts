export async function fetchData<T=any>(url: string, options?:Record<string, string>){
	const res = await fetch(url, options)
	const data: T = await res.json()

	return data
}