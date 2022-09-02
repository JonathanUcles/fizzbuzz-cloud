import type {HttpFunction} from '@google-cloud/functions-framework'
export const simulateWorkflow:HttpFunction = (req, res) =>{ 
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    let v = req.query.v || '';
    let value:number = parseInt(v as string)

    if(value == undefined || value < 0 || isNaN(value) || value > 10000){
        res.status(400).json({result:'', num:value ,errorMSG:`Please enter a valid number you input was ${v}`})
    }
  
    const getFizz = async (val:number) => {
        const resp = await fetch(`/fizz?v=${val}`)
        const body = await resp.json()
        return body;
        
    }
    
    const body =  getFizz(value)
    const getBuzz = async(fizzBody:any) =>{
        const resp = await fetch(`/buzz`, {
            method: 'POST',
            body: JSON.stringify(fizzBody),
            headers: { 'Content-Type': 'application/json' }

        })
        const BuzzBody = await resp.json()
        return BuzzBody;

    }
    const BuzzBody = getBuzz;

    
    // fizzbuzz results 
  
     res.status(200).json({BuzzBody})

  

}
