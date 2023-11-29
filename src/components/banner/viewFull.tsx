import Image from "next/image";

interface ViewFullProps {
  titulo: string;
  text: string;
  enlace: string;
  description: string;
}

function ViewFull({ description, titulo, text, enlace }: ViewFullProps) {
  return (
    <div className="grid grid-cols-2 max-w-[70vw] h-full">
      <div>
        <div>{titulo}</div>
        <div>{text}</div>
      </div>
      <div className="relative w-56 h-56">
        <Image src={enlace} alt={description} fill ></Image>
      </div>
    </div>
  );
}

export default ViewFull;
