class ApiResponse{
    constructor(statusCode,data,message='Success'){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400
    }

    // information code ===100-199
    // successfull code ===200-299
    // Redirection Code===300-399
    // Client error==400-499
    // server error=500-599

}