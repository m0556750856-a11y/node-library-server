const users = [
    {
        id: 1,
        name: "ישראל ישראלי",
        email: "israel@example.com",
        borrowedBooks: [101] 
    }
];

export const postSignUpUser = (req, res, next) => {
    const { email, password, name } = req.body;

    // 1. בדיקה האם כל השדות הנדרשים קיימים
    if (!email || !password || !name) {
        const error = new Error('חסרים פרטים להרשמה');
        error.status = 400;
        error.type = 'bad request';
        return next(error);
    }

    // 2. בדיקה האם המשתמש כבר קיים במערכת
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        const error = new Error('המשתמש כבר קיים במערכת');
        error.status = 409; // Conflict
        error.type = 'conflict';
        return next(error);
    }

    // אם הכל תקין, מוסיפים את המשתמש
    const newUser = { email, password, name };
    users.push(newUser);
    
    res.status(201).json({ message: 'המשתמש נרשם בהצלחה', user: newUser });
}

export const postSignInUser = (req, res, next) => {
    const { email } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) {
        const error = new Error('משתמש לא נמצא');
        error.status = 404;
        error.type = 'not found';
        return next(error);
    }
    res.json(user);
}
export const getUser = (req, res, next) => {
    if (users.length === 0) {
        const error = new Error('לא נמצאו משתמשים');
        error.status = 404;
        error.type = 'not found';
        return next(error);
    }       
    res.json(users);
}