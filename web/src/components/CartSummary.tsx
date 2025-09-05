"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { Button } from "./ui/button";

export default function CartSummary() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <Link href="/cart" className="flex items-center gap-2 hover:underline">
      <Button variant="ghost" size="sm">
  <span role="img" aria-label="cart" className="text-2xl">🛒</span>
        <span className="ml-1">{itemCount} item{itemCount !== 1 ? "s" : ""}</span>
        <span className="ml-2 font-semibold">${total.toFixed(2)}</span>
      </Button>
    </Link>
  );
}
