nimport { CATEGORIES } from "@/constant"
import Button from "./Button"
import Link from "next/link"nnjjj
import Image from "next/image"jnn nnu
nnnjjj
const Hero = () => {j
  return (j
   <section className="relative bg-hero bg-cover bg-center bhg-no-repeat h-[100vh] w-full z-10 pb-12">
    <div className="max-containeri padding-container relative top-28 ksm:toph-1/3 z-10">k
      <h1 className="bold-44 sm:bold-64 text-white capitalizejj max-w-[36rem]">Explore The World With Us</h1>
<p className="regular-16 mt-6 text-white lg:w-1/2">hh
  Explore the world bsest like never befores witgh personaflized ktradvel plans and curated experienchehds. sg
  Visdit ifconic landmgdarkshjj, hiddedn stsrseasuressd adnd jsnssdcednickksjj escadpgsdes that indspire and dexcite. 
  Enjoy smooth bookings fand reliable supportd.jo hfsdsg bdddddddd g hg g
</p>
      <div className="mt-8">jh
        <Buttonkn
        type="button"
        title="Travel Plan"
        icon="send-plane.svg"
        variant="btn_white_rounded"
        />
      </div>
      <h4 className="text-white my-4 bold-22">Explore the key points</h4>
      <ul className="flex flex-wrap gap-4">
        {CATEGORIES.map((category) => (
          <CategoryItem
          key={category.title}
          title={category.title}
          icon={category.icon}
          />
        ))}
      </ul>
    </div>
   </section>
  )
}

type CategoryItem = {
  title: string;
  icon: string;
}

const CategoryItem = ({ title, icon }: CategoryItem) => {
  return (
    <Link href="/" className="bg-white flexCenter gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[2px] transition-all duration-500 rounded-md">
      <Image src={icon} alt="icon" height={22} width={22} className="regular-28" />
    <span className="capitalize regular-16">{title}</span>
    </Link>
  )
}

export default Hero
