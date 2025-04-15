import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "Fino",
  description: "Record your Money",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
          <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem 
            enableColorScheme
            disableTransitionOnChange={false}
          >
            <Header />
            <main className="min-h-screen">
              {children}
              <Analytics/>
              <SpeedInsights/>
              <Toaster richColors />
            </main>
            <footer className="bg-green-50 dark:bg-green-950 py-12">
              <div className="container mx-auto text-gray-600 dark:text-gray-300 text-center px-4">
                <p> Made with ❤️ by Aakash</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
