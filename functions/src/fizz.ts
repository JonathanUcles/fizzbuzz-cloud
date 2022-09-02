import type {HttpFunction} from '@google-cloud/functions-framework'
export const fizz:HttpFunction = (req, res) =>{ 
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    let v = req.query.v || '';
    let results = ['Fizz','Buzz']
    let value:number = parseInt(v as string)

    if(value == undefined || value < 0 || isNaN(value) || value > 10000){
        res.status(400).json({result:'', num:value ,errorMSG:`Please enter a valid number you input was ${v}`})
    }
    
    // fizzbuzz
    if(value % 3 == 0){
        res.status(200).json({result:results[1],num:value ,errorMSG:''})

    } else{
        res.status(200).json({result:``, num:value ,errorMSG:''})

    }

}
