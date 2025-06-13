// import "@/src/styles/globals.css";
// import { Metadata, Viewport } from "next";
// import { Link } from "@heroui/link";
// import clsx from "clsx";


// import { Providers } from "./provider";
// import { siteConfig } from "../config/site";
// import { fontSans } from "../config/fonts";
// import { Navbar } from "../components/navbar";
// import bgImg from "../assets/footer-logo-4d56d219.png"
// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html suppressHydrationWarning lang="en">
//       <head />
//       <body
//         className={clsx(
//           "min-h-screen bg-background font-sans antialiased",
//           fontSans.variable,
//         )}
//       >
//         <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
//           <div className=" flex flex-col  absolute inset-0 bg-cover bg-center opacity-20 z-0 "
//           style={{ backgroundImage: `url(${bgImg.src})`}}
//           >
//             <Navbar />
//             <main className="flex-grow container mx-auto">
//               {children}
//             </main>
//             <footer className="w-full flex items-center justify-center py-3"
//             >
//               <Link
//                 isExternal
//                 className="flex items-center gap-1 text-current"
//                 href="https://heroui.com?utm_source=next-app-template"
//                 title="heroui.com homepage"
//               >
//                 <span className="text-default-600">Powered by</span>
//                 <p className="text-primary">HeroUI</p>
//               </Link>
//             </footer>
//           </div>
//         </Providers>
//       </body>
//     </html>
//   );
// }


import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./provider";
import { siteConfig } from "../config/site";
import { fontSans } from "../config/fonts";
import { Navbar } from "../components/navbar";
import bgImg from "../assets/footer-logo-4d56d219.png";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* Background image with overlay */}
          <div className="relative min-h-screen">
            {/* Background Layer */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat opacity-20 z-0"
              style={{ backgroundImage: `url(${bgImg.src})` }}
            />

            {/* Optional overlay for better readability */}
            <div className="absolute inset-0 bg-red-200/30 z-0" />

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow container mx-auto px-4 py-6">
                {children}
              </main>
              <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://heroui.com?utm_source=next-app-template"
                  title="heroui.com homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">HeroUI</p>
                </Link>
              </footer>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
