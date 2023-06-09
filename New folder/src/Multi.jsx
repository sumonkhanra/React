import react from 'react';
import Multiselect from 'multiselect-react-dropdown';

const Multi=()=>{
  
return(
<>
<h1>multiselect dropdown element  with checkboxes</h1>
<Multiselect
  displayValue="key"

 
  options={[
    {
      cat: 'value 1',
      key: 'value 1'
    },
    {
      cat: 'value 2',
      key: 'value 2'
    },
    {
      cat: 'value 3',
      key: 'value 3'
    }

  ]}
  selectedValues={[
    {
      cat: 'value 1',
      key: 'value 1'
    },
    {
      cat: 'value 2',
      key: 'value 2'
    }
  ]}
  showCheckbox
/>

</>
)

}
export default Multi;