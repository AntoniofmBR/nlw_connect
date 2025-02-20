import { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className='px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300 flex justify-between items-center'
      children={ children }
      { ...props }
    />
  )
}