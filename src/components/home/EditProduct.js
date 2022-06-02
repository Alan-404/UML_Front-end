import React from "react";
import {
  Image,
  Button,
  Table,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import TemplateProductType from "./TemplateProductType";
import TemplateListBrand from "./TemplateListBrand";
import { storeDetailAction } from "../../behaviors/actions/constant";
import { useSearchParams } from "react-router-dom";
import { getProductByIdAction } from "../../behaviors/actions/product";
import {apiUrlImg} from '../../common/constants'
import { editProductAction } from "../../behaviors/actions/product";
function EditProduct() {
    const [searchParams] = useSearchParams()
   
  const {myDetails} = useSelector(state=> state.storeDetailReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductByIdAction(searchParams.get('id')))
    }, [dispatch])

    const getProductByIdReducer = useSelector(state => state.getProductByIdReducer)
    const {product} = getProductByIdReducer

    


    
  const [info, setInfo] = useState({
    imgShow:
      "https://cdn4.iconfinder.com/data/icons/refresh_cl/256/System/Box_Empty.png",
    imgArr: [],
    listImageFile: [],
    numDetails: 0,

    name: "",
    price: 0,
    originalPrice: 0,
    productType: "",
    quantity: 0,
    warranty: "",
    description: "",
    discount: 0,
    id: '',
    detailProductInfo: {},

    

    tempBrand: '',
    tempType: ''
    
  });
  useEffect(() => {
        
        if (product){
            
            var temp = []
            for (var i =0; i<product.imageUrls.length; i++){
                temp.push(`${apiUrlImg}/${product.imageUrls[i]}`)
            }
            setInfo({
                ...info,
                id: product.id,
                name: product.name,
                price: product.price,
                discount: product.discount,
                warranty: product.warranty,
                description: product.description,
                originalPrice: product.originalPrice,
                quantity: product.quantity,
                productType: product.productType,
                brand: product.brand,
                imgArr: temp,
                //
                tempBrand: product.brand,
                tempType: product.productType
            })
            
            

            setTemplate(product.productType)
        }
        
    }, [product])




  const [details, setDetails] = useState({
    infoArr: []
  });



  const getInforDetails = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "nameDetail") {
      let tempArr = details.name;
      tempArr[index] = value;
      setDetails({
        ...details,
        name: tempArr,
      });
    } else if (name === "valueDetail") {
      let tempArr = details.value;
      tempArr[index] = value;
      setDetails({
        ...details,
        value: tempArr,
      });
    }
  };

  const getBasicInfor = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "name") {
      setInfo({
        ...info,
        name: value,
      });
    } else if (name === "productType") {
        if (info.tempType !== value){
            setInfo({
                ...info,
                brand: '...'
            })
        }
      setInfo({
        ...info,
        productType: value,
      });
    } else if (name === "brand") {
      setInfo({
        ...info,
        brand: value,
      });
    } else if (name === "price") {
      setInfo({
        ...info,
        price: value,
      });
    } else if (name === "originalPrice") {
      setInfo({
        ...info,
        originalPrice: value,
      });
    } else if (name === "warranty") {
      setInfo({
        ...info,
        warranty: value,
      });
    } else if (name === "description") {
      setInfo({
        ...info,
        description: value,
      });
    } else if (name === "quantity") {
      setInfo({
        ...info,
        quantity: value,
      });
    } else if (name === "discount") {
      setInfo({
        ...info,
        discount: value,
      });
    }
  };


  const changeTemplate = (event) => {
    setTemplate(event.target.value);
    dispatch(storeDetailAction([]))
  };
  const [template, setTemplate] = useState(0);

  const CPUtemplate = [
    "Total Cores",
    "Total Threads",
    "Socket",
    "Base Frequency",
    "Max Memory Size",
    "Total Cache",
    "TDP",
    "Memory Type",
    "Max Turbo Frequency",
    "Overclock",
  ];
  const RAMtemplate = [
    "Type",
    "Bus Speed",
    "Cas Latency",
    "Overclock",
    "Capacity",
    "Voltage",
  ];
  const HARDDRIVEtemplate = ["Type", "Capacity", "Read Speed", "Write Speed"];
  const MAINBOARDtemplate = [
    "Chipset",
    "Socket",
    "Number Of Ram Slot",
    "Memory Type",
    "Max MemorySize",
    "Number Of VGA Slot",
    "Size",
  ];
  const CASEtemplate = ["Type","Color", "Size",  "Front I/O Input"];
  const VGAtemplate = [
    "Number Of Core",
    "Processor Frequency",
    "Memory",
    "Connector",
    "Size",
  ];
  const MONITORtemplate = ["Size","Resolution","Panel","Refresh rate","Interface"];
  const PSUtemplate = [
    "Input Voltage",
    "Output Capacity",
    "Efficiency",
    "Connector",
    "Protection Info",
  ];

  const CPUListBrands = ["INTEL", "AMD"];
  const RAMListBrands = ["GSKILL", "SAMSUNG", "ADATA"];
  const PSUListBrands = [
    "SEASONIC",
    "COOLER MASTER",
    "EVGA",
    "MSI",
    "GIGABYTE",
  ];
  const MAINBOARDListBrands = ["ASUS", "GIGABYTE", "MSI", "ASROCK"];
  const MONITORListBrands = ["DELL", "MSI", "VIEWSONIC", "LG", "SAMSUNG"];
  const CASEListBrands = ["NZXT", "XIGMATEK", "DEEPCOOL", "ANTEC"];
  const VGAListBrands = [
    "NVIDIA",
    "AMD",
    "ASUS",
    "ASROCK",
    "GIGABYTE",
    "COLORFUL",
    "INNO3D",
    "EVGA",
  ];
  const HARDDRIVEListBrands = ["SAMSUNG", "INTEL", "PLEXTOR", "KINGSTON", "WD"];
  const increaseNumDetails = () => {
    setInfo({
      ...info,
      numDetails: info.numDetails + 1,
    });
  };


  const submitEditProduct = () => {
    dispatch(editProductAction(info.brand, info.description, info.discount, info.id, myDetails, info.listImageFile, info.name, info.price, info.productType, info.quantity, info.warranty, info.originalPrice))
  };

  const getImage = (event) => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      
      var temp = info.imgArr;
      temp.push(reader.result);
      var tempImage = info.listImageFile;
      tempImage.push(event.target.files[0]);
      setInfo({
        ...info,
        imgArr: temp,
        listImageFile: tempImage,
      });
    };
  };

  const submitChangProductTypeOption = (e) => {
    getBasicInfor(e)
    changeTemplate(e)
  }


  const convertToArray = (obj) => {
    var arr = []
    for (var i =0; i< Object.keys(obj).length; i++){
        arr.push(Object.values(obj)[i])
    }
    return arr
  }

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
              
              src={info.imgArr[0]}
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
            <h1>Add New Product</h1>
            <br />
            <div className="d-flex">
              {info.imgArr.map((item, index) => (
                <div>
                  <Image
                  key={index}
                    style={{ width: "100px", height: "100px" }}
                    src={item}
                  />
                  &#160;&#160;&#160;&#160;
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row bg-light p-4 mt-3" style={{ borderRadius: "30px" }}>
          <h2>Detail Informations</h2>
          <div className="row mt-3">
            <div className="col">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={info.name}
                onChange={getBasicInfor}
              />
            </div>
            <div className="col">
              <label className="form-label">Brand</label>
              <select
                
                name="brand"
                id="Brand"
                className="form-control"
                defaultValue={info.brand}
                onChange={getBasicInfor}
              >
                <option value={info.brand}>{info.brand}</option>
                {template === "CPU" && (
                  <TemplateListBrand
                    ListBrands={CPUListBrands}
                  ></TemplateListBrand>
                )}
                {template === "PSU" && (
                  <TemplateListBrand
                    ListBrands={PSUListBrands}
                    
                  ></TemplateListBrand>
                )}
                {template === "MONITOR" && (
                  <TemplateListBrand
                    ListBrands={MONITORListBrands}
                   
                  ></TemplateListBrand>
                )}
                {template === "RAM" && (
                  <TemplateListBrand
                    ListBrands={RAMListBrands}
                   
                  ></TemplateListBrand>
                )}
                {template === "VGA" && (
                  <TemplateListBrand
                    ListBrands={VGAListBrands}
                  ></TemplateListBrand>
                )}
                {template === "CASE" && (
                  <TemplateListBrand
                    ListBrands={CASEListBrands}
                  ></TemplateListBrand>
                )}
                {template === "MAINBOARD" && (
                  <TemplateListBrand
                    ListBrands={MAINBOARDListBrands}
                  ></TemplateListBrand>
                )}
                {template === "HARDDRIVE" && (
                  <TemplateListBrand
                    ListBrands={HARDDRIVEListBrands}
                  ></TemplateListBrand>
                )}
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
                  value={info.price}
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
                  value={info.originalPrice}
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
              <select
              disabled={true}
                name="productType"
                id="Product_type"
                className="form-control"
                onChange={submitChangProductTypeOption}
                defaultValue={info.productType}
              >
                <option value={info.productType}>{info.productType}</option>
                <option value="CPU">Processor/ CPU</option>
                <option value="RAM">Ram</option>
                <option value="VGA">Graphisc Cards</option>
                <option value="HARDDRIVE">Hard Drive/ SSDs</option>
                <option value="PSU">Power Supplies</option>
                <option value="CASE">PC Case</option>
                <option value="MONITOR">Monitor</option>
                <option value="MAINBOARD">MotherBoards</option>
              </select>
            </div>
            <div className="col">
              <label className="form-label">Warranty</label>
              <select
                name="warranty"
                id="Warranty"
                className="form-control"
                onChange={getBasicInfor}
                defaultValue={info.warranty}
              >
                <option value={info.warranty}>{info.warranty}</option>
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
                value={info.discount}
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
                value={info.quantity}
                type="Number"
                className="form-control"
                placeholder="0"
                name="quantity"
                onChange={getBasicInfor}
              />
            </div>

            <div className="col mt-2">
              <div className="input-group">
                <span className="input-group-text">Description</span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  name="description"
                  value={info.description}
                  onChange={getBasicInfor}
                ></textarea>
              </div>
            </div>
            <div className="mt-4">
              <h4>More Details</h4>
              {product && (
                <div className="d-flex flex-column">
                {template === "CPU" && (
                  <TemplateProductType
                    TemplateItems={CPUtemplate}
                    details={convertToArray(product.detailProductInfo)}
                    OnChange={getInforDetails}
                  ></TemplateProductType>
                )}
                {template === "RAM" && (
                  <TemplateProductType
                    TemplateItems={RAMtemplate}
                    details={convertToArray(product.detailProductInfo)}
                  ></TemplateProductType>
                )}
                {template === "HARDDRIVE" && (
                  <TemplateProductType
                    TemplateItems={HARDDRIVEtemplate}
                    details={convertToArray(product.detailProductInfo)}
                  ></TemplateProductType>
                )}
                {template === "MAINBOARD" && (
                  <TemplateProductType
                    TemplateItems={MAINBOARDtemplate}
                    details={convertToArray(product.detailProductInfo)}
                  ></TemplateProductType>
                )}
                {template === "PSU" && (
                  <TemplateProductType
                    TemplateItems={PSUtemplate}
                    details={convertToArray(product.detailProductInfo)}
                  ></TemplateProductType>
                )}
                {template === "VGA" && (
                  <TemplateProductType
                    TemplateItems={VGAtemplate}
                    details={convertToArray(product.detailProductInfo)}
                  ></TemplateProductType>
                )}
                {template === "CASE" && (
                  <TemplateProductType
                    TemplateItems={CASEtemplate}
                    details={convertToArray(product.detailProductInfo)} 
                  ></TemplateProductType>
                )}
                {template === "MONITOR" && (
                  <TemplateProductType
                    TemplateItems={MONITORtemplate}
                    details={convertToArray(product.detailProductInfo)}
                  ></TemplateProductType>
                )}
              </div>
              )}
              <div className="d-flex flex-column">
                <Button onClick={submitEditProduct} className="mt-5">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
