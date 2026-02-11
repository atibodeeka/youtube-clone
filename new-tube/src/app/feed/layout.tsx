interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="p-4 w-full bg-rose-500"> i am a navbar</div>
      {children}
    </div>
  );
};

export default Layout;
