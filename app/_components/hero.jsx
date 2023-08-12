import { Instagram } from "./icons/instagram"
import { Linkedin } from "./icons/linkedin"
import { Facebook } from "./icons/facebook"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="hero page-width">
      <div className="pt-8 md:max-w-4xl md:mx-auto flex justify-center flex-col items-center">
        <h1 className="uppercase text-3xl md:text-5xl text-cyan-500 text-center font-medium">Amrita Pritom Prapti </h1>
        <h2 className="text-lg md:text-[20px] my-2">Frontend Developer | Shopify Expert</h2>
        <p className="text-[16px] text-center my-3 font-normal text-slate-300">Passionate about crafting visually appealing and user-friendly websites that drive engagement and conversions. Let's collaborate to bring your e-commerce vision to life!</p>
        <div className="flex items-center justify-center gap-6 my-8">
          <Link href="https://www.linkedin.com/in/amrita-pritom-prapti-a58263157/"><Linkedin /></Link>
          <Link href="https://www.instagram.com/amrita_pritom_prapti/"><Instagram /></Link>
          <Link href="https://www.facebook.com/amritapritomprapti"><Facebook /></Link>
        </div>
        <div className="profile-image w-full max-w-[300px] relative  mx-auto rounded-full h-[300px] overflow-hidden  bg-gradient-to-b from-cyan-700">
          <Image
            src="/profile.png"
            className="w-full h-[300px] object-left object-cover"
            layout="fill"
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  )
}