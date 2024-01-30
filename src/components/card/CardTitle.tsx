import { HTMLAttributes, HTMLProps, PropsWithChildren } from 'react';

interface CardTitleProps extends PropsWithChildren, HTMLAttributes<HTMLElement>{
}

export default async function CardTitle({children, className, ...rest}:CardTitleProps){

  return(
      <>
      <h2 className={"card-title " + className} {...rest}>{children}</h2>
      </>
  )
}