import { Info } from "@/models";
import { readFile } from "@/utils/server-side-only";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const info: Info = await readFile("./src/info.json");

	return NextResponse.json(info);
}
