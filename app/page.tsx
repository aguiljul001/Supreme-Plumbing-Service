import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333', backgroundColor: '#f9f9f9', minHeight: '100vh', margin: 0 }}>
      {/* Header / Navigation */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #eaeaea', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#0056b3' }}>
          🔧 Supreme Plumbing Service
        </div>
        <a href="tel:5551234567" style={{ backgroundColor: '#28a745', color: '#fff', padding: '10px 15px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>
          📞 Call Now
        </a>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#0056b3', color: '#fff' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '15px', fontWeight: 'bold' }}>
          Premium Plumbing Solutions, Done Right.
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          Fast, reliable, and professional commercial & residential plumbing services. Available for emergency repairs.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:5551234567" style={{ backgroundColor: '#ffc107', color: '#212529', padding: '15px 30px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            🚨 24/7 Emergency Service
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '50px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '40px', color: '#0056b3' }}>
          Our Expert Services
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', borderTop: '4px solid #0056b3' }}>
            <h3>Drain Cleaning</h3>
            <p>Stubborn clogs cleared instantly with premium industrial hydro-jetting and cabling equipment.</p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', borderTop: '4px solid #0056b3' }}>
            <h3>Water Heaters</h3>
            <p>Expert installation, diagnostics, and repairs for standard tank systems and energy-efficient tankless configurations.</p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', borderTop: '4px solid #0056b3' }}>
            <h3>Leak Detection & Repair</h3>
            <p>Advanced diagnostic isolation to catch structural pipe degradation and pinhole leaks before they cause major property damage.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#222', color: '#fff', padding: '30px 20px', textAlign: 'center', fontSize: '14px' }}>
        <p>© 2026 Supreme Plumbing Service. Licensed, Bonded & Insured.</p>
        <p style={{ color: '#aaa', marginTop: '10px' }}>Operated by 360 AI Studio</p>
      </footer>
    </div>
  );
}
