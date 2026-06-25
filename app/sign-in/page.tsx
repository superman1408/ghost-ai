import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";

export default function SignInPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-8">
            <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <section className="hidden flex-col justify-center gap-6 rounded-[2rem] border border-border bg-card p-10 shadow-sm lg:flex">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Ghost AI</p>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
                            Secure editor access for modern workflows.
                        </h1>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
                            Sign in to continue with your protected workspace and keep your content under control.
                        </p>
                    </div>

                    <div className="grid gap-4 text-sm text-muted-foreground">
                        <p className="font-semibold text-foreground">Why Ghost AI?</p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li>Fast, reliable authentication with Clerk.</li>
                            <li>Protected editor sessions and robust user management.</li>
                            <li>Minimal interface designed for productive sign-in flows.</li>
                        </ul>
                    </div>
                </section>

                <section className="flex min-h-[520px] flex-col justify-center rounded-[2rem] border border-border bg-background p-6 shadow-sm sm:p-10">
                    <div className="mx-auto w-full max-w-md">
                        <SignIn routing="hash" appearance={{ theme: dark }} />
                    </div>
                </section>
            </div>
        </div>
    );
}
