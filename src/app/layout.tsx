import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_component/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "This blog application utilizes Next.js and React for server-side rendering, providing a seamless user experience. Users can explore a list of blog posts on the home page, view detailed posts individually, and submit new posts via a user-friendly form. It integrates API data fetching for dynamic content and utilizes styled components for a cohesive and responsive UI design. Developed as a frontend internship task, it showcases efficient state management and adheres to React best practices."
};

export default function RootLayout({ children }) {

  return (
     <html lang="en">
      <body className={inter.className}>

       <NavBar/>
        {children}
        </body>
    </html>
  
  );
}
