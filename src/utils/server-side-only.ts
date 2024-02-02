import { readFile as nativeReadFile } from 'fs/promises';

export async function readFile(path: string, _encode?: BufferEncoding){
	const encode = _encode || "utf-8"
	const data = JSON.parse(await nativeReadFile(path, encode))

	return data;
}