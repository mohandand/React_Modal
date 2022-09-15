import * as React from 'react';
import './styles.css';
import Accordion from './Accordion'; //

export default function App() {
  return (
    <div className="App">
      <div>
        <h2>Accordion</h2>
      </div>
      <Accordion
        title={'Title of The Accrdion-1 '}
        content={'The coneten of Accrdion is funny'}
      />
      <Accordion
        title={'Title of The Accrdion-1'}
        content={
          'The coneten of Accrdion is funny Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Easily Improve Any Text. Fix Punctuation Errors. AI Writing Assistant. Improve Word Choice.'
        }
      />
      <Accordion
        title={'Title of The Accrdion-1'}
        content={'The coneten of Accrdion is funny'}
      />
    </div>
  );
}
