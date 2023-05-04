import { wb,vulc,BossAssault,fenda,contentsT,pets} from "../utils"
import { useNavigate } from 'react-router-dom';
//import { FormContent } from "./formContent"
import { useState,useEffect } from "react"
import Select from "react-select"

import { Button } from "../components/Button"
import { uri } from "../../uri"
import { Time } from "../components/time/Time";
import { Authenticate } from "../auth/authenticate";
export function Contents(props){
    const navigate = useNavigate();
    const [conteudo,setConteudo]=useState()
    const contents={"wb":wb,"vulc":vulc,"bossA":BossAssault,"fenda":fenda}
    const ContentOpt=[
    {value:"wb",label:"World Boss"},
    {value:"vulc",label:"Vulcanus"},
    {value:"bossA",label:"Ataque aos Chefes"},
    {value:"fenda",label:"Fenda"}

]
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    
  
const [contentB,setContentB]=useState({})
    
    useEffect(()=>{
        async function LoadBuildsContents(){
            
            //const buildC=await(await fetch(`${uri}/contents`)).json()
            
            for (const c in contentsT) {
                const content = contentsT[c];
                try {
                  const data = await (await fetch(`${uri}/contents/${content}`)).json();
                  setContentB(prevState => ({...prevState, [content]: data}));
                } catch (error) {
                  console.error(`Erro ao buscar dados para ${content}: ${error}`);
                }
              }
           // console.log(await (await fetch(`${uri}/contents/wb-3`)).json())
            
            
            
        }
        const auth=Authenticate()
        setIsAuthenticated( auth)
        LoadBuildsContents()
    },[])
    const [showContent,setShowContent]=useState(false)
    const[showForm,setShowForm]=useState(false)
    /*
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
        const Time=[...contentB[tConteudo],build]

        

        setContentB({...contentB,[tConteudo]:Time})
        
       

    }*/
    function UpdateRate(id,valor){

        fetch(`${uri}/contents/update/${id}/${valor}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:id,valor:valor})
            })
        
        .then(response=>response.json())
        .then(data=>{navigate("/contents")})
        .catch(error => console.error(error));
        
    }
    return(
        < > 
        {/** <button className="btn btn-primary rounded-pill" onClick={()=>setShowForm(!showForm)}> {showForm?"Esconder Cadastro":"Mostrar Cadastro"}</button>
        {showForm?<FormContent Pers={props.Pers}  salvar={salvar}/>:""}
        */}
         <button className="btn btn-primary rounded-pill" onClick={()=>isAuthenticated? navigate("/contents/form"):navigate("/login")}> {isAuthenticated?"Cadastrar Conteúdo":"faça login para cadastrar conteúdo"}</button>
        <div >
            
            
            <div style={{display:"contents"}}>
        <button className="btn btn-primary rounded-pill" onClick={()=>{setConteudo("");setShowContent(!showContent)}}> {showContent?"Esconder Conteúdos":"Mostrar Conteúdos"}</button>
        {showContent? <div className="build column" >
        <Select options={ContentOpt} onChange={(e)=>setConteudo(contents[e.value])}/>
        {conteudo? conteudo.map((c,index)=>
            <div key={c.name}  className="form-group" style={{width:"100%"}} >
                
                 <label >{c.name}</label>
                 <img src={c.image} className="imgContent"/>
                 <label >Descrição:</label>
                 <div dangerouslySetInnerHTML={{ __html: c.description }}></div>
                 {index>0?<Button nomeComponente="Times"
                  componente={<div className="PersList">
                  {contentB[c.content_id]?contentB[c.content_id].map((cont,index)=>(
                     
                     <Time key={cont.name+" "+index} comp={cont} pers={props.Pers} update={UpdateRate} pet={pets[cont.pet]}/>

                  )):""}
                    
                  </div>}
                 />:""}
                 
                
                 

             </div>  
                
                ):""}
           



            </div>:
        
        ""}
       

       
       

        </div>
            
        </div>
        

        </>
    )
}