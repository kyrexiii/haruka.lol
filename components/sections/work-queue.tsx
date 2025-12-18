export default function WorkQueue() {
    return (
        <section className="mb-24 text-xs md:text-sm text-muted-foreground/40 font-mono">
            <div className="mb-4 font-bold text-muted-foreground/60">[QUEUE]</div>
            <div className="space-y-1">
                <div>- infra hardening</div>
                <div>- auth refactor</div>
                <div>- rate limiting</div>
                <div>- observability</div>
            </div>
        </section>
    )
}
