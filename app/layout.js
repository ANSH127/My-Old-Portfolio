import './globals.css'
import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ansh Agarwal | Full Stack Web Developer',
  description: 'Ansh Portfolio Website',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Ansh</title>
        <meta name="description" content="Ansh Portfoli Website" />



        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js"></script>

      </head>

      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  )
}
