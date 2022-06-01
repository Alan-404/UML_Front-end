import React from "react";

function TemplateListBrand({ ListBrands }) {
  return (
    ListBrands &&
    ListBrands.map((ListBrand, index) => (
      <option value="ListBrand" key={index}>
        {ListBrand}
      </option>
    ))
  );
}

export default TemplateListBrand;
