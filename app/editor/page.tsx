import EditorShell from "@/components/editor/editor-shell";
import { auth } from "@clerk/nextjs/server";

export default async function EditorPage() {
  await auth.protect();

  return (
    <EditorShell>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Editor</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Secure workspace access is enabled. Use the sidebar to navigate your projects and the user menu to manage your session.
          </p>
        </div>
      </div>
    </EditorShell>
  );
}
