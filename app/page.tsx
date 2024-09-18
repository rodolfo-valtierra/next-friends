"user client";
import {IUser} from '../Types/Users'
import Link from 'next/link'


export default async function Home() {
  const res = await fetch('http://localhost:3000/api/users', {cache: 'no-cache'});
  const users:IUser[] = await res.json();

  return (
    <div className="grid place-content-center min-h-screen ">
      <h3>All users</h3>
      <ul className="grid grid-col">
        { users.map(user =>
            <Link href={'/'+user.id} className="border-b-2 mt-2" 
              style={{fontSize: "2vh", cursor: 'pointer'}} >
              {`${user.name} ${user.lastName}`}
            </Link>
          )
        }
      </ul>
    </div>
  );
}
