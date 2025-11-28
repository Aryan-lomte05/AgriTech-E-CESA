// Lazy load images with intersection observer
export const lazyLoadImage = (ref, src, onLoad) => {
  if (!ref.current) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = src;
          img.onload = onLoad;
          observer.unobserve(img);
        }
      });
    },
    { rootMargin: '50px' }
  );

  observer.observe(ref.current);
  return () => observer.disconnect();
};

// Preload critical images
export const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};
