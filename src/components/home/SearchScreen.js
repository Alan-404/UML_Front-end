import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProductsAction } from '../../behaviors/actions/product'
import ProductBox from "./ProductBox";
import {bootstrapMode2} from "../../common/constants";
const SearchScreen = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()

  const searchProductsReducer = useSelector(state => state.searchProductsReducer)
  const {products} = searchProductsReducer

  useEffect(() => {
    const search = searchParams.get('search')
    if (search){
      dispatch(searchProductsAction(search,0))  
    }
  }, [])

  return (
    <div className='p-3'>
      <h3>Kết quả tìm kiếm cho: {searchParams.get('search')}</h3>
      <div className='d-flex'>
        {products && products.map((product, index) => (
          <ProductBox key={product.id} product={product} bootstrapMode={bootstrapMode2}/>
        ))}
      </div>
    </div>
  )
}

export default SearchScreen