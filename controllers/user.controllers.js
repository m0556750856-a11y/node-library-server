const users = [
    {
        id: 1,
        name: "ישראל ישראלי",
        email: "israel@example.com",
        borrowedBooks: [101] 
    }
];

export const postSignUpUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).send('המשתמש נרשם בהצלחה');
}
export const postSignInUser = (req, res) => {
    const { email } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) return res.status(404).send('משתמש לא נמצא');
    res.json(user);
}
export const getUser = (req, res) => {
    res.json(users);
}