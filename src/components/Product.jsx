import { contactPhone } from "@/config";
import { useToggle } from "@/hooks/useToggle";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

export default function Product({
  image,
  name,
  brand,
  sku,
  category,
  infoSku,
  links,
}) {
  const [clicked, handleClicked] = useToggle();
  return (
    <>
      <li className="grid gap-2 grid-rows-[var(--grid-products-card)]">
        <figure className="border border-secondary-light w-full h-full block relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain hover:scale-125 ease-in duration-200"
          />
        </figure>
        <div className="grid gap-3 p-1">
          <div>
            <h4 className="text-sm font-bold uppercase">{name}</h4>
            <span className="text-xs uppercase">{brand}</span>
          </div>
          <div className="flex justify-between items-center">
            <Button className="px-5! text-sm" onClick={handleClicked}>
              Ver más
            </Button>
            {!infoSku && (
              <span className="text-xs capitalize">
                <span className="uppercase">cod: </span>
                {sku}
              </span>
            )}
          </div>
        </div>
      </li>
      <Modal
        isOpen={clicked}
        className="md:h-auto lg:max-w-4xl overflow-y-hidden"
      >
        <ModalHeader title={category[0].label} onClose={handleClicked} />
        <ModalContent className="md:grid-cols-[var(--grid-modal-content-container)] overflow-y-auto flex-1">
          <figure className="relative grid place-items-center min-h-[200px] md:min-h-[300px] border border-secondary-light w-full">
            <Image
              fill="responsive"
              className="object-contain"
              src={image}
              alt={name}
            />
          </figure>
          <div className="grid auto-rows-max gap-2 self-center">
            <h2 className="font-bold text-2xl">{name}</h2>
            <div className="grid grid-cols-[var(--grid-modal-product-features)] justify-between">
              <span>Marca:</span>
              <span>{brand}</span>
              <span>Disponible</span>
              <span className="text-end text-whatsapp">✔</span>
            </div>
            {infoSku && (
              <div className="overflow-y-scroll max-h-32">
                {infoSku &&
                  infoSku.map(({ sku, information }) => {
                    return (
                      <div
                        key={`${sku}${information}`}
                        className="grid grid-cols-[var(--grid-modal-product-features)] justify-between"
                      >
                        <span className="text-xs">{information}</span>
                        <span className="text-xs">{sku}</span>
                      </div>
                    );
                  })}
              </div>
            )}
            {links && (
              <div className="">
                {links &&
                  links.map((link, index) => {
                    return (
                      <Link
                        key={index}
                        href={link}
                        target="_blank"
                        className="text-link"
                      >
                        PDF
                      </Link>
                    );
                  })}
              </div>
            )}
          </div>
        </ModalContent>
        <ModalFooter className="place-self-center">
          <Button
            className="bg-whatsapp flex items-center gap-2 text-white px-5!"
            onClick={() => {
              const phone = contactPhone;
              const message = `Hola, estoy interesado en el siguiente producto\n*${name}*\nCategoría: ${category
                .map((cat) => cat.label)
                .join(
                  ", "
                )}\nCódigo: ${sku}\nMarca: ${brand}\nImagen: ${image}`;
              const url = `https://wa.me/${phone}?text=${encodeURI(message)}`;
              window.open(url, "_blank");
            }}
          >
            <Image
              className="invert"
              width={25}
              height={25}
              src="/icons/whatsapp.svg"
              alt="Whatsapp"
            />
            <p>Reservar por Whatsapp</p>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
