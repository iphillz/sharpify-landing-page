"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function GlowingButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block relative max-w-full px-10 py-2.5 mt-4 mb-4 text-base font-sans leading-5 text-black bg-transparent border-2 border-[#74ca8b] rounded-[10px] antialiased"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% -100%, #176344 24%, #89ffd0 55%)',
          boxShadow: 'inset 0 2px 20px rgba(25, 97, 56, 0.7), 0 0 40px rgba(93, 211, 144, 0.6)',
          WebkitTextSizeAdjust: '100%',
          WebkitFontSmoothing: 'antialiased',
          textRendering: 'optimizeLegibility',
        }}
      >
        <span className="text-2xl font-semibold text-black">PĒRC BIĻETI JAU TAGAD</span>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Reģistrācija</DialogTitle>
            <DialogDescription>
              Ievadiet savu informāciju, lai nodrošinātu vietu.
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Vārds</Label>
                <Input id="firstName" placeholder="Ievadiet savu vārdu" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Uzvārds</Label>
                <Input id="lastName" placeholder="Ievadiet savu uzvārdu" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-pasts</Label>
              <Input id="email" type="email" placeholder="Ievadiet savu e-pastu" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Tālruņa numurs</Label>
              <Input id="phone" type="tel" placeholder="Ievadiet savu tālruņa numuru" required />
            </div>
            <Button type="submit" className="w-full mt-2">Iesniegt reģistrāciju</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

