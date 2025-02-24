import "./globals.css";
import Layout_Client from "./layout_client";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio by Meinard Edrei",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout_Client>
          {children}
        </Layout_Client>
      </body >
    </html >
  );
}
