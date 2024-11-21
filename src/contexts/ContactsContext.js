import { createContext, useReducer } from 'react';
import { useNotifications } from '../hooks/useDataContext';

const list = [
    { name: "Tatiana Wolf", mail: "wolf@gmail.com", phone: "+49 2222 22 222 2" },
    { name: "John Doe", mail: "john.doe@example.com", phone: "+49 1234 56 789 0" },
    { name: "Alice Smith", mail: "alice.smith@example.com", phone: "+49 9876 54 321 0" },
    { name: "Bob Johnson", mail: "bob.johnson@example.com", phone: "+49 5555 55 555 5" },
    { name: "Emily Davis", mail: "emily.davis@example.com", phone: "+49 4444 44 444 4" },
    { name: "Michael Brown", mail: "michael.brown@example.com", phone: "+49 3333 33 333 3" },
    { name: "Sarah Wilson", mail: "sarah.wilson@example.com", phone: "+49 2222 11 222 2" },
    { name: "David Taylor", mail: "david.taylor@example.com", phone: "+49 6666 66 666 6" },
    { name: "Laura Anderson", mail: "laura.anderson@example.com", phone: "+49 7777 77 777 7" },
    { name: "Daniel Thomas", mail: "daniel.thomas@example.com", phone: "+49 8888 88 888 8" },
    { name: "Sophia Martinez", mail: "sophia.martinez@example.com", phone: "+49 9999 99 999 9" },
    { name: "James Jackson", mail: "james.jackson@example.com", phone: "+49 1010 10 101 0" },
    { name: "Olivia White", mail: "olivia.white@example.com", phone: "+49 2020 20 202 0" },
    { name: "William Harris", mail: "william.harris@example.com", phone: "+49 3030 30 303 0" },
    { name: "Isabella Clark", mail: "isabella.clark@example.com", phone: "+49 4040 40 404 0" },
    { name: "Matthew Lewis", mail: "matthew.lewis@example.com", phone: "+49 5050 50 505 0" },
    { name: "Charlotte Young", mail: "charlotte.young@example.com", phone: "+49 6060 60 606 0" },
    { name: "Joshua Hall", mail: "joshua.hall@example.com", phone: "+49 7070 70 707 0" },
    { name: "Mia Allen", mail: "mia.allen@example.com", phone: "+49 8080 80 808 0" },
    { name: "Ethan King", mail: "ethan.king@example.com", phone: "+49 9090 90 909 0" },
    { name: "Chloe Wright", mail: "chloe.wright@example.com", phone: "+49 1212 12 121 2" },
    { name: "Daniel Scott", mail: "daniel.scott@example.com", phone: "+49 1313 13 131 3" },
    { name: "Ava Green", mail: "ava.green@example.com", phone: "+49 1414 14 141 4" },
    { name: "Samuel Adams", mail: "samuel.adams@example.com", phone: "+49 1515 15 151 5" },
    { name: "Liam Baker", mail: "liam.baker@example.com", phone: "+49 1616 16 161 6" },
    { name: "Ella Gonzalez", mail: "ella.gonzalez@example.com", phone: "+49 1717 17 171 7" },
    { name: "Henry Nelson", mail: "henry.nelson@example.com", phone: "+49 1818 18 181 8" },
    { name: "Scarlett Carter", mail: "scarlett.carter@example.com", phone: "+49 1919 19 191 9" },
    { name: "Gabriel Mitchell", mail: "gabriel.mitchell@example.com", phone: "+49 2022 20 222 2" },
    { name: "Aria Perez", mail: "aria.perez@example.com", phone: "+49 2122 21 222 2" },
    { name: "Lucas Roberts", mail: "lucas.roberts@example.com", phone: "+49 2222 22 222 2" },
    { name: "Grace Turner", mail: "grace.turner@example.com", phone: "+49 2323 23 232 3" },
    { name: "Noah Phillips", mail: "noah.phillips@example.com", phone: "+49 2424 24 242 4" },
    { name: "Victoria Campbell", mail: "victoria.campbell@example.com", phone: "+49 2525 25 252 5" }
];

export const ContactsContext = createContext(list);

const contactsReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_CONTACT_LIST':
            return { ...state, list: action.payload };
        case 'delete':
            return { ...state, list: state.list.filter((contact) => contact.mail !== action.payload) };
        case 'edit':
            const contact = state.list.find((contact) => contact.mail === action.payload.mail)
            contact.name = action.payload.name;
            contact.mail = action.payload.mail;
            contact.phone = action.payload.phone;
            return { ...state };
        case 'add':
            return { ...state, list: [...state.list, action.payload] };
        default:
            return state;

    }
}

export const ContactsProvider = ({ children }) => {
    const { pushNotificationInfo } = useNotifications();
    const [state, dispatch] = useReducer(contactsReducer, {
        list
    })

    const changeContactList = (list) => {
        dispatch({ type: 'CHANGE_CONTACT_LIST', payload: list })
    }

    const deleteContact = (contactMail) => {
        dispatch({ type: 'delete', payload: contactMail }); // Pass the mail of the contact to delete
    };

    const editContact = (contact) => {
        dispatch({ type: 'edit', payload: contact });
        pushNotificationInfo("Contact deleted.");
    }

    const addContact = (contact) => {
        dispatch({ type: 'add', payload: contact });
        pushNotificationInfo("Contact successfully added.");
    }

    return (
        <ContactsContext.Provider value={{ ...state, changeContactList, deleteContact, editContact, addContact }}>
            {children}
        </ContactsContext.Provider>
    )
}
