import React, { useEffect, useMemo, useState } from "react";
import "./OurDojo.css";

const getBaseName = (url) => url.split("/").pop() || "";

const OurDojo = () => {
  const picUrls = useMemo(
    () => Object.values(import.meta.glob("../../assets/Gallery/galPics/*.{png,jpg,jpeg,gif}", { eager: true, as: "url" })),
    []
  );
  const vidUrls = useMemo(
    () => Object.values(import.meta.glob("../../assets/Gallery/galVids/*.{mp4,webm}", { eager: true, as: "url" })),
    []
  );

  const [picIndex, setPicIndex] = useState(0);
  const [vidIndex, setVidIndex] = useState(0);
  const [explorerImageIndex, setExplorerImageIndex] = useState(0);
  const [explorerVideoIndex, setExplorerVideoIndex] = useState(0);
  const [isImageExplorerOpen, setIsImageExplorerOpen] = useState(false);
  const [isVideoExplorerOpen, setIsVideoExplorerOpen] = useState(false);

  useEffect(() => {
    if (picUrls.length > 0) {
      setPicIndex(Math.floor(Math.random() * picUrls.length));
    }
    if (vidUrls.length > 0) {
      setVidIndex(Math.floor(Math.random() * vidUrls.length));
    }
  }, [picUrls.length, vidUrls.length]);

  useEffect(() => {
    const picInterval = setInterval(() => {
      if (picUrls.length > 0) {
        setPicIndex(Math.floor(Math.random() * picUrls.length));
      }
    }, 5000);

    const vidInterval = setInterval(() => {
      if (vidUrls.length > 0) {
        setVidIndex(Math.floor(Math.random() * vidUrls.length));
      }
    }, 6200);

    return () => {
      clearInterval(picInterval);
      clearInterval(vidInterval);
    };
  }, [picUrls.length, vidUrls.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isImageExplorerOpen && !isVideoExplorerOpen) return;
      if (event.key === "Escape") {
        closeExplorer();
      } else if (event.key === "ArrowLeft") {
        if (isImageExplorerOpen) showPreviousImage();
        if (isVideoExplorerOpen) showPreviousVideo();
      } else if (event.key === "ArrowRight") {
        if (isImageExplorerOpen) showNextImage();
        if (isVideoExplorerOpen) showNextVideo();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isImageExplorerOpen, isVideoExplorerOpen, picUrls.length, vidUrls.length]);

  const openImageExplorer = () => {
    setExplorerImageIndex(picIndex);
    setIsImageExplorerOpen(true);
  };

  const openVideoExplorer = () => {
    setExplorerVideoIndex(vidIndex);
    setIsVideoExplorerOpen(true);
  };

  const closeExplorer = () => {
    setIsImageExplorerOpen(false);
    setIsVideoExplorerOpen(false);
  };

  const showPreviousImage = () => {
    setExplorerImageIndex((current) =>
      picUrls.length > 0 ? (current === 0 ? picUrls.length - 1 : current - 1) : 0
    );
  };

  const showNextImage = () => {
    setExplorerImageIndex((current) =>
      picUrls.length > 0 ? (current === picUrls.length - 1 ? 0 : current + 1) : 0
    );
  };

  const showPreviousVideo = () => {
    setExplorerVideoIndex((current) =>
      vidUrls.length > 0 ? (current === 0 ? vidUrls.length - 1 : current - 1) : 0
    );
  };

  const showNextVideo = () => {
    setExplorerVideoIndex((current) =>
      vidUrls.length > 0 ? (current === vidUrls.length - 1 ? 0 : current + 1) : 0
    );
  };

  return (
    <div className="our-dojo-page">
      <div className="our-dojo-content">
        <div className="our-dojo-card" onClick={openImageExplorer}>
          <div className="our-dojo-frame our-dojo-clickable">
            {picUrls.length > 0 ? (
              <img src={picUrls[picIndex]} alt={`Galería imagen ${picIndex + 1}`} />
            ) : (
              <div className="our-dojo-placeholder">No hay imágenes disponibles.</div>
            )}
          </div>
          {!isImageExplorerOpen && <span>IMAGENES</span>}
        </div>

        <div className="our-dojo-card" onClick={openVideoExplorer}>
          <div className="our-dojo-frame our-dojo-clickable">
            {vidUrls.length > 0 ? (
              <video
                key={vidUrls[vidIndex]}
                src={vidUrls[vidIndex]}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <div className="our-dojo-placeholder">No hay videos disponibles.</div>
            )}
          </div>
          {!isVideoExplorerOpen && <span>VIDEOS</span>}
        </div>
      </div>

      {(isImageExplorerOpen || isVideoExplorerOpen) && (
        <div className="our-dojo-explorer-overlay" onClick={closeExplorer}>
          <div className="our-dojo-explorer" onClick={(event) => event.stopPropagation()}>
            <button className="explorer-close" onClick={closeExplorer}>
              ✕
            </button>
            <div className="our-dojo-explorer-content">
              <button className="explorer-nav" onClick={isImageExplorerOpen ? showPreviousImage : showPreviousVideo}>
                ◀
              </button>
              <div className="our-dojo-explorer-frame">
                {isImageExplorerOpen ? (
                  picUrls.length > 0 ? (
                    <img src={picUrls[explorerImageIndex]} alt={`Explorador imagen ${explorerImageIndex + 1}`} />
                  ) : (
                    <div className="our-dojo-placeholder">No hay imágenes disponibles.</div>
                  )
                ) : vidUrls.length > 0 ? (
                  <video
                    key={vidUrls[explorerVideoIndex]}
                    src={vidUrls[explorerVideoIndex]}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div className="our-dojo-placeholder">No hay videos disponibles.</div>
                )}
              </div>
              <button className="explorer-nav" onClick={isImageExplorerOpen ? showNextImage : showNextVideo}>
                ▶
              </button>
            </div>
            <div className="explorer-label">
              <div className="explorer-label-subtitle">
                {isImageExplorerOpen
                  ? getBaseName(picUrls[explorerImageIndex] || "")
                  : getBaseName(vidUrls[explorerVideoIndex] || "")}
              </div>
            </div>

            <div className="explorer-thumbs">
              {isImageExplorerOpen
                ? picUrls.map((u, i) => (
                    <button
                      key={u}
                      className={`thumb-item ${i === explorerImageIndex ? "thumb-active" : ""}`}
                      onClick={() => setExplorerImageIndex(i)}
                      aria-label={getBaseName(u)}
                    >
                      <img src={u} alt={getBaseName(u)} />
                    </button>
                  ))
                : vidUrls.map((u, i) => (
                    <button
                      key={u}
                      className={`thumb-item ${i === explorerVideoIndex ? "thumb-active" : ""}`}
                      onClick={() => setExplorerVideoIndex(i)}
                      aria-label={getBaseName(u)}
                    >
                      <video src={u} muted playsInline />
                    </button>
                  ))}
            </div>

            <div className="explorer-help">Esc cerrar · ← atrás · → adelante</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurDojo;
