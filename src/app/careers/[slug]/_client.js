"use client"

import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Work from "@/components/sections/Work";
import Footer from "@/components/layout/Footer";
import { SingleJobwithSlug } from "@/Utils/Services/services";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import axios from "axios";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
const Loader = dynamic(() => import("@/hooks/loader"), { ssr: false });

const CareerDetail = () => {
  const { slug } = useParams();
  const [Data, setData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const item = Data?.[0] || null;

  const [form, setForm] = useState({ name: "", email: "", phone: "", jobTitle: "", cvFile: null });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (slug) {
      SingleJobwithSlug(slug).then(setData).catch(console.error);
    }
  }, [slug]);

  useEffect(() => {
    if (item) setForm((prev) => ({ ...prev, jobTitle: item?.title?.rendered }));
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const validationErrors = {};
    if (!form.name) validationErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) validationErrors.name = "Name can only contain letters and spaces";
    if (!form.email) validationErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) validationErrors.email = "Invalid email format";
    if (!form.phone) validationErrors.phone = "Phone is required";
    else if (!/^[0-9]+$/.test(form.phone)) validationErrors.phone = "Phone number must contain only digits";
    if (!form.cvFile) validationErrors.cvFile = "CV file is required";
    else if (form.cvFile.type !== "application/pdf") validationErrors.cvFile = "Only PDF files are allowed";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    setErrors({});
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("jobTitle", form.jobTitle);
    if (form.cvFile) formData.append("cvFile", form.cvFile);

    try {
      const res = await axios.post("/api/submit", formData, { headers: { "Content-Type": "multipart/form-data" } });
      if (res.data.success) {
        setSuccessMsg("Application submitted successfully!");
        setForm({ name: "", email: "", phone: "", jobTitle: item?.title?.rendered || "", cvFile: null });
        setSubmitted(true);
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
      } else {
        setErrorMsg(res.data.message || "Submission failed!");
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!Data) return <Loader />;

  return (
    <>
<BreadcrumbSchema items={[
        { name: "Home", url: "https://quecko.com" },
        { name: "Careers", url: "https://quecko.com/careers" },
        { name: item?.title?.rendered || slug, url: `https://quecko.com/careers/${slug}` },
      ]} />

      <Header />
      <div className="details_career">
        <div className="inner_details_page">
          {item && (
            <>
              <section className="contact_us_main2">
                <div className="left_siide">
                  <p>Get Hired</p>
                  <h1>{item?.title?.rendered}</h1>
                  <h2>{item?.acf?.job_description}</h2>
                </div>
                <div className="right_sidde">
                  <input type="text" placeholder="Name" value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors((p) => ({ ...p, name: "" })); }} onFocus={() => submitted && setSubmitted(false)} />
                  {errors.name && <p style={{ color: "red" }} className="errror_mssg">{errors.name}</p>}

                  <input type="text" placeholder="Phone" value={form.phone} onChange={(e) => { setForm({ ...form, phone: e.target.value }); if (errors.phone) setErrors((p) => ({ ...p, phone: "" })); }} onFocus={() => submitted && setSubmitted(false)} />
                  {errors.phone && <p style={{ color: "red" }} className="errror_mssg">{errors.phone}</p>}

                  <input type="text" placeholder="Email@company.com" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); if (errors.email) setErrors((p) => ({ ...p, email: "" })); }} onFocus={() => submitted && setSubmitted(false)} />
                  {errors.email && <p style={{ color: "red" }} className="errror_mssg">{errors.email}</p>}

                  <div className="uploaded_divv">
                    <div className="cv_upload" onClick={() => fileInputRef.current.click()} style={{ cursor: "pointer" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                        <g clipPath="url(#clip0_795_1070)">
                          <path d="M11.4998 14.6666V9.16659M11.4998 9.16659L8.74984 10.9999M11.4998 9.16659L14.2498 10.9999M21.5832 13.7499C21.5832 11.7249 19.9415 10.0833 17.9165 10.0833C17.8948 10.0833 17.8736 10.0834 17.852 10.0838C17.4075 6.97394 14.7326 4.58325 11.4998 4.58325C8.93624 4.58325 6.72418 6.08662 5.69637 8.25983C3.30673 8.41624 1.4165 10.4039 1.4165 12.8331C1.4165 15.3644 3.46853 17.4167 5.99984 17.4167L17.9165 17.4166C19.9415 17.4166 21.5832 15.775 21.5832 13.7499Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs><clipPath id="clip0_795_1070"><rect width="22" height="22" fill="white" transform="translate(0.5)" /></clipPath></defs>
                      </svg>
                      Upload CV
                    </div>
                    <input ref={fileInputRef} type="file" accept="application/pdf" style={{ display: "none" }} onChange={(e) => { setForm((p) => ({ ...p, cvFile: e.target.files[0] })); if (errors.cvFile) setErrors((p) => ({ ...p, cvFile: "" })); }} />
                    {form.cvFile && <p style={{ marginTop: "0.5rem" }}>{form.cvFile.name}</p>}
                    {errors.cvFile && <p style={{ color: "red" }} className="errror_mssg">{errors.cvFile}</p>}
                    <h6>Max file size 10MB.</h6>
                  </div>

                  <div className="button_div">
                    <button onClick={handleSubmit} disabled={loading}>
                      {loading ? "Submitting..." : submitted ? "Submitted" : "Apply Now"}
                    </button>
                  </div>
                  {successMsg && <p style={{ color: "green", marginTop: "1rem" }}>{successMsg}</p>}
                  {errorMsg && <p style={{ color: "red", marginTop: "1rem" }}>{errorMsg}</p>}
                </div>
              </section>

              <div className="descriptions">
                <h4>Job description</h4>
                <h5>
                  <p dangerouslySetInnerHTML={{ __html: item?.content?.rendered?.replace(/&#8211;\s*/g, "")?.replace(/–\s*/g, "") }} />
                </h5>
              </div>
            </>
          )}
        </div>
      </div>
      <Work />
      <Footer />
    </>
  );
};

export default CareerDetail;
