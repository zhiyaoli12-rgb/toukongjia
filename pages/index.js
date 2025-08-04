export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>欢迎来到控盈平台</h1>
      <p style={{ fontSize: '1.1rem', color: '#555' }}>
        我们为交易员提供资金，您只需展示交易能力，风险由我们承担，收益您来拿。
      </p>
      <div style={{ marginTop: '2rem' }}>
        <button style={{
          padding: '1rem 2rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          开始挑战
        </button>
      </div>
    </main>
  );
}
