//import global.css to this top level component
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
//root layout needs to have html and body tag

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
