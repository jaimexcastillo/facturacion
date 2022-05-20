import "../styles/styles.scss"
// import "bootstrap/dist/css/bootstrap.min.css"
import Header from "organisms/Header/Navbar"
import Head from "next/head"
import Image from "next/image"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Facturacion CFDI</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header color="##efe9dd"></Header>

            <Component {...pageProps} />

            <footer className={"footer"}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={"logo"}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </>
    )
}

export default MyApp
