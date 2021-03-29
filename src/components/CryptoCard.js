import React from "react";

export default function CryptoCard({ ticker }) {
  return (
    <div className="crypto-card">
      <h3 className="crypto-card__symbol">{ticker.symbol}</h3>
      <h2 className="crypto-card__price">${ticker.last_trade_price}</h2>
    </div>
  );
}
