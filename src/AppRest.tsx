import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IStaticMethods } from 'flyonui/flyonui';
import TableRest from './components/TableRest';
import { Link } from 'react-router';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui');
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, [location.pathname]);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch('http://localhost:8000/api/reports');
      const data = await response.json();
      setReports(data.data);
    };
    fetchReports();
  }, []);

  return (
    <main className='container h-screen mt-10'>
      <div className='flex justify-between items-center'>
        <h1 className="text-base-content text-4xl mb-5">Data Laporan</h1>
        <Link to={"/reports/create"} className="btn btn-soft btn-primary" id='tambah-data'>Tambah Data</Link>
      </div>
      <TableRest reports={reports} />
    </main>
  );
}

export default App;