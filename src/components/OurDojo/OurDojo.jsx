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
  const semUrls = useMemo(
    () => Object.values(import.meta.glob("../../assets/Gallery/galSeminary/*.{mp4,webm}", { eager: true, as: "url" })),
    []
  );

  const [picIndex, setPicIndex] = useState(0);
  const [vidIndex, setVidIndex] = useState(0);
  const [semIndex, setSemIndex] = useState(0);
  const [explorerImageIndex, setExplorerImageIndex] = useState(0);
  const [explorerVideoIndex, setExplorerVideoIndex] = useState(0);
  const [explorerSeminaryIndex, setExplorerSeminaryIndex] = useState(0);
  const [isImageExplorerOpen, setIsImageExplorerOpen] = useState(false);
  const [isVideoExplorerOpen, setIsVideoExplorerOpen] = useState(false);
  const [isSeminaryExplorerOpen, setIsSeminaryExplorerOpen] = useState(false);

  useEffect(() => {
    if (picUrls.length > 0) {
      setPicIndex(Math.floor(Math.random() * picUrls.length));
    }
    if (vidUrls.length > 0) {
      setVidIndex(Math.floor(Math.random() * vidUrls.length));
    }
    if (semUrls.length > 0) {
      setSemIndex(Math.floor(Math.random() * semUrls.length));
    }
  }, [picUrls.length, vidUrls.length, semUrls.length]);

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

    const semInterval = setInterval(() => {
      if (semUrls.length > 0) {
        setSemIndex(Math.floor(Math.random() * semUrls.length));
      }
    }, 7000);

    return () => {
      clearInterval(picInterval);
      clearInterval(vidInterval);
      clearInterval(semInterval);
    };
  }, [picUrls.length, vidUrls.length, semUrls.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isImageExplorerOpen && !isVideoExplorerOpen && !isSeminaryExplorerOpen) return;
      if (event.key === "Escape") {
        closeExplorer();
      } else if (event.key === "ArrowLeft") {
        if (isImageExplorerOpen) showPreviousImage();
        if (isVideoExplorerOpen) showPreviousVideo();
        if (isSeminaryExplorerOpen) showPreviousSeminary();
      } else if (event.key === "ArrowRight") {
        if (isImageExplorerOpen) showNextImage();
        if (isVideoExplorerOpen) showNextVideo();
        if (isSeminaryExplorerOpen) showNextSeminary();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isImageExplorerOpen, isVideoExplorerOpen, isSeminaryExplorerOpen, picUrls.length, vidUrls.length, semUrls.length]);

  const openImageExplorer = () => {
    setExplorerImageIndex(picIndex);
    setIsImageExplorerOpen(true);
  };

  const openVideoExplorer = () => {
    setExplorerVideoIndex(vidIndex);
    setIsVideoExplorerOpen(true);
  };

  const openSeminaryExplorer = () => {
    setExplorerSeminaryIndex(semIndex);
    setIsSeminaryExplorerOpen(true);
  };

  const closeExplorer = () => {
    setIsImageExplorerOpen(false);
    setIsVideoExplorerOpen(false);
    setIsSeminaryExplorerOpen(false);
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

  const showPreviousSeminary = () => {
    setExplorerSeminaryIndex((current) =>
      semUrls.length > 0 ? (current === 0 ? semUrls.length - 1 : current - 1) : 0
    );
  };

  const showNextSeminary = () => {
    setExplorerSeminaryIndex((current) =>
      semUrls.length > 0 ? (current === semUrls.length - 1 ? 0 : current + 1) : 0
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

        <div className="our-dojo-card" onClick={openSeminaryExplorer}>
          <div className="our-dojo-frame our-dojo-clickable">
            {semUrls.length > 0 ? (
              <video
                key={semUrls[semIndex]}
                src={semUrls[semIndex]}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <div className="our-dojo-placeholder">No hay seminarios disponibles.</div>
            )}
          </div>
          {!isSeminaryExplorerOpen && <span>SEMINARIOS</span>}
        </div>

        <div className="our-dojo-card">
          <div className="our-dojo-frame our-dojo-clickable">
            <iframe
              className="our-dojo-map"
              src="https://maps.google.com/maps?q=Monterrey+241,+Roma+Sur,+Cuauhtemoc,+CDMX&t=&z=16&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa del Dojo"
            ></iframe>
          </div>
          <span>UBICACIÓN</span>
        </div>
      </div>

      {(isImageExplorerOpen || isVideoExplorerOpen || isSeminaryExplorerOpen) && (
        <div className="our-dojo-explorer-overlay" onClick={closeExplorer}>
          <div className="our-dojo-explorer" onClick={(event) => event.stopPropagation()}>
            <button className="explorer-close" onClick={closeExplorer}>
              ✕
            </button>
            <div className="our-dojo-explorer-content">
              <button className="explorer-nav" onClick={isImageExplorerOpen ? showPreviousImage : isVideoExplorerOpen ? showPreviousVideo : showPreviousSeminary}>
                ◀
              </button>
              <div className="our-dojo-explorer-frame">
                {isImageExplorerOpen ? (
                  picUrls.length > 0 ? (
                    <img src={picUrls[explorerImageIndex]} alt={`Explorador imagen ${explorerImageIndex + 1}`} />
                  ) : (
                    <div className="our-dojo-placeholder">No hay imágenes disponibles.</div>
                  )
                ) : isVideoExplorerOpen ? (
                  vidUrls.length > 0 ? (
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
                  )
                ) : semUrls.length > 0 ? (
                  <video
                    key={semUrls[explorerSeminaryIndex]}
                    src={semUrls[explorerSeminaryIndex]}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div className="our-dojo-placeholder">No hay seminarios disponibles.</div>
                )}
              </div>
              <button className="explorer-nav" onClick={isImageExplorerOpen ? showNextImage : isVideoExplorerOpen ? showNextVideo : showNextSeminary}>
                ▶
              </button>
            </div>
            <div className="explorer-label">
              <div className="explorer-label-subtitle">
                {isImageExplorerOpen
                  ? getBaseName(picUrls[explorerImageIndex] || "")
                  : isVideoExplorerOpen
                  ? getBaseName(vidUrls[explorerVideoIndex] || "")
                  : getBaseName(semUrls[explorerSeminaryIndex] || "")}
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
                : isVideoExplorerOpen
                ? vidUrls.map((u, i) => (
                    <button
                      key={u}
                      className={`thumb-item ${i === explorerVideoIndex ? "thumb-active" : ""}`}
                      onClick={() => setExplorerVideoIndex(i)}
                      aria-label={getBaseName(u)}
                    >
                      <video src={u} muted playsInline />
                    </button>
                  ))
                : semUrls.map((u, i) => (
                    <button
                      key={u}
                      className={`thumb-item ${i === explorerSeminaryIndex ? "thumb-active" : ""}`}
                      onClick={() => setExplorerSeminaryIndex(i)}
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
