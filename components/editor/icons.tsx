"use client"

import * as React from "react"

export function PanelLeftOpen(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" {...props}>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <rect x="3" y="4" width="6" height="16" rx="2" fill="currentColor" opacity="0.1" />
        </svg>
    )
}

export function PanelLeftClose(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" {...props}>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <line x1="9" y1="8" x2="9" y2="16" stroke="currentColor" strokeWidth={1.5} />
        </svg>
    )
}

export function Plus(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" {...props}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    )
}
