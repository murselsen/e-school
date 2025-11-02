import Dashboard from "./Dashboard";
const Parent = ({ children }) => {
  return (
    <Dashboard>
      <h1>Parent Page</h1>
      {children}
    </Dashboard>
  );
};

export default Parent;
