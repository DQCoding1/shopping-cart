import { Sidebar } from "primereact/sidebar";
import { useAppDispatch, useAppSelector } from "../../context/hooks/hooks";
import { hideAside } from "../../context/slice/AsideSlice";

const Aside = () => {
    const isVisibleAside = useAppSelector((state) => state.aside);
    const dispatch = useAppDispatch();

    return (
        <Sidebar
            visible={isVisibleAside}
            onHide={() => dispatch(hideAside())}
            position="right"
        >
            <h2>Sidebar</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
        </Sidebar>
    );
};

export default Aside;
