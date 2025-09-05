"use client";
import { products } from "../data";
import { notFound } from "next/navigation";
import { useCart } from "../../../context/CartContext";
import { Button } from "../../../components/ui/button";
import { Alert, AlertDescription } from "../../../components/ui/alert";
import React, { useState } from "react";

interface ProductDetailProps {
  params: { id: string };
}


export default function ProductDetailPage({ params }: ProductDetailProps) {
  let actualParams = params;
  if (typeof params === "object" && typeof (params as any).then === "function") {
    actualParams = React.use(params as unknown as Promise<{ id: string }>);
  }
  const product = products.find(p => p.id === Number(actualParams.id));
  const { addToCart } = useCart();
  const [showNotif, setShowNotif] = useState(false);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 2000);
  };

  if (!product) return notFound();

  return (
    <>
      {showNotif && (
        <Alert className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto bg-green-500 text-white border-green-600 animate-fade-in-out">
          <AlertDescription>Product added to cart!</AlertDescription>
        </Alert>
      )}
      <main className="max-w-3xl mx-auto py-8 flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-contain" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <Button variant="default" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </main>
    </>
  );
}
