import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import AgGrid from './others/AgGrid';
import data from './Data';
import Enumerable from 'linq';
import Json from './others/Json';

var array = [
  {
    id: '3234',
    reservation: {
      actual: '2023-06-02',
    },
    clearToDock: {
      estimated: '2023-07-04',
      initial: '2023-06-26',
    },
    coordinatedDock: {
      estimated: '2023-06-28',
    },
    expediteDock: {
      planned: '2023-06-01',
      estimated: '2023-06-28',
      initial: '2023-07-05',
    },
  },
  {
    id: '434',
    reservation: {
      actual: '2022-06-02',
    },
    clearToDock: {
      estimated: '2022-07-04',
      initial: '2022-06-26',
    },
    coordinatedDock: {
      estimated: '2022-06-28',
    },
    expediteDock: {
      planned: '2022-06-01',
      estimated: '2022-06-28',
      initial: '2022-07-05',
    },
  },
  {
    id: '434',
    reservation: {
      actual: '2021-06-02',
    },
    clearToDock: {
      estimated: '2021-07-04',
      initial: '2021-06-26',
    },
    coordinatedDock: {
      estimated: '2021-06-28',
    },
    expediteDock: {
      planned: '2021-06-01',
      estimated: '2021-06-28',
      initial: '2021-07-05',
    },
  },
  {
    id: '434',
    reservation: {
      actual: '2020-06-02',
    },
    clearToDock: {
      estimated: '2020-07-04',
      initial: '2020-06-26',
    },
    coordinatedDock: {
      estimated: '2020-06-28',
    },
    expediteDock: {
      planned: '2020-06-01',
      estimated: '2020-06-28',
      initial: '2020-07-05',
    },
  },
];
var result = Enumerable.from(array)
  .where(
    (w) =>
      w.expediteDock.planned >= '2022-11-10' ||
      w.expediteDock.planned <= '2023-06-01' ||
      w.reservation.actual >= '2021-06-02' ||
      w.clearToDock.estimated <= '2021-07-04'
  )
  .toArray();

export default function MainApp() {
  return (
    <div>
      <div>
        <h1>Where</h1>
        <div className="ag-theme-balham">
          <AgGrid rowData={result} />
        </div>
        <Json data={result} />
      </div>
    </div>
  );
}

render(<MainApp />, document.getElementById('root'));
