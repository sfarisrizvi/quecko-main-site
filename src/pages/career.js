import React from 'react'
import Header from './component/Landing/header'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'
import Link from 'next/link'

const career = () => {
  return (
    <>
        <Header />
      <section className='careeer_results'>
    
        <div className='inner_carrer'>
          <h1>Careers</h1>

          <div>
            <nav className='navsectiontabs'>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Design</button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Development </button>

                <button className="nav-link " id="nav-home1-tab" data-bs-toggle="tab" data-bs-target="#nav-home1" type="button" role="tab" aria-controls="nav-home1" aria-selected="false">Marketing</button>
                <button className="nav-link" id="nav-profile1-tab" data-bs-toggle="tab" data-bs-target="#nav-profile1" type="button" role="tab" aria-controls="nav-profile1" aria-selected="false">Research</button>
                <button className="nav-link" id="nav-contact1-tab" data-bs-toggle="tab" data-bs-target="#nav-contact1" type="button" role="tab" aria-controls="nav-contact1" aria-selected="false">Testing </button>
                <button className="nav-link " id="nav-home2-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">Deployment </button>
                <button className="nav-link" id="nav-profile2-tab" data-bs-toggle="tab" data-bs-target="#nav-profile2" type="button" role="tab" aria-controls="nav-profile2" aria-selected="false">Feedback</button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className='all_tab_Data'>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Blockchain developer</h2>
                      <p>We are looking for a highly capable blockchain developer to design, implement, and distribute a secure blockchain-based network. You will be analyzing our blockchain needs, designing.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Fulltime</button>
                        <button className='remote'>Remote</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>

                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>UX/UI designer</h2>
                      <p>Join our team as a UX/UI designer where you will create user-friendly interfaces and enhance our applications' overall user experience. Collaborate with product managers to develop wireframes and prototypes.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Parttime</button>
                        <button className='remote'>Hybrid</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Data analyst</h2>
                      <p>We are seeking a data analyst to interpret complex data sets and provide actionable insights. You will be responsible for analyzing trends and presenting findings to help guide business decisions.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Contract</button>
                        <button className='remote'>On-site</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className='all_tab_Data'>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Blockchain developer</h2>
                      <p>We are looking for a highly capable blockchain developer to design, implement, and distribute a secure blockchain-based network. You will be analyzing our blockchain needs, designing.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Fulltime</button>
                        <button className='remote'>Remote</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>

                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>UX/UI designer</h2>
                      <p>Join our team as a UX/UI designer where you will create user-friendly interfaces and enhance our applications' overall user experience. Collaborate with product managers to develop wireframes and prototypes.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Parttime</button>
                        <button className='remote'>Hybrid</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Data analyst</h2>
                      <p>We are seeking a data analyst to interpret complex data sets and provide actionable insights. You will be responsible for analyzing trends and presenting findings to help guide business decisions.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Contract</button>
                        <button className='remote'>On-site</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                </div></div>
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">     <div className='all_tab_Data'>
                <div className='inner_tab_cards'>
                  <div className='left_side'>
                    <h2>Blockchain developer</h2>
                    <p>We are looking for a highly capable blockchain developer to design, implement, and distribute a secure blockchain-based network. You will be analyzing our blockchain needs, designing.</p>
                    <div className='buttons_innner'>
                      <button className='full'>Fulltime</button>
                      <button className='remote'>Remote</button>
                    </div>
                  </div>
                  <div className='right_side'>
                    <Link href="/careerdetail">
                      <button>Apply Now</button>

                    </Link>
                  </div>
                </div>
                <div className='inner_tab_cards'>
                  <div className='left_side'>
                    <h2>UX/UI designer</h2>
                    <p>Join our team as a UX/UI designer where you will create user-friendly interfaces and enhance our applications' overall user experience. Collaborate with product managers to develop wireframes and prototypes.</p>
                    <div className='buttons_innner'>
                      <button className='full'>Parttime</button>
                      <button className='remote'>Hybrid</button>
                    </div>
                  </div>
                  <div className='right_side'>
                    <Link href="/careerdetail">
                      <button>Apply Now</button>
                    </Link>
                  </div>
                </div>
                <div className='inner_tab_cards'>
                  <div className='left_side'>
                    <h2>Data analyst</h2>
                    <p>We are seeking a data analyst to interpret complex data sets and provide actionable insights. You will be responsible for analyzing trends and presenting findings to help guide business decisions.</p>
                    <div className='buttons_innner'>
                      <button className='full'>Contract</button>
                      <button className='remote'>On-site</button>
                    </div>
                  </div>
                  <div className='right_side'>
                    <Link href="/careerdetail">
                      <button>Apply Now</button>
                    </Link>
                  </div>
                </div>
              </div></div>
              <div className="tab-pane fade  " id="nav-home1" role="tabpanel" aria-labelledby="nav-home1-tab">
                <div className='all_tab_Data'>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Blockchain developer</h2>
                      <p>We are looking for a highly capable blockchain developer to design, implement, and distribute a secure blockchain-based network. You will be analyzing our blockchain needs, designing.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Fulltime</button>
                        <button className='remote'>Remote</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>

                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>UX/UI designer</h2>
                      <p>Join our team as a UX/UI designer where you will create user-friendly interfaces and enhance our applications' overall user experience. Collaborate with product managers to develop wireframes and prototypes.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Parttime</button>
                        <button className='remote'>Hybrid</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Data analyst</h2>
                      <p>We are seeking a data analyst to interpret complex data sets and provide actionable insights. You will be responsible for analyzing trends and presenting findings to help guide business decisions.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Contract</button>
                        <button className='remote'>On-site</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-profile1" role="tabpanel" aria-labelledby="nav-profile1-tab">

                <div className='all_tab_Data'>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Blockchain developer</h2>
                      <p>We are looking for a highly capable blockchain developer to design, implement, and distribute a secure blockchain-based network. You will be analyzing our blockchain needs, designing.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Fulltime</button>
                        <button className='remote'>Remote</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>

                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>UX/UI designer</h2>
                      <p>Join our team as a UX/UI designer where you will create user-friendly interfaces and enhance our applications' overall user experience. Collaborate with product managers to develop wireframes and prototypes.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Parttime</button>
                        <button className='remote'>Hybrid</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Data analyst</h2>
                      <p>We are seeking a data analyst to interpret complex data sets and provide actionable insights. You will be responsible for analyzing trends and presenting findings to help guide business decisions.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Contract</button>
                        <button className='remote'>On-site</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-contact1" role="tabpanel" aria-labelledby="nav-contact1-tab">        <div className='all_tab_Data'>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Blockchain developer</h2>
                      <p>We are looking for a highly capable blockchain developer to design, implement, and distribute a secure blockchain-based network. You will be analyzing our blockchain needs, designing.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Fulltime</button>
                        <button className='remote'>Remote</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>

                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>UX/UI designer</h2>
                      <p>Join our team as a UX/UI designer where you will create user-friendly interfaces and enhance our applications' overall user experience. Collaborate with product managers to develop wireframes and prototypes.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Parttime</button>
                        <button className='remote'>Hybrid</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Data analyst</h2>
                      <p>We are seeking a data analyst to interpret complex data sets and provide actionable insights. You will be responsible for analyzing trends and presenting findings to help guide business decisions.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Contract</button>
                        <button className='remote'>On-site</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                </div></div>
              <div className="tab-pane fade  " id="nav-home2" role="tabpanel" aria-labelledby="nav-home2-tab">
              <div className='all_tab_Data'>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Blockchain developer</h2>
                      <p>We are looking for a highly capable blockchain developer to design, implement, and distribute a secure blockchain-based network. You will be analyzing our blockchain needs, designing.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Fulltime</button>
                        <button className='remote'>Remote</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>

                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>UX/UI designer</h2>
                      <p>Join our team as a UX/UI designer where you will create user-friendly interfaces and enhance our applications' overall user experience. Collaborate with product managers to develop wireframes and prototypes.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Parttime</button>
                        <button className='remote'>Hybrid</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Data analyst</h2>
                      <p>We are seeking a data analyst to interpret complex data sets and provide actionable insights. You will be responsible for analyzing trends and presenting findings to help guide business decisions.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Contract</button>
                        <button className='remote'>On-site</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-profile2" role="tabpanel" aria-labelledby="nav-profile2-tab">        <div className='all_tab_Data'>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Blockchain developer</h2>
                      <p>We are looking for a highly capable blockchain developer to design, implement, and distribute a secure blockchain-based network. You will be analyzing our blockchain needs, designing.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Fulltime</button>
                        <button className='remote'>Remote</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>

                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>UX/UI designer</h2>
                      <p>Join our team as a UX/UI designer where you will create user-friendly interfaces and enhance our applications' overall user experience. Collaborate with product managers to develop wireframes and prototypes.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Parttime</button>
                        <button className='remote'>Hybrid</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className='inner_tab_cards'>
                    <div className='left_side'>
                      <h2>Data analyst</h2>
                      <p>We are seeking a data analyst to interpret complex data sets and provide actionable insights. You will be responsible for analyzing trends and presenting findings to help guide business decisions.</p>
                      <div className='buttons_innner'>
                        <button className='full'>Contract</button>
                        <button className='remote'>On-site</button>
                      </div>
                    </div>
                    <div className='right_side'>
                      <Link href="/careerdetail">
                        <button>Apply Now</button>
                      </Link>
                    </div>
                  </div>
                </div></div>
            </div>
          </div>
        </div>
      </section>
      <Work />
      <Footer />
    </>
  )
}

export default career
