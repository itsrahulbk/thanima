"use client"

import { ReactNode } from "react"

interface ClientWrapperProps {
  children: ReactNode
  className?: string
}

export function ClientWrapper({ children, className = "" }: ClientWrapperProps) {
  return (
    <div className={`animate-fade-in ${className}`}>
      {children}
    </div>
  )
}

export function MotionH1({ children, ...props }: any) {
  return <h1 className="animate-fade-in" {...props}>{children}</h1>
}

export function MotionH2({ children, ...props }: any) {
  return <h2 className="animate-fade-in" {...props}>{children}</h2>
}

export function MotionP({ children, ...props }: any) {
  return <p className="animate-fade-in" {...props}>{children}</p>
}

export function MotionDiv({ children, ...props }: any) {
  return <div className="animate-fade-in" {...props}>{children}</div>
}

export function MotionButton({ children, ...props }: any) {
  return <button className="animate-fade-in" {...props}>{children}</button>
}

export function MotionCard({ children, ...props }: any) {
  return <div className="animate-fade-in" {...props}>{children}</div>
} 