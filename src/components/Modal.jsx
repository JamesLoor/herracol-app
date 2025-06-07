export default function Modal({ children, className, isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 z-50 flex items-center justify-center bg-black/50`}
    >
      <div
        className={`relative flex flex-col bg-white rounded-lg overflow-y-auto h-auto w-full max-h-[90dvh] max-w-[90dvw] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
