import { EnvelopeOpenIcon, PhoneIcon } from "@heroicons/react/24/outline"

export const TopHeader = () => {
  return (
    <header className="w-full bg-slate-600 text-slate-50 hidden md:flex justify-end py-2 px-2 align-center">
        <PhoneIcon className="w-4 mx-2"/>
        <p>(321) 123-4567</p>
        <EnvelopeOpenIcon className="w-4 mx-2"/>
        <p>example@email.com</p>
    </header>
  )
}
