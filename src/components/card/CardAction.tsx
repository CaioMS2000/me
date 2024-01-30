import { HTMLProps, PropsWithChildren } from 'react';

interface CardActionProps extends PropsWithChildren, HTMLProps<HTMLElement>{
}

export default async function CardAction({children, className, ...rest}:CardActionProps){

  return(
      <>
      {children}
      </>
  )
}