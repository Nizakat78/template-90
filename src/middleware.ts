import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    '/Checkout',             // Protect Checkout page
    '/order-confirmation',    // Protect Order Confirmation page
    '/order-history',         // Protect Order History page
    '/payment',               // Protect Payment page
    '/(api|trpc)(.*)',        // Protect all API routes
  ],
};
