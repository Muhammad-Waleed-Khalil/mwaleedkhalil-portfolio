"use client";
import { useEffect } from "react";

const ContentProtection = () => {
  useEffect(() => {
    // Add protection classes to body
    if (typeof document !== "undefined") {
      document.body.style.userSelect = "none";
      document.body.style.webkitUserSelect = "none";
      (document.body.style as any).msUserSelect = "none";
      (document.body.style as any).mozUserSelect = "none";
      
      // Add CSS to prevent text selection
      const style = document.createElement("style");
      style.textContent = `
        * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        
        img {
          -webkit-user-drag: none !important;
          -khtml-user-drag: none !important;
          -moz-user-drag: none !important;
          -o-user-drag: none !important;
          user-drag: none !important;
          pointer-events: none !important;
        }
        
        /* Prevent screenshot on mobile */
        @media screen and (max-width: 768px) {
          body {
            -webkit-touch-callout: none !important;
            -webkit-user-select: none !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Disable right-click globally
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 - DevTools
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I - DevTools
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+J - Console
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return false;
      }

      // Ctrl+U - View Source
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+C - Inspect Element
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
        return false;
      }

      // Ctrl+S - Save Page
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        return false;
      }

      // Ctrl+A - Select All
      if (e.ctrlKey && e.key === "a") {
        e.preventDefault();
        return false;
      }

      // Ctrl+C - Copy
      if (e.ctrlKey && e.key === "c") {
        e.preventDefault();
        return false;
      }

      // Ctrl+X - Cut
      if (e.ctrlKey && e.key === "x") {
        e.preventDefault();
        return false;
      }

      // Ctrl+P - Print
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+K - Console (Firefox)
      if (e.ctrlKey && e.shiftKey && e.key === "K") {
        e.preventDefault();
        return false;
      }

      // Alt+F4 - Close window
      if (e.altKey && e.key === "F4") {
        e.preventDefault();
        return false;
      }

      // Disable function keys
      if (e.key.startsWith("F") && e.key.length === 2) {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable copying
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable cutting
    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable pasting
    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable drag for images
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Protect all images
    const protectImages = () => {
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        img.setAttribute("draggable", "false");
        img.style.pointerEvents = "none";
        img.addEventListener("contextmenu", handleContextMenu);
        img.addEventListener("dragstart", handleDragStart);
      });
    };

    // Advanced DevTools detection
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;

      if (widthThreshold || heightThreshold) {
        // DevTools detected - reload the page
        window.location.reload();
      }

      // Additional detection methods
      const start = performance.now();
      debugger;
      const end = performance.now();
      
      if (end - start > 100) {
        // Debugger was hit, likely DevTools is open
        window.location.reload();
      }
    };

    // Screenshot prevention for mobile
    const preventScreenshots = () => {
      // Disable screenshot on Android
      if (navigator.userAgent.includes('Android')) {
        document.addEventListener('visibilitychange', () => {
          if (document.hidden) {
            document.body.style.display = 'none';
          } else {
            document.body.style.display = 'block';
          }
        });
      }

      // Prevent screenshot on iOS
      if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
        document.addEventListener('visibilitychange', () => {
          if (document.hidden) {
            document.body.style.display = 'none';
          } else {
            document.body.style.display = 'block';
          }
        });
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("paste", handlePaste);
    document.addEventListener("dragstart", handleDragStart);

    // Protect existing images
    protectImages();

    // Set up MutationObserver to protect dynamically added images
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === "IMG") {
            const img = node as HTMLImageElement;
            img.setAttribute("draggable", "false");
            img.style.pointerEvents = "none";
            img.addEventListener("contextmenu", handleContextMenu);
            img.addEventListener("dragstart", handleDragStart);
          }
          if ((node as HTMLElement).querySelectorAll) {
            const imgs = (node as HTMLElement).querySelectorAll("img");
            imgs.forEach((img) => {
              img.setAttribute("draggable", "false");
              img.style.pointerEvents = "none";
              img.addEventListener("contextmenu", handleContextMenu);
              img.addEventListener("dragstart", handleDragStart);
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Check for DevTools every 500ms
    const devToolsInterval = setInterval(detectDevTools, 500);

    // Disable console methods
    const disableConsole = () => {
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
      console.info = () => {};
      console.debug = () => {};
      console.trace = () => {};
      console.table = () => {};
      console.group = () => {};
      console.groupEnd = () => {};
      console.time = () => {};
      console.timeEnd = () => {};
    };
    disableConsole();

    // Prevent screenshots
    preventScreenshots();

    // Disable print
    window.addEventListener('beforeprint', (e) => {
      e.preventDefault();
      return false;
    });

    // Note: beforeunload removed to improve user experience

    // Cleanup function
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("paste", handlePaste);
      document.removeEventListener("dragstart", handleDragStart);
      observer.disconnect();
      clearInterval(devToolsInterval);

      // Restore body styles on cleanup
      if (typeof document !== "undefined") {
        document.body.style.userSelect = "";
        document.body.style.webkitUserSelect = "";
        (document.body.style as any).msUserSelect = "";
        (document.body.style as any).mozUserSelect = "";
      }
    };
  }, []);

  return null;
};

export default ContentProtection;
