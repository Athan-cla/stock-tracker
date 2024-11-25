import StockContainer from "@/components/stocks";
import Link from "next/link";

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Stock Market Tracker</h1>
        <StockContainer />
      </main>
      <footer className="row-start-3 flex gap-1 flex-wrap items-center justify-center">
        Stock data provided by{" "}
        <Link
          href="https://www.alphavantage.co/"
          aria-label="Visit Alpha Vantage website"
          className="text-primary hover:underline"
        >
          Alpha Vantage
        </Link>
      </footer>
    </div>
  );
};

export default Home;
