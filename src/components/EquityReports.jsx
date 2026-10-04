import equityReports from '../equityReports'

export default function EquityReports() {
  return (
    <div id="reports">
      <h3>Research Reports</h3>
      <div className="report-list">
        {equityReports.map(({ ticker, folder }) => (
          <div className="report" key={ticker}>
            <a target="_blank" rel="noreferrer" href={folder}>
              <b>{ticker}</b>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
