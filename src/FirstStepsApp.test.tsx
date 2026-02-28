import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="itemCounter" />
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}))

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => <div data-testid="itemCounter" name={props.name} quantity={props.quantity} />
// }));

describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    })

    test('should match snapshot', () => {

        render(<FirstStepsApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();

    });

    test('should render the correct number of ItemCounter components', () => {

        render(<FirstStepsApp />)

        const itemCounters = screen.getAllByTestId('itemCounter');

        expect(itemCounters.length).toBe(3);

        screen.debug();

    });

    test('should render item counter with correct props', () => {

        render(<FirstStepsApp />)

        expect(mockItemCounter).toHaveBeenCalledTimes(3);


    })



})