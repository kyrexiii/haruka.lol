export default function TraceLogs() {
    return (
        <section className="mt-24 mb-16 text-xs md:text-sm text-muted-foreground/40 font-mono">
            <div className="mb-4 font-bold text-muted-foreground/60">[TRACE] env=prod sample=last_5</div>
            <div className="space-y-1">
                <div className="grid grid-cols-[35px_1fr_30px_40px] md:grid-cols-[40px_1fr_40px_50px] gap-2 md:gap-4">
                    <span className="text-emerald-500/80">GET</span>
                    <span className="truncate">/api/projects</span>
                    <span>200</span>
                    <span className="text-right">41ms</span>
                </div>
                <div className="grid grid-cols-[35px_1fr_30px_40px] md:grid-cols-[40px_1fr_40px_50px] gap-2 md:gap-4">
                    <span className="text-emerald-500/80">POST</span>
                    <span className="truncate">/api/auth/login</span>
                    <span>200</span>
                    <span className="text-right">92ms</span>
                </div>
                <div className="grid grid-cols-[35px_1fr_30px_40px] md:grid-cols-[40px_1fr_40px_50px] gap-2 md:gap-4">
                    <span className="text-emerald-500/80">GET</span>
                    <span className="truncate">/health</span>
                    <span>200</span>
                    <span className="text-right">3ms</span>
                </div>
                <div className="grid grid-cols-[35px_1fr_30px_40px] md:grid-cols-[40px_1fr_40px_50px] gap-2 md:gap-4">
                    <span className="text-blue-500/80">WS</span>
                    <span className="truncate">/realtime</span>
                    <span>OK</span>
                    <span className="text-right">-</span>
                </div>
            </div>
        </section>
    )
}
