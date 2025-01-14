export const birthJsonData = {
    isUser: false,
    firstName: "John",
    lastName: "Doe",
    birthPlace: "New York, USA",
    dob: "1999-01-01 00:00:00",
    gender: "male",
    isAlive: true,
    parents: [1, 2],
    children: [1, 2, 3],
    spouses: [
        {
            id: 2,
            status: "married"
        },
        {
            id: 3,
            status: "divorced"
        }
    ]
};

export const lifeEventData = {
    id: 56,
    userId: "user_2gTTLhjT1fFk0g6uVKvKmXSTuXx",
    type: "marriage",
    eventDate: null,
    location: null,
    details: null,
    marriageId: 11,
    personId: null,
    createdAt: "2024-07-17T12:29:27.371Z",
    updatedAt: "2024-07-17T12:29:27.371Z",
    marriage: {
        id: 11,
        personId: 41,
        spouseId: 43,
        status: "married",
        marriageDate: "2024-07-17T12:29:27.371Z",
        marriagePlace: "New York, USA",
        person: {
            id: 41,
            firstName: "John",
            lastName: "Doe"
        },
        spouse: {
            id: 43,
            firstName: "Jane",
            gender: "female",
            lastName: "Doe"
        }
    }
}

export const allEvent = [
    {
        isUser: false,
        type: "Birth",
        firstName: "John",
        lastName: "Doe",
        place: "New York, USA",
        date: "1999-01-01 00:00:00",
        gender: "male",
        isAlive: true,
        parents: [1, 2],
        children: [1, 2, 3],
        spouses: [
            {
                id: 2,
                status: "married"
            },
            {
                id: 3,
                status: "divorced"
            }
        ]
    },
    {
        id: 56,
        userId: "user_2gTTLhjT1fFk0g6uVKvKmXSTuXx",
        type: "marriage",
        eventDate: null,
        location: null,
        details: null,
        marriageId: 11,
        date: "2024-07-17T12:29:27.371Z",
        personId: null,
        createdAt: "2024-07-17T12:29:27.371Z",
        updatedAt: "2024-07-17T12:29:27.371Z",
        place: "New York, USA",
        marriage: {
            id: 11,
            personId: 41,
            spouseId: 43,
            status: "married",
            person: {
                id: 41,
                firstName: "John",
                lastName: "Doe"
            },
            spouse: {
                id: 43,
                firstName: "Jane",
                gender: "female",
                lastName: "Doe"
            }
        }
    }
]