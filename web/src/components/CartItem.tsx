"use client";
import type { CartItem } from "../context/CartContext";
import { useCart } from "../context/CartContext";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface CartItemProps {
  item: CartItem;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();
  return (
    <div className="flex items-center gap-4 border-b py-2">
      <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-contain" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.product.name}</h3>
        <p className="text-gray-500">${item.product.price.toFixed(2)}</p>
      </div>
      <Input
        type="number"
        min={1}
        value={item.quantity}
        onChange={e => updateQuantity(item.product.id, Number(e.target.value))}
        className="w-12"
      />
      <Button variant="destructive" onClick={() => removeFromCart(item.product.id)}>
        Remove
      </Button>
    </div>
  );
}
