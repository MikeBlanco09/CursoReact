import type { CSSProperties } from "react";

const firstName = 'Michael';
const lastName = 'Blanco';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Costa Rica',
};

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
}

export function MyAwesomeApp() {

    return (
        <>
            <h1> {firstName} </h1>
            <h3> {lastName} </h3>

            <p>{favoriteGames.join(", ")}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p style={myStyles} >
                {JSON.stringify(address)}
            </p>

        </>
    )
}