'use client'
import { useNotes } from "@/context/NoteContext";
import Link from "next/link";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { LuFileEdit } from "react-icons/lu";

interface EditIconsProps{
  id: number;
}

function EditIcons({id}:EditIconsProps) {
  const {data, delData} = useNotes();

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    delData(id)
  }

  return (
    <div className="gap-3 flex text-xl z-50">
      <Link href={`/product-create/${id}`}><LuFileEdit /></Link>
      <button className="z-50" onClick={handleClick}><FaTrashRestoreAlt /></button>
    </div>
  )
}

export default EditIcons

