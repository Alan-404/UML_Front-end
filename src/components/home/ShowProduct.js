import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getProductByIdAction } from '../../behaviors/actions/product'
import { Image, Button, Table } from 'react-bootstrap'
import { apiUrlImg } from "../../common/constants";
const ShowProduct = () => {

    const [info, setInfo] = useState({
        firstImage: '',
        productInfo: [],
        productValue: []
    })

    const [searchParams] = useSearchParams()

    const getProductByIdReducer = useSelector(state => state.getProductByIdReducer)
    const {product,success} = getProductByIdReducer

    const dispatch = useDispatch()

    const makeArrayInfo = (number) => {
        var arr = []
        for (var i =0; i<number; i++){
            arr.push(i)
        }
        return arr
    }

    useEffect(() => {
        const id = searchParams.get('id')
        if (id){
            dispatch(getProductByIdAction(id))
        }
    }, [dispatch])

    return (
        <div className='container'>
            {product && (
                <div>
                    <div className='d-flex'>
                        <Image style={{width: '20rem', height: '20rem', borderRadius: '25px'}} src={`${apiUrlImg}/${product.imageUrls[0]}`}/>
                        &#160;&#160;&#160;
                        <div>
                            <h1>{product.name}</h1>
                            <h3 className='text-primary p-4'>{product.price.toLocaleString()} VND</h3>
                            <Button>Chọn mua</Button>
                        </div>
                    </div>
                    <div className='bg-light p-4 mt-3' style={{borderRadius: '30px'}}>
                        <h3>Detail Informations</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Thông tin</th>
                                    <th>Thông số</th>
                                </tr>
                            </thead>
                            <tbody>
                                {makeArrayInfo(Object.keys(product.detailProductInfo).length).map((item) => (
                                    <tr key={item}>
                                        <td>{Object.keys(product.detailProductInfo)[item]}</td>
                                        <td>{Object.values(product.detailProductInfo)[item]}</td>
                                    </tr>
                                ))}
                            </tbody>
                            
                        </Table>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowProduct