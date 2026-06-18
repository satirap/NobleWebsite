import { useState } from 'react';
import { NobleStore } from './store.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Clients from './components/Clients.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CMS from './components/CMS.jsx';

function App() {
  const [lang, setLang] = useState('th');
  const [data, setData] = useState(() => NobleStore.load());

  const update = (d) => {
    setData(d);
    NobleStore.save(d);
  };

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  };

  return (
    <>
      <Header lang={lang} setLang={setLang} go={go} data={data} />
      <Hero lang={lang} go={go} data={data} />
      <Sections lang={lang} go={go} data={data} />
      <Clients lang={lang} go={go} data={data} />
      <Contact lang={lang} data={data} />
      <Footer lang={lang} data={data} />
      <CMS lang={lang} data={data} onChange={update} />
    </>
  );
}

export default App;
