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
import { addProductAction } from "../../behaviors/actions/product";
import TemplateProductType from "./TemplateProductType";
import TemplateListBrand from "./TemplateListBrand";
import { storeDetailAction } from "../../behaviors/actions/constant";
import {
  CPUtemplate,
  RAMtemplate,
  HARDDRIVEtemplate,
  MAINBOARDtemplate,
  CASEtemplate,
  VGAtemplate,
  MONITORtemplate,
  PSUtemplate,
  CPUListBrands,
  RAMListBrands,
  PSUListBrands,
  MAINBOARDListBrands,
  MONITORListBrands,
  CASEListBrands,
  VGAListBrands,
  HARDDRIVEListBrands,
} from "../../common/constants";

function AddProduct() {
  const { myDetails } = useSelector((state) => state.storeDetailReducer);
  const dispatch = useDispatch();
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
    quantity: 0,
    warranty: "",
    description: "",
    discount: 0,
  });

  const [details, setDetails] = useState({
    infoArr: [],
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
    console.log(details);
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
      console.log(value);
      setInfo({
        ...info,
        productType: value,
      });
    } else if (name === "brand") {
      console.log(value);
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

  const convertArr = (num) => {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(i);
    }

    return arr;
  };

  const changeTemplate = (event) => {
    setTemplate(event.target.value);
    dispatch(storeDetailAction([]));
  };
  const [template, setTemplate] = useState(0);

  const increaseNumDetails = () => {
    setInfo({
      ...info,
      numDetails: info.numDetails + 1,
    });
  };

  const testData = () => {
    console.log(myDetails);
  };

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
    dispatch(
      addProductAction(
        info.brand,
        info.description,
        info.discount,
        myDetails,
        info.listImageFile,
        info.name,
        info.price,
        info.productType,
        info.quantity,
        info.warranty,
        info.originalPrice
      )
    );
    console.log(info.brand);
  };

  const getImage = (event) => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    console.log(event.target.files[0]);

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
    getBasicInfor(e);
    changeTemplate(e);
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
            <h1>Add New Product</h1>
            <br />
            <div className="d-flex">
              {info.imgArr.map((item, index) => (
                <div key={index}>
                  <Image
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
                onChange={getBasicInfor}
              />
            </div>
            <div className="col">
              <label className="form-label">Brand</label>
              <select
                name="brand"
                id="Brand"
                className="form-control"
                defaultValue={""}
                onChange={getBasicInfor}
              >
                <option value="...">...</option>
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
              <select
                name="productType"
                id="Product_type"
                className="form-control"
                onChange={submitChangProductTypeOption}
                defaultValue={"..."}
              >
                <option value="...">...</option>
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
                defaultValue={"..."}
              >
                <option value="...">...</option>
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
                <span className="input-group-text">Description</span>
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
                {template === "CPU" && (
                  <TemplateProductType
                    TemplateItems={CPUtemplate}
                    OnChange={getInforDetails}
                  ></TemplateProductType>
                )}
                {template === "RAM" && (
                  <TemplateProductType
                    TemplateItems={RAMtemplate}
                    OnChange={getInforDetails}
                  ></TemplateProductType>
                )}
                {template === "HARDDRIVE" && (
                  <TemplateProductType
                    TemplateItems={HARDDRIVEtemplate}
                    OnChange={getInforDetails}
                  ></TemplateProductType>
                )}
                {template === "MAINBOARD" && (
                  <TemplateProductType
                    TemplateItems={MAINBOARDtemplate}
                    OnChange={getInforDetails}
                  ></TemplateProductType>
                )}
                {template === "PSU" && (
                  <TemplateProductType
                    TemplateItems={PSUtemplate}
                    OnChange={getInforDetails}
                  ></TemplateProductType>
                )}
                {template === "VGA" && (
                  <TemplateProductType
                    TemplateItems={VGAtemplate}
                    OnChange={getInforDetails}
                  ></TemplateProductType>
                )}
                {template === "CASE" && (
                  <TemplateProductType
                    TemplateItems={CASEtemplate}
                    OnChange={getInforDetails}
                  ></TemplateProductType>
                )}
                {template === "MONITOR" && (
                  <TemplateProductType
                    TemplateItems={MONITORtemplate}
                    OnChange={getInforDetails}
                  ></TemplateProductType>
                )}
                <Button onClick={testData}>Test</Button>
              </div>
              <div className="d-flex flex-column">
                <Button onClick={submitAddProduct} className="mt-5">
                  Thêm Sản Phẩm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
