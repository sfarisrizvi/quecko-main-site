import React, { useEffect, useState } from 'react'
import Header from './component/Landing/header'
import Work from './component/Landing/work'
import Footer from './component/Landing/footer'
import Link from 'next/link'
import { fetchAllJobs, JobBasedcategory } from '@/Utils/Services/services'

const career = () => {
  const [alljobs, setalljobs] = useState([])
  const [designJobs, setDesignJobs] = useState([]);
  const [developmentJobs, setDevelopmentJobs] = useState([]);
  const [marketingJobs, setMarketingJobs] = useState([]);



  const getAlljobs = async (id) => {
    try {
      const data = await fetchAllJobs(id)
      setalljobs(data)
     } catch (error) {
      console.error(error)
    }

  }

  const getSingleJob = async (id) => {
    try {
      const data = await JobBasedcategory(id)
      setalljobs(data)
 
      if (id === 160) {
        setDesignJobs(data);
      } else if (id === 148) {
        setDevelopmentJobs(data);
      } else if (id === 151) {
        setMarketingJobs(data);
      }


    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAlljobs()
  }, [])


 


  return (
    <>
      <Header />
      <section className='careeer_results'>

        <div className='inner_carrer'>
          <h1>Careers</h1>

          <div>
            <nav className='navsectiontabs'>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"
                  onClick={getAlljobs}
                >All</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"
                  onClick={() => getSingleJob(160)}
                >Design</button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"
                  onClick={() => getSingleJob(148)}

                >Development </button>

                <button className="nav-link " id="nav-home1-tab" data-bs-toggle="tab" data-bs-target="#nav-home1" type="button" role="tab" aria-controls="nav-home1" aria-selected="false"
                  onClick={() => getSingleJob(151)}

                >Marketing</button>
                {/* <button className="nav-link" id="nav-profile1-tab" data-bs-toggle="tab" data-bs-target="#nav-profile1" type="button" role="tab" aria-controls="nav-profile1" aria-selected="false">Research</button>
                <button className="nav-link" id="nav-contact1-tab" data-bs-toggle="tab" data-bs-target="#nav-contact1" type="button" role="tab" aria-controls="nav-contact1" aria-selected="false">Testing </button>
                <button className="nav-link " id="nav-home2-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">Deployment </button>
                <button className="nav-link" id="nav-profile2-tab" data-bs-toggle="tab" data-bs-target="#nav-profile2" type="button" role="tab" aria-controls="nav-profile2" aria-selected="false">Feedback</button> */}
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              {/* all  */}
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                {/* <Link href="/careerdetail"> */}

                <div className='all_tab_Data'>

                  {alljobs.map((item, index) => (

                    <>
                      {/* <Link href="/careerdetail"> */}
                      <Link href={`/careerdetail?slug=${item?.slug}`} key={index}>
                        {/* /blogdetail?slug=${item?.slug} */}

                      {/* <Link key={index} href={`/${item?.slug}`}> */}


                        <div className='inner_tab_cards' >
                          <div className='left_side'>
                            <h2>{item?.title?.rendered}</h2>
                            {/* <p>{item?.yoast_head_json?.og_description}</p> */}
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.acf?.job_description
                                  ?.replace(/&#8211;\s*/g, '')
                                  ?.replace(/–\s*/g, '')
                              }}
                            />


                            <div className='buttons_innner'>
                              <button className='full'>Fulltime</button>
                              <button className='remote'>Remote</button>
                            </div>
                          </div>
                          <div className='right_side'>
                            {/* <Link href="/careerdetail"> */}
                            <button>Apply Now</button>

                            {/* </Link> */}
                          </div>
                        </div>
                      </Link>
                    </>

                  ))}




                </div>

              </div>
              {/* Design */}
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                {designJobs.map((item, index) => (

                  <div className='all_tab_Data' key={index}>
                    <div className='inner_tab_cards'>
                      <div className='left_side'>
                        <h2>{item?.title?.rendered}</h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item?.acf?.job_description
                              ?.replace(/&#8211;\s*/g, '')
                              ?.replace(/–\s*/g, '')
                          }}
                        />                      <div className='buttons_innner'>
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


                  </div>
                ))}

              </div>
              {/* Development */}
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">     <div className='all_tab_Data'>
                {developmentJobs.map((item, index) => (

                  <div className='inner_tab_cards' key={index}>
                    <div className='left_side'>
                      <h2>{item?.title?.rendered}</h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item?.acf?.job_description
                            ?.replace(/&#8211;\s*/g, '')
                            ?.replace(/–\s*/g, '')
                        }}
                      />
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
                ))}


              </div>
              </div>
              {/* Marketing */}
              <div className="tab-pane fade  " id="nav-home1" role="tabpanel" aria-labelledby="nav-home1-tab">
                <div className='all_tab_Data'>


                  {marketingJobs.map((item, index) => (

                    <div className='inner_tab_cards' key={index}>
                      <div className='left_side'>
                        <h2>{item?.title?.rendered}</h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item?.acf?.job_description
                              ?.replace(/&#8211;\s*/g, '')
                              ?.replace(/–\s*/g, '')
                          }}
                        />
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
                  ))}


                </div>
              </div>



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
