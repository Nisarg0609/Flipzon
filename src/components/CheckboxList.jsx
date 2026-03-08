const CheckboxList = ({ items, selected, onToggle, getKey, getLabel, getValue }) => (
  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
    {items.map((item) => (
      <label
        key={getKey(item)}
        className="flex items-center gap-2 cursor-pointer group select-none"
      >
        <input
          type="checkbox"
          checked={selected.includes(getValue ? getValue(item) : item)}
          onChange={() => onToggle(item)}
          className="w-4 h-4 rounded border-gray-300 text-blue-600 cursor-pointer"
        />
        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors capitalize">
          {getLabel(item)}
        </span>
      </label>
    ))}
  </div>
);
export default CheckboxList;
