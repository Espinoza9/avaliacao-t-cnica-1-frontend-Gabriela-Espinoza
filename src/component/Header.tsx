import classes from '../assets/Header.module.css'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import img from '../img/digix.png'


export const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
               <a href='https://digix.com.br/'>< img src={img} className={classes.imagem} /></a> 
            </div>

            <div>
                <h1 className={classes.header_titulo}>Casa Popular </h1>
            </div>

            <div className={classes.conjunto_icone}>
                <a href='https://www.facebook.com/'><BsFacebook  className={classes.icon}/></a>
                <a href='https://www.instagram.com/'><FaInstagram  className={classes.icon} /></a>
                <a href='https://www.linkedin.com/'><BsLinkedin  className={classes.icon}/></a>
            </div>
        </div>
    )
}