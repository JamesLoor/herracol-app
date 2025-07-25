export default function Modal({ children, className, isOpen, onClose }) {
  return (
    <div
      className={`${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300`}
      onClick={onClose}
    >
      <div
        className={` ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } relative flex flex-col bg-white rounded-lg overflow-y-auto h-auto w-full max-h-[90dvh] max-w-[90dvw] transform transition-all duration-300 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
