import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useProductActions = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const addToCart = async (product: any) => {
    if (!session) {
      router.push("/login");
      return;
    }

    try {
      // First get current cart
      const getResponse = await fetch("/api/cart", {
        credentials: "include", // Include cookies
      });
      
      if (!getResponse.ok) {
        console.error("Failed to fetch cart:", getResponse.status);
        return;
      }
      
      const data = await getResponse.json();
      const currentCart = data.cart || [];

      // Check if product already exists in cart
      const existingItem = currentCart.find((item: any) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = currentCart.map((item: any) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...currentCart, { ...product, quantity: 1 }];
      }

      // Update cart
      const postResponse = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Include cookies
        body: JSON.stringify({ cart: updatedCart }),
      });

      if (postResponse.ok) {
        console.log("Product added to cart successfully!");
        // You can add a toast notification here
      } else {
        console.error("Failed to update cart:", postResponse.status);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const addToWishlist = async (product: any) => {
    if (!session) {
      router.push("/login");
      return;
    }

    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Include cookies
        body: JSON.stringify({ product }),
      });

      if (response.ok) {
        console.log("Product added to wishlist successfully!");
        // You can add a toast notification here
      } else {
        console.error("Failed to add to wishlist:", response.status);
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  const viewProduct = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return {
    addToCart,
    addToWishlist,
    viewProduct,
    isLoggedIn: !!session,
  };
}; 