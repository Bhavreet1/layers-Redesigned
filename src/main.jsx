import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

// Disable browser scroll restoration
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Force initial scroll to top
window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
