"use client";
import { PropsWithChildren } from 'react';

type TargetType = "_self" | "_blank" | "_parent" | "_top";

interface RedirectorProps extends PropsWithChildren{
    link: string
    target?: TargetType
}

export default function Redirector({children, link, target}:RedirectorProps){

  return(
      <>
      <div className="p-0 m-0 border-0"
				onClick={() => {
          window.open(link, target || "_self")
				}}
			>
				{children}
			</div>
      </>
  )
}