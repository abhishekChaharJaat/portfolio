import "./globals.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOSInit from "@/components/AOSInit";
import Topnav from "@/components/Topnav";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export const metadata = {
  title: "Abhishek's Web",
  description: "Personal portfolio of Abhishek Chahar - Frontend Engineer",
  icons: {
    icon: "/images/me3.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        <div className="flex min-h-screen flex-col w-full mx-auto overflow-x-hidden">
          <PageLoader />
          <Topnav />
          <main className="flex-1 my-auto mx-auto bg-gray-50 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
