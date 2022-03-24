import { useLayoutEffect } from "react";

export default function useLockBodyScroll() {
    useLayoutEffect(() => {
        // Get original value of documentElement overflow
        const originalStyle = window.getComputedStyle(
            document.documentElement
        ).overflow;
        // Prevent scrolling on mount
        document.documentElement.style.overflow = "hidden";
        // Re-enable scrolling when component unmounts
        return () => (document.documentElement.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount
}
