"use client";

export default function Map({ src }) {
  return (
    <iframe
      src={src}
      className="w-full h-52 md:h-80 border-0"
      referrerPolicy="no-referrer-when-downgrade"
      loading="lazy"
    ></iframe>
  );
}
