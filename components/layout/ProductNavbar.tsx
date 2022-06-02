import styles from "./ProductNavbar.module.css"
import { Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import Link from "next/link"
import { images } from "../../images/images"
import PagesLink from "../PagesLink"


export const ProductNav = () => {
  
  const router = useRouter()

  let actualTitle = (router.asPath)

   actualTitle = actualTitle.split('').splice(actualTitle.lastIndexOf("/") + 1, actualTitle.length).join('')
   actualTitle.includes("#") ? actualTitle = actualTitle.slice(0, actualTitle.lastIndexOf("#")) : actualTitle
  return (
    <div  className={styles.navContainer} >
      
         <Link href={"/"}>
             <Text h3 className={styles.dropTitle} css={{color: '#ffffff', cursor: 'pointer'}}>
                   TecniCompu
             </Text>
         </Link>

       <div className={styles.dropdown}>
         <i className={styles.dropIcon}></i>
         <span  style={{color: '#ffffff', fontSize: '18px', fontFamily: 'Roboto'}}>Opciones</span>
         <div className={styles['dropdown-content']}>
           {
             images.map(el => (
               <PagesLink
                  title={el.title}
                  href={el.link}
                  key={el.link}
               />
             ))
           }
         </div>
       </div>
    </div>
  )
}
