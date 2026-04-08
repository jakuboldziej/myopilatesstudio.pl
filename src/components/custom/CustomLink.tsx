import type { ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  to: string;
  className?: string;
}

function CustomLink({ children, to, className, ...props }: CustomLinkProps) {
  return (
    <Link
      className={cn(
        "py-2 px-3 flex items-center justify-center rounded-md bg-accent text-primary-foreground hover:bg-accent/90 w-fit transition-colors",
        className
      )}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

export default CustomLink