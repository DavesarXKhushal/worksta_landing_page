import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { UserButton, } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

const Navbar = async () => {
    const isClerkConfigured = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    const user = isClerkConfigured ? await currentUser() : null;

    return (
        <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.logo className="w-8 h-8" />
                            <span className="text-lg font-medium">
                                Worksta
                            </span>
                        </Link>
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-8">
                            <Link href="#process" className="hover:text-foreground/80 text-sm">How it works</Link>
                            <Link href="#features" className="hover:text-foreground/80 text-sm">Features</Link>
                            <Link href="#about" className="hover:text-foreground/80 text-sm">About</Link>
                            <Link href="#testimonials" className="hover:text-foreground/80 text-sm">Stories</Link>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                        {user ? (
                            <UserButton />
                        ) : (
                            <>
                                <Link href="#waitlist" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                                    Coming soon
                                </Link>
                                <Link href="#waitlist" className={buttonVariants({ size: "sm", className: "hidden md:flex" })}>
                                    Join waitlist
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Navbar
