/* eslint-disable prettier/prettier */
import { StatusCodes } from "http-status-codes/build/cjs/status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    const defaultError ={
        statusCode:StatusCodes.INTERNAL_SERVER_ERROR,
        msg:'Something went wrong,try again later',
    }
    res.status(defaultError.statusCode).json({ msg:err})

}

export default errorHandlerMiddleware
