import { NextResponse } from "next/server";
interface DataExample {
  count: string;
  next: string;
  previous: string;
  results: [{ name: string; url: string }];
}

export async function GET() {
  const trae = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
  const data:DataExample = await trae.json();
  const ordena = data.results
  return NextResponse.json(ordena);
}
