import {Inter, Montserrat} from 'next/font/google'
import './globals.css'
import Head from "next/head";
import {Toaster} from "react-hot-toast";
// const inter = Inter({subsets: ['latin']})
const montserrat = Montserrat({subsets: ['latin']})

export const metadata = {
    title: 'Chat application',
    description: 'Generated by create next app',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <link
                href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap"
                rel="stylesheet"/>
        </Head>
        <body suppressHydrationWarning={true} className={montserrat.className}>
        <>
            {children}
            <Toaster
                toastOptions={{
                    success: {
                        style: {
                            background: 'green',
                        },
                    },
                    error: {
                        style: {
                            background: 'red',
                        },
                    },
                }}
            />
        </>

        </body>
        </html>
    )
}
