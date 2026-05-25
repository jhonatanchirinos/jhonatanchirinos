import { shallowRef, triggerRef, onMounted, onUnmounted } from "vue";

export function useFloatingAnimation(containerRef, iconsList) {
  const positions = shallowRef([]);
  let rawPositions = [];
  const speed = 0.8;
  const icon_size = 80;
  const spawn_margin = 120;
  let animationFrameId = null;

  function spawn(rect) {
    const side = Math.floor(Math.random() * 4);
    let x, y;

    if (side === 0) {
      x = Math.random() * rect.width;
      y = -spawn_margin;
    } else if (side === 1) {
      x = rect.width + spawn_margin;
      y = Math.random() * rect.height;
    } else if (side === 2) {
      x = Math.random() * rect.width;
      y = rect.height + spawn_margin;
    } else {
      x = -spawn_margin;
      y = Math.random() * rect.height;
    }

    const angle = Math.random() * Math.PI * 2;

    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      opacity: 0,
    };
  }

  onMounted(() => {
    if (!containerRef.value) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cachedRect = containerRef.value.getBoundingClientRect();
    rawPositions = iconsList.map(() => spawn(cachedRect));
    positions.value = rawPositions;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      cachedRect = { width, height };
    });

    resizeObserver.observe(containerRef.value);

    const animate = () => {
      rawPositions.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        const inside =
          p.x > -icon_size &&
          p.x < cachedRect.width &&
          p.y > -icon_size &&
          p.y < cachedRect.height;

        if (inside) {
          p.opacity = Math.min(0.35, p.opacity + 0.01);
        } else {
          p.opacity = Math.max(0, p.opacity - 0.01);
        }

        if (
          p.x < -spawn_margin ||
          p.x > cachedRect.width + spawn_margin ||
          p.y < -spawn_margin ||
          p.y > cachedRect.height + spawn_margin
        ) {
          rawPositions[i] = spawn(cachedRect);
        }
      });

      triggerRef(positions);
      animationFrameId = requestAnimationFrame(animate);
    };

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    });

    intersectionObserver.observe(containerRef.value);

    onUnmounted(() => {
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    });
  });

  return {
    positions,
  };
}