import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import history from './../../history';

/*For this page i used static data*/


const columns = [
  { field: 'Description', title: 'Description' },
  { field: 'Name', title: 'Name' },
  { field: 'Price', title: 'Price'},
  {
	field: 'Unit',
	title: 'Unit'
  }  
];

const data = [
	{ Description: "Toyota", Name: "Celica", Price: 35000, Unit: 1 },
        { Description: "Ford", Name: "Mondeo", Price: 32000, Unit: 2 },
        { Description: "Porsche", Name: "Boxter", Price: 72000, Unit: 3 }]

class Employee extends Component {
	render() {
		return (

		  	<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
			  	<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
					<h1>Employee Data</h1>
					<MaterialTable  columns={columns} data={data}  options={{
						selection: false,
						search:false,
						paging:false,
						sorting:false
					  }} />
					<div style={{ float: 'right' }}>
					<Button variant="contained" color="primary" onClick={() => history.push('/')}>Cancel</Button>
					<Button variant="contained" color="default">Submit</Button>
					</div>
				</Typography>
			</Container>
		  </React.Fragment>
	  
		);
	}
}

export default Employee;