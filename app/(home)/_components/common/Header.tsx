'use client'

import React, { Fragment } from "react"
import Link from "next/link"
import { ChevronDown, Loader, Moon, Sun } from 'lucide-react'
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { setTheme } = useTheme()
  const { user, isAuthenticated, isLoading, error } = useKindeBrowserClient()

  return (
    <div className="sticky top-0 z-[9] w-full bg-white shadow-sm dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
        <div className="flex flex-1 items-center gap-9">
          <div>
            <Link
              href="/dashboard"
              className="text-[20px] font-black text-primary"
            >
              CVExpress
            </Link>
          </div>

          {isAuthenticated && user ? (
            <div className="flex items-center gap-2">
              <span className="font-normal text-black/50 dark:text-primary-foreground">
                Hi,
              </span>
              <h5 className="font-bold text-black dark:text-primary-foreground">
                {user?.given_name} {user?.family_name}
              </h5>
            </div>
          ) : null}
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {isLoading || error ? (
            <Loader className="!size-6 animate-spin text-black dark:text-white" />
          ) : (
            <Fragment>
              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-1 p-0"
                    >
                      <Avatar>
                        <AvatarImage src={user?.picture || ""} />
                        <AvatarFallback>
                          {user?.given_name?.[0]}
                          {user?.family_name?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <ChevronDown className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mt-2">
                    <DropdownMenuItem asChild>
                      <LogoutLink className="cursor-pointer font-medium text-red-500">
                        Log out
                      </LogoutLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : null}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )
}