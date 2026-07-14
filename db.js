const books = [
    {
        code: 101,
        name: "המדריך המלא ל-Node.js",
        category: "תכנות",
        price: 120,
        isBorrowed: false,
        loans: [] 
    },
    {
        code: 102,
        name: "אלגוריתמים במדעי המחשב",
        category: "לימודים",
        price: 150,
        isBorrowed: true, 
        loans: [
            {
                borrowDate: "2026-07-12",
                customerCode: "C-458"
            }
        ]
    },
    {
        code: 103,
        name: "ספר מתח כלשהו",
        category: "פנאי",
        price: 85,
        isBorrowed: false,
        loans: []
    }
];


export default books;