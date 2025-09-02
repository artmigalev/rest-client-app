const Header = ({ children }: { children: React.JSX.Element }) => {
  return (
    <header className="p-[2rem] border rounded-2xl w-[95%] m-auto text-[250%]">
      {children}
    </header>
  );
};

export default Header;
