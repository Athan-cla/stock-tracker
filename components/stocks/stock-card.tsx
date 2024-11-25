import { StockQuote } from "@/types/stock";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface StockCardProps {
  data: StockQuote;
}

const StockCard = ({ data }: StockCardProps) => {
  const isPositiveChange = Number(data.change) > 0;

  return (
    <Card className="w-[350px]">
      <CardHeader className="flex-row justify-between items-center">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl font-bold">{data.symbol}</h2>
          <Badge variant={isPositiveChange ? "default" : "destructive"}>
            {isPositiveChange ? "▲" : "▼"} {data.changePercent}
          </Badge>
        </div>
        <span className="text-sm text-muted-foreground">
          {data.latestTradingDay}
        </span>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Current Price</p>
            <p className="text-lg font-medium">${data.price}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Change</p>
            <p
              className={`text-lg font-medium ${
                isPositiveChange ? "text-green-500" : "text-red-500"
              }`}
            >
              ${data.change}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">High/Low</p>
            <p className="text-lg font-medium">
              ${data.high} / ${data.low}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Volume</p>
            <p className="text-lg font-medium">{data.volume}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockCard;
