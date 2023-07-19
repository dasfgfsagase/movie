import { useEffect, useState } from "react";


function Comp() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState("");
    const [price, setPrice] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, []);
    const onChange = (event) => setMoney(event.target.value);
    const onSubmit = (event) => setPrice(event.target.value);
    return(
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong>:
            <select onChange={onChange}>
                <option>select Coins</option>
                {coins.map((coin) => (
                    <option value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>))}
            </select>}
            <h2>Please enter the amount</h2>
                <input 
                    onChange={onSubmit}
                    type="number" 
                    placeholder="Write USD"
                    value={price}
                /> $
            <h3>{price/money}개 구입 가능</h3>    
        </div>
    );
}
export default Comp;