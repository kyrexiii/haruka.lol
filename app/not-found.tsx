"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center px-6">

      <div className="relative max-w-xl w-full text-center space-y-10">
        {/* 404 */}
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Error 404
          </p>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
            Page not found
          </h1>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
          The page you're looking for doesn't exist, was moved,
          or is no longer available.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link href="/">
            <Button size="lg" className="gap-2">
              <Home className="h-4 w-4" />
              Back to home
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </Button>
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground pt-8">
          If you believe this is a mistake, the link may be outdated.
        </p>
      </div>
    </div>
  )
}
