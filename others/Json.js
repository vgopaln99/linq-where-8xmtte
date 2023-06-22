import * as React from 'react';
import ReactJson from 'react-json-view';

export default function({data}) {

  return (
    <div style={{marginTop: '30px'}}>
        <ReactJson src={data} />
    </div>
  )
}