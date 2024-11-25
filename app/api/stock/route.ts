import { getStockData } from "@/lib/api/stock";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");

  if (!symbol) {
    return NextResponse.json({ error: "Symbol is required" }, { status: 400 });
  }

  try {
    const data = await getStockData(symbol);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err as Error }, { status: 500 });
  }
};
