import Select from "react-select";
import { useState,useEffect } from "react";
import { Chaser } from "../../chaser";
export function SelectInput(props){
    const [selectedOptions, setSelectedOptions] = useState([]);
   // const [inputValues, setInputValues] = useState({});
    const [inputValues, setInputValues] = useState([]);
    const [pontos,setPontos]=useState(0)
    const ChaserOpt=Chaser.map((c,index)=>({ value:index,label:(<div style={{display:"flex"}}><img key={c.key} src={ c.icon} title={c.name} className="iconOpt"/><label>{c.name}</label></div>)}))
    //const [pontos,setPontos]=useState(0)
    const handleSelectChange = (selected) => {
        setSelectedOptions(selected);
        const nArray=selected.map(() => 0)
        setInputValues(nArray);
        setPontos(0)
       
        //const nArray=Array.from({length: selected.length}, () => 0);
       
      };
      const handleInputChange = (index) => (event) => {
        
        const nArray=[...inputValues]
        const pont=parseInt(event.target.value)<6? parseInt(event.target.value):5
        
        if(pontos+(pont-nArray[index])<props.limitValues+1){
          setPontos((pontos+(pont-nArray[index])))
          nArray[index]=pont
          setInputValues(nArray)
         /* let valor=""
          for(let a =0;a<selectedOptions.length;a++){
            valor+=`${selectedOptions[a].value} : ${nArray[a]}; `
          }*/
          //const valor=selectedOptions.map((op,index)=>({name:Chaser[op.value].name,icon:Chaser[op.value].icon,value:nArray[index]}))
          const valor=(selectedOptions.map((op,index)=>({id:op.value,value:nArray[index]})))
          
          props.setChaserValues(valor)
        }
        
        
      }

 

    return(
        <>
          <label htmlFor="chaser">Chaser:{pontos} / {props.limitValues} </label>
    <Select
    
      isMulti
      options={ChaserOpt}
      value={selectedOptions}
      onChange={handleSelectChange}
      filterOption={props.filterOption}
    />
    <div className="chaserContentOpt">
      { selectedOptions.map((option, index) => (

      <div key={index } style={{display:"flex",margin:"1%"}}>
        <img src={Chaser[option.value].icon} className="iconOpt"/>
        <input key={index}
          type="number"
          value={inputValues[index] || "0"}
          onChange={handleInputChange(index)}
          max={props.maxValue}
          min={0}
          required
        />
      </div>
))}
    </div>
     
    
  </>
    )
}