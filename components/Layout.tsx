import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-full min-h-screen w-full min-w-full flex-col items-center justify-start">
      <Header />
      {children}
    </div>
  );
};
