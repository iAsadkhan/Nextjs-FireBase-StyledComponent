import { AuthContextProvider } from "auth/AuthContext";
import Layout from "components/layout";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthContextProvider>
	);
}

export default MyApp;
