import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horizon | Demo Store",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

