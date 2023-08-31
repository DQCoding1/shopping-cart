import { Sidebar } from "primereact/sidebar";
import { useAppDispatch, useAppSelector } from "../../context/hooks/hooks";
import { hideAside } from "../../context/slice/AsideSlice";
import CartAside from "../cart/aside/CartAside";
import { useEffect, useState } from "react";

const Aside = () => {
    const [finalTotal, setFinalTotal] = useState<number>(0);
    const isVisibleAside = useAppSelector((state) => state.aside);
    const dispatch = useAppDispatch();
    const shoppingCart = useAppSelector((state) => state.shoppingCart);

    useEffect(() => {
        const newState = shoppingCart.reduce((acc, curr) => {
            return acc + curr.price * curr.quantity;
        }, 0);

        setFinalTotal(newState);
    }, [shoppingCart]);

    return (
        <Sidebar
            visible={isVisibleAside}
            onHide={() => dispatch(hideAside())}
            position="right"
        >
            <h2>Your Products :</h2>
            <div className="flex flex-column gap-3">
                {shoppingCart.map((item) => (
                    <CartAside key={item.id} {...item} />
                ))}
            </div>
            <p>Final Total: $ {Math.floor(finalTotal)} </p>
        </Sidebar>
    );
};

export default Aside;
