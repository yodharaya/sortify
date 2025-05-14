"use client";

import { useEffect, useRef, useState } from "react";
import BottomBar from "@/components/bottom/bottomnav";

export default function ScanPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        if (
          typeof navigator !== "undefined" &&
          navigator.mediaDevices &&
          typeof navigator.mediaDevices.getUserMedia === "function"
        ) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } else {
          throw new Error("Camera API not supported in this browser.");
        }
      } catch (error) {
        console.error("Camera error:", error);
        setCameraError(
          "Unable to access the camera. Please check your permissions and make sure you are using a secure (HTTPS) connection."
        );
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Kamera full screen */}
      {!cameraError && (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          playsInline
          muted
        />
      )}

      {/* Teks kiri atas */}
      <div className="absolute top-6 left-4 z-20">
        <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-[0_0_2px_white]">
          Scan Your Trash Here
        </h1>
      </div>

      {/* Persegi tengah responsif */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="w-[70vw] h-[70vw] max-w-[320px] max-h-[320px] border-4 border-white rounded-lg bg-white bg-opacity-10 backdrop-blur-sm" />
      </div>

      {/* Pesan error */}
      {cameraError && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-red-500 text-center px-4 text-lg">{cameraError}</p>
        </div>
      )}

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <BottomBar />
      </div>
    </div>
  );
}
