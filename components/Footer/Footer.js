import ss from './Footer.module.scss'

const Footer = () => {


    return (
        <>

            <div className={ss.footer_container}>
                <div className={ss.herotitle}>
                    <div className={ss.letter} style={{ transform: "rotate(-90deg)" }}>X</div>
                    <div className={ss.letter} style={{ transform: "rotate(-90deg)" }}>E</div>
                    <div className={ss.letter} style={{ transform: "rotate(-90deg)" }}>D</div>
                    <div className={ss.letter} style={{ transform: "rotate(-90deg)" }}>N</div>
                    <div className={ss.letter} style={{ transform: "rotate(-90deg)", /* textAlign: "center"  */ }}>I</div>
                    <span className={ss.green}>
                        <div className={ss.letter} style={{ transform: "rotate(-90deg)" }}>E</div>
                        <div className={ss.letter} style={{ transform: "rotate(-90deg)" }}>L</div>
                        <div className={ss.letter} style={{ transform: "rotate(-90deg)" }}>A</div>
                        <div className={ss.letter} style={{ transform: "rotate(-90deg)" }}>K</div>
                    </span>
                </div>
                <div className={ss.footer_text}>
                    <h3 className={ss.action}>
                        Ahora que nos
                        conocemos,
                        pasemos de la
                        idea a la acción
                    </h3>
                    <p className={ss.mail} style={{ fontWeight: "bold" }} >hello@kaleindex.co</p>
                    <p className={ss.contact}>Nacho: +54 9 11 6510-6333</p>
                    <p className={ss.contact}>Alejo: +54 9 11 6249-9989</p>
                </div>
            </div>
        </>


    )

}

export default Footer;