import "./App.css";

// Design: an engineer's drawing sheet. Everything on the page is plain data
// below, so changing a grade, a date or a role means editing one line here.

const GRADES = [
  ["Signals and Systems", 100],
  ["Digital Signal Processing", 100],
  ["Electromagnetic Fields", 100],
  ["Digital Systems", 100],
  ["Digital Circuits", 98],
  ["Control Systems", 96],
  ["Laboratory 1", 96],
  ["Semiconductor Devices", 95],
];

const SIMULATION = ["PSIM", "PSpice", "Multisim", "MATLAB"];
const BENCH = ["Oscilloscope", "Power supply", "Function generator", "Multimeter"];
const IN_PROGRESS = [
  "Switched mode power converters",
  "Power electronics",
  "Energy conversion",
  "Linear circuits",
  "Communication systems",
  "Laboratory 2",
];

const TIMELINE = [
  {
    years: "2023 – now",
    title: "Team commander, now acting company operations officer",
    text: "Sayeret Carmeli, IDF reserves. Plans missions end to end, runs the company's drone team.",
  },
  {
    years: "2019 – 2023",
    title: "Combat team sergeant",
    text: "Sayeret Golani. Complex operations, guided-missile and observation systems. Certificate of Appreciation from the unit commander.",
  },
  {
    years: "2024 – now",
    title: "Volunteering",
    text: "PERACH, HaNamer Association, Student Hub.",
  },
];

const EMAIL = "liavpinhas@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/liav-pinhas-49030a3a6";
const GITHUB = "https://github.com/liav-pinhas";

function Readout({ label, value }) {
  return (
    <div>
      <span className="lab">{label}</span>
      <span className="v">{value}</span>
      <div className="bar">
        <i style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Chips({ items, dashed }) {
  return (
    <div className={dashed ? "chips o" : "chips"}>
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <main className="sheet">
      <section className="box rise" id="top">
        <div className="tb">
          <img src="/liav-photo.jpg" alt="Liav Pinhas" />
          <div className="main">
            <span className="status">
              <i />
              OPEN TO STUDENT POSITIONS · POWER ELECTRONICS &amp; HARDWARE
            </span>
            <h1>Liav Pinhas</h1>
            <p className="sub">
              Third-year Electrical &amp; Electronics Engineering student. Simulates converters in PSIM,
              builds and measures them in the lab.
            </p>
            <div className="actions">
              <a className="btn p" href="/Liav_Pinhas_CV.pdf" download>
                Download CV
              </a>
              <a className="btn" href={`mailto:${EMAIL}`}>
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <div className="meta">
          <div>
            <span className="lab">Institution</span>
            <b>Ariel University</b>
          </div>
          <div>
            <span className="lab">Degree</span>
            <b>B.Sc. EE · 2024–2028</b>
          </div>
          <div>
            <span className="lab">Reserve duty</span>
            <b>Active, IDF</b>
          </div>
        </div>
      </section>

      <div className="scope rise" aria-hidden="true">
        <span>CH1 · 5 V/div · 2 ms/div</span>
        <svg viewBox="0 0 1000 120" preserveAspectRatio="none">
          <path
            className="grid"
            d="M0 30H1000M0 60H1000M0 90H1000M125 0V120M250 0V120M375 0V120M500 0V120M625 0V120M750 0V120M875 0V120"
          />
          <path
            className="tr"
            d="M0 60C60 0 120 0 180 60S300 120 360 60 480 0 540 60 660 120 720 60 840 0 900 60 1000 90 1000 60"
          />
        </svg>
      </div>

      <section className="box read rise" aria-label="Academic readouts">
        <Readout label="Cumulative average" value={96.55} />
        <Readout label="Year 1 · Dean's List" value={98.6} />
        <Readout label="Year 2" value={95.05} />
      </section>

      <div className="two rise">
        <section className="box pad">
          <h2>Course record</h2>
          <table>
            <tbody>
              {GRADES.map(([name, grade]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="box pad stack">
          <div>
            <h2>Simulation</h2>
            <Chips items={SIMULATION} />
          </div>
          <div>
            <h2>Bench</h2>
            <Chips items={BENCH} />
          </div>
          <div>
            <h2>In progress</h2>
            <Chips items={IN_PROGRESS} dashed />
          </div>
        </section>
      </div>

      <section className="box pad rise">
        <h2>Service and volunteering</h2>
        <ol className="tl">
          {TIMELINE.map((t) => (
            <li key={t.title}>
              <span className="y">{t.years}</span>
              <b>{t.title}</b>
              <p>{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="box pad ct rise" id="contact">
        <div>
          <span className="lab">Contact</span>
          <div className="mail">{EMAIL}</div>
        </div>
        <div className="btns">
          <a className="btn p" href="/Liav_Pinhas_CV.pdf" download>
            Download CV
          </a>
          <a className="btn" href={`mailto:${EMAIL}`}>
            Write to me
          </a>
          <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
