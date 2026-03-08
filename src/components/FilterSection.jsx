const FilterSection = ({ title, children }) => (
  <div className="mb-5">
    <h3 className="font-semibold text-sm text-gray-800 mb-2.5">{title}</h3>
    {children}
  </div>
);
export default FilterSection;
