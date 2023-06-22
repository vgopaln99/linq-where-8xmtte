import * as React from 'react';
import {AgGridReact} from 'ag-grid-react';

const options = {
  columnDefs: [
    {headerName: 'documentNumber', field: 'documentNumber', width: 100},
    {headerName: 'createdDate', field: 'createdDate', width: 100},
    {headerName: 'total', field: 'total', width: 100},
    {headerName: 'reference', field: 'reference', width: 100}
  ],
   defaultColDef: {
        resizable: true,
        sortable: true
    }
}

export default function AgGrid(props) {

  return (
    <React.Fragment>
      <AgGridReact
        {...props} 
        columnDefs={options.columnDefs}
        gridOptions={options}
        domLayout="autoHeight"
      />
    </React.Fragment>
  )
};
