import ss from './HeroDescMob.module.scss'



const HeroDescMob = () => {



    return (
        <>
            <div className={ss.HeroDescMob} style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}>
                <p className={ss.herodesc}>
                    Combinamos <span className={ss.green}>innovación</span>, <span className={ss.green}>lógica </span> y <span className={ss.green}>diseño </span> para crear productos digitales de alto valor agregado. Siempre abiertos a nuevos desafíos!
                </p>
            </div>
        </>
    )

}

export default HeroDescMob;