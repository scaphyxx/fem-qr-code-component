import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="h-screen bg-lightGray items-center justify-center flex">{children}</body>
    </html>
  );
}
