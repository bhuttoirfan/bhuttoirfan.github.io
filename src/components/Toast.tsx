import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, X } from "lucide-react";

export type ToastType = "success" | "error";

export interface ToastState {
  type: ToastType;
  message: string;
}

// A small themed notification that slides in from the bottom-right, matching
// the site's dark theme. Replaces native alert() so messages feel on-brand.
export default function Toast({
  toast,
  onClose,
  duration = 6000,
}: {
  toast: ToastState | null;
  onClose: () => void;
  duration?: number;
}) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [toast, duration, onClose]);

  const isError = toast?.type === "error";

  return createPortal(
    <AnimatePresence>
      {toast && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`fixed inset-x-4 bottom-5 z-[60] mx-auto flex max-w-sm items-start gap-3 rounded-xl border bg-card/95 p-4 shadow-2xl backdrop-blur sm:left-auto sm:right-5 sm:mx-0 ${
            isError ? "border-red-400/50" : "border-accent/50"
          }`}
        >
          <span className={`mt-0.5 shrink-0 ${isError ? "text-red-400" : "text-accent-soft"}`}>
            {isError ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
          </span>
          <p className="flex-1 text-sm leading-relaxed text-text">{toast.message}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss"
            className="shrink-0 text-muted transition-colors hover:text-text"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
