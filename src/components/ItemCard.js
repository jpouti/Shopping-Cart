import { useState } from "react";

const ItemCard = (props) => {
    const [productCount, setProductCount] = useState(0);
    const item = props.item;
    const data = (item, counts) => {
        item.count = counts;
        return item;
    }
    return (
        <div>
            <div className="border-2 border-sky-600 border-solid p-4 rounded bg-sky-50">
                <div className="flex justify-between items-center">
                    <h3>{item.name}</h3>
                    <h3 className="text-green-600">{item.price} $ </h3>
                </div>
                <div className="p-12 mt-4 mb-4 border-2 border-sky-600 border-solid rounded bg-stone-50">
                    Inset product picture here
                </div>
                <form>
                    <div className="flex gap-8">
                        <label htmlFor="item">Amount of items</label>
                        <button id="reduceItem" type="button" onClick={() => {
                            setProductCount(Math.max(productCount - 1, 0))
                        }} className="text-red-600 font-bold">-</button>
                        <button id="addItem" type="button" onClick={() => setProductCount(parseInt(productCount) + 1)} className="text-green-600 font-bold">+</button>
                    </div>
                    <input className="p-1 bg-stone-50"
                    style={{width: '150px'}}
                    type="number"
                    min="0"
                    htmlFor='item' 
                    value={productCount}
                    onChange={e => setProductCount(e.target.value)}
                    />
                </form>
                <button id="submitItems" type="button" onClick={() => props.addToCart(productCount, setProductCount, data(item, productCount) )}>Add To Cart</button>
            </div>
        </div>
    )
}
export default ItemCard;