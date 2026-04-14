"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
