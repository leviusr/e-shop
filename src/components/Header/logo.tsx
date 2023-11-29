import { Shantell_Sans } from "next/font/google";

const shantell = Shantell_Sans({ subsets: ["latin"] });

function Logo() {
  return (
    <div className={`text-3xl font-bold`}>
      <span className="text-primary">Dis' --> </span> Shop
    </div>
  );
}

export default Logo;
