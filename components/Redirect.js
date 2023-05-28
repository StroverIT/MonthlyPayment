'use client'

import { useEffect } from 'react'

import { useRouter } from 'next/navigation'
export default function Redirect({url}) {
  const router = useRouter()
  useEffect(() => {
    console.log(url);
    console.log(router);
  }, [])
  return null
}