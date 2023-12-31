import React from 'react'
import type { Metadata } from 'next'

import styles from "./styles.module.css"
export const metadata: Metadata = {
    title: 'About Page',
    description: 'Generated by create next app',
  }
  
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
    <nav>About Nav</nav>
    <main className={styles.main}>
        {children}
    </main>
    </>
  )
}
