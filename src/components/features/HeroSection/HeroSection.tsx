import React from 'react'
import styles from '@/components/features/HeroSection/HeroSection.module.scss'


export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1>Добро пожаловать</h1>
      <p>
        Заказывайте прямо с телефона — <br />
        не надо никого ждать.
        </p>
    </section>
  );
}
