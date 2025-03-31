import React, { useState } from 'react';

const timelineData = [
  {
    period: "兩次世界大戰時期 / World Wars Era",
    years: "1914–1945",
    monarch: "喬治五世・喬治六世 / George V & George VI",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/George_V_1932.jpg/220px-George_V_1932.jpg",
    events: [
      "第一次世界大戰 / World War I",
      "1930年代經濟大蕭條 / Great Depression",
      "第二次世界大戰 / World War II"
    ],
    worldContext: "納粹德國崛起、日本擴張、蘇聯革命、美國崛起 / Rise of Nazi Germany, Japanese imperialism, Soviet Revolution, U.S. as global power",
    otherRulers: [
      {
        name: "威廉二世 / Wilhelm II",
        country: "德國 / Germany",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kaiser_Wilhelm_II_of_Germany_-_1902.jpg/220px-Kaiser_Wilhelm_II_of_Germany_-_1902.jpg"
      },
      {
        name: "富蘭克林·羅斯福 / Franklin D. Roosevelt",
        country: "美國 / USA",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/FDR_1944_Color_Portrait.jpg/220px-FDR_1944_Color_Portrait.jpg"
      },
      {
        name: "史達林 / Joseph Stalin",
        country: "蘇聯 / USSR",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Joseph_Stalin%2C_Bundesarchiv_Bild_183-H27337.jpg/220px-Joseph_Stalin%2C_Bundesarchiv_Bild_183-H27337.jpg"
      }
    ]
  }
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>英國歷史時間軸 / UK History Timeline</h1>
      {timelineData.map((item, idx) => (
        <div key={idx} onClick={() => setSelected(item)} style={{ cursor: 'pointer', marginBottom: '1rem', padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <img src={item.image} alt={item.monarch} width="60" height="60" style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <div style={{ fontWeight: '600' }}>{item.monarch} ({item.period})</div>
              <div style={{ color: '#666', fontSize: '0.875rem' }}>{item.years}</div>
            </div>
          </div>
        </div>
      ))}
      {selected && (
        <div style={{ padding: '1rem', background: '#eef', borderRadius: '8px' }}>
          <h2>{selected.monarch}</h2>
          <img src={selected.image} alt={selected.monarch} width="100" style={{ borderRadius: '50%', marginBottom: '1rem' }} />
          <ul>
            {selected.events.map((e, idx) => <li key={idx}>{e}</li>)}
          </ul>
          <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>世界背景 / World Context: {selected.worldContext}</p>
          <h4 style={{ marginTop: '1rem', fontWeight: '600' }}>其他國家統治者 / Other Rulers:</h4>
          <div>
            {selected.otherRulers.map((r, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                <img src={r.image} alt={r.name} width="40" height="40" style={{ borderRadius: '50%', marginRight: '0.5rem' }} />
                <div>
                  <div>{r.name}</div>
                  <div style={{ fontSize: '0.875rem', color: '#666' }}>{r.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
