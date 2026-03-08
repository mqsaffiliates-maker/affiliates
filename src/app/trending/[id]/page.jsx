'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const Page = () => {
  const { id } = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  let product;
  if (id === "1") {
    product = {
      themeColor: "text-pink-600",
      bgColor: "bg-pink-50",
      buttonColor: "bg-pink-500 hover:bg-pink-600",
      toptitle: '🌸 Pipe Cleaner Flower Everyone Is Making Right Now',
      subtitle: 'Trending DIY Craft Kit On Pinterest — Simple & Creative',
      Trust: 'Perfect For Kids, Beginners & Creative Home Decor',
      guide: '👇 Scroll Down To See Why This Is Going Viral',
      title: 'Pipe Cleaner Flower Kit',
      description: '500Pcs Soft Chenille Rods for DIY Craft Handmade Flowers. Create beautiful, everlasting floral decor in minutes!',
      image: '/pin1.png',
      arrowImg: '/arrow.png',
      price: 'USD 29.52',
      pricekyneechy: 'Affordable DIY Craft Loved On Pinterest',
      buylink: 'https://s.click.aliexpress.com/e/_c3quTinH',
      beginnerfreindly: 'Beginner friendly. No signup required',
      Heading: '🌸 What You Will Love About This Set',
      Text1: `If you like to make things with your hands, this is for you. It's the perfect electronics-free hobby for adults and kids alike. 500 pieces means endless creativity without worrying about running out!`,
      Handmade: '/handmade.png',
      Focused: '🌸 Keep scrolling — get your kit today!',
      Benefits: '🌼 Benefits That You Will Actually See',
      BeDescription: `• Crafting is Easy: Just twist and bend!\n• Stress-Free: A therapeutic way to unwind.\n• Budget Friendly: High-impact decor for a low price.`,
      Usage: '🌼 How Easy It Is To Use',
      Using: `Twist it and shape it—that is it. No complex directions. Every flower you make is unique and beautiful in its own way.`,
      pipecleaner: '/pipecleaner.png',
      Tip: '💡 Genuine Tip',
      Tipdes: 'Stop trying to make it "perfect." The charm is in the unique, handmade look!',
    };
 } else if (id === "2") {
  product = {
    // Original Eye-Catching Theme
    themeColor: "text-amber-800",
    bgColor: "bg-orange-50", 
    buttonColor: "bg-orange-600 hover:bg-orange-700 shadow-xl shadow-orange-200",
    
    // Header Section - Warm & Sun-Drenched
    toptitle: '☀️ Capture the Golden Hour: A Flawless Glow from Every Angle',
    subtitle: 'Infuse your skin with that sun-kissed citrus energy—no missed spots.',
    Trust: 'Crafted for the independent soul who loves a warm, radiant finish.',
    guide: '👇 Scroll to see how this simple ritual brings the sunset to your skin',
    
    // Main Product Details
    title: 'The "Sun-Drenched" Back Applicator',
    description: 'Wrap yourself in the warmth of a perfect tan. This velvety-soft orange-hued helper glides across your back like honey, ensuring your favorite oil blends into a seamless, vibrant glow.',
    image: '/pin2.png',
    arrowImg: '/arrow.png', 
    price: 'USD 7.36',
    pricekyneechy: 'A small price for a boost of pure, golden confidence.',
    buylink: 'https://s.click.aliexpress.com/e/_c3t43uMP',
    beginnerfreindly: 'Supple, gentle, and made to last through every sun-filled summer.',
    
    // Detailed Content Section - The "Heart" of the Glow
    Heading: '🍊 The Bright Freedom of a Solo Glow',
    Text1: `We’ve all felt that frustration—trying to reach the center of our back and ending up with a "tanning fail." We believe your self-care ritual should be as bright and energizing as a summer morning. 

This applicator was born to give you that citrus-bright confidence. The material is a soft, premium flocking that feels like a warm embrace. It doesn't just apply product; it pampers your skin, leaving a golden, radiant finish that looks like you just spent a long afternoon basking in the Mediterranean sun. It’s about more than just a tan; it’s about feeling vibrant, solo, and completely in control of your glow.`,
    
    Handmade: '/pin2.png', 
    Focused: '🍊 Don’t let a missed spot dim your light. Own the glow today.',
    
    Benefits: '✨ Why You’ll Love This Golden Ritual',
    BeDescription: `• Solo Tanning Independence: Reach every inch with vibrant ease.
• Velvet-Soft Touch: A luxurious texture that pampers your skin.
• Travel-Ready Energy: Lightweight, portable, and ready for the beach.
• Versatile Sun-Care: Perfect for tanning oils, rich lotions, or a soothing massage.`,
    
    Usage: '🧖 Your 2-Minute Golden Ritual',
    Using: `It's as refreshing as a splash of cold water. Apply a few drops of your favorite oil to the center of the strap. Take the handles, reach back, and use a rhythmic "sawing" motion. In just two minutes, you’re perfectly blended, sun-kissed, and ready to shine.`,
    
    pipecleader: '/pin2.png', 
    Tip: '💡 A Bright Pro-Tip',
    Tipdes: 'For a truly luminous tan, exfoliate with a citrus scrub the night before. It wakes up your skin and lets your new golden glow sink in deeper for a longer-lasting, more vibrant finish!',
  };
}
  if (!product) return <div className="text-center mt-20">Product not found.</div>;

  return (
    <main className={`overflow-x-hidden ${product.bgColor}`} style={{ scrollBehavior: 'smooth' }}>
      {/* Header */}
      <motion.div className="w-full md:h-[15vh] h-[25vh] flex justify-center items-end" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl text-white [text-shadow:_-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000] text-center px-4 font-bold">
          {product.toptitle}
        </h1>
      </motion.div>

      <div className="flex flex-col items-center">
        <h2 className={`text-2xl ${product.themeColor} border-2 border-black/10 rounded-lg p-2 text-center mt-5 mx-4 bg-white/50`}>
          {product.subtitle}
        </h2>
        <p className="text-xl text-gray-600 text-center mt-2 px-4 italic">{product.Trust}</p>
      </div>

      {/* Guide & Arrow */}
      <motion.div className="w-full flex flex-col items-center mt-10">
        <h1 className="text-2xl text-white font-bold bg-black rounded-lg p-3 text-center mx-4">
          {product.guide}
        </h1>
        {product.arrowImg && (
          <Image src={product.arrowImg} height={80} width={80} alt="Arrow" className="mt-2" />
        )}
      </motion.div>

      {/* Main Product Section */}
      <div className="md:min-h-[80vh] w-full flex flex-col md:flex-row items-center justify-center p-5 gap-10">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="md:w-1/2 flex justify-center">
          {product.image && (
            <Image src={product.image} height={400} width={400} alt={product.title} className="object-cover rounded-3xl shadow-2xl border-4 border-white" priority />
          )}
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className={`text-3xl font-bold ${product.themeColor}`}>{product.title}</h1>
          <p className="md:w-[30vw] text-center md:text-left text-gray-700 mt-5 text-lg leading-relaxed">{product.description}</p>
          <h3 className="text-3xl font-black mt-4 text-black">{product.price}</h3>
          
          <div className="mt-8 flex flex-col items-center md:items-start w-full">
            <a href={product.buylink} target="_blank" rel="noopener noreferrer" className={`${product.buttonColor} text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg transition-all transform hover:scale-105`}>
              Get Yours Now
            </a>
            <p className="text-sm mt-4 text-gray-500 font-medium">{product.beginnerfreindly}</p>
          </div>
        </motion.div>
      </div>

      {/* Detail Section */}
      <section className="p-5 md:p-20 bg-white/40 rounded-t-[50px] mt-20 shadow-inner">
        <h2 className={`text-4xl font-bold text-center mb-12 ${product.themeColor}`}>{product.Heading}</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
          <div className="md:w-1/2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <p className="whitespace-pre-line text-lg leading-relaxed text-gray-800">{product.Text1}</p>
          </div>
          <div className="md:w-1/2">
            {product.Handmade && <Image src={product.Handmade} width={550} height={400} alt="Detail" className="rounded-3xl shadow-2xl" />}
          </div>
        </div>
        
        {/* Benefits Box */}
        <div className="mt-24 max-w-4xl mx-auto">
           <h2 className={`text-3xl font-bold text-center mb-8 ${product.themeColor}`}>{product.Benefits}</h2>
           <div className={`border-2 border-dashed border-black/20 rounded-3xl p-8 bg-white/60`}>
              <p className="whitespace-pre-line text-xl leading-loose text-gray-700 font-medium">{product.BeDescription}</p>
           </div>
        </div>

        {/* Tip Box */}
        <div className="mt-20 p-8 bg-black text-white rounded-3xl max-w-2xl mx-auto text-center shadow-2xl">
           <h3 className="text-2xl font-bold mb-4">{product.Tip}</h3>
           <p className="text-lg opacity-90">{product.Tipdes}</p>
        </div>
      </section>
    </main>
  );
};

export default Page;