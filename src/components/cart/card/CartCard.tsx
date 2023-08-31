import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { useAppDispatch, useAppSelector } from "../../../context/hooks/hooks";
import { createItem, decreaseQuantity, increaseQuantity } from "../../../context/slice/shoppingCartSlice";
import "./CartCard.scss";

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
    const shoppingCart = useAppSelector((state) => state.shoppingCart);
    const shoppingCartItem = shoppingCart.find((item) => item.id === id);
    const dispatch = useAppDispatch();

    return (
        <Card
            key={id}
            title={name}
            subTitle={formatCurrency(price)}
            footer={
                shoppingCartItem?.quantity === undefined ? (
                    <Button
                        className="w-full flex justify-content-center align-items-center"
                        onClick={() =>
                            dispatch(
                                createItem({
                                    id,
                                    name,
                                    price,
                                    imgUrl,
                                    quantity: 1,
                                })
                            )
                        }
                    >
                        Add to cart
                    </Button>
                ) : (
                    <div className="flex justify-content-center align-items-center gap-4">
                        <Button
                            icon="pi pi-minus"
                            outlined
                            rounded
                            aria-label="minus"
                            onClick={() => {
                                dispatch(decreaseQuantity(id));
                            }}
                        />
                        <div className="text-lg">
                            {shoppingCartItem?.quantity}
                        </div>
                        <Button
                            icon="pi pi-plus"
                            outlined
                            rounded
                            aria-label="plus"
                            onClick={() => {
                                dispatch(increaseQuantity(id));
                            }}
                        />
                    </div>
                )
            }
            header={
                <img src={imgUrl} alt="name" className="storeItem-imagen" />
            }
            className="col-12 md:col-5 lg:col-3 h-25rem"
        ></Card>
    );
};

export default StoreItem;
