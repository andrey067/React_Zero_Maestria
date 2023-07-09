import { useState } from "react"



const RenderCondicional = () => {
    const [x] = useState(true);
    return (
        <>
            {/* classico */}
            <div>
                <h1>Isso será exibido ?</h1>
                {x && <p>Se x for TRUE, sim! </p>}
                {!x && <p>Se x for FALSE, sim! </p>}
            </div>

 
            {/* usando o JSX  if Ternario*/}
            <div>
                <h1>Isso será exibido Jsx ?</h1>                
                {x ? (<p>Se x for TRUE, sim! </p>) : (<p>Se x for FALSE, sim! </p>)}
            </div>
        </>
    )
}

export default RenderCondicional