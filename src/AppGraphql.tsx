import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IStaticMethods } from 'flyonui/flyonui';
import TableGraphql from './components/TableGraphql';
import { Link } from 'react-router';
import { gql, useQuery } from '@apollo/client';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const GET_REPORTS = gql`
  query Reports {
    reports {
        id
        name
        email
        status
        noHandphone
        service {
            name
        }
        serviceType {
            name
        }
    }
}`

function AppGraphql() {
  const location = useLocation();
  const [reports, setReports] = useState([]);
  const { data } = useQuery(GET_REPORTS)

  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui');
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, [location.pathname]);

  useEffect(() => {
    async function test() {
      setReports(await data.reports)
      console.log(await data.reports)
    }
    test()
  }, [data])

  return (
    <main className='container h-screen mt-10'>
      <div className='flex justify-between items-center'>
        <h1 className="text-base-content text-4xl mb-5">Data Laporan</h1>
        <Link to={"/reports/create"} className="btn btn-soft btn-primary" id='tambah-data'>Tambah Data</Link>
      </div>
      <TableGraphql reports={reports} />
    </main>
  );
}

export default AppGraphql;