import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className=" w-screen h-full bg-slate-100 overflow-auto">
      <div className="flex flex-col py-8 px-14">{children}</div>
    </div>
  );
};

export default Layout;
