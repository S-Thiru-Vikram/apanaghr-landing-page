import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from './client-layout';
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export { metadata } from './metadata';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <ClientLayout>
            <div className="min-h-screen bg-white dark:bg-[#121212] transition-all duration-300">
              {children}
            </div>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
