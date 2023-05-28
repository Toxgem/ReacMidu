

const useState = React.useState
const $app = document.getElementById("app")


const Avatar = props => {
    const [enabled, setEnabled] = useState(true);

    const src = `https://randomuser.me/api/portraits/women/${props.id}.jpg`
    let  pictureClassName=""
    if(props.size ==="smll"){
        pictureClassName="is-small"
    }else if(props.size==="large"){
        pictureClassName ="large"
    }
    
    
    
    const imgClassName = enabled ? "" : "disabled";
    return (
    <picture className={pictureClassName}>

        <img onClick={() => setEnabled(!enabled)} className={`${imgClassName} ${pictureClassName}`} src={src} />
        <span><strong>{props.name} </strong></span>
    </picture>)
}


function Contador(){
    const [contadorValue, actualizarContador] = useState(33);
    const [numeroDeVeces, actualizarVeces] = useState(0);

    return (
      <div>
        <span>{contadorValue}</span>
        <button
          onClick={() => {
            actualizarContador(contadorValue + 1);
            actualizarVeces(numeroDeVeces + 1);
          }}
        >
          Incrementar +
        </button>
        <button
          onClick={() => {
            actualizarContador(contadorValue - 1);
            actualizarVeces(numeroDeVeces + 1);
          }}
        >
          Decrementar -{" "}
        </button>
        <p>Veces utilizado {numeroDeVeces}</p>
      </div>
    );
  }
ReactDOM.render(
    <div>
        <Contador />
        <Avatar id={5} name="Andrea" size="smll" />
        <Avatar id={28} name="Jes" />
        <Avatar id={48} name="Jesss" size= "large" />
        

    </div>,
    $app
)
/* const avatar= params=>{
    const src =`https://randomuser.me/api/portraits/women/${params.id}.jpg`
    return`<picture>
        <img src="${src} "/>
        ${params.name}
    </picture>
    `
    
}
app.innerHTML+= avatar({id:28 ,name:"Andrea"})
app.innerHTML+= avatar({id:5 ,name:"Andre"})
app.querySelectorAll("img").forEach(img =>{
    img.addEventListener("click",()=>{
        img.classList.toggle("disabled")
    })
}) */