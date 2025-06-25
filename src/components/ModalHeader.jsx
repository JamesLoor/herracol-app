export default function ModalHeader({
  title,
  description,
  onClose,
  className,
}) {
  return (
    <div className={`flex justify-between items-center p-5 ${className}`}>
      <div className="grid gap-1">
        <h2 className="text-lg font-semibold capitalize">{title}</h2>
        <p className="text-sm font-medium text-gray-500">{description}</p>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-3xl text-gray-400 hover:text-black cursor-pointer"
      >
        &times;
      </button>
    </div>
  );
}
