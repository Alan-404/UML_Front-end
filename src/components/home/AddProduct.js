import React from "react";
import { Image, Button, Table, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
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
  const [info, setInfo] = useState({
    imgShow:
      "https://cdn4.iconfinder.com/data/icons/refresh_cl/256/System/Box_Empty.png",
  });
  const getImage = (event) => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      setInfo({
        ...info,
        imgShow: reader.result,
      });
    };
  };
  return (
    <div className="container">
      {product && (
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
            <div>
              <h1>{product.name}</h1>
              <h3 className="text-primary p-4">
                {product.price.toLocaleString()} VND
              </h3>
              <Button>Save</Button>
              <br />
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
                  aria-label=""
                />
              </div>
              <div className="col">
                <label className="form-label">Brand</label>
                <select id="Brand" className="form-control">
                  <option selected>...</option>
                  <option>Adata</option>
                  <option>AMD</option>
                  <option>Arsock</option>
                  <option>Intel</option>
                  <option>Nvidia</option>
                  <option>Asus</option>
                  <option>Dell</option>
                  <option>Gigabyte</option>
                  <option>Samsung</option>
                  <option>Western</option>
                  <option>Gskill</option>
                  <option>Corsair</option>
                  <option>NZXT</option>
                  <option>CorlorFul</option>
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
                    aria-label=""
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
                    aria-label=""
                  />
                  <span className="input-group-text">VND</span>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label className="form-label">Product type</label>
                <select id="Product_type" className="form-control">
                  <option selected>...</option>
                  <option>Processor/ CPU</option>
                  <option>Ram</option>
                  <option>Graphisc Cards</option>
                  <option>Hard Drive/ SSDs</option>
                  <option>Power Supplies</option>
                  <option>PC Case</option>
                  <option>Memory</option>
                  <option>Monitor</option>
                  <option>MotherBoards</option>
                </select>
              </div>
              <div className="col">
                <label className="form-label">Warranty</label>
                <select id="Warranty" className="form-control">
                  <option selected>...</option>
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>1 year</option>
                  <option>2 years</option>
                  <option>3 years</option>
                  <option>5 years</option>
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col ">
                <label className="form-label">Quantity</label>
                <input
                  type="Number"
                  className="form-control"
                  placeholder="0"
                  aria-label=""
                />
              </div>
              <div className="col mt-2">
                <div className="input-group">
                  <span className="input-group-text">More Details</span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;
