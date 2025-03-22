import Link from "next/link"

export function Logo() {
  return (
    <div className="flex-1 flex justify-center">
      <Link 
        href="/" 
        className="text-lg md:text-2xl lg:text-3xl font-medium tracking-wider text-cream-50 font-montserrat hover:cursor-pointer"
      >
        pure pilates.
      </Link>
    </div>
  )
} 