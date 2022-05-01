import { useState } from "react";

const ItemCard = (props) => {
    const [productCount, setProductCount] = useState(0);
    return (
        <div className="border-2 border-black border-solid p-4 rounded">
            <div className="flex justify-between items-center">
                <h3>Item name:</h3>
                <h3>Price</h3>
            </div>
            <div className="p-12 mt-4 mb-4 border-2 border-black border-solid rounded">
                Inset product picture here
            </div>
            <form>
                <div className="flex gap-8">
                    <label htmlFor="item">Amount of items</label>
                    <button type="button" onClick={() => {
                        setProductCount(Math.max(productCount - 1, 0))
                    }}>-</button>
                    <button type="button" onClick={() => setProductCount(parseInt(productCount) + 1)}>+</button>
                </div>
                <input className="p-1"
                style={{width: '200px'}}
                type="number"
                min="0"
                htmlFor='item' 
                value={productCount}
                onChange={e => setProductCount(e.target.value)}
                />
            </form>
            <button type="button" onClick={() => props.addToCart(productCount, setProductCount)}>Add To Cart</button>
        </div>
    )
}
export default ItemCard;