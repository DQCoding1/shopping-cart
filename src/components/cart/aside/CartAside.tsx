import "./CartAside.scss";
import { CartItem } from "../../../types/CartItem";

const CartAside = ({ name, imgUrl, price, quantity }: CartItem) => {

    return (
        <div className="border-top-2 border-100 ">
            <p className="uppercase ">{name}</p>
            <div className="flex justify-content-between align-items-center">
                <img src={imgUrl} alt={name} className="w-4 cartAside-img " />
                <div className="w-4 flex flex-column align-items-center">
                    <div>Quantity :</div>
                    <p>{quantity}</p>
                </div>
                <div className="w-4 flex flex-column align-items-center">
                    <div>Total :</div>
                    <p className="text-center">${price * quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default CartAside;
