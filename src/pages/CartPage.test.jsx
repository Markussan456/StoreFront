import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CartPage from "./CartPage.jsx";
const mockProducts = [
  { title: "T-Shirt", price: 9.99, imgurl: "shirt.jpg" },
  { title: "T-Shirt", price: 9.99, imgurl: "shirt.jpg" }, // duplicate to test count
];
test("Shows empty Cart when no products", () => {
  render(<CartPage products={[]} set={() => {}} />);
  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});
test("Displays when products are added", () => {
  render(<CartPage products={mockProducts} set={() => {}} />);
  expect(screen.getByText(/T-Shirt/i)).toBeInTheDocument();
});
