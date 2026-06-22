"use client"

import * as React from "react"

interface DialogPatternProps {
    title?: React.ReactNode
    description?: React.ReactNode
    footer?: React.ReactNode
}

// Lightweight dialog layout pattern — not an interactive dialog yet.
export default function DialogPattern({ title, description, footer }: DialogPatternProps) {
    return (
        <div className="max-w-xl w-full rounded-lg border border-border bg-card p-4">
            {title ? <h3 className="text-lg font-medium">{title}</h3> : null}
            {description ? <p className="text-sm text-muted-foreground mt-2">{description}</p> : null}
            <div className="mt-4">{footer}</div>
        </div>
    )
}
