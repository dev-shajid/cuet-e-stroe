'use client'

import Link from "next/link"
import {
    BookMarkedIcon,
    BookOpen,
    BotMessageSquare,
    BugIcon,
    Code,
    Contact,
    Home,
} from "lucide-react"

import ThemeToggle from "@/components/theme/them-change"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { LinkButton } from "./ui/link-button"
import { ThemeProvider } from "./theme/theme-provider"

export default function Layout({ children }: React.PropsWithChildren) {
    const [mutate, setMutate] = useState(false)

    useEffect(() => {
        setMutate(true)
    }, [])

    if (!mutate) return null;

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="w-full flex flex-col min-h-screen">
                <NavComponent />
                <main className="flex-1 py-8">
                    {children}
                </main>
            </div>
        </ThemeProvider>
    )
}


const NavComponent = () => {
    return (
        <section className="sticky top-0 z-10 bg-background/50 backdrop-blur-md py-2">
            <header className="flex items-center justify-between w-full">
                <Link className="flex items-center justify-center" href="/">
                    <BookOpen className="h-6 w-6" />
                    <span className="ml-2 font-bold text-xl">C-STORE</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
                    <ThemeToggle />
                    <LinkButton size='sm' href="/auth/sign-in">
                        Join
                    </LinkButton>
                </nav>
            </header>
        </section>
    )
}
