import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#ffffff', backgroundColor: '#0f172a', minHeight: '100vh', margin: 0 }}>
      
      {/* Top Credentials Banner Bar */}
      <div style={{ backgroundColor: '#1e293b', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', fontSize: '12px', letterSpacing: '1px', borderBottom: '1px solid #334155' }}>
        <div style={{ color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }}>
          LICENSED, BONDED, INSURED
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span style={{ color: '#cbd5e1' }}>✉️ chris@supremeplumbingservice.net</span>
          <a href="tel:5648883159" style={{ backgroundColor: '#dc2626', color: '#fff', padding: '6px 12px', borderRadius: '20px', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
            📞 564-888-3159
          </a>
        </div>
      </div>

      {/* Brand Navigation Header */}
      <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontWeight: '900', fontSize: '22px', letterSpacing: '-0.5px' }}>
          SUPREME <span style={{ color: '#dc2626' }}>PLUMBING</span> <span style={{ backgroundColor: '#dc2626', color: '#fff', fontSize: '11px', padding: '3px 8px', borderRadius: '4px', marginLeft: '5px', verticalAlign: 'middle' }}>SERVICE</span>
        </div>
      </header>

      {/* Main Hero Section Split Layout */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
        
        {/* Left Column Text Content */}
        <div>
          {/* Pill Badge */}
          <div style={{ display: 'inline-block', backgroundColor: '#1e293b', border: '1px solid #475569', color: '#ef4444', fontSize: '11px', fontWeight: 'bold', padding: '6px 14px', borderRadius: '20px', marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            🔴 SW Washington's Premier Plumber
          </div>
          
          {/* Giant Headings */}
          <h1 style={{ fontSize: '56px', fontWeight: '900', margin: '0 0 10px 0', lineHeight: '0.95', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            SUPREME
          </h1>
          <h1 style={{ fontSize: '56px', fontWeight: '900', margin: '0 0 25px 0', lineHeight: '0.95', color: '#dc2626', textTransform: 'uppercase', letterSpacing: '-1px' }}>
            PLUMBING
          </h1>

          <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '35px', maxWidth: '500px' }}>
            As Vancouver's trusted local mechanical specialist, we deliver pristine commercial-grade craftsmanship directly to your residential project. Backed by over a decade of verified on-site experience.
          </p>

          <a href="tel:5648883159" style={{ backgroundColor: '#f8fafc', color: '#0f172a', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px', display: 'inline-block', transition: '0.2s', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)' }}>
            CONNECT WITH CHRIS
          </a>
        </div>

        {/* Right Column Image Container Card */}
        <div style={{ backgroundColor: '#1e293b', borderRadius: '16px', padding: '10px', border: '1px solid #334155', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', position: 'relative', minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* Main Visual Frame */}
          <div style={{ flexGrow: 1, backgroundColor: '#0f172a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', border: '1px solid #2d3748', overflow: 'hidden', padding: '20px', textAlign: 'center' }}>
            <div>
              <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
                📸 Supreme Plumbing Service Branded Fleet
              </span>
              <span style={{ fontSize: '12px', color: '#475569' }}>[Image Placeholder Asset]</span>
            </div>
          </div>
          
          {/* Card Label Tag */}
          <div style={{ padding: '15px 5px 5px 10px', fontSize: '11px', fontWeight: 'bold', color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase' }}>
            FLEET VEHICLE NO. 1
          </div>
        </div>

      </main>

      {/* Section 2: Trust Matrix */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1e293b' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          
          {/* Sub Heading Wrapper */}
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 10px 0', letterSpacing: '-0.5px' }}>
              A Decade of Trusted
            </h2>
            <h2 style={{ fontSize: '32px', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 20px 0', color: '#dc2626', letterSpacing: '-0.5px' }}>
              Experience
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#dc2626', marginBottom: '25px' }}></div>
            <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '15px' }}>
              We specialize in elite water heater installations, complex infrastructure renovations, and precise diagnostic operations across the Vancouver, WA metro region.
            </p>
          </div>

          {/* Right Layout Image Card */}
          <div style={{ backgroundColor: '#1e293b', borderRadius: '16px', padding: '10px', border: '1px solid #334155', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ flexGrow: 1, backgroundColor: '#0f172a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', padding: '20px', textAlign: 'center' }}>
              <div>
                <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
                  🛠️ Supreme Plumbing Interior Heavy Contractor Setup
                </span>
              </div>
            </div>
            <div style={{ padding: '12px 5px 5px 10px', fontSize: '11px', fontWeight: 'bold', color: '#10b981', letterSpacing: '1px', textTransform: 'uppercase' }}>
              CONTRACTOR GRADE TOOLS
            </div>
          </div>

        </div>
      </section>

      {/* Workiz Embed Anchor Point */}
      <section style={{ backgroundColor: '#0b0f19', padding: '60px 20px', borderTop: '1px solid #1e293b', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ margin: '0 0 10px 0', fontWeight: 'bold', fontSize: '20px' }}>Secure Your Schedule Online</h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '25px' }}>Direct integration with our live dispatcher panel.</p>
          <div style={{ width: '100%', minHeight: '200px', backgroundColor: '#0f172a', border: '2px dashed #475569', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontSize: '13px' }}>
            📅 Workiz Scheduling Engine Docking Point
          </div>
        </div>
      </section>

    </div>
  );
}
