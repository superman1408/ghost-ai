"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus, PanelLeftClose } from "./icons"

interface ProjectSidebarProps {
    isOpen: boolean
    onClose?: () => void
}

export default function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
    return (
        <aside
            aria-hidden={!isOpen}
            className={`fixed top-0 left-0 h-full w-80 z-50 transform transition-transform duration-200 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                } bg-background border-r border-border flex flex-col`}
        >
            <div className="flex items-center justify-between px-4 h-14 border-b border-border">
                <h3 className="text-sm font-medium">Project</h3>
                <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close sidebar">
                    <PanelLeftClose className="size-4" />
                </Button>
            </div>

            <div className="p-4 flex-1 overflow-auto">
                <Tabs defaultValue="my">
                    <TabsList>
                        <TabsTrigger value="my">My Projects</TabsTrigger>
                        <TabsTrigger value="shared">Shared</TabsTrigger>
                    </TabsList>

                    <div className="mt-4">
                        <TabsContent value="my">
                            <div className="py-8 text-center text-sm text-muted-foreground">No projects yet</div>
                        </TabsContent>
                        <TabsContent value="shared">
                            <div className="py-8 text-center text-sm text-muted-foreground">No shared projects</div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

            <div className="p-4">
                <Button variant="default" size="default" className="w-full" aria-label="New project">
                    <span className="flex items-center justify-center gap-2 w-full">
                        <Plus className="size-4" />
                        New Project
                    </span>
                </Button>
            </div>
        </aside>
    )
}
