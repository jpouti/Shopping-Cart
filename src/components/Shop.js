import NavHeader from "./NavHeader";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { Button } from "@mui/material";
import ItemCard from './ItemCard';

const Shop = () => {

    const [itemsCount, setItemsCount] = useState(0);

    const addToCart = (productCount, setProductCount) => {
        setItemsCount(itemsCount + productCount);
        setProductCount(0);
    }

    return (
        <div>
            <NavHeader/>
            <div className="container flex justify-end items-center gap-2 max-w-full pr-20 lg:pr-60 py-3">
                <Badge color="primary" badgeContent={itemsCount}>
                    <ShoppingCartIcon color="primary" />
                </Badge>
                <Button type="button">Shoping Cart</Button>
            </div>
            <div>
                <h3>Items:</h3>
                <div className="grid grid-cols-4">
                    <ItemCard addToCart={addToCart}/>
                </div>
            </div>
        </div>
    )
}

export default Shop;