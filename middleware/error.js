/**

 * @param {{ status?: number, error: Error, type?: string }} err נתוני השגיאה
 * @param {import("express").Request} req נתוני הבקשה
 * @param {import("express").Response} res נתוני התגובה
 * @param {import("express").NextFunction} next פונקציה למעבר למידלוואר הבא
 */
export const errorHandler = (err, req, res, next) => {
    const { status = 500, type = 'server error' } = err;
    const errorClient = {
        type: err.type,
        message: err.error.message,
        stack: err.error.stack,
      
    };

    res.status(err.status).json({ error: error4Client });
};