import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
function TemplateProductType({ TemplateItems }) {
  return (
    <div>
      {TemplateItems &&
        TemplateItems.map((TemplateItem, index) => (
          <div key={index}>
            <InputGroup className="mb-3" >
              <InputGroup.Text id="basic-addon1">{TemplateItem} </InputGroup.Text>
              <FormControl name={TemplateItem} type="text" placeholder="..."/>
            </InputGroup>
          </div>
        ))}
    </div>
  );
}

export default TemplateProductType;
