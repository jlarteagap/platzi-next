import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'

export const getServerSideProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList: data,
    },
  }
}
const HomePage = ({ productList }: { productList: TProduct[] }) => {
  useEffect(() => {}, [])
  return (
    <div>
      <div>Platzi and Next.jss!</div>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
