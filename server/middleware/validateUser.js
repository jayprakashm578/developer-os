export function validateUser(req, res, next) {

    const {name, email} = req.body;

    if(!name || !email){
        return res.status(400).json({
            error: "name and email are required"
        })
    }

      if(typeof name !== "string"){
        return res.status(400).json({
            error: "name must be a string"
        })
    }

      if(typeof email !== "string"){
        return res.status(400).json({
            error: "email must be a string"
        })
    }

    next();
}