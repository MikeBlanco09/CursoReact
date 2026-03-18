import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";


describe('CustomHeader', () => {

    const title = 'Test Title'
    const description = 'Test Description'

    test('should render the title correctly', () => {

        render(<CustomHeader title={title} />)

        expect(screen.getByText(title)).toBeDefined();

    });

    test('should render the description when provided', () => {

        render(<CustomHeader title={title} description={description} />)

        expect(screen.getByText(description)).toBeDefined();
        //Pasos extra de comprobación para comprobar que se despliega correctamente
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    });

    test('should not render description when not provided', () => {

        const { container } = render(<CustomHeader title={title} />);

        screen.debug();

        const divElement = container.querySelector('.content-center');

        const p = divElement?.querySelector('p');
        expect(p).toBeNull();

    });
})