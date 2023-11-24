import './App.css'
import "./index.css"
import  { useState } from 'react';
function App() {
    
      const [messages, setMessages] = useState(['Esto es para ti']);
    
      const [count, setCount] = useState(0);
      const imagenes = ["/assets/valestilo5.jpg", "/assets/valestilo4.jpg", "/assets/ValEstilo2.jpeg",
    "/assets/ValEstilo1.jpeg"];


      const mensajesParaVal= ["Probablemente ni tu ni yo esperabamos que esta tradicion durara tanto tiempo",
       "Durante las ultimas semanas me concentre en pensar, ¿Que puedo hacer?",
       "Asi que decidi hacer algo mientras aprendia, queria dedicarte parte de ese tiempo tambien",
      "Por lo que decidi incluirte en ese tiempo, para que sepas lo importante que eres para mi",
   ` He dedicado en las ultimas semanas al menos unos minutos del dia para tratar de hacerte algo bonito
   y creo que lo he logrado`,
   `Te lo he dicho durante semanas a lo largo de los ultimos años, y se dice poco, estoy muy orgulloso de ti
   siempre te apoyare y creo en tu progreso, hace un par de años te costaba mucho mas expresarte`,
  `Estamos muy lejos de llegar a la meta pero estoy convencido que poco a poco avanzaras, que todo este tiempo que hemos dedicado
  te hara crecer`,
`Parece mentira que ya pasaran 600 dias desde que comenze a poner un granito de arena todos los dias para recordarte
que eres querida y especial`,
`Todos los dias has sido especial para mi, aun en los dias cuando ni tu ni yo nos encontramos en el mejor momento`,
`No tienes la idea de la felicidad que me proporcionas y lo bien que me siento al saber que te has sentido mejor ultimamente
y que te sientes mas comoda recibiendo afecto`,
`No quiero que pierdas tampoco el sentido de la emocion por ser bañada en afecto dia tras otro pero me gusta reafirmarte cada dia
`,
`Desearia ser capaz de brindarte mas que esto pero te quiero decir de todo corazon que eres lo mejor que existe`,
`Gracias por estar conmigo durante todas estas noches, en altas y bajas`,
`En todas esas rachas perdidas, en todas esas risas`,
`En colocarle una sonrisa a mis dias, y ser aquel rayito de luz que anima a continuar`,
`Gracias por todos estos dias`,
`En todos los estilos`,
`Eres la persona que mas amo en el mundo`,
`Espero que podamos disfrutar de esto los suficientes años para verte superar tus traumas`,
`Mi mayor deseo es verte feliz y espero hacerte feliz cada dia un poco mas`,
`La unica cura que te puedo dar en este momento es alegrarte los dias`,
`Aqui un poco de mi val favorita a traves de los años`,
`Eres mi persona favorita en el mundo y te amo como no tienes idea`,
`Te dedicare atencion todos los dias por el resto de tu vida hasta que te sientas suficiente`,
`Y si no lo sientes pues lo seguire haciendo, porque siempre me tendras`,
`Por esto y mucho mas, Te amo.`,
`Feliz dia de val 600 
Eres el amor de mi vida y te dare el amor que siempre mereciste`,``
]
  const handleClick = () => {
    if (count < mensajesParaVal.length - 1) {
      setMessages([...messages, mensajesParaVal[count]]);
    } else if (count === mensajesParaVal.length - 1) {
       mostrarImagenes();
     
    }
    setCount(count + 1);
  };
      
  function mostrarImagenes() {
    const contenedor = document.getElementById("contenedor-imagenes");

    imagenes.forEach((ruta) => {
      const img = document.createElement("img");
      img.src = ruta;
      contenedor.appendChild(img);
    });
  }
      
    
return(
    <section>
 
 {messages.map((message, index) => (
        <div key={index}>
          
            <p className='chat-message chat-sent'>{message}</p>
          
          
          
        </div>
      ))}
      <div id="contenedor-imagenes" ></div>
      <button id='siguiente' onClick={handleClick} className='chat-message chat-sent puntito'>
        ...
      </button>
    </section>
    
)
}
 

    

 


export default App