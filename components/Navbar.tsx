"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      )}
    >
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex h-16 items-center",
          scrolled ? "justify-center" : "justify-between"
        )}>
          <AnimatePresence>
            {!scrolled && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-2"
              >
                <Moon className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">Somatiq</span>
              </motion.div>
            )}
          </AnimatePresence>

          <NavigationMenu className="relative">
            <NavigationMenuList className="gap-4 text-white p-2 rounded-full bg-nav-glass">
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-full nav-item-glass px-6 py-2 text-sm font-medium transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-lg",
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-full nav-item-glass px-6 py-2 text-sm font-medium transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-lg",
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-full nav-item-glass px-6 py-2 text-sm font-medium transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-lg",
                    )}
                  >
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-full nav-item-glass px-6 py-2 text-sm font-medium transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-lg",
                    )}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "group inline-flex h-9 w-max items-center bg-transparent justify-center rounded-full nav-item-glass px-6 py-2 text-sm font-medium transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-lg",
                  )}
                >
                  Pages
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-1/2 top-full mt-2 w-[200px] -translate-x-1/2 rounded-lg bg-popover p-2 shadow-lg">
                <ul className="grid gap-3 p-4 bg-black/50 backdrop-blur-lg rounded-lg">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="#"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          Features
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="#"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          Documentation
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <AnimatePresence>
                {scrolled && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <Button
                      variant="default"
                      className="bg-primary/90 text-white hover:bg-primary/70 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 rounded-full px-6"
                    >
                      Book a Demo
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </NavigationMenuList>
          </NavigationMenu>

          <AnimatePresence>
            {!scrolled && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <Button
                  variant="default"
                  className="bg-primary/90 text-white hover:bg-primary/70 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 rounded-full px-6"
                >
                  Book a Demo
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}