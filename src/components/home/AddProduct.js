import React from "react";
import { Image, Button, Table, Form , InputGroup, FormControl} from "react-bootstrap";
import { useEffect, useState } from "react";
import { addProductAction } from "../../behaviors/actions/product";
import { useDispatch } from "react-redux";

const product = {
  name: "Intel Core i5 12400",
  originalPrice: 4699000,
  price: 4999000,
  productState: "ON",
  productType: "CPU",
  discount: 0,
  quantity: 20,
  warranty: "3 Years",
  brand: "Intel",
  
  description: "",
  imageUrls: ["image/product/101/product_image_0.jpg"],
};
function AddProduct() {
  const dispatch = useDispatch()
  const [info, setInfo] = useState({
    imgShow:
      "https://cdn4.iconfinder.com/data/icons/refresh_cl/256/System/Box_Empty.png",
    imgArr: [],
    listImageFile: [],
    numDetails: 0,

    
    name: '',
    price: 0,
    originalPrice: 0,
    productType: '',
    quantity: 0,
    quantity: 0,
    warranty: '',
    description: '',
    discount: 0
  });


  const [details, setDetails] = useState({
    name: [],
    value: []
  })

  const getInforDetails = (event, index) => {
    const name = event.target.name
    const value = event.target.value

    if (name === "nameDetail"){
      let tempArr = details.name
      tempArr[index] = value
      setDetails({
        ...details,
        name: tempArr
      })
    }
    else if (name === "valueDetail"){
      let tempArr = details.value
      tempArr[index] = value
      setDetails({
        ...details,
        value: tempArr
      })
    }
  }

  const getBasicInfor = (event) => {
    const name = event.target.name
    const value = event.target.value
    if (name === "name"){
      setInfo({
        ...info,
        name: value
      })
    }
    else if (name === "productType"){
      setInfo({
        ...info,
        productType: value
      })
    }
    else if (name === "brand"){
      setInfo({
        ...info,
        brand: value
      })
    }
    else if (name === "price"){
      setInfo({
        ...info,
        price: value
      })
    }
    else if (name === "originalPrice"){
      setInfo({
        ...info,
        originalPrice: value
      })
    }
    else if (name == "warranty"){
      setInfo({
        ...info,
        warranty: value
      })
    }
    else if (name === "description"){
      setInfo({
        ...info,
        description: value
      })
    }
    else if (name === "quantity"){
      setInfo({
        ...info,
        quantity: value
      })
    }
    else if (name === "discount"){
      setInfo({
        ...info,
        discount: value
      })
    }
  }


  const convertArr = (num) => {
    var arr = []
    for (var i = 0; i<num; i++){
      arr.push(i)
    }

    return arr
  }

  const increaseNumDetails = () => {
    setInfo({
      ...info,
      numDetails: info.numDetails + 1
    })
  }

  const submitAddProduct = () => {
    /* var moreDetails = []
    for (var i =0; i<details.name.length; i++){
      var key = details.name[i]
      var value = details.value[i]
      var obj = {}
      obj[key] = value
      moreDetails.push(obj)
    }
    console.log(moreDetails) */
    dispatch(addProductAction(info.brand, info.description, info.discount, details.value, info.listImageFile, info.name, info.price, info.productType, info.quantity, info.warranty, info.originalPrice))
  }


  const getImage = (event) => {
    var reader = new FileReader();
    var listImgTemp = info.listImageFile
    listImgTemp.push(event.target.files[0])
    setInfo({
      ...info,
      listImageFile: listImgTemp
    })
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      var temp = info.imgArr
      temp.push(reader.result)
      setInfo({
        ...info,
        imgArr: temp
      });
    };
  };
  return (
    <div className="container">
      <div>
          <div className="d-flex">
            <div>
              <Image
                style={{
                  width: "20rem",
                  height: "20rem",
                  borderRadius: "25px",
                }}
                src={info.imgShow}
              />
              <Form.Group controlId="formFile" className="mb-3 mt-3">
                <Form.Control
                  onChange={(e) => getImage(e)}
                  type="file"
                  accept="*.jpg.png"
                />
              </Form.Group>
            </div>
            <div className="mx-4">
              <h1>Trang Thêm Sản Phẩm</h1>
              <br />
              <div className="d-flex">
                {info.imgArr.map((item, index) => (<div><Image style={{width: '100px', height: '100px'}} src={item}/>&#160;&#160;&#160;&#160;</div>))}
              </div>
            </div>
          </div>
          <div
            className="row bg-light p-4 mt-3"
            style={{ borderRadius: "30px" }}
          >
            <h2>Detail Informations</h2>
            <div className="row mt-3">
              <div className="col">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  onChange={getBasicInfor}
                />
              </div>
              <div className="col">
                <label className="form-label">Brand</label>
                <select name="brand" id="Brand" className="form-control" onChange={getBasicInfor}>
                  <option selected>...</option>
                  <option value="Adata">Adata</option>
                  <option value="AMD">AMD</option>
                  <option value="Arsock">Arsock</option>
                  <option value="Intel">Intel</option>
                  <option value="Nvidia">Nvidia</option>
                  <option value="Asus">Asus</option>
                  <option value="Dell">Dell</option>
                  <option value="Gigabyte">Gigabyte</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Western">Western</option>
                  <option value="Gskill">Gskill</option>
                  <option value="Corsair">Corsair</option>
                  <option value="NZXT">NZXT</option>
                  <option value="CorlorFul">CorlorFul</option>
                </select>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <label className="form-label">Price</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    name="price"
                    onChange={getBasicInfor}
                  />
                  <span className="input-group-text">VND</span>
                </div>
              </div>
              <div className="col">
                <label className="form-label">Original Price</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Original Price"
                    name="originalPrice"
                    onChange={getBasicInfor}
                  />
                  <span className="input-group-text">VND</span>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label className="form-label">Product type</label>
                <select name="productType" id="Product_type" className="form-control" onChange={getBasicInfor}>
                  <option selected>...</option>
                  <option value="Processor/ CPU">Processor/ CPU</option>
                  <option value="Ram">Ram</option>
                  <option value="Graphisc Cards">Graphisc Cards</option>
                  <option value="Hard Drive/ SSDs">Hard Drive/ SSDs</option>
                  <option value="Power Supplies">Power Supplies</option>
                  <option value="PC Case">PC Case</option>
                  <option value="Memory">Memory</option>
                  <option value="Monitor">Monitor</option>
                  <option value="MotherBoards">MotherBoards</option>
                </select>
              </div>
              <div className="col">
                <label className="form-label">Warranty</label>
                <select name="warranty" id="Warranty" className="form-control" onChange={getBasicInfor}>
                  <option selected>...</option>
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                  <option value="2 years">2 years</option>
                  <option value="3 years">3 years</option>
                  <option value="5 years">5 years</option>
                </select>
              </div>
              <div className="col ">
                <label className="form-label">Discount</label>
                <input
                  type="Number"
                  className="form-control"
                  placeholder="0"
                  name="discount"
                  onChange={getBasicInfor}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col ">
                <label className="form-label">Quantity</label>
                <input
                  type="Number"
                  className="form-control"
                  placeholder="0"
                  name="quantity"
                  onChange={getBasicInfor}
                />
              </div>
              
              <div className="col mt-2">
                <div className="input-group">
                  <span className="input-group-text">Decription</span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    name="description"
                    onChange={getBasicInfor}
                  ></textarea>
                </div>
              </div>
              <div className="mt-4">
                <h4>More Details</h4>
                <div className="d-flex flex-column">
                  {convertArr(info.numDetails).map(item => (
                    <div>
                      <InputGroup key={`name${item}`} className="mb-3">
                        <FormControl
                          placeholder="Tên Thông Tin"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name="nameDetail"
                          onChange={(e) => getInforDetails(e, item)}
                        />
                        <FormControl key={`value${item}`}
                          placeholder="Thông Tin"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name="valueDetail"
                          onChange={(e) => getInforDetails(e, item)}
                        />
                      </InputGroup>
                    </div>
                  ))}
                </div>
                <div className="d-flex flex-column">
                  <Button onClick={increaseNumDetails}>+</Button>
                  <Button onClick={submitAddProduct} className="mt-5">Thêm Sản Phẩm</Button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default AddProduct;
