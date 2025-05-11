function Button({ label, primary }) {
  return (
    <button
      className={`px-5 py-2 rounded-full text-sm font-medium transition
        ${primary
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-blue-600 text-blue-600 hover:bg-blue-50"}
      `}
    >
      {label}
    </button>
  );
}

export default Button;
