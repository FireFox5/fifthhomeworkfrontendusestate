import React, {useState} from 'react';

function Question(props) {

    const[user,setUser]= useState({
        name:'',
        surname:'',
        address:'',
        Email:'',
    })
    const changeInput =(e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const Submit =(e)=>{
        e.preventDefault()
        console.log(user)
        alert('thanks you ')
    }
    return (
        <div>
            <form onSubmit={Submit} >
                <input type="text" placeholder='please input your name'
                name = 'name'
                       value={user.name}
                    onChange={changeInput}/>

                <input type="text" placeholder='please input your surname'
                name='surname'
                value={user.surname}
                    onChange={changeInput}/>

                <input type="text" placeholder='please input your home address'
                name = 'address'
                value={user.address}
                    onChange={changeInput}/>
                <input type="text" placeholder='please input your Email'
                name='Email'
                value={user.Email}
                    onChange={changeInput}
                />
                <button type='Submit' >Submit</button>
            </form>

        </div>
    );
}

export default Question;