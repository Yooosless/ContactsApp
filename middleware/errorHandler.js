const {constants}=require("../constants")
const errorHandler=(err,req,res,next)=>{
    const statusCode= res.statusCode ? res.statusCode:500;
    switch (statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title:"validation failed", message : err.message, stackTree:err.stackTree});
            break;
        case constants.UNAUTHORIZED:
            res.json({title:"Unauthorized access", message : err.message, stackTree:err.stackTree});
            break;
        case constants.FORBIDDEN:
            res.json({title:"Forbidden", message : err.message, stackTree:err.stackTree});
            break;    
        case constants.NOT_FOUND:
            res.json({title:"Not found", message : err.message, stackTree:err.stackTree});
            break;
        case constants.SERVER_ERROR:
            res.json({title:"server error", message : err.message, stackTree:err.stackTree});
            break;
        default:
            console.log("hello world");
            break;
    }

    
    
}


module.exports=errorHandler