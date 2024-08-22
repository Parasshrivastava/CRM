class ApiError extends Error{
    constructor(
        statusCode,
        message="something Went Wrong",
        errors=[],
        statck=""
    )
    {
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.suucess=false
        this.errors=errors
        if(stack)
        {
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}