import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  Accordion,
  AccordionItem,
  Tile,
  Link,
  TextArea,
  Modal,
  ModalWrapper,
  ListItem,
} from 'carbon-components-react';
import Sample from './Sample';
import logosmall from './logosmall.jpg';
import journal from './journal.jpg';
//import ListBox from 'carbon-components-react/lib/components/ListBox';
//import { StructuredList } from 'carbon-components';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Learn &amp; create with Euphony
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="Home">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      What is Euphony?
                    </h2>
                    <p className="landing-page__p">
                      Euphony is a digital system for studying music consisting
                      of means to annotate scores, design and organize a
                      practice journal unique to each score, and create a mood
                      board to display influences and inspirations unique to
                      each score. The system consists of a screen to view and
                      annotate scores, tools and resources, and a vibrant
                      community of contributors.
                    </p>
                    <Button>Learn more</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      //  className="landing-page__illo"
                      //src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                      src={logosmall}
                      alt="music illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Annotate">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <Tile style={{ width: '650px', margin: '0 auto' }}>
                      <Sample />
                    </Tile>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab {...props.tab} label="Practice">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    {/*Row of practicing hints*/}
                    <div className="bx--row landing-page__r3">
                      {/*  <div className="bx--col-md-4 bx--col-lg-4">
                        <h3
                          className="landing-page__label"
                          style={{ fontSize: 'large' }}>
                          Ways to Improve Your Practicing
                        </h3>
                      </div>
                      <div className="bx--col-md-4 bx--col-lg-4">
                        <h4>Do's and Don'ts</h4>
                        <ListItem>
                          Always have a plan or structure for your practice.
                        </ListItem>
                        <br />
                        <ListItem>
                          The most valuable part of any practice is the first
                          five to ten minutes, so don't use it to play through
                          passages you know, always use it to learn something
                          new.
                        </ListItem>
                        <br />
                        <ListItem>
                          Always choose small attainable targets. It is better
                          to get a little right than a lot wrong.
                        </ListItem>
                        <br />
                        <ListItem>
                          Don't start at the beginning: work at passages you
                          have previously identified as needing attention.
                        </ListItem>
                        <br />
                        <ListItem>
                          Try starting your practice at the end of the piece,
                          working backwards in sections. This means that as you
                          progress it will be easier
                        </ListItem>
                        <br />
  </div>*/}
                      {/*Row of practicing hints*/}
                      <div className="bx--row landing-page__r3">
                        <div className="bx--col-md-4 bx--col-lg-4">
                          <h3
                            className="landing-page__label"
                            style={{ fontSize: 'large' }}>
                            Ways to Improve Your Practicing
                          </h3>
                        </div>
                        <div className="bx--col-md-4 bx--col-lg-4">
                          <h4>Do's and Don'ts</h4>
                          <ListItem>
                            Always have a plan or structure for your practice.
                          </ListItem>
                          <br />
                          <ListItem>
                            The most valuable part of any practice is the first
                            five to ten minutes, so don't use it to play through
                            passages you know, always use it to learn something
                            new.
                          </ListItem>
                          <br />
                          <ListItem>
                            Always choose small attainable targets. It is better
                            to get a little right than a lot wrong.
                          </ListItem>
                          <br />
                          <ListItem>
                            Don't start at the beginning: work at passages you
                            have previously identified as needing attention.
                          </ListItem>
                          <br />
                          <ListItem>
                            Try starting your practice at the end of the piece,
                            working backwards in sections. This means that as
                            you progress it will be easier
                          </ListItem>
                          <br />
                        </div>

                        <div className="bx--col-md-4 bx--col-lg-4">
                          <h4>Hints for Practicing</h4>
                          <ListItem>
                            Simple Musicle Repetition: With each repetition use
                            a higher and more deliberate finger lift and bolder
                            tone (this will train the physical memory more
                            thoroughly), but don't forget to revert to the right
                            sound, touch and control. Look at the hand(s) and
                            learn the passage from memory.
                          </ListItem>
                          <br />
                          <ListItem>
                            Practicing Without Pedal: Practicing without pedal
                            ils the staple diet of many professional pianists.
                            It encourages "from there to there" movements and
                            therefore enchances the physical memory.
                          </ListItem>
                          <br />
                          <ListItem>
                            Slow Motion Performance Practice: Play through the
                            passage with the precise sound, shape, balance,
                            pedal, and technique you will use but slowly
                            following the score. Then repeat, but this time look
                            at your hands, first the left, then right. Challenge
                            yourself to play more musically each repetition.
                          </ListItem>
                          <br />
                          <ListItem>
                            Textural Highlighting: Try the passage through with
                            the left hand louder than the right hand and vice
                            versa. In more complex pieces, divide up the score
                            into its horizontal elements (tune and
                            accompaniment, left hand and right hand, vocal lines
                            or instrumental parts). Then project each part in
                            turn confidently, deliberately, and with dynamic
                            shape, keeping all other parts reliably pianissimo.
                          </ListItem>
                          <br />
                          <ListItem>
                            Note Highlighting: To highlight a note, play
                            pianissimo from a point just before the note
                            concerned. Then stop immediately before it, holding
                            the previous note(s). Accent the next troublesome
                            note with the finger and stop. Do this several
                            times, then again, this time without hesitating
                            before the note.
                          </ListItem>
                          <br />
                        </div>

                        <div className="bx--col-md-4 bx--col-lg-4">
                          <h4>Habits of Excellence</h4>
                          <ListItem>
                            Ease: Although ease includes many physical features,
                            such as supple movement, facility originates in the
                            mind. It arises from building awareness of your
                            playing or singing actions. To foster easeful
                            habits, choose manageable material, and practice
                            your effort meter far out of the struggle zone.
                            Establish a standard for easefulness whereby you
                            make the quality of your experience while playing or
                            singing as significant as the quality of the music
                            you produce.
                          </ListItem>
                          <br />
                          <ListItem>
                            Expressiveness: The only way you can be an
                            expressive performer, is to be an expressive
                            practicer. Permeate your practice with eloquence,
                            bringing out the peaks of phrases and taper the
                            sound as phrases repose. Make strong beats strong
                            and weak beats weak.
                          </ListItem>
                          <br />
                          <ListItem>
                            Accuracy: Start with accuracy and continue being
                            exact at each phase of ripening a piece. Work in
                            ways that make slip-ups rare. During repetitions of
                            material, you must uphold precision of thought and
                            action. Don't let your practice create muddled
                            habits.
                          </ListItem>
                          <br />
                          <ListItem />
                          <br />
                          <ListItem />
                          <br />
                        </div>
                      </div>

                      <div>
                        <TextArea
                          style={{
                            fontWeight: 'bold',
                            fontSize: 'large',
                            color: 'gray',
                            height: '75px',
                          }}>
                          More hints below
                        </TextArea>
                      </div>
                      {/* accordion hints begins*/}
                      <Accordion>
                        <AccordionItem
                          title="Do's and Don'ts of Practicing"
                          style={{ fontSize: 'large', fontWeght: 'bold' }}>
                          <ListItem>
                            Remember that a mistake played is a mistake
                            practiced and learnt: go slowly and think carefully.
                            Play at the speed of no mistakes.
                          </ListItem>
                          <br />
                          <ListItem>
                            When practicing in sections, know where you are
                            going to start, but more importantly where you are
                            going to stop.
                          </ListItem>
                          <br />
                          <ListItem>
                            Never play without a reason. Always consider why you
                            are playing a passage again, whether it is to
                            correct a note, shape a phrase, improve the
                            artication/tone, learn the kinetics/mechanics,
                            finger, etc.
                          </ListItem>
                          <br />
                          <ListItem>
                            You can achieve a lot away from the instrument. Clap
                            rhythms, conduct, sing phrases and compare sections.
                            There may then be less to learn than you think
                          </ListItem>
                          <br />
                          <ListItem>
                            Rarely, if ever, begin by performing a piece
                            through. Instead, finish practice by performing the
                            piece through. Then, use this as the basis for your
                            next practice: What were you happy with? What needs
                            further work, refinement, etc?
                          </ListItem>
                          <br />
                          <ListItem>
                            Swap around. If you get stuck on a passage, move on
                            or change the activity and come back to it later.
                          </ListItem>
                          <br />
                          <ListItem>
                            Several shorter practices, minimum 15 minutes,
                            through a day/week are far better than the
                            occasional marathon practice.
                          </ListItem>
                          <br />
                          <ListItem>
                            Imagine your teacher or the composer is standing at
                            your shoulder when you practice. What would they
                            say?
                          </ListItem>
                          <br />
                          <ListItem>
                            Record passages played in different ways and
                            experiement with musical ideas.
                          </ListItem>
                          <br />
                          <ListItem>
                            Never play through and stop for mistakes; this
                            merely reinforces stopping when you make a mistake
                            during a performance?
                          </ListItem>
                          <br />
                          <ListItem>
                            Work at a passage or perform a passage (musically),
                            deciding beforehand where you will stop. Then go
                            over the passages that need work.
                          </ListItem>
                          <br />
                          <ListItem style={{ fontWeight: 'bolder' }}>
                            If you ever find your brain wandering, stop and take
                            a break.
                          </ListItem>
                          <br />
                          <p>
                            From From{' '}
                            <span style={{ fontStyle: 'italic' }}>
                              The Piano Teacher's Survival Guide
                            </span>
                            Anthony Willians (Faber Music)
                          </p>
                        </AccordionItem>
                        <AccordionItem title="Hints for Practicing">
                          <ListItem>
                            Contextualizing: Put practiced note(s) or passages
                            back in context by starting just before, slowing
                            down into them and then palying on for a few beats.
                            Finally, play through the section at tempo.
                          </ListItem>
                          <br />
                          <ListItem />
                          <br />
                          <ListItem />
                          <br />
                          <p>
                            From From{' '}
                            <span style={{ fontStyle: 'italic' }}>
                              The Piano Teacher's Survival Guide
                            </span>
                            Anthony Willians (Faber Music)
                          </p>
                        </AccordionItem>
                        <AccordionItem title="Habits of Excellence">
                          <p>
                            From{' '}
                            <span style={{ fontStyle: 'italic' }}>
                              The Musician's Way
                            </span>{' '}
                            - Gerald Klickstein (Oxford University Press)
                          </p>
                        </AccordionItem>
                      </Accordion>

                      {/* accordion hints ends*/}
                      <Tile style={{ height: '285px' }}>
                        <img
                          style={{
                            width: '200px',
                            height: '250px',
                            float: 'right',
                          }}
                          //  className="landing-page__illo"
                          //src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                          src={journal}
                          alt="music illustration"
                        />
                        <TextArea style={{ height: '285px' }}>
                          Daily Practice Log
                        </TextArea>
                      </Tile>

                      {/* The below 3 div closures and Tab closure must be left*/}
                    </div>
                  </div>
                </div>
              </div>
            </Tab>

            {/* Next section */}
            <Tab {...props.tab} label="Influences">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    Euphony provides biographies of artists, sources of their
                    inspiration, links to what others have written, and a board
                    to enable to creatively combine it all into a source unique
                    to the user.
                  </div>

                  <div>
                    {/*   <Tile>
                  <Accordion>
    <AccordionItem title="Do's and Don'ts of Practicing" style={{fontSize:  "large", fontWeght:  "bold"}}>
    <ListItem>Always have a plan or structure for your practice.</ListItem>
            <br />
            <ListItem>The most valuable part of any practice is the first five to ten minutes, so don't use it to play through passages you know, always use it to learn something new.</ListItem>
              <br />
            <ListItem>Always choose small attainable targets.  It is better to get a little right than a lot wrong.</ListItem>
              <br />
              <ListItem>Don't start at the beginning:  work at passages you have previously identified as needing attention.</ListItem>
            <br />
            <ListItem>Try starting your practice at the end of the piece, working backwards in sections.  
              This means that as you progress it will be easier</ListItem>
              <br />
            <ListItem>Remember that a mistake played is a mistake practiced and learnt:  go slowly and think carefully.  
              Play at the speed of no mistakes.</ListItem>
              <br />
        
        </AccordionItem>
    <AccordionItem title="Title 2"><p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</p></AccordionItem>
    <AccordionItem title="Title 3"><p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</p></AccordionItem>
  </Accordion>
                   </Tile> */}
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bx--row landing-page__r3">
        <div className="bx--col-md-4 bx--col-lg-4">
          <h3 className="landing-page__label">The Principles</h3>
        </div>
        <div className="bx--col-md-4 bx--col-lg-4">Euphony is Annotation</div>
        <div className="bx--col-md-4 bx--col-lg-4">Euphony is Productive</div>
        <div className="bx--col-md-4 bx--col-lg-4">
          Euphony is Inspirational
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
