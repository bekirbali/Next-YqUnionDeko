import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import I18nProvider from "./components/I18nProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.yqunion.com.tr"),
  title: "YqUnion - Türkiye-Çin Dış Ticaret",
  description:
    "YqUnion ile Türkiye-Çin arasında güvenilir dış ticaret çözümleri. Profesyonel ithalat, ihracat, lojistik ve gümrükleme hizmetleri. 20 yıllık deneyimimizle iş ortaklarımıza kaliteli ve hızlı hizmet sunuyoruz.",
  keywords:
    "dış ticaret, Çin, Türkiye, ithalat, ihracat, YqUnion, lojistik, gümrükleme, yq union, çinden güvenilir ithalat, türkiye çin ithalat, türkiye çin lojistik, çinden ithalat",
  author: "YqUnion",
  icons: {
    icon: "/assets/YQ.png",
    shortcut: "/assets/YQ.png",
    apple: "/assets/YQ.png",
  },
  openGraph: {
    title: "YqUnion - Türkiye-Çin Dış Ticaret",
    description:
      "YqUnion ile Türkiye-Çin arasında güvenilir dış ticaret çözümleri. Profesyonel ithalat, ihracat, lojistik ve gümrükleme hizmetleri. 20 yıllık deneyimimizle iş ortaklarımıza kaliteli ve hızlı hizmet sunuyoruz.",
    url: "https://www.yqunion.com.tr",
    siteName: "YqUnion",
    images: [
      {
        url: "/assets/yqunionlogo.png",
        width: 800,
        height: 600,
        alt: "YqUnion Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YqUnion - Türkiye-Çin Dış Ticaret",
    description:
      "YqUnion ile Türkiye-Çin arasında güvenilir dış ticaret çözümleri. Profesyonel ithalat, ihracat, lojistik ve gümrükleme hizmetleri. 20 yıllık deneyimimizle iş ortaklarımıza kaliteli ve hızlı hizmet sunuyoruz.",
    images: ["/assets/yqunionlogo.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </I18nProvider>
      </body>
    </html>
  );
}
