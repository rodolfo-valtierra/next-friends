
import {IUser} from '@/Types/Users'
import Link from 'next/link'
import ListFriends from '@/components/ListFriends'

export default async function Profile ({params}:any) {
    const res = await fetch('http://localhost:3000/api/users', {method: 'POST', body: JSON.stringify({id: params.id})})
    const user:IUser = await res.json();

    return <div className="grid place-content-center min-h-screen" style={{fontSize: "2vh"}}> 
        <Link href="/">Home</Link>
        User: {user.name +' '+ user.lastName}<br/>
        Age: {user.age}<br/>
        Sex: {user.sex}<br/>
        Address: {user.address}<br/>
        Hobbies: {user.hobbies}<br/>
        Work: {user.work}<br/>
        Friends list:<br/>
        <ul className="grid grid-col">
            <ListFriends users={user.friends}/>
        </ul>
    </div>
}