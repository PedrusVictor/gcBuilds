import { useState,useEffect } from "react"

import './build.css'
import Select from "react-select"
import { SelectInput } from "../../components/selectInput/selectInput"
import { Selo } from "../../selo"
import { useNavigate } from 'react-router-dom';
import { uri } from "../../../uri"

import {encantamentos as en,subAtributos as sub,espLvl as esp,equipamentos as eqps,accessorios as ac,pets}  from "../../utils"
//import { Chaser } from "../../chaser"
export function Builds(props){
    const navigate = useNavigate();
    const [nomeBuild,setNomeBuild]=useState()
    const [personagens, setPersonagens]=useState(props.Pers)
    const [personagem,setpersonagem]=useState()
    const [selectedEquips, setSelectedEquips] = useState([]);
    const [Encantamentos,setEncantamentos]=useState(Array.from({length: 3}, () => ''));
    const [subAtributos,setsubAtributos]=useState(Array.from({length: 4}, () => ''));
    const [accs,setAccs]=useState(Array.from({length: 3}, () => ''));
    const [espLvl,setespLvl]=useState([])
    const [upSkills,setUpSkills]=useState([])
    const [chaser,setChaser]=useState([])
    
    const [selos,setSelos]=useState(Array(27).fill(0));
    const [pSelo,setPselo]=useState(0)
    const [timeR,setTimeR]=useState([])
    
    const [isT,setIsT]=useState(false)

    const [pet,setPet]=useState()


    
    const colorStyles={
        control:(styles)=>({...styles,backgroundColor:"white"}),
        option:(styles,{data,isDisable,isFocused,isSelected})=>{
            return{...styles,color:data.color}
        }
    }
    //equipamentos options
  
    const equips=[
        {value:0, label:'Força da Raiva',color:"blue"},
        {value:1, label:'Pesar da Paixão',color:"orange"},
        {value:2, label:'Energia da Sorte',color:"pink"},
        {value:3, label:'Promessa da Fúria',color:"green"},
        {value:4, label:'Vingança Sangrenta',color:"red"}
    ]



    const encOptionsA=en[2].map((e,index)=>({value:index,label:e.name}))
    const encOptionsV=en[1].map((e,index)=>({value:index,label:e.name}))
    const encOptionsC=en[0].map((e,index)=>({value:index,label:e.name}))
   
    const AnelOptions=ac[0].map((e,index)=>({value:index,label:<><img src={e.icon} key={index} className="iconOpt"/><div>{e.name}</div></>}))
    const ColarOptions=ac[1].map((e,index)=>({value:index,label:<><img src={e.icon} key={index} className="iconOpt"/><div>{e.name}</div></>}))
    const BrincoOption=ac[2].map((e,index)=>({value:index,label:<><img src={e.icon} key={index} className="iconOpt"/><div>{e.name}</div></>}))

    const EspLvlOp=esp.map((e,index)=>({value:index,label:<><img src={e.icon} key={index} className="iconOpt"/><div>{e.name}</div></>}))
    
    const subAtArma=sub[0].map((e,index)=>({value:index,label:e.name}))
    const subAtSArma=sub[1].map((e,index)=>({value:index,label:e.name}))
    const subAtCota=sub[2].map((e,index)=>({value:index,label:e.name}))
    const subAtSArmadura=sub[3].map((e,index)=>({value:index,label:e.name}))
    
    const PetsOp=pets.map((e,index)=>({value:index,label:<><img src={e.avatar} key={index} className="iconOpt"/><div>{e.name}</div></>}))
    
    


//const ChaserOpt=Chaser.map((c,index)=>({ value:index,label:(<img key={c.key} src={ c.icon} title={c.name} style={{height:"30px"}}/>)}))
const [pers,setPers]=useState([])
const customFilterOption = (option, searchText) => {
    const optionName = option.label.props.children[1].props.children; // obtém o nome da pessoa
    return optionName.toLowerCase().includes(searchText.toLowerCase());
  }; 
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

const [skillsOpt,setSkillsOpt]=useState([])
const AlterarSkillsOpt=(persId)=>{
    //const persSel=personagens[persId.value]
    const persSel=personagens.find((p)=>p._id==persId.value)
    setUpSkills([])
    setpersonagem(persSel)
    const newSkills=[
        {value:"active1",label:(<><img src={persSel.skills.active1[0].image} title="S1" style={{height:"30px"}}/> <div>S1</div></>) },
        {value:"active2",label:(<><img src={persSel.skills.active2[0].image} title="S2" style={{height:"30px"}}/><div>S2</div> </>)},
        {value:"passive",label:(<><img src={persSel.skills.passive[0].image} title="Passive" style={{height:"30px"}}/><div>Passive</div></>) }
    ]
   
    setIsT(persSel.name.includes('(t)'))
    
    setSkillsOpt(newSkills)

}

 
    const handleChange = (selectedOptions) => {
        if (selectedOptions.length <= 2) {
            setSelectedEquips(selectedOptions);
        }
    };

    //add build

    
   
    const handleSubmit = (e) => {
        console.log("entrou no add")
        e.preventDefault();
        
        if (nomeBuild && personagem && selectedEquips.length>0 && Encantamentos && accs && espLvl && upSkills && chaser && selos && timeR) {
            const buildC = {/*
                nomeB: nomeBuild,
                personagem:personagem,
                equip: selectedEquips.map(equip => equip.value).join(', '),
                enc: Encantamentos.map(enc=>enc).join(' , '),
                subAt:subAtributos.map(sub=>sub).join(' , '),
                accs : accs.map(acces=>acces).join(' , '),
                espLvl:espLvl.map(esp=>esp.value).join(' , '),
                upSkills: upSkills.map(skill=>skill.value),
                chaser:chaser,
                selo:selos,
                timeR:timeR.map((p)=> personagens[p.value]),*/
                nomeB: nomeBuild,
                personagem:personagem._id,
                equip: selectedEquips.map(equip => equip.value),
                enc: Encantamentos,
                subAt:subAtributos,
                accs : accs,
                espLvl:espLvl.map(esp=>esp.value),
                upSkills: upSkills.map(skill=>skill.value),
                chaser:chaser,
                selo:selos,
                timeR:timeR.map(t=>t.value),
                pet:pet,
                rate:0
            };
            
            
            /*fetch('http://localhost:3000/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(buildC)
            })*/

            const token=localStorage.getItem('session')? JSON.parse(localStorage.getItem('session')).token:""
            fetch(`${uri}/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token },
                body: JSON.stringify(buildC)
                })
        .then(response => response.status==401?localStorage.clear() :(response.json()))
        .then(data=>{navigate("/")})
        .catch(error => console.error(error));
        } else {
            // Adicione aqui sua lógica de validação
            confirm("existem campos não preenchidos")
        }
    };
    return(
        <div style={{display:"contents"}}>
        <h1>Builds</h1>
        
        <div className="build">

            
            <div className="form-group">
                <label htmlFor="personagem">Personagem:</label>
                {/**<input type="text" id="personagem"  className="form-control" value={props.pers.name}  onChange={e=>setpersonagem(e.target.value)} readOnly/> */}
                {pers?  <Select
               onChange={AlterarSkillsOpt}
               options={pers}
               filterOption={customFilterOption}
               
             
    />:"" }
            </div>
            <div className="form-group">
                <label htmlFor="buildName">Nome Build:</label>
                <input id="buildName" type="text" className="form-control" onChange={e=>setNomeBuild(e.target.value)} placeholder="Nome da build"/>
            </div>

            

            <div className="form-group">
                <label htmlFor="equipamentos">Equipamentos:</label>
                
                <Select
                styles={colorStyles}
                 options={equips }
                 onChange={handleChange}
                isMulti name="equips" 
                className="basic-multi-select" 
                classNamePrefix="select"
               value={selectedEquips}
                
                />
                
            </div>

            <div className="form-group">
                <label htmlFor="equipamentos">Sub atributos:</label>
                <Select options={subAtArma} onChange={e=>{const sub=[...subAtributos];sub[0]=e.value;setsubAtributos(sub)}} />
                <Select options={subAtSArma} onChange={e=>{const sub=[...subAtributos];sub[1]=e.value;setsubAtributos(sub)}}/>
                <Select options={subAtCota} onChange={e=>{const sub=[...subAtributos];sub[2]=e.value;setsubAtributos(sub)}}/>
                <Select options={subAtSArmadura} onChange={e=>{const sub=[...subAtributos];sub[3]=e.value;setsubAtributos(sub)}} />
            </div>

            <div className="form-group">
                <label htmlFor="encantamentos">Encantamentos:</label>
                {/* <input type="text" id="encantamentos"  className="form-control" onChange={e=>setEncantamentos(e.target.value)}/> */}
                <Select options={encOptionsC} onChange={(e)=>{const en=[...Encantamentos];en[0]=e.value;setEncantamentos(en)}}/>
                <Select options={encOptionsV} onChange={(e)=>{const en=[...Encantamentos];en[1]=e.value;setEncantamentos(en)}}/>
                
                <Select options={encOptionsA} onChange={(e)=>{const en=[...Encantamentos];en[2]=e.value;setEncantamentos(en)}}/>
            </div>

            <div className="form-group">
                <label htmlFor="acessorios">Acessórios:</label>
                {/* <input type="text" id="acessorios"  className="form-control" onChange={e=>setAccs(e.target.value)}/>*/ }
                <Select options={AnelOptions} onChange={(e)=>{const acces=[...accs];acces[0]=e.value;setAccs(acces)}}/>
                <Select options={ColarOptions} onChange={(e)=>{const acces=[...accs];acces[1]=e.value;setAccs(acces)}}/>
                <Select options={BrincoOption} onChange={(e)=>{const acces=[...accs];acces[2]=e.value;setAccs(acces)}}/>
                
            </div>

            <div className="form-group">
                <label htmlFor="esplvl">Especialização de lvl:</label>
                {/* <input type="text" id="esplvl"  className="form-control" onChange={e=>setespLvl(e.target.value)}/>  */}
                <Select
               
                 options={EspLvlOp }
                 onChange={(selectEsp)=>{if(selectEsp.length<=4){setespLvl(selectEsp)}}}
                isMulti
                className="basic-multi-select" 
                classNamePrefix="select"
               value={espLvl}
                
                />
                
            </div>


            {!isT? <div className="form-group">
                <label htmlFor="UpSkills">UpSkills:</label>
                {/** <input type="text"  className="form-control"  onChange={e=>setUpSkills(e.target.value)}/>*/}
                { personagem? <Select
               
                 options={skillsOpt}
                 onChange={(selectskills)=>{if(selectskills.length<=2){setUpSkills(selectskills)}}}
                isMulti
                className="basic-multi-select" 
                classNamePrefix="select"
               value={upSkills}
                
                />:"" }
                
            </div>:""}

           


            <div className="form-group">
                
                {/**<input type="text"  className="form-control" onChange={e=>setChaser(e.target.value)}/> */}
                 <SelectInput  setChaserValues={setChaser} maxValue={5} limitValues={25} filterOption={customFilterOption}/>
              
            </div>


            


            <div className="form-group">
                <label htmlFor="timeR">Time Recomendado:</label>
                {/**<input type="text" id="timeR"  className="form-control" onChange={e=>setTimeR(e.target.value)}/> */}
                {pers?  <Select
               
               options={pers}
               onChange={(selectTime)=>{if(timeR.length<4){setTimeR(selectTime)}}}
              isMulti
              
              className="basic-multi-select" 
              classNamePrefix="select"
             value={timeR}
             filterOption={customFilterOption}
    />:"" }
                
            </div>
            <div className="form-group">
            <label htmlFor="timeR">Pet:</label>
            {PetsOp?<Select options={PetsOp} onChange={(e)=>setPet(e.value)}/>:""}
            </div>
            
            <div className="form-group" style={{width:"100%"}}>
                <label htmlFor="selo">Selo: {pSelo} / 90</label>
                
                <Selo selo={selos} setSelo={setSelos} pontos={pSelo} setPontos={setPselo}/>
            </div>


            </div>

        <div    >
        <button onClick={handleSubmit} className="btn btn-primary rounded-pill">Adicionar</button>
        </div>
        

{/**
 * <div className="buildsList">
   
    {builds.map((b)=>

        <Item key={b.nomeB} name={b.nomeB} avatar={b.personagem.icon}/>
    )}
    
</div>
 */}




        </div>
        
    )
}