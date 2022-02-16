import { useState } from 'react';

import dataFromServer from 'data';
import { getDataPart } from 'utils/index';
import Table from 'components/Table/index';
import Pagination from 'components/Pagination/index';

import './App.css';

function App() {
  const [currentPage, setCurrenPage] = useState(1);

  return (
    <>
      <Table
        data={getDataPart(
          dataFromServer.data,
          dataFromServer.pages,
          currentPage
        )}
      />
      <Pagination
        currentPage={currentPage}
        pages={dataFromServer.pages}
        setPage={setCurrenPage}
      />
    </>
  );
}

export default App;
