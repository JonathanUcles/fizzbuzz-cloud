import type {HttpFunction} from '@google-cloud/functions-framework'
export const buzz:HttpFunction = (req, res) =>{ 
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    let getResult = req.body.result || '';
    let getNum:number = req.body.num;

    let results = ['Fizz','Buzz']
    let value:number = parseInt(getResult as string)

    if(value == undefined || value < 0 || isNaN(value) || value > 10000){
        res.status(400).json({result:'',errorMSG:`Please enter a valid number you input was ${getNum}`})
    }
    
    // fizzbuzz
    if(value % 5 == 0){
        res.status(200).json({result:`${getResult}${results[1]}`,errorMSG:''})

    } else{
        res.status(200).json({result:``,errorMSG:`You Entered ${getNum}`})

    }

}
