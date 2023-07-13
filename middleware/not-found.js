/* eslint-disable prettier/prettier */
const notFoundMiddleware =(req,res) =>
    res.status(404).send('Route do not exist')

export default notFoundMiddleware