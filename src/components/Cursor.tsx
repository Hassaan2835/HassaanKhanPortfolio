import { useEffect, useRef } from "react";
import "./styles/Cursor.css";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let hover = false;
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let animationFrameId: number;
    const updateCursor = () => {
      if (!hover) {
        const ease = 0.2;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    animationFrameId = requestAnimationFrame(updateCursor);

    const onMouseEnterItem = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      if (target.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
      } else if (target.dataset.cursor === "icons") {
        const rect = target.getBoundingClientRect();
        cursor.classList.add("cursor-icons");
        cursor.style.transform = `translate3d(${rect.left}px, ${rect.top}px, 0)`;
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        hover = true;
      }
    };

    const onMouseLeaveItem = () => {
      cursor.classList.remove("cursor-disable", "cursor-icons");
      hover = false;
    };

    const interactiveItems = document.querySelectorAll("[data-cursor], a, button");
    interactiveItems.forEach((item) => {
      item.addEventListener("mouseenter", onMouseEnterItem);
      item.addEventListener("mouseleave", onMouseLeaveItem);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      interactiveItems.forEach((item) => {
        item.removeEventListener("mouseenter", onMouseEnterItem);
        item.removeEventListener("mouseleave", onMouseLeaveItem);
      });
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
