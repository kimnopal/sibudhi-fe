import React from 'react'
import { Link } from 'react-router'

export default function TableRest({ reports }: any) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>No Handphone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report: any) => (
                        <tr key={report.id}>
                            <td className="text-nowrap name">{report.name}</td>
                            <td>{report.email}</td>
                            <td>
                                <span className="badge badge-soft badge-success text-xs me-2">{report.service_name}</span>
                                {report.service_type_name && (
                                    <span className="badge badge-soft badge-warning text-xs">{report.service_type_name}</span>
                                )}
                            </td>
                            <td className="text-nowrap">{report.no_handphone}</td>
                            <td>
                                <Link to={`/reports/${report.id}/edit`} className="btn btn-circle btn-text btn-sm" aria-label="Action Link"><span className="icon-[tabler--pencil] size-5"></span></Link>
                                <Link to={`/reports/${report.id}`} className="btn btn-circle btn-text btn-sm" aria-label="Action Link"><span className="icon-[tabler--trash] size-5"></span></Link>
                                <Link to={`/reports/${report.id}`} className="btn btn-circle btn-text btn-sm" aria-label="Action Link"><span className="icon-[tabler--eye] size-5"></span></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
