import "./globals.css";
import { CoastWatchProvider } from "../context/CoastWatchContext";
import Navbar from "../components/Navbar";
export const metadata = { title: "CoastWatch | Protect our coastlines", description: "Community-powered coastal pollution monitoring." };
export default function RootLayout({ children }) {
return <html lang="en">
  <body>
    <CoastWatchProvider>
      <Navbar />{children}</CoastWatchProvider>
  </body>
</html>;
}
