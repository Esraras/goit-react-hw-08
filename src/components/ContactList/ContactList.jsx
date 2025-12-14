
import { deleteContacts } from "../../redux/contacts/operations.js";
import { useDispatch, useSelector} from 'react-redux';
import {selectFilteredContacts} from "../../redux/contacts/slice.js"

function Contact ({contacts}) {
    const dispatch = useDispatch();

    return (
        <div className="conDiv">
            <div className="contact">
               <span>👤</span>
                <span >{contacts.name}</span>
                <span>📞</span>
                <span>{contacts.number}</span>
            </div>
            <button type="button"  onClick={() => dispatch(deleteContacts(contacts.id))}>Delete</button>
        </div>
    );
}

export default function ContactList () {

    const filtered = useSelector(selectFilteredContacts);

    return (
        <div>
            {filtered.map(con => (
                <Contact key={con.id} contacts={con} />
            ))}
        </div>
    );
}