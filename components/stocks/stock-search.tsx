"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { StockQuote } from "@/types/stock";
import { Dispatch, SetStateAction } from "react";

interface StockSearchProps {
  onSearch: Dispatch<SetStateAction<StockQuote | null>>;
}

const StockSearch = ({ onSearch }: StockSearchProps) => {
  const [symbol, setSymbol] = useState("");
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!symbol) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a stock symbol",
      });
      return;
    }

    try {
      const response = await fetch(`/api/stock?symbol=${symbol}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch stock data");
      }

      onSearch(data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to fetch stock data",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Input
          placeholder="Enter stock symbol (e.g. AAPL, GOOGL, MSFT)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          maxLength={5}
          className="w-64"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  );
};

export default StockSearch;
