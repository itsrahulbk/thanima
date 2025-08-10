"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ClientWrapperProps {
  children: ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  whileInView?: any
  viewport?: any
  delay?: number
}

export function ClientWrapper({
  children,
  className = "",
  initial,
  animate,
  transition,
  whileInView,
  viewport,
  delay = 0,
}: ClientWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  )
}

export function MotionH1({ children, ...props }: any) {
  return <motion.h1 {...props}>{children}</motion.h1>
}

export function MotionH2({ children, ...props }: any) {
  return <motion.h2 {...props}>{children}</motion.h2>
}

export function MotionP({ children, ...props }: any) {
  return <motion.p {...props}>{children}</motion.p>
}

export function MotionDiv({ children, ...props }: any) {
  return <motion.div {...props}>{children}</motion.div>
}

export function MotionButton({ children, ...props }: any) {
  return <motion.button {...props}>{children}</motion.button>
}

export function MotionCard({ children, ...props }: any) {
  return <motion.div {...props}>{children}</motion.div>
} 