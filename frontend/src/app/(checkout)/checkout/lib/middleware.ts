import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Protect the choosewallet route
  if (url.pathname.startsWith("/checkout/choosewallet")) {
    const step = req.cookies.get("checkout_step")?.value;

    if (step !== "choosewallet") {
      // No permission → redirect back to checkout
      url.pathname = "/checkout";
      return NextResponse.redirect(url);
    }
  }

  // Protect the confirmpayment route - cannot go back
  if (url.pathname.startsWith("/checkout/confirmpayment")) {
    const step = req.cookies.get("checkout_step")?.value;

    if (step !== "confirmpayment") {
      // No permission → redirect to checkout start
      url.pathname = "/checkout";
      return NextResponse.redirect(url);
    }

    // Clear the cookie after accessing confirmpayment to prevent re-entry
    const response = NextResponse.next();
    response.cookies.delete("checkout_step");
    return response;
  }

  return NextResponse.next();
}

// Limit middleware only to these routes for performance
export const config = {
  matcher: ["/checkout/:path*"],
};
