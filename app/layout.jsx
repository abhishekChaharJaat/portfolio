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
        {/* Loader rendered as static HTML — visible on very first paint, no hydration delay */}
        <div id="page-loader">
          {/* Monogram + spinning ring */}
          <div className="ldr-monogram relative flex items-center justify-center mb-7">
            <div
              className="ldr-ring absolute w-20 h-20 rounded-full"
              style={{ border: "2px solid transparent", borderTopColor: "#2563EB", borderRightColor: "#2563EB" }}
            />
            <div
              className="absolute w-20 h-20 rounded-full"
              style={{ border: "1px solid #1e293b" }}
            />
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "#2563EB", boxShadow: "0 8px 30px rgba(37,99,235,0.35)" }}
            >
              <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.2rem", color: "#fff", fontStyle: "italic" }}>
                AC
              </span>
            </div>
          </div>

          {/* Name */}
          <div className="ldr-name" style={{ marginBottom: "4px" }}>
            <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.5rem", color: "#fff", fontStyle: "italic", letterSpacing: "0.02em" }}>
              Abhishek Chahar
            </span>
          </div>

          {/* Role */}
          <div className="ldr-role" style={{ marginBottom: "2.25rem" }}>
            <span style={{ fontSize: "0.65rem", color: "#94a3b8", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Software Engineer · Full Stack · AI
            </span>
          </div>

          {/* Progress bar */}
          <div style={{ width: "10rem", height: "2px", background: "#1e293b", borderRadius: "9999px", overflow: "hidden" }}>
            <div className="ldr-bar-fill" style={{ height: "100%", background: "#2563EB", borderRadius: "9999px" }} />
          </div>
        </div>

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
