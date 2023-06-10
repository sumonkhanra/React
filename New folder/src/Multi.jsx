import react from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';
const Multi=()=>{
  const [option]= useState(['value 1','value 2','value 3'])
return(
<>
<h1>multiselect dropdown element  with checkboxes</h1>
<Multiselect
  
isObject={false}

  options={option}

  showCheckbox
  //disable

/>

</>
)

}
export default Multi;