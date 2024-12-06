import {createContext, useReducer, useEffect, useState} from 'react';
import { projectFirestore } from "../firebase/config";

export const ContactsContext = createContext({list: []});

const contactsReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_CONTACT_LIST':
            return {...state, list: action.payload };
        case 'delete':
            return {...state, list: state.list.filter((contact) => contact.mail !== action.payload)};
        case 'edit':
            const contact = state.list.find((contact) => contact.mail === action.payload.mail)
                 contact.name = action.payload.name;
                 contact.mail = action.payload.mail;
                 contact.phone = action.payload.phone;
            return {...state};
        case 'add':
            if (state.list.some(contact => contact.mail === action.payload.mail)) {
                return state;
            }
            return { ...state, list: [...state.list, action.payload] };
        default:
            return state;

    }
}

export const ContactsProvider = ({children}) => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);


    const [state, dispatch] = useReducer(contactsReducer, {
        list: []
    });

    useEffect(() => {
        setIsPending(true);

        projectFirestore.collection('contacts').get().then((snapshot) => {
            if (snapshot.empty) {
               setError('no contacts to load');
               setIsPending(false);
            } else {
                let results = [];
                snapshot.docs.forEach((doc) => {
                    results.push({ id: doc.id, ...doc.data() });
                });
                dispatch({ type: 'CHANGE_CONTACT_LIST', payload: results });
                setIsPending(false);
            }
        }).catch(err => {
            setError(err);
            setIsPending(false);
        });
    }, []);


    const changeContactList = (list) => {
        dispatch({type: 'CHANGE_CONTACT_LIST', payload: list})
    }

    const deleteContact = async (contactMail) => {
        try {
            const doc = await projectFirestore.collection('contacts').where('mail', '==', contactMail).get();
            if (!doc.empty) {
                await doc.docs[0].ref.delete();
                dispatch({ type: 'delete', payload: contactMail });
            }
        } catch (err) {
            console.error('Failed to delete contact:', err);
        }
    };


    const editContact = async (contact) => {
        try {
            const doc = await projectFirestore.collection('contacts').where('mail', '==', contact.mail).get();
            if (!doc.empty) {
                await doc.docs[0].ref.update(contact);
                dispatch({ type: 'edit', payload: contact });
            }
        } catch (err) {
            console.error('Failed to edit contact:', err);
        }
    };


    const addContact = async (contact) => {
        try {
            await projectFirestore.collection('contacts').add(contact);
            dispatch({ type: 'add', payload: contact });
        } catch (err) {
            console.error('Failed to add contact:', err);
        }
    };


    return (
        <ContactsContext.Provider value={{ ...state, changeContactList, deleteContact, editContact, addContact}}>
            {children}
        </ContactsContext.Provider>
    )
}
