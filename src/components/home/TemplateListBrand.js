import React from "react";
import { useEffect } from "react";
import { storeBrandAction } from "../../behaviors/actions/constant";
import { useDispatch } from "react-redux";
function TemplateListBrand({ ListBrands }) {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(ListBrands)
  }, [])

  return (
    ListBrands &&
    (
      
      ListBrands.map((ListBrand, index) => (
        <option value={ListBrand} key={index}>
          {ListBrand}
        </option>
      ))
    )
  );
}

export default TemplateListBrand;
