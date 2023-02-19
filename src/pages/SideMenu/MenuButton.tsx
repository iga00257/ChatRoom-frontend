import { type InputHTMLAttributes, type PropsWithChildren } from 'react'

function MenuButton ({ children, className = '' }: PropsWithChildren<InputHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={`flex items-center gap-2 rounded p-2 opacity-90 outline-none transition-all hover:bg-zinc-200 hover:opacity-100 ${className} `}
    >
      {children}
    </button>
  )
}

export default MenuButton
