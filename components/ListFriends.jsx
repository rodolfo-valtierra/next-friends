"use client"

import { useEffect, useState } from "react"
import {IUser} from '@/Types/Users'
import Link from 'next/link'

export default function ListFriends ({users}) {
    const [friends, setFriends] = useState([])

    useEffect(()=> {
        const filterId = users.map(u => u.id) 
        
        fetch('http://localhost:3000/api/friends', {
            method: 'POST',
            body: JSON.stringify(filterId),
            cache:"no-cache"
        }).then(res => res.json())
        .then(friends => {console.log(friends); setFriends(friends)})
    }, [])

    return <>
        { friends.map(friend =>
            <Link href={'/'+friend.id} className="border-b-2 ml-2 mt-2" 
              style={{ cursor: 'pointer'}} >
              {`${friend.name} ${friend.lastName}`}
            </Link>
          )
        }
    </>;
}