// import "./globals.css";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./componentsmain/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Imdb",
	description: "Genrate imdb clone app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ChakraProvider>
					<Header />
					{children}
				</ChakraProvider>
			</body>
		</html>
	);
}
