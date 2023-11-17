import React, { useEffect, useState } from 'react'

const baseURL = 'https://fakestoreapi.com/products'

export default function FetchApi() {
  const [data, setData] = useState([])

  useEffect(() => {
    const res = fetch(baseURL)
    return
    console.log(res)
  }, [])
}

return data
