import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./StoreItem.scss";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useState } from "react";

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
    const [cart, setCart] = useState(1);

    return (
        <Card
            key={id}
            title={name}
            subTitle={formatCurrency(price)}
            footer={
                cart === 0 ? (
                    <Button className="w-full flex justify-content-center align-items-center">
                        Add to cart
                    </Button>
                ) : (
                    <div className="flex justify-content-center align-items-center gap-4">
                        <Button
                            icon="pi pi-minus"
                            outlined
                            rounded
                            aria-label="minus"
                        />
                        <div className="text-lg">{cart}</div>
                        <Button
                            icon="pi pi-plus"
                            outlined
                            rounded
                            aria-label="plus"
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
