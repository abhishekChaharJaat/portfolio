import "./globals.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOSInit from "@/components/AOSInit";
import Topnav from "@/components/Topnav";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Abhishek Chahar — Frontend Engineer",
  description:
    "Portfolio of Abhishek Chahar — Frontend Engineer specialising in React.js, Next.js, and AI-powered web applications.",
  keywords: ["Frontend Engineer", "React", "Next.js", "AI", "Abhishek Chahar", "Portfolio"],
  authors: [{ name: "Abhishek Chahar" }],
  openGraph: {
    title: "Abhishek Chahar — Frontend Engineer",
    description:
      "Portfolio of Abhishek Chahar — Frontend Engineer specialising in React.js, Next.js, and AI-powered web applications.",
    url: "https://abhishekchahar.dev",
    siteName: "Abhishek Chahar",
    images: [
      {
        url: "/images/me3.jpg",
        width: 800,
        height: 800,
        alt: "Abhishek Chahar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Chahar — Frontend Engineer",
    description:
      "Portfolio of Abhishek Chahar — Frontend Engineer specialising in React.js, Next.js, and AI-powered web applications.",
    images: ["/images/me3.jpg"],
  },
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
        <BackToTop />
      </body>
    </html>
  );
}
