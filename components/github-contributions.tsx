"use client"

import { useMemo } from "react"

export default function GitHubContributions() {
    const contributionsData = useMemo(() => {
        const weeks = []
        const today = new Date()
        const startDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())

        for (let week = 0; week < 40; week++) {
            const weekData = []
            for (let day = 0; day < 7; day++) {
                const date = new Date(startDate)
                date.setDate(date.getDate() + week * 7 + day)

                const contributions = Math.floor(Math.random() * 10)
                weekData.push({
                    date: date.toISOString().split("T")[0],
                    contributions
                })
            }
            weeks.push(weekData)
        }
        return weeks
    }, [])

    const getContributionColor = (contributions: number): string => {
        if (contributions === 0) return "bg-secondary"
        if (contributions < 4) return "bg-blue-900"
        if (contributions < 7) return "bg-blue-700"
        return "bg-blue-500"
    }

    const flat = contributionsData.flat()
    const total = flat.reduce((a, b) => a + b.contributions, 0)
    const maxDay = Math.max(...flat.map(d => d.contributions))
    const avg = Math.round(total / 40)

    return (
        <section className="space-y-6 py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <h2 className="text-xl font-semibold mb-3">GitHub Activity</h2>

                {/* Chart + Side Card */}
                <div className="border border-border rounded-lg p-8 bg-card/40 flex gap-4">

                    {/* Chart */}
                    <div className="overflow-x-auto pb-3">
                        <div className="flex gap-1 min-w-min">
                            {contributionsData.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-1">
                                    {week.map((day, dayIndex) => (
                                        <div
                                            key={`${weekIndex}-${dayIndex}`}
                                            className={`w-2.5 h-2.5 rounded-sm border border-border/40 ${getContributionColor(day.contributions)}`}
                                            title={`${day.date}: ${day.contributions} contributions`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-3">
                                <span>Less</span>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 rounded-sm bg-secondary border border-border/50" title="0 contributions" />
                                    <div className="w-3 h-3 rounded-sm bg-blue-950 border border-border/50" title="1-2 contributions" />
                                    <div className="w-3 h-3 rounded-sm bg-blue-800 border border-border/50" title="3-5 contributions" />
                                    <div className="w-3 h-3 rounded-sm bg-blue-600 border border-border/50" title="6-8 contributions" />
                                    <div className="w-3 h-3 rounded-sm bg-blue-400 border border-border/50" title="9+ contributions" />
                                </div>
                                <span>More</span>
                            </div>
                            <div className="text-xs">
                                {Math.round(contributionsData.flat().reduce((sum, d) => sum + d.contributions, 0) / 52)} contributions per week (avg)
                            </div>
                        </div>
                    </div>


                    {/* Sidebar fact card */}
                    <div className="hidden lg:block w-64 border border-border rounded-lg p-4 bg-card/60">
                        <div className="mt-4">
                            <p className="text-xs text-muted-foreground mb-1">Current Mood</p>
                            <p className="text-sm leading-snug">
                                Making UI clean… and breaking backend at the same time 💀
                            </p>
                        </div>
                    </div>

                </div>


                {/* Info Cards About Me */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

                    <div className="border border-border bg-card/40 rounded-lg p-4 shadow-sm">
                        <p className="text-xs text-muted-foreground mb-1">Tech I Love</p>
                        <p className="text-sm">
                            Next.js • TypeScript • Tailwind • Node.js
                        </p>
                    </div>

                    <div className="border border-border bg-card/40 rounded-lg p-4 shadow-sm">
                        <p className="text-xs text-muted-foreground mb-1">Who Am I?</p>
                        <p className="text-sm">
                            A self-taught dev who started with Discord bots in school.
                        </p>
                    </div>

                    <div className="border border-border bg-card/40 rounded-lg p-4 shadow-sm">
                        <p className="text-xs text-muted-foreground mb-1">Current Focus</p>
                        <p className="text-sm">
                            Building cool stuff with Next.js 15 + learning cybersecurity.
                        </p>
                    </div>

                </div>


            </div>
        </section>
    )
}
