import NavHeader from "./NavHeader";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { Button } from "@mui/material";
import ItemCard from './ItemCard';
import { rods, reels, bait } from './ShopItems.js'
import { Link } from "react-router-dom";

const Shop = () => {

    const [itemsCount, setItemsCount] = useState(0);
    const [cart, setCart] = useState([]);


    const addToCart = (productCount, setProductCount, item) => {
        setItemsCount(itemsCount + parseInt(productCount));
        setProductCount(0);
        setCart([...cart, item]);
    };

    return (
        <div className="bg-stone-100 h-full">
            <NavHeader/>
            <div className="container flex justify-end items-center gap-2 max-w-full pr-20 lg:pr-60 py-3">
                <Badge color="primary" badgeContent={itemsCount}>
                    <ShoppingCartIcon color="primary" />
                </Badge>
                <Link to="/cart" state={cart}>
                    <Button type="button">Shoping Cart</Button>
                </Link>
            </div>
            <div className=" mx-8 md:mx-16 lg:mx-60 text-sky-800 font-bold">
                <legend className="pb-8">Welcome to the shop! </legend>
                <h3 className="pb-4">Fishing rods:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-20">
                    { rods.map((item) => {
                        return <ItemCard key={item.id} addToCart={addToCart} item={item}/>
                    })}
                </div>
                <h3 className="py-8">Fishing reels:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-20">
                { reels.map((item) => {
                        return <ItemCard key={item.id} addToCart={addToCart} item={item}/>
                    })}
                </div>
                <h3 className="py-8">Fishing lures:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-20 pb-20">
                { bait.map((item) => {
                        return <ItemCard key={item.id} addToCart={addToCart} item={item}/>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Shop;