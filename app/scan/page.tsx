'use client';

import { useEffect, useRef, useState } from 'react';
import BottomBar from "@/components/bottom/bottomnav";

export default function ScanPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Camera error:', error);
        setCameraError('Unable to access the camera. Please check your permissions.');
      }
    };

    startCamera();

    return () => {
      // Stop camera when component unmounts
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-screen justify-between bg-gray-100">
      <div className="px-4 pt-6">
        <h1 className="text-lg font-semibold mb-2">Scan Your Trash Here</h1>
      </div>

      <div className="flex-1 flex items-center justify-center">
        {cameraError ? (
          <p className="text-red-500 text-center px-4">{cameraError}</p>
        ) : (
          <video
            ref={videoRef}
            className="w-11/12 max-w-md rounded-lg shadow-lg"
            autoPlay
            playsInline
            muted
          />
        )}
      </div>

      <BottomBar />
    </div>
  );
}
