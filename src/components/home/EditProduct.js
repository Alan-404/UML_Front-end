import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByIdAction } from '../../behaviors/actions/product'
import { InputGroup, FormControl, Form } from 'react-bootstrap'


const EditProduct = () => {
    const [showProduct, setProduct] = useState({
        id: '',
        name: '',
        productType: '',
        brand: '',
        price: 0,
        originalPrice: 0,
        discount: 0,
        warranty: '',
        description: '',
        quantity: 0,
        productState: false
    })
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()

    const getProductByIdReducer = useSelector(state => state.getProductByIdReducer)

    const {product} = getProductByIdReducer

    const getInfoProduct = (event) => {
        const name = event.target.name
        const value = event.target.value
        
    }

    useEffect(() => {
        dispatch(getProductByIdAction(searchParams.get('id')))
    }, [dispatch])

    useEffect(() => {
        if (product){
            setProduct({
                ...showProduct,
                name: product.name,
                productType: product.productType,
                brand: product.brand,
                price: product.price,
                originalPrice: product.originalPrice,
                discount: product.discount,
                warranty: product.warranty,
                quantity: product.quantity,
                productState: product.productState
            })
        }
    }, [product])
    return (
        <div className='p-3'>
            <h1 className='mb-4'>Chỉnh Sửa Thông Tin Sản Phẩm</h1>
            {(showProduct && product) && (
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Tên Sản Phẩm</InputGroup.Text>
                        <FormControl
                        placeholder="Enter name of product..."
                        value={showProduct.name}
                        name="name"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Loại Sản Phẩm</InputGroup.Text>
                        <Form.Select name="type" className='mb-3 w3-animate-right'>
                            <option>{showProduct.productType}</option>
                            <option value="LAPTOP">LAPTOP</option>
                            <option value="CPU">CPU</option>
                            <option value="MAINBOARD">MAINBOARD</option>
                            <option value="RAM">RAM</option>
                            <option value="HARDDRIVE">HARDDRIVE</option>
                            <option value="PSU">PSU</option>
                            <option value="VGA">VGA</option>
                            <option value="CASE">CASE</option>
                        </Form.Select>
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Thương Hiệu</InputGroup.Text>
                        <FormControl
                        placeholder="Enter name of product..."
                        value={showProduct.brand}
                        name="brand"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Tên Sản Phẩm</InputGroup.Text>
                        <FormControl
                        placeholder="Enter name of product..."
                        value={showProduct.name}
                        name="name"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Tên Sản Phẩm</InputGroup.Text>
                        <FormControl
                        placeholder="Enter name of product..."
                        value={showProduct.name}
                        name="name"
                        />
                    </InputGroup>
                </div>
            )}
        </div>
    )
}

export default EditProduct