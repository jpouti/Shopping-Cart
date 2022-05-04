import { Link, useLocation } from "react-router-dom";
import Shop from "./Shop";
import NavHeader from "./NavHeader";
import { useEffect, useState} from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const ShoppingCart = () => {
    const { state } = useLocation();

    const [items, setItems] = useState(state);
    const [total, setTotal] = useState(0);

    const handleRemove = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }
    const handlePayment = () => {
        alert("This is a fake store without payment function")
    }
    const totalPayment = () => {
        let price = 0;
        items.map((item) => {
            price = price + (parseFloat(item.price) * parseFloat(item.count));
        })
        setTotal(price);
    }

    useEffect(() => {
        totalPayment();
    }, [items]);

    return (
        <div className="bg-sky-50 h-screen">
            <NavHeader />
            <div className="mx-8 p-8 rounded md:mx-16 lg:mx-80 mt-12 bg-blue-100 text-sky-800 font-bold">
                <div className="flex justify-between">
                    <h3> Items in your shopping cart: </h3>
                    <Link to='/shop' state={items}>
                        <KeyboardBackspaceIcon/>
                    </Link>
                </div>
                <ul className="flex flex-col gap-4 mt-8">
                {items.map((item) => {
                    return  <li key={item.id} className="flex gap-8 border-2 border-sky-800 border-solid rounded p-4 text-sky-800">
                                <span>Item: {item.name}</span>
                                <span>Item ID: {item.id} </span>
                                <span>Unit price: {item.price} $</span>
                                <span>x {item.count}</span>
                                <span>Total: {parseFloat(item.price) * parseFloat(item.count)} $ </span>
                                <button onClick={() => handleRemove(item.id)} className="font-bold text-red-800">Remove</button>
                            </li>
                    })}
                </ul>
                <div className="mt-4 pt-4 pr-12 border-t-2 border-sky-800 border-dotted flex justify-end gap-16">
                    <p onChange={totalPayment} className="text-green-800">Total : {total} $ </p>
                    <button className="text-blue-800 font-bold" onClick={handlePayment}>Order</button>
                </div>
            </div>
        </div>
    ) 
}

export default ShoppingCart;