"use client";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function CartPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      <main className="max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center gap-4">
            <p>Your cart is empty.Please click on below button to browse and add products to the cart.</p>
            <Link href="/products" passHref>
              <Button variant="default">Browse</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 mb-6">
              {cart.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            <div className="text-right font-bold text-xl">Total: ${total.toFixed(2)}</div>
            <Button className="mt-4" disabled>
              Checkout
            </Button>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
