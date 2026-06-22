"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { PanelLeftOpen, PanelLeftClose } from "./icons"

interface EditorNavbarProps {
    isSidebarOpen: boolean
    onToggle: () => void
}

export default function EditorNavbar({ isSidebarOpen, onToggle }: EditorNavbarProps) {
    return (
        <header className="h-14 flex items-center justify-between px-4 bg-background border-b border-border">
            <div className="flex items-center gap-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggle}
                    aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                    data-icon={isSidebarOpen ? "close" : "open"}
                >
                    {isSidebarOpen ? <PanelLeftClose className="size-4" /> : <PanelLeftOpen className="size-4" />}
                </Button>
            </div>

            <div className="flex-1 flex items-center justify-center">{/* center slot - reserved */}</div>

            <div className="flex items-center gap-2">{/* right slot - empty for now */}</div>
        </header>
    )
}
