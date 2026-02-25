import { ItemCounter } from "./shopping-cart/ItemCounter";


export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            <ItemCounter name="Nintendo Switch 2" quantity={2} />
            <ItemCounter name="Pro Controller" quantity={10} />
            <ItemCounter name="Super Smash" quantity={6} />
        </>
    )
}