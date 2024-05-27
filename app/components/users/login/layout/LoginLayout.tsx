'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import styles from '../../../../styles/login/loginLayout.module.css';
export const LoginLayout = ({children}: React.PropsWithChildren) => {

  const [loginClass, setLoginClass] = useState(styles.buttonStyleActive);
  const [registerClass, setRegisterClass] = useState(styles.buttonStyleInactive);
  const [childrenClass, setChildrenClass] = useState(styles.login_layout);
  const [childrenContainerClass, setChildrenContainerClass] = useState(styles.childrenContainer);

  const changeLoginClass = () => {
    if (loginClass === styles.buttonStyleInactive) {
      setLoginClass(styles.buttonStyleActive);
      setRegisterClass(styles.buttonStyleInactive);
      setChildrenClass(styles.login_layout);
      setChildrenContainerClass(styles.childrenContainer);
    }
  };

  const changeRegisterClass = () => {
    if (registerClass === styles.buttonStyleInactive) {
      setRegisterClass(styles.buttonStyleActive);
      setLoginClass(styles.buttonStyleInactive);
      setChildrenClass(styles.login_inactive);
      setChildrenContainerClass(styles.childrenContainerFull);
    }
  };


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
            <div className={childrenContainerClass}>
              <div className={styles.buttonsContainer}>
                <button
                  className={loginClass}
                  onClick={()=>{changeLoginClass()}}
                >
                  Login
                </button>
                <button
                  className={registerClass}
                  onClick={()=>{changeRegisterClass()}}
                >
                  Register
                </button>
              </div>
              {children}
            </div>
            <div className={childrenClass}>

            </div>
          </div>
        </div>      
      </div>
    </>
  )
}
