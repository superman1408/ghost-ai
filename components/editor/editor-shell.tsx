"use client"

import * as React from "react"
import { useState } from "react"
import EditorNavbar from "./editor-navbar"
import ProjectSidebar from "./project-sidebar"

export default function EditorShell({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="min-h-screen flex flex-col">
            <EditorNavbar isSidebarOpen={isOpen} onToggle={() => setIsOpen((v) => !v)} />
            <ProjectSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

            <main className="flex-1 relative">
                {/* page content sits under the floating sidebar */}
                {children}
            </main>
        </div>
    )
}
