import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProductsAction } from '../../behaviors/actions/product'
import ProductBox from "./ProductBox";
import {bootstrapMode2} from "../../common/constants";
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchScreen = () => {
  const [searchValue, setSearch] = useState('')
  const [info, setInfo] = useState({
    reload: false
  })
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchProductsReducer = useSelector(state => state.searchProductsReducer)
  const {products} = searchProductsReducer

  useEffect(() => {

    const search = searchParams.get('search')
    if (search){
      dispatch(searchProductsAction(search,0))  
    }
    setSearch(search)
  }, [])

  const getSearchInfo = (event) => {
    setSearch(event.target.value)
  }

  const goSearchPage = () => {
    
    dispatch(searchProductsAction(searchValue,0))  
  }




  return (
    <div className='p-3'>
      <h3>Kết quả tìm kiếm cho: {searchParams.get('search')}</h3>
      <div className='d-flex'>
        <InputGroup className="mb-3 w-50">
          <InputGroup.Text id="basic-addon1">Tìm Kiếm</InputGroup.Text>
          <FormControl
            placeholder="Enter your search..."
            value={searchValue}
            onChange={getSearchInfo}
          />
        </InputGroup>
        &#160;&#160;&#160;&#160;  
        <Button onClick={goSearchPage}>Search</Button>
      </div>
      <div className='d-flex'>
        {products && products.map((product, index) => (
          <ProductBox key={product.id} product={product} bootstrapMode={bootstrapMode2}/>
        ))}
      </div>
    </div>
  )
}

export default SearchScreen