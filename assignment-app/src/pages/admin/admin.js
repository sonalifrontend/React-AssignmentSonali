import React, { Component, useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import history from './../../history';
import Grid from '@material-ui/core/Grid'
import axios from 'axios';

/*For this page i used axios url for data*/

const api = axios.create({
  baseURL: `https://reqres.in/api`
})


function Admin() {

  var columns = [
    { field: 'id', title: 'id' },
  { field: 'email', title: 'email' },
  { field: 'first_name', title: 'first_name'},
  {
    field: 'last_name',
    title: 'last_name'
  }
  ]
  const [data, setData] = useState([]); //table data

  

  useEffect(() => { 
    api.get("/users")
        .then(res => {               
            setData(res.data.data)
         })
         .catch(error=>{
             console.log(error)
         })
  }, [])

  return (
    <div className="App">
      
      <div>
          <h1>Admin Data</h1>
          <MaterialTable
              title="User data from remote source"
              columns={columns}
              data={data}
              options={{
                selection: true,
                search:false,
                paging:false,
                sorting:false,
                showTitle: false,
                grouping:true,
              }}
            />
         <div style={{ float: 'right' }}>
          <Button variant="contained" color="primary" onClick={() => history.push('/')}>Cancel</Button>
          <Button variant="contained" color="default" onClick={() => console.log()}>Submit</Button>
          </div>
         
        </div>
    </div>
  );
};

export default Admin;