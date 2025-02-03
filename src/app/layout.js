"use client";
import { useState, useEffect } from "react";
import PreLoader from "@/components/common/Preloader";  
import Header from "@/components/Header/Header"
import "../app/globals.css"
import Footer from "@/components/Footer/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            
                    <Header />
                    {children}

                  
                    <Footer/>
          </>
        )}
      </body>
    </html>
  );
}
