import { ref, onMounted, onUnmounted } from "vue";

export function useFloatingAnimation(containerRef, iconsList) {
  const positions = ref([]);
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

    const rect = containerRef.value.getBoundingClientRect();
    positions.value = iconsList.map(() => spawn(rect));

    const animate = () => {
      if (!containerRef.value) return;
      const currentRect = containerRef.value.getBoundingClientRect();

      positions.value.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        const inside =
          p.x > -icon_size &&
          p.x < currentRect.width &&
          p.y > -icon_size &&
          p.y < currentRect.height;

        if (inside) {
          p.opacity = Math.min(0.35, p.opacity + 0.01);
        } else {
          p.opacity = Math.max(0, p.opacity - 0.01);
        }

        if (
          p.x < -spawn_margin ||
          p.x > currentRect.width + spawn_margin ||
          p.y < -spawn_margin ||
          p.y > currentRect.height + spawn_margin
        ) {
          positions.value[i] = spawn(currentRect);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    });

    observer.observe(containerRef.value);

    onUnmounted(() => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    });
  });

  return {
    positions,
  };
}