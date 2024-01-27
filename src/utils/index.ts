import { readFile as nativeReadFile } from 'fs/promises';

export async function fetchData<T=any>(url: string, options?:Record<string, string>){
	const res = await fetch(url, options)
	const data: T = await res.json()

	return data
}

export async function readFile(path: string, _encode?: BufferEncoding){
	const encode = _encode || "utf-8"
	const data = JSON.parse(await nativeReadFile(path, encode))

	return data;
}