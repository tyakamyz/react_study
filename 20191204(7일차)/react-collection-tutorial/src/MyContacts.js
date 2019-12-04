import React, {useState} from 'react';

const MyContacts = props => {
    const data = [
        {name: '철수', phone: '010-1234-0001'},
        {name: '철수', phone: '010-1234-0001'}
    ];

    const [contactData, setContactData] = useState(data);
    const [count, setCount] = useState(2);

    const onPushButtonClick = () => {
        const nextValue = count+1;

        contactData.push({
            name: 'hello' + nextValue,
            phone: '010-1234-999' + nextValue
        });

        setContactData(contactData);
        setCount(nextValue);
    }

    return (
        <div>
            <h2>MyContacts</h2>
            <ul>
                {contactData.map((item, index) => {
                    return(
                        <li key={index}>
                            <strong>{item.name} : </strong>
                            <small style={{fontSize: '0.8em', color: '#999', marginRight: '10px'}}>
                                {item.phone}
                            </small>
                        </li>
                    );
                })}
            </ul>
            <button type="button" onClick={onPushButtonClick}>Push Item</button>
            <hr />
        </div>
    );
};

export default MyContacts;