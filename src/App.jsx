import { useEffect, useRef } from 'react';

function App() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1';
        iframe.src = entry.isIntersecting ? src : ''; // load when visible, unload when not
      },
      { threshold: 0.5 }
    );

    if (iframeRef.current) observer.observe(iframeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        ref={iframeRef}
        width="560"
        height="315"
        src="" // starts empty; will fill when visible
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}

export default App;
