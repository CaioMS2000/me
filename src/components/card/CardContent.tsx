import { HTMLProps, PropsWithChildren } from 'react';

interface CardContentProps extends PropsWithChildren, HTMLProps<HTMLElement>{
}

export default async function CardContent({children, className, ...rest}:CardContentProps){

  return(
      <>
      <div className={" " + className}>{children}</div>
      </>
  )
}