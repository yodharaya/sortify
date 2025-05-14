import BottomBar from "@/components/bottom/bottomnav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <BottomBar />
      </div>
    </div>
  );
}
