import "../../styles/global.scss";
import "./main.scss";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

export const metadata = {
  title: "Styled Home Studios",
  description: "Styled Home Studios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mainContent">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
