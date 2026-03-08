const Sidebar = ({ children }) => {
  return (
    <aside className="w-72 shrink-0">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
