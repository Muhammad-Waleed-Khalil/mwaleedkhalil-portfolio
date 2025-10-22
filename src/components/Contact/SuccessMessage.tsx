"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function SuccessMessage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if URL has success parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      setShowSuccess(true);

      // Auto-hide after 10 seconds and clean URL
      const timer = setTimeout(() => {
        setShowSuccess(false);
        // Remove success parameter from URL
        urlParams.delete("success");
        const newUrl = window.location.pathname;
        window.history.replaceState({}, "", newUrl);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showSuccess) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="fixed top-[10vh] left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md"
    >
      <div className="bg-green-50 dark:bg-green-900 border-2 border-green-500 rounded-lg p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <svg
              className="w-6 h-6 text-green-600 dark:text-green-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-100 mb-2">
              Message Sent Successfully! ✓
            </h3>
            <p className="text-green-700 dark:text-green-200 text-sm">
              Thank you for reaching out! I've received your message and will
              get back to you as soon as possible, typically within 24-48 hours.
            </p>
          </div>
          <button
            onClick={() => {
              setShowSuccess(false);
              const urlParams = new URLSearchParams(window.location.search);
              urlParams.delete("success");
              window.history.replaceState({}, "", window.location.pathname);
            }}
            className="flex-shrink-0 text-green-600 dark:text-green-300 hover:text-green-800 dark:hover:text-green-100 transition-colors"
            aria-label="Close success message"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default SuccessMessage;
