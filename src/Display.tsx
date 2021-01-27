import React, { useState, useEffect, FC } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';



interface data {
   postId: number;
   id: number;
   name: string;
   email: string;
   body: string;
}

const Display: FC = (props: any) => {
   const [data, setData] = useState<data[]>([]);

   useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/comments').then(response => {
         setData(response.data);
      })
   })
   return (
      <>
         <Table className="table table-bordered table-striped table-hover">
            <thead>
               <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Body</th>
               </tr>
            </thead>
            <tbody>
               {data.map(item => (
                  <>
                     <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                     </tr>
                  </>
               ))}
            </tbody>
         </Table>
      </>
   )
}

export default Display;