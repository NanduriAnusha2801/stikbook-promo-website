import { Footer } from "./Footer";
import { Nav } from "./Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "oklch(var(--background))",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
