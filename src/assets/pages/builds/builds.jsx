import { useState,useEffect } from "react"
import { Item } from "../../components/item/item"
import './build.css'
import Select from "react-select"
import { SelectInput } from "../../components/selectInput/selectInput"
import { Selo } from "../../selo"
import { useNavigate } from 'react-router-dom';
//import { Chaser } from "../../chaser"
export function Builds(props){
    const navigate = useNavigate();
    const [nomeBuild,setNomeBuild]=useState()
    const [personagens, setPersonagens]=useState([])
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
    


    const colorStyles={
        control:(styles)=>({...styles,backgroundColor:"white"}),
        option:(styles,{data,isDisable,isFocused,isSelected})=>{
            return{...styles,color:data.color}
        }
    }
    //equipamentos options
  
    const equips=[
        {value:"Força da Raiva", label:'Força da Raiva',color:"blue"},
        {value:"Pesar da Paixão", label:'Pesar da Paixão',color:"orange"},
        {value:"Energia da Sorte", label:'Energia da Sorte',color:"pink"},
        {value:"Promessa da Fúria", label:'Promessa da Fúria',color:"green"},
        {value:"Vingança Sangrenta", label:'Vingança Sangrenta',color:"red"}
    ]

    const encOptionsA=[
        {value:"Aum dano hab",label:"Aum dano hab"},
        {value:"Red dano rec hab",label:"Red dano rec hab"},
        {value:"Red dano rec atk",label:"Red dano rec atk"},
        {value:"Aum dano atk bas",label:"Aum dano atk bas"},
    ];
    const encOptionsV=[
        {value:"critico",label:"critico"},
        {value:"cdr",label:"cdr"},
        {value:"vel. ataque",label:"vel. ataque"},
        {value:"cdr especial",label:"cdr especial"},
    ];
    const encOptionsC=[
        {value:"Ataque",label:"Ataque"},
        {value:"Def Fis",label:"Def Fis"},
        {value:"Def Mag",label:"Def Mag"},
        {value:"Vitalidade",label:"Vitalidade"},
    ]
    

    const AnelOptions=[
        
        {value:"cdr especial",label:"cdr especial"},
        {value:"critico",label:"critico"},
        {value:"vel atk",label:"vel atk"},
        {value:"red dano rec atk bas",label:"red dano rec atk bas"}

    ]
    const ColarOptions=[
        {value:"red dano hab",label:"red dano hab"},
        {value:"cdr",label:"cdr"},
        {value:"crit",label:"crit"},
        {value:"cdr especial",label:"cdr especial"}
    ]
    const BrincoOption=[
        {value:"cdr",label:"cdr"},
        {value:"vel atk",label:"vel atk"},
        {value:"red dano atk bas",label:"red dano atk bas"},
        {value:"red dano hab",label:"red dano hab"},

    ];
    const EspLvlOp=[
        {value:"critico",label:"critico" },
        {value:"cdr",label:"cdr" },
        {value:"vel atk",label:"vel atk"},
        {value:"red dano atk bas",label:"red dano atk bas"},
        {value:"red dano hab",label:"red dano hab"},
        {value:"aum dano atk bas",label:"aum dano atk bas"},
        {value:"aum dano hab",label:"aum dano hab"},
        {value:"aum dano ao ign def",label:"aum dano ao ign def"},
        {value:"aumentar cura",label:"aumentar cura"}
    ]

 

    const subAtArma=["chance de ignorar defesa","aumentar duração de debuffs em inimigos", "redução de duração de debuffs", "chance de defender crítico"].map(at=>({value:at,label:at}))
    const subAtSArma=["aumentar dano em pvp", "redução de dano recebido em pvp", "aumentar dano causada à chefes"].map(at=>({value:at,label:at}))
    const subAtCota=["chance de crítico","chance de defender crítico","aumenta a cura recebida"].map(at=>({value:at,label:at}))
    const subAtSArmadura=["aumentar dano crítico causado", "redução de dano crítico recebido", "aumentar a cura recebida"].map(at=>({value:at,label:at}))

    


//const ChaserOpt=Chaser.map((c,index)=>({ value:index,label:(<img key={c.key} src={ c.icon} title={c.name} style={{height:"30px"}}/>)}))
const [pers,setPers]=useState([])   
useEffect(()=>{
    async function fetchPers(){
        
        const data=await(await fetch("http://localhost:3000")).json()
        setPersonagens(data)
        const p=data.map((Per,index)=>({value:index,label:<><img key={Per.name} src={Per.avatar} title={Per.name} className="iconOpt" /><div>{Per.name}</div></>}))
        
        setPers(p)
        
    }
    //setpersonagem(props.pers)
    fetchPers()
   
},[])
const [skillsOpt,setSkillsOpt]=useState([])
const AlterarSkillsOpt=(persId)=>{
    const persSel=personagens[persId.value]
    setUpSkills([])
    setpersonagem(persSel)
    const newSkills=[
        {value:"active1",label:(<><img src={persSel.skills.active1[0].image} title="S1" style={{height:"30px"}}/> <div>S1</div></>) },
        {value:"active2",label:(<><img src={persSel.skills.active2[0].image} title="S2" style={{height:"30px"}}/><div>S2</div> </>)},
        {value:"passive",label:(<><img src={persSel.skills.passive[0].image} title="Passive" style={{height:"30px"}}/><div>Passive</div></>) }
    ]
   
    
    setSkillsOpt(newSkills)

}

 
    const handleChange = (selectedOptions) => {
        if (selectedOptions.length <= 2) {
            setSelectedEquips(selectedOptions);
        }
    };

    //add build
/*
    const Reset=()=>{
        setNomeBuild("");
        setpersonagem();
        setSelectedEquips([]);
        setEncantamentos(Array.from({length: 3}, () => ''));
        setsubAtributos(Array.from({length: 4}, () => ''));
        setAccs(Array.from({length: 3}, () => ''));
        setespLvl([]);
        setUpSkills([]);
        setChaser([])
        setSelos([])
        setPselo(0)
        setTimeR([])

    }
*/
    const [builds,setBuilds]=useState([])
   
    const handleSubmit = (e) => {
        console.log("entrou no add")
        e.preventDefault();
        
        if (nomeBuild && personagem && selectedEquips.length>0 && Encantamentos && accs && espLvl && upSkills && chaser && selos && timeR) {
            const buildC = {
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
                timeR:timeR.map((p)=> personagens[p.value]),
            };
            
            setBuilds(prevBuilds => [...prevBuilds, buildC]);
            fetch('http://localhost:3000/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(buildC)
            })
        .then(response => response.json())
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
               
             
    />:"" }
            </div>
            <div className="form-group">
                <label htmlFor="buildName">Nome Build:</label>
                <input id="buildName" type="text" className="form-control" onChange={e=>setNomeBuild(e.target.value)}/>
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


            <div className="form-group">
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
                
            </div>


            <div className="form-group">
                
                {/**<input type="text"  className="form-control" onChange={e=>setChaser(e.target.value)}/> */}
                 <SelectInput  setChaserValues={setChaser} maxValue={5} limitValues={25} />
              
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
    />:"" }
                
            </div>
            
            <div className="form-group" style={{width:"100%"}}>
                <label htmlFor="selo">Selo: {pSelo} / 90</label>
                
                <Selo selo={selos} setSelo={setSelos} pontos={pSelo} setPontos={setPselo}/>
            </div>


            </div>

        <div    >
        <button onClick={handleSubmit} className="btn btn-primary rounded-pill">Adicionar</button>
        </div>
        



<div className="buildsList">
   
    {builds.map((b)=>

        <Item key={b.nomeB} name={b.nomeB} avatar={b.personagem.icon}/>
    )}
    
</div>


        </div>
        
    )
}