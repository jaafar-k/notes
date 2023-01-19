import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState} from "react";

  
const columns = [
  { field: 'id', headerName: 'User ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'email', headerName: 'E-mail', width: 200 },
];
const userTableStyles = {
  height: '650px',
};
export default function DataTable(){
    const [user, setUser] = useState([]);
    useEffect(() => 
    {
     fetch('https://jsonplaceholder.typicode.com/users')
       .then((response )=> response.json())
       .then((json) => setUser(json))
       
       
    }, [])

    return (
        <div style={{ height: 300, width: '50%' }}>
          <DataGrid    
            rows={user}
            columns={columns}
            loading={!user.length}
            sx={userTableStyles} />
        </div>
      );
}