import Buttons from "./Buttons";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Buttons />
      </div>
      {children}
    </>
  );
};

export default Layout;
