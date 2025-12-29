"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    y?: number;
    x?: number;
}

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0.2,
    duration = 0.8,
    y = 50,
    x = 0
}: ScrollRevealProps) => {
    return (
        <div style={{ position: "relative", width, overflow: "visible" }}>
            <motion.div
                initial={{ opacity: 0, y, x }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                    duration,
                    delay,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const StaggerContainer = ({ children, delay = 0.1 }: { children: ReactNode, delay?: number }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: delay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, y = 30 }: { children: ReactNode, y?: number }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
        >
            {children}
        </motion.div>
    );
};
