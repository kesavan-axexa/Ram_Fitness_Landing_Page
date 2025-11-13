// src/utils/toastMessages.js
import { toast } from "sonner";
import { CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

export const showSuccess = (message) =>
    toast.success(message, {
        icon: (
            <CheckCircle
                color="#22c55e"
                size={22}
            />
        ),
    });

export const showError = (message) =>
    toast.error(message, {
        icon: (
            <AlertCircle
                color="#ef4444"
                size={22}
            />
        ),
    });

export const showInfo = (message) =>
    toast.info(message, {
        icon: (
            <Info
                color="#64748b"
                size={22}
            />
        ),
    });

export const showWarning = (message) =>
    toast.warning(message, {
        icon: (
            <AlertTriangle
                color="#facc15"
                size={22}
            />
        ),
    });
