import { Link } from 'react-router';
const Main = () => {
  return (
    <main className=" text-[3.6rem] w-[95%] border m-auto  h-[100%] flex-1 flex flex-col justify-center  border-t-0 border-b-0">
      <h1 className="text-center w-[100%]">Welcome!</h1>

      <nav className="flex flex-row justify-center w-[100%] gap-[2rem] p-[1rem]">
        <Link to="/login">Sing In</Link>
        <Link to="/register">Sing Up</Link>
      </nav>
    </main>
  );
};

export default Main;
