import React from "react";
import {
  Image,
  Button,
  Table,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { addProductAction } from "../../behaviors/actions/product";
import { useDispatch } from "react-redux";
import TemplateProductType from "./TemplateProductType";
import TemplateListBrand from "./TemplateListBrand";

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
    name: [],
    value: [],
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
    } else if (name == "warranty") {
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
        details.value,
        info.listImageFile,
        info.name,
        info.price,
        info.productType,
        info.quantity,
        info.warranty,
        info.originalPrice
      )
    );
  };

  const getImage = (event) => {
    var reader = new FileReader();
    // var listImgTemp = info.listImageFile
    // listImgTemp.push(event.target.files[0])
    // setInfo({
    //   ...info,
    //   listImageFile: listImgTemp
    // })
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
                <div>
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
                onChange={(getBasicInfor, changeTemplate)}
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
                  ></TemplateProductType>
                )}
                {template === "HARDDRIVE" && (
                  <TemplateProductType
                    TemplateItems={HARDDRIVEtemplate}
                  ></TemplateProductType>
                )}
                {template === "MAINBOARD" && (
                  <TemplateProductType
                    TemplateItems={MAINBOARDtemplate}
                  ></TemplateProductType>
                )}
                {template === "PSU" && (
                  <TemplateProductType
                    TemplateItems={PSUtemplate}
                  ></TemplateProductType>
                )}
                {template === "VGA" && (
                  <TemplateProductType
                    TemplateItems={VGAtemplate}
                  ></TemplateProductType>
                )}
                {template === "CASE" && (
                  <TemplateProductType
                    TemplateItems={CASEtemplate}
                  ></TemplateProductType>
                )}
                {template === "MONITOR" && (
                  <TemplateProductType
                    TemplateItems={MONITORtemplate}
                  ></TemplateProductType>
                )}
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
