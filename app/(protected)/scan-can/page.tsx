"use client";

import { useEffect, useRef, useState } from "react";
import BottomBar from "@/components/bottom/bottomnav";
import { predictWaste } from "@/helpers/waste";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [hasCaptured, setHasCaptured] = useState(false); // Agar hanya sekali capture
  const [isSubmitting, setIsSubmitting] = useState(false);

  const captureImage = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas && !hasCaptured) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL("image/png");
        setCapturedImage(dataURL);
        setHasCaptured(true); // Supaya tidak capture berulang
        setTimeout(() => {
          router.push("/scan-success");
        }, 2000);
        console.log("Image captured automatically");
      }
    }
  };

  // Function to convert data URL to File object
  const dataURLtoFile = (dataurl: string, filename: string): File => {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  // Function to send the image to the backend
  const sendImageToBackend = async () => {
    try {
      setIsSubmitting(true);

      // Convert data URL to File object
      if (!capturedImage) return;
      const imageFile = dataURLtoFile(capturedImage, "trash_image.png");

      const { prediction, confidence } = await predictWaste(imageFile);
    } catch (error) {
      console.error("Failed to send image:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetCapture = () => {
    setCapturedImage(null);
    setHasCaptured(false);
  };

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

            // Capture image otomatis setelah kamera siap
            videoRef.current.onloadedmetadata = () => {
              videoRef.current?.play();
              setTimeout(() => {
                captureImage();
              }, 2000); // Tunggu 1 detik
            };
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
          Verify Your Trash Can
        </h1>
      </div>

      {/* Persegi tengah responsif */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="w-[70vw] h-[70vw] max-w-[320px] max-h-[320px] border-4 border-white rounded-lg bg-white bg-opacity-10 backdrop-blur-sm" />
      </div>

      {/* Canvas tersembunyi */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Tampilkan hasil gambar */}
      {capturedImage && (
        <div className="absolute top-20 right-4 z-30 w-32 h-32 border-2 border-white rounded-md overflow-hidden">
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full h-full object-cover"
          />
        </div>
      )}

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
