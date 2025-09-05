"use client";
import Link from "next/link";
import type { Product } from "../app/products/data";
import { useCart } from "../context/CartContext";
import { Button } from "./ui/button";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [showNotif, setShowNotif] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 2000);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col items-center relative">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-2" />
      <h2 className="font-bold text-lg mb-1">{product.name}</h2>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      <div className="flex gap-2">
        <Link href={`/products/${product.id}`} passHref>
          <Button variant="secondary" asChild>
            <span>View Details</span>
          </Button>
        </Link>
        <Button variant="default" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
      {showNotif && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded shadow text-sm animate-fade-in-out z-10">
          Product added to cart!
        </div>
      )}
    </div>
  );
}
