"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center space-y-8">
                {/* 404 Number */}
                <div className="relative">
                    <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground/10 to-foreground/5 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl">🤷</div>
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto">
                        Looks like you've wandered into the void. This page doesn't exist or has been moved.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link href="/">
                        <Button size="lg" className="gap-2">
                            <Home className="h-4 w-4" />
                            Go Home
                        </Button>
                    </Link>
                    <Button
                        size="lg"
                        variant="outline"
                        className="gap-2"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back
                    </Button>
                </div>

                {/* Footer hint */}
                <p className="text-sm text-muted-foreground pt-8">
                    Error Code: 404 • Page Not Found
                </p>
            </div>
        </div>
    )
}
