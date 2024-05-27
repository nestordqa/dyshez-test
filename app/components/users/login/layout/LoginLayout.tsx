import React from 'react';
import Image from 'next/image'
import styles from '../../../../styles/login/loginLayout.module.css';
export const LoginLayout = ({children}: React.PropsWithChildren) => {
  return (
    <>
      <div className={styles.container}>
        {/* Contenedor de logo hy texto de bienvenida */}
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            width={194}
            height={47.5}
            alt="Dyshez Logo"
          />
          <h1 className={styles.dyshezText}>
            ¡Bienvenido de vuelta!
          </h1>
        </div>
        {/* Contenedor del flujo y funcionalidades relacionadas al login */}
        <div className={styles.fragmentContainer}>
          <div 
            className={styles.children}
          >
            <div className={styles.childrenContainer}>
              {children}
            </div>
            <div className={styles.login_layout}>

            </div>
          </div>
        </div>      
      </div>
    </>
  )
}
