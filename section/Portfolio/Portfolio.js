

import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import { useEffect } from "react";
import ss from './Portfolio.module.scss'
import Image from 'next/image'
import { useInView } from "react-intersection-observer"
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { SiNextDotJs } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import { FaArrowCircleRight } from 'react-icons/fa';


const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);


  function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  const item_slideUp = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }

  return (
    <>
      <div className={ss.desktop_view}>
        {portfolioArray.map(element =>
          <section style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}>
            <a key={element.name} href={element.link}>
              <div className={ss.container}>
                <div className={ss.shapeContainer}>

                  <FadeInWhenVisible initial="hidden" animate="visible" variants={list} >
                    <motion.div variants={item} className={ss.shapeLeft}>
                      {shapeLeft(element.color)}
                    </motion.div>
                    <motion.div variants={item} className={ss.shapeRight}>
                      {shapeRight(element.color)}
                    </motion.div>
                  </FadeInWhenVisible>

                  <motion.div className={ss.kale_container} initial="hidden" animate="visible" variants={list} >
                    <motion.div variants={item}>
                      <Image src={"/kale.png"} width="100px" height="100px" />
                    </motion.div>
                    <FadeInWhenVisible initial="hidden" animate="visible" variants={list} >
                      <motion.div variants={item}>{element.icons.html == 1 ? <FaHtml5 size={27} color="#3f3c3c" /> : ""}   </motion.div>
                      <motion.div variants={item}>{element.icons.css == 1 ? <FaCss3 size={27} color="#3f3c3c" /> : ""}  </motion.div>
                      <motion.div variants={item}>{element.icons.node == 1 ? <FaNode size={27} color="#3f3c3c" /> : ""}  </motion.div>
                      <motion.div variants={item}>{element.icons.react == 1 ? <FaReact size={27} color="#3f3c3c" /> : ""}  </motion.div>
                      <motion.div variants={item}>{element.icons.sass == 1 ? <FaSass size={27} color="#3f3c3c" /> : ""}    </motion.div>
                      <motion.div variants={item}>{element.icons.bootstrap == 1 ? <FaBootstrap size={27} color="#3f3c3c" /> : ""}  </motion.div>
                      <motion.div variants={item}>{element.icons.mysql == 1 ? <FaDatabase size={27} color="#3f3c3c" /> : ""}  </motion.div>
                      <motion.div variants={item}>{element.icons.google == 1 ? <FaGoogle size={27} color="#3f3c3c" /> : ""} </motion.div>
                      <motion.div variants={item}>{element.icons.next == 1 ? <SiNextDotJs size={27} color="#3f3c3c" /> : ""} </motion.div>
                      <motion.div variants={item}>{element.icons.firebase == 1 ? <SiFirebase size={27} color="#3f3c3c" /> : ""} </motion.div>
                    </FadeInWhenVisible>
                  </motion.div>

                </div>

                <h5>{element.type}</h5>
                <h1>{element.name}</h1>

                <FadeInWhenVisible className={ss.image_container} style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 2 }}
                  drag
                  dragElastic={0.82}
                  whileTap={{ cursor: "grabbing" }}>
                  <div className={ss.image_container}>
                    <Image src={element.image} width="230px" height="400px" />
                  </div>
                </FadeInWhenVisible>

                <h3 className={ss.brief}>{element.brief}</h3>

              </div>
            </a>
          </section>
        )}
      </div>
    </>

  )
}

export default Card;





const portfolioArray = [
     {
    type: "Institucional",
    name: "CGHTE",
    color: "#55CBCD",
    image: "/camaracel.png",
    brief: "Primera etapa de proyecto que agrupa agentes gastronomicos con el fin de mejorar la competitividad del sector",
    icons: { html: 1, css: 0, react: 1, node: 0, bootstrap: 0, mysql: 0, firebase: 1, sass: 1, js: 0, google: 1 },
    link: "https://camaraquilmes.netlify.app",
  },
  {
    type: "webApp",
    name: "Renova",
    color: "#B7CFB7",
    image: "/renovacel.png",
    brief: "A partir de un sistema de gestión en SQL, se genero una web app para mostrar precios y stock de manera dinámica",
    icons: { html: 1, css: 1, react: 0, node: 1, bootstrap: 1, mysql: 1, firebase: 0, sass: 0, js: 1 },
    link: "https://listasrenova.netlify.app/views/html/ofertas.html"
  },

  {
    type: "Institucional",
    name: "Corominola",
    color: "#c7dbda",
    image: "/corominolacel.png",
    brief: "Web profesional para estudio de abogados penales especializados en casos de alta complejidad",
    icons: { html: 1, css: 1, react: 0, node: 0, bootstrap: 0, mysql: 0, firebase: 0, sass: 0, js: 1, next: 1 },
    link: "https://corominola-lyart.vercel.app/",
  },
  {
    type: "Institucional",
    name: "CGHTE",
    color: "#55CBCD",
    image: "/camaracel.png",
    brief: "Primera etapa de proyecto que agrupa agentes gastronomicos con el fin de mejorar la competitividad del sector",
    icons: { html: 1, css: 0, react: 1, node: 0, bootstrap: 0, mysql: 0, firebase: 1, sass: 1, js: 0, google: 1 },
    link: "https://camaraquilmes.netlify.app",
  },
//   {
//     type: "webApp",
//     name: "Polo Sales",
//     color: "#CCE2CB",
//     image: "/polosalescel.png",
//     brief: "pagina web muy linda e intersante",
//     icons: { html: 1, css: 1, react: 0, node: 0, bootstrap: 1, mysql: 0, firebase: 0, sass: 0, js: 1 },
//     link: "https://polosales.netlify.app"
//   },
  {
    type: "E-Commerce",
    name: "La Galera",
    color: "#9AB7D3",
    image: "/lagaleracel.png",
    brief: "Dely store online con diseño de interfaz dinamico para poder visualizar promociones de manera efectiva",
    icons: { html: 1, css: 0, react: 1, node: 0, bootstrap: 0, mysql: 0, firebase: 0, sass: 1, js: 0, google: 1, firebase: 1 },
    link: "https://lagalera.netlify.app"
  },
  {
    type: "E-Commerce",
    name: "El Fuerte",
    color: "#FFDAC1",
    image: "/elfuertecel.png",
    brief: "Web app para distribuidora mayorista. Se hizo foco en el diseño de un sistema de lista de precios agiles",
    icons: { html: 1, css: 1, react: 1, node: 0, bootstrap: 0, mysql: 0, firebase: 0, sass: 0, js: 0, google: 1, next: 0, firebase: 0 },
    link: "https://www.mayoristaelfuerte.com",

  }
]



const shapeLeft = (color) => {
  return (<><svg width="270" height="420" viewBox="0 0 323 518" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M295.615 518C316.408 518 329.397 495.485 318.989 477.485L51.0696 14.1213C37.2469 -9.78478 0.695587 0.0217839 0.695587 27.6364V491C0.695587 505.912 12.7839 518 27.6956 518H112.287H295.615Z" fill={color} fillOpacity="0.5" />
  </svg>
  </>)
}

const shapeRight = (color) => {
  return (<svg width="197" height="500" viewBox="0 0 277 657" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 120.15C0 109.241 6.56412 99.4042 16.6372 95.2174L239.637 2.52949C257.419 -4.8613 277 8.20517 277 27.4617V606.847C277 625.187 259.107 638.191 241.663 632.528L18.6627 560.13C7.53493 556.517 0 546.149 0 534.449V120.15Z" fill={color} fillOpacity="0.6" />
  </svg>)
}


const icon = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.8614 34.3341L9.44295 31.3683L7.11682 5.14136H32.66L30.3372 31.37L19.868 34.3341H19.8614ZM12.8912 21.8414L13.2446 26.5312L19.8909 28.5989L26.4194 26.7341L27.8998 10.5019H11.8689L12.1273 13.6901H24.4433L24.1391 17.001H16.0614L16.3526 20.1287H23.8773L23.4324 24.4145L19.8925 25.396L16.2937 24.4145L16.0647 21.8463H12.8912V21.8414Z" fill="#2E3A59" />
</svg>
