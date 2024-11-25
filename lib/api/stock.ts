import { StockQuote, StockQuoteResponse } from "@/types/stock";

const BASE_URL = "https://www.alphavantage.co/query";

export async function getStockData(symbol: string): Promise<StockQuote> {
  const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
  if (!API_KEY) {
    throw new Error("API key is not configured");
  }

  const response = await fetch(
    `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch stock data");
  }

  const data: StockQuoteResponse = await response.json();
  const quote = data["Global Quote"];

  return {
    symbol: quote["01. symbol"],
    open: quote["02. open"],
    high: quote["03. high"],
    low: quote["04. low"],
    price: quote["05. price"],
    volume: quote["06. volume"],
    latestTradingDay: quote["07. latest trading day"],
    previousClose: quote["08. previous close"],
    change: quote["09. change"],
    changePercent: quote["10. change percent"],
  };
}
