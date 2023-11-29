import Link from "next/link";

interface ListaProp{
  text:string;
  link:string;
}

function Lista({text, link}:ListaProp) {
  return (
    <li>
      <Link href={link}>{text}</Link>            
    </li>
  )
}

export default Lista
