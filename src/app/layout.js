"use client";

import { useState, useEffect } from "react";
import PreLoader from "@/components/common/Preloader";  
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/footer";
import "../app/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
