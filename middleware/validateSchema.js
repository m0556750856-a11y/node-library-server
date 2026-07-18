const validateSchema = (schema) => {
    return (req, res, next) => {
        // בודקים את ה-body של הבקשה לפי ה-Schema שהעברנו
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            // אם יש שגיאות, אנחנו אוספים את כולן ומחזירים מערך
            const errorMessages = error.details.map(detail => detail.message);
            return res.status(400).json({ errors: errorMessages });
        }

        // אם הכל תקין, ממשיכים לפונקציה הבאה בשרשרת
        next();
    };
};

module.exports = validateSchema;