export default function Diagnostics() {
    return (
        <div className="hidden lg:block sticky top-24 font-mono text-xs text-muted-foreground/50 select-none">
            <div className="mb-2 font-bold">[SYS]</div>
            <div className="space-y-1">
                <div className="flex justify-between gap-8">
                    <span>uptime:</span>
                    <span>132d 04h</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>region:</span>
                    <span>ap-south-1</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>env:</span>
                    <span>production</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>node:</span>
                    <span>v20.11.0</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>memory:</span>
                    <span>62%</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>latency:</span>
                    <span>34ms</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>build:</span>
                    <span>2021.01.14</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>boot:</span>
                    <span>2024-09-11T02:14:22Z</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>last_deploy:</span>
                    <span>2021-01-14T18:02:09Z</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>tz:</span>
                    <span>Asia/Kolkata</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>arch:</span>
                    <span>x86_64</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>kernel:</span>
                    <span>Linux 6.6</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>container:</span>
                    <span>docker</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>instance:</span>
                    <span>haruka-prod-01</span>
                </div>
                <div className="flex justify-between gap-8">
                    <span>commit:</span>
                    <span>a9f3c21</span>
                </div>
            </div>

            <div className="mt-4 font-bold text-muted-foreground/60">
                [HEALTH] db=ok cache=ok ws=ok
            </div>
        </div>
    )
}
