"use client";

import { useState } from "react";
import { StockQuote } from "@/types/stock";
import StockSearch from "./stock-search";
import StockCard from "./stock-card";

export const StockContainer = () => {
  const [data, setData] = useState<StockQuote | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <StockSearch onSearch={setData} />
      {data && <StockCard data={data} />}
    </div>
  );
};
