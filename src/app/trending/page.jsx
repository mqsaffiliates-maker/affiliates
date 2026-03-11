import Image from "next/image"
import Link from "next/link"
const page = () => {
  const images = [
    "/pin1.png",
    '/pin2.png',
     '/pin3.png'
  ]
  return (
    <div className="h-[100vh]">
     <div className="md:h-[25vh] h-[30vh] flex flex-col justify-end items-center text-center">
  <h1 className="md:text-5xl text-2xl text-[#666666] md:ml-4 ml-0">
    Your Favorites, Trending Today
  </h1>
  
  {/* Desktop Paragraph */}
  <p className="hidden md:flex md:mt-10 w-[97vw] justify-center border border-t-0 rounded-lg">
    The viral finds everyone is obsessed with—handpicked and updated daily so you never miss a beat
  </p>
  
  {/* Mobile Paragraph */}
  <p className="md:hidden flex p-1 mt-3 border border-t-0 rounded-lg">
     The viral obsessed finds
  </p>
</div>
      {/* trending products section */}
      <div className="h-[25vh] flex justify-center items-center ">
         <h1 className="w-[97vw] flex justify-center border border-b-0 rounded-lg">
          Trending Products
         </h1>
      </div>
      <div>
          <div className=" md:ml-10 flex gap-5 overflow-x-auto no-scrollbar scroll-smooth md:grid md:grid-cols-4 md:overflow-x-visible md:gap-5 ">
            {images.map((src, index) => (
              <div
                key={index}
                className="transition tranform hover:scale-102 md:h-[420px] md:flex-shrink-0 md:w-[300px] h-[200px] w-[350px] ml-5 md:ml-0 border border-black/30 rounded-lg p-10"
              >
                <div className="relative md:h-[300px] w-full h-[100px] object-cover cursor-pointer transition tranform hover:scale-102">
                    <Link href={`/trending/${index + 1}`}>
                    <Image
                      src={src}
                      alt={`trending ${index + 1}`}
                      fill
                      className="object-cover transition tranform hover:scale-110"
                    />
                  </Link>
                </div>
                <a
                  href={`trending/${index + 1}`}
                  className="cursor-pointer select-none bg-black text-white md:p-3 rounded-lg flex justify-center mt-2 hover:bg-black/30 hover:text-black text-sm md:text-lg p-2 text-center whitespace-nowrap w-full"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
      </div>
      
    </div>
  )
}

export default page
