import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function TopScroll() {
  const { pathname } = useLocation() //use location hook

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return <div />

}
