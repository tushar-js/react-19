import { render, screen } from "@testing-library/react";
import App from "./App";
import { test } from "@jest/globals";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
    render(<App />);
});
