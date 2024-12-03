'use client';

import { GlowingButton } from "@/components/glowing-button"

export default function Page() {
  return (
    <div 
      className="min-h-screen bg-black relative overflow-hidden" 
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v.2%204.marts%20(1080%20x%201920%20px)%20(2)-U55ruQLKc3bIF4wHIReQbmHWTNIyKc.png')",
          opacity: 0.4
        }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      
      <div className="relative min-h-screen">
        <div className="container mx-auto px-4 pt-8 flex flex-col items-center text-center gap-6 max-w-[800px]">
          {/* Location */}
          <div className="text-[#89ffd0] text-xl font-medium tracking-wider mb-2 mt-12">
            RĪGA, ATTA CENTRE
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h2 className="text-white text-4xl font-bold">
              KARSTĀKAIS PASĀKUMS
            </h2>
            <div className="text-[#89ffd0] text-3xl font-bold">
              UZŅĒMĒJIEM 2025
            </div>
          </div>

          {/* Button */}
          <GlowingButton />
        </div>
      </div>
    </div>
  )
}
