const currencyFilter = (amount, symbol) => `${symbol}${amount.toFixed(2)}`;

export default currencyFilter;
