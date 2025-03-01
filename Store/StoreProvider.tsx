import { useState } from "react";
import StoreContext from "./StoreContext";

const StoreProvider = props => {
    const [cart, setCart] = useState([])
    const [user, setUser] = useState([])
    const [isNightMode, setIsNightMode] = useState(false);

    const providerValue = {
        cart, setCart,
        user, setUser,
        isNightMode, setIsNightMode
    }

    return (
        <StoreContext.Provider value={providerValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreProvider