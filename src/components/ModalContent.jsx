export default function ModalContent({ children, className }) {
  return <div className={`grid gap-4 p-5 ${className}`}>{children}</div>;
}
