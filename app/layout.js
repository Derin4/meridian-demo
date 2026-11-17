import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "./_styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { site } from "./_libs/site";

export const metadata = {
  title: { default: site.title, template: "%s — " + site.name },
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      style={{
        "--font-display-name": "'Fraunces'",
        "--font-body-name": "'Work Sans'",
      }}
    >
      <body className='font-body text-ink bg-paper min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
