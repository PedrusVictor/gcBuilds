import { useState,useEffect } from "react"
import { uri } from "../../uri"
import Select from "react-select"
import { contentsT ,pets} from "../utils"
import { useNavigate } from "react-router-dom"
export function FormContent(props){
    const navigate=useNavigate()
    const [personagens, setPersonagens]=useState(props.Pers)
    const [name,setName]=useState("")
    const [contentId,setContentId]=useState("")

    const [time,setTime]=useState([])
    const [pet,setPet]=useState()

  /*  const contentOpt=[
        {value:"wb-1",label:"wb-1"},
        {value:"wb-2",label:"wb-2"},
        {value:"wb-3",label:"wb-3"},
        {value:"wb-4",label:"wb-4"},
        {value:"vulc-KTest-1",label:"vulc-KTest-1"},
        {value:"vulc-KTest-2",label:"vulc-KTest-2"},
        {value:"vulc-KTest-3",label:"vulc-KTest-3"},
        {value:"vulc-subj",label:"vulc-subj"},
        {value:"atChefesLuta",label:"atChefesLuta"},
        {value:"fenda-1",label:"fenda-1"},
        {value:"fenda-2",label:"fenda_2"},
        {value:"fenda-3",label:"fenda-3"},
    ]*/
    const contentOpt=contentsT.map((c)=>({value:c,label:c}))
    const customFilterOption = (option, searchText) => {
        const optionName = option.label.props.children[1].props.children; // obtém o nome da pessoa
        return optionName.toLowerCase().includes(searchText.toLowerCase());
      };

    const [pers,setPers]=useState([])
    const PetsOp=pets.map((e,index)=>({value:index,label:<><img src={e.avatar} key={index} className="iconOpt"/><div>{e.name}</div></>}))
    useEffect(()=>{
        async function fetchPers(){
            
            //const data=await(await fetch("http://localhost:3000")).json()
           
            const data =personagens==null?personagens:await(await fetch(uri)).json()
            setPersonagens(data)
            
            const p=data.map((Per)=>({value:Per._id,label:<><img key={Per.name} src={Per.avatar} title={Per.name} className="iconOpt" /><div>{Per.name}</div></>}))
            
            setPers(p)
            
        }
        //setpersonagem(props.pers)
        
        fetchPers()
       
    },[])
    function salvar(name,time,tConteudo,pet){

        //console.log(tConteudo)
        const build={name:name,time:time.map((c)=>c.value),pet:pet,content_id:tConteudo,rate:0}
        fetch(`${uri}/contents/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(build)
            })
        .then(response => response.json())
        .then(data=>{navigate("/contents")})
        .catch(error => console.error(error));
        //const Time=[...contentB[tConteudo],build]
       // setContentB({...contentB,[tConteudo]:Time})
       

    }
    function Submit(){
    
        salvar(name,time,contentId,pet)
        setName("")
        setTime([])
        setContentId("")
        setPet()
    }
    return(
        <div style={{display:"contents"}}>
        <h1>Cadastro Time Conteúdos</h1>
        
        <div className="build column">
   
            <div className="form-group">
                <label htmlFor="buildName">Nome Time:</label>
                <input id="buildName" type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)} placeholder="Nome do time"/>
            </div>  


            <div className="form-group">
                <label htmlFor="time">Tipo de Conteúdo:</label>
                <Select options={contentOpt} onChange={(e)=>setContentId(e.value)}/>
               
                
            </div>
            
            <div className="form-group">
                <label htmlFor="time">Time Recomendado:</label>
                {/**<input type="text" id="timeR"  className="form-control" onChange={e=>setTimeR(e.target.value)}/> */}
                {pers?  <Select
               
               options={pers}
               onChange={(selectTime)=>{if(time.length<4){setTime(selectTime)}}}
              isMulti
              
              className="basic-multi-select" 
              classNamePrefix="select"
             value={time}
             filterOption={customFilterOption}
    />:"" }
                
            </div>
            <div className="form-group">
                <label>Pet</label>
                {PetsOp?<Select options={PetsOp} onChange={(e)=>setPet(e.value)}/>:""}
            </div>


            </div>

        <div >
        <button  className="btn btn-primary rounded-pill" onClick={()=>Submit()}>Adicionar</button>
        </div>
       

        </div>
    )

}