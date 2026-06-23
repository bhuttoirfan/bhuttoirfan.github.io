import { ReactNode, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { profile } from "../data/profile";
import Toast, { ToastState } from "./Toast";

// Generates the résumé PDF from the site's own data on click. The PDF
// renderer and document are loaded lazily so they stay out of the main
// bundle and only download when the user actually wants the file.
export default function ResumeDownloadButton({
  className = "btn-primary",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  async function handleDownload() {
    if (loading) return;
    setLoading(true);
    setToast(null);

    try {
      // Loaded on demand. If the dev server was started before the dependency
      // was installed, this dynamic import can fail until the page reloads —
      // we surface that case with a clear "refresh" message below.
      const [{ pdf }, { default: ResumeDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("../resume/ResumeDocument"),
      ]);

      const blob = await pdf(<ResumeDocument />).toBlob();
      if (!blob || blob.size === 0) {
        throw new Error("Generated PDF was empty");
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${profile.name.replace(/\s+/g, "_")}_Resume.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      setToast({ type: "success", message: "Your résumé has started downloading." });
    } catch (err) {
      console.error("Failed to generate résumé PDF:", err);
      const message = err instanceof Error ? err.message : String(err);
      const isLoadError = /dynamically imported module|Failed to fetch|importing|chunk/i.test(message);
      setToast({
        type: "error",
        message: isLoadError
          ? "Couldn't load the résumé generator. Please refresh the page and try again."
          : `Sorry, the résumé couldn't be generated. Please try again, or email me at ${profile.email} for a copy.`,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleDownload}
        disabled={loading}
        aria-busy={loading}
        className={`${className} disabled:opacity-70`}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Generating…
          </>
        ) : (
          children ?? (
            <>
              <Download size={16} /> Download résumé
            </>
          )
        )}
      </button>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}
