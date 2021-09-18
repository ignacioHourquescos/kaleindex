
import Head from 'next/head'
import ss from './profile.module.scss'


const Footer = () => {


    return (
        <>
              <Head>
         <title>KALE</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <meta name="description" content="A" />
         <meta property="og:title" content="KALEINDEX" />
         <meta property="og:description" content="Agencia creativa digital" />
         <meta property="og:image" content="/kaleillustration.jpg" />
      </Head>
      <div className={ss.container}>
        <span> AHR </span>
      </div>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vRDxc9lUEqyPdWbUOdOXVWU53vHacW2Htw27PH-CepwzVtyrtIi_49zQ0l1EzTef8pfDFV5AtG5TGab/pub?embedded=true"

   style={{height:"100vh", width:"100%"}}></iframe>
        </>


    )

}

export default Footer;