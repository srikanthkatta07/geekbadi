import React from 'react';
import processData from '../../data/process';
import excutionData from '../../data/excution';

function About() {
  return (
    <section className='about-section site-restrict'>
      <div>
        {/* Process section */}
        <div className='process-section' id='about-page'>
          <h2 className='title text-center'>Our Mission</h2>
          <p className='text text-center'>
            Transform rural engineering students to a level where they don’t
            need any software gudience after they get into software industry.
            Transforming them to be software geeks by providing good remote
            assistance and good platform where they solve the real time problems
            with technology.
          </p>
          <ul className='process'>
            {processData.map(processItem => {
              return (
                <li className='float-left card'>
                  <div className='content text-center'>
                    <div className={'icon ' + processItem.icon} />
                    <h5>{processItem.label}</h5>
                    <p>{processItem.description}</p>
                  </div>
                </li>
              );
            })}
            <li className='clear' />
          </ul>
        </div>

        {/* Programs */}
        <div className='program-section' id='programs-page'>
          <h2 className='title text-center'>
            Geekbadi Internship Program (GBIP)
          </h2>
          <p className='text text-center'>
            GBIP is software internship program for engineering students. It is
            a 3 months intensive program to improve the technical and
            communication skills of rural engineering students. This program
            divided into 4 stages
          </p>
          <ul className='program'>
            {excutionData.map(excutionItem => {
              return (
                <li className='table'>
                  <div className='program-title table-cell text-center vertical-middle'>
                    <div className={'icon ' + excutionItem.icon} />
                    <h5>{excutionItem.label}</h5>
                  </div>
                  <p className='program-desc table-cell vertical-middle'>
                    {excutionItem.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Camps */}
        <div className='camps table'>
          <div className='table-cell'>
            <div className='camp-card'>
              <h4 className='camp-type text-center'>SGBIP</h4>
              <div>
                <h5 className='inline'>Name: </h5>
                <p className='inline font-weight-300'>
                  Summer GeekBadi Internship Program.
                </p>
              </div>
              <div>
                <h5 className='inline'>Duration: </h5>
                <p className='inline font-weight-300'>May 1st - July 31st.</p>
              </div>
              <div>
                <h5 className='inline'>Gudience: </h5>
                <p className='inline font-weight-300'>
                  August 1st - October 31st{' '}
                </p>
              </div>
            </div>
          </div>
          <div className='table-cell'>
            <div className='camp-card'>
              <h4 className='camp-type text-center'>WGBIP</h4>
              <div>
                <h5 className='inline'>Name: </h5>
                <p className='inline inline font-weight-300'>
                  Winter GeekBadi Internship Program.
                </p>
              </div>
              <div>
                <h5 className='inline'>Duration: </h5>
                <p className='inline font-weight-300'>Dec 1st - Feb 27th.</p>
              </div>
              <div>
                <h5 className='inline'>Gudience: </h5>
                <p className='inline font-weight-300'>March 1st - May 31st </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
