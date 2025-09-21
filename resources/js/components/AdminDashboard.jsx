import React from 'react';

const stats = [
    { label: 'Users', value: 1200 },
    { label: 'Orders', value: 350 },
    { label: 'Revenue', value: '$12,500' },
    { label: 'Active Sessions', value: 87 },
];

const recentUsers = [
    { name: 'Jane Doe', email: 'jane@example.com' },
    { name: 'John Smith', email: 'john@example.com' },
    { name: 'Alice Brown', email: 'alice@example.com' },
];

function AdminDashboard() {
    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
            <h1>Admin Dashboard</h1>
            <section style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                {stats.map((stat) => (
                    <div key={stat.label} style={{
                        background: '#f5f5f5',
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        textAlign: 'center',
                        flex: 1
                    }}>
                        <h2 style={{ margin: 0 }}>{stat.value}</h2>
                        <p style={{ color: '#555' }}>{stat.label}</p>
                    </div>
                ))}
            </section>
            <section>
                <h2>Recent Users</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
                    <thead>
                        <tr>
                            <th style={{ borderBottom: '1px solid #ddd', padding: '0.5rem', textAlign: 'left' }}>Name</th>
                            <th style={{ borderBottom: '1px solid #ddd', padding: '0.5rem', textAlign: 'left' }}>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentUsers.map((user) => (
                            <tr key={user.email}>
                                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{user.name}</td>
                                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default AdminDashboard;