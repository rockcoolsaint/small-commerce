import Layout from '@/components/Layout'
import { ProductsContext } from '@/components/ProductsContext';
import React, { useContext, useEffect, useState } from 'react'

const CheckoutPage = () => {
  const {selectedProducts} = useContext(ProductsContext);
  const [productsInfos, setProductsInfos] = useState([]);

  useEffect(() => {
    const uniqueIds = [...new Set(selectedProducts)];
    fetch('/api/products?ids='+uniqueIds.join(','))
    .then(response => response.json())
    .then(json => setProductsInfos(json));
  }, [selectedProducts])
  
  return (
    <Layout>
      {!productsInfos.length && (
        <div>no products in your shopping cart</div>
      )}
      {productsInfos.length && productsInfos.map(productInfo => (
        <div className='flex mb-5'>
          <div className='bg-gray-100 p-3 rounded-xl shrink-0'>
            <img className='w-24' src={productInfo.picture} alt="" />
          </div>
          <div className='pl-4'>
            <h3 className='font-bold text-lg'>{productInfo.name}</h3>
            <p className='text-sm leading-4 text-gray-500'>{productInfo.description}</p>
            <div className="flex mt-1">
              <div className="grow font-bold">${productInfo.price}</div>
              <div>
                <button onClick={() => lessOfThisProduct(productInfo._id)} className="border border-emerald-500 px-2 rounded-lg text-emerald-500">-</button>
                <span className="px-2">
                  {selectedProducts.filter(id => id === productInfo._id).length}
                </span>
                <button onClick={() => moreOfThisProduct(productInfo._id)} className="bg-emerald-500 px-2 rounded-lg text-white">+</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default CheckoutPage