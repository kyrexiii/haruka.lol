import Link from "next/link"

export default function Contact() {
    return (
        <section className="mb-16">
            <div className="flex flex-col gap-1 text-sm md:text-base text-muted-foreground">
                <div className="text-foreground font-bold mb-1">[CONTACT]</div>
                <div>
                    <span className="mr-2">mail:</span>
                    <Link href="mailto:hi@haruka.lol" className="hover:text-foreground transition-colors">
                        hi@haruka.lol
                    </Link>
                </div>
                <div>
                    <span className="mr-2">git:</span>
                    <Link href="https://github.com/kyrexiii" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        github.com/kyrexiii
                    </Link>
                </div>
            </div>
        </section>
    )
}
