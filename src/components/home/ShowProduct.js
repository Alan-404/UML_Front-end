import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getProductByIdAction } from '../../behaviors/actions/product'
import { Image, Button, Table } from 'react-bootstrap'
import { apiUrlImg } from "../../common/constants";
import { addCartAction } from '../../behaviors/actions/cart'
import MySpinner from '../effects/MySpinner'
import swal from 'sweetalert'
const ShowProduct = () => {

    const [info, setInfo] = useState({
        showImage: '',
        productInfo: [],
        productValue: [],
        submit: false,
        statusBtn:'',
        textShow: 'Chọn Mua'
    })

    const addCartReducer = useSelector(state => state.addCartReducer)
    const {success} = addCartReducer

    const [searchParams] = useSearchParams()

    const getProductByIdReducer = useSelector(state => state.getProductByIdReducer)
    const {product} = getProductByIdReducer

    const dispatch = useDispatch()

    const makeArrayInfo = (number) => {
        var arr = []
        for (var i =0; i<number; i++){
            arr.push(i)
        }
        return arr
    }

    const changeImageShow = (index) => {
        setInfo({
            ...info,
            showImage: `${apiUrlImg}/${product.imageUrls[index]}` 
        })
    }

    useEffect(() => {
        const id = searchParams.get('id')
        if (id){
            dispatch(getProductByIdAction(id))
        }
    }, [dispatch])

    useEffect(() => {
        if (product){
            setInfo({
                ...info,
                showImage: `${apiUrlImg}/${product.imageUrls[0]}` 
            })
            if (product.quantity === 0){
                setInfo({
                    ...info,
                    statusBtn: "disabled"
                })
            }
        }
        
    }, [product])

    useEffect(() => {
        if (success && info.submit){
            swal({
                title: "Notification",
                icon: 'success',
                text: "Đã Thêm Sản Phẩm Vào Giỏ Hàng"
            })
        }
    }, [success])

    const submitAddCart = (id) => {
        setInfo({
            ...info,
            submit: true
        })
        dispatch(addCartAction(1, id))
    }

    return (
        <div className='container'>
            {product ? (
                <div>
                    <div className='d-flex'>
                        <Image style={{width: '20rem', height: '20rem', borderRadius: '25px'}} src={info.showImage}/>
                        &#160;&#160;&#160;
                        <div>
                            <h1>{product.name}</h1>
                            <h3 className='text-primary p-4'>{product.price.toLocaleString()} VND</h3>
                            {product.productState === "ON" ? (<Button onClick={() => submitAddCart(product.id)} className={`mb-4 ${info.statusBtn}`}>Chọn Mua</Button>) : (<h3 className='disabled text-secondary'>Sản phẩm đã ngừng kinh doanh</h3>)}
                            
                            <br />
                            {product.imageUrls.map((item, index) => (
                                <Image className='mx-2' onClick={() => changeImageShow(index)} style={{width: '5rem', height: '5rem'}} key={index} src={`${apiUrlImg}/${item}`} />
                                
                            ))}
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
            ) : (<MySpinner />)}
            
        </div>
    )
}

export default ShowProduct