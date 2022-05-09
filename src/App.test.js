import React from "react";
import { render } from "@testing-library/react";
import Home from "./pages/Home"

const Button = () =>{
    return <button>nome</button>
}

test('should name', () => {
    const { getByText } = render(< Button />);
    const textElement = getByText('nome')
    expect(textElement).toBeInTheDocument()
})