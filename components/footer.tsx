interface FooterProps {
  status?: string;
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`w-full pt-12 pb-12 flex flex-col md:flex-row items-center md:items-start justify-between text-[10px] text-muted-foreground font-mono uppercase tracking-widest border-t border-foreground/5 ${className}`}>
      <p>© {new Date().getFullYear()} Haruka.</p>
      <div className="flex gap-8 mt-4 md:mt-0">
         <span>BUILT WITH: NEXT.JS</span>
      </div>
    </footer>
  )
}
