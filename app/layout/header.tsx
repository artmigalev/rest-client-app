const Header = ({ children }: { children: React.JSX.Element }) => {
  return (
    <header className="p-[2rem] fixed  top-0  border rounded-2xl w-[100%] m-auto text-[250%] bg-gray-950 z-99">
      {children}
    </header>
  );
};

export default Header;
