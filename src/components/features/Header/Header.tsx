import React from 'react'
import styles from './header.module.scss'
import Logo from '@/assets/logo.svg'
import Login from '@/assets/login.svg'


export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="logo"></img>
      <button className={styles.loginButton}>
        <img src={Login} alt="login" />
        Войти
      </button>
    </header>
  );
}