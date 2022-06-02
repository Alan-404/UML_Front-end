import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeDetailAction } from "../../behaviors/actions/constant";

function TemplateProductType({ TemplateItems, details}) {
  const dispatch = useDispatch()




  const [info, setInfo] = useState({
    arrInfo: Array(TemplateItems.length).fill("")
  })

  const getInfo = (event, index) => {
    var temp = info.arrInfo
    temp[index] = event.target.value
    setInfo({
      ...info,
      arrInfo: temp
    })
    dispatch(storeDetailAction(info.arrInfo))
  }


  useEffect(() => {
    if (details){
      setInfo({
        ...info,
        arrInfo: details
      })
      dispatch(storeDetailAction(details))
    }
    else{
      dispatch(storeDetailAction(info.arrInfo))
    }
  }, [])

  
 
  return (
    <div>
    {TemplateItems &&
      TemplateItems.map((TemplateItem, index) => (
        <div key={index}>
          <InputGroup className="mb-3" >
            <InputGroup.Text id="basic-addon1">{TemplateItem} </InputGroup.Text>
            {(details) ? (<FormControl key={index} onChange={((e) => getInfo(e, index)/* ,setDetails(info) */)} value={info.arrInfo[index]} name={TemplateItem} type="text" placeholder="..."/>) : (<FormControl key={index} onChange={((e) => getInfo(e, index)/* ,setDetails(info) */)} name={TemplateItem} type="text" placeholder="..."/>)}
          </InputGroup>
        </div>
      ))}
    </div>
  );
}

export default TemplateProductType;
