import React from "react";
import Select from "../Select";

function MethodSelectorComponent() {

  const methods = {
    get: 'GET',
    put: 'PUT',
    delete:'DELETE'
  }


  return <div><Select value="GET" options={Object.entries(methods)}/></div>;
}

export default MethodSelectorComponent;
