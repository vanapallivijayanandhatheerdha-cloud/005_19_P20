export default function StatCard({label,value,icon}){return <div className="stat"><div className="staticon">{icon}</div><div><span>{label}</span><strong>{value}</strong></div></div>}
