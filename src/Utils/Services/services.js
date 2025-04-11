import axios from "axios"
import { api_url, BASE_URL } from "../Enviroment"


const get_all_blogs = `${api_url}posts`

export const getAllBlogs = async () => {
    try {
        const blogsResponse = await axios.get(`${get_all_blogs}?per_page=100`)
        return blogsResponse?.data
    }
    catch (error) {
        console.error(error)
    }

}
export const getBlogsdetails = async (slug) => {
    try {
        const Blogsdetails = await axios.get(`${get_all_blogs}?slug=${slug}`)
        return Blogsdetails?.data
    }
    catch (error) {
        console.error(error)
    }

}


export const RelatedBlogs = async (id) => {
    try {
        const relatedblogs = await axios.get(`${get_all_blogs}?categories=${id}`)
        return relatedblogs?.data?.slice(0, 4);    
    }
    catch (error) {
        console.error(error)
    }

}



// Fetch all jobs
export const fetchAllJobs = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/job?per_page=100`);
        return response?.data;
    } catch (error) {
        console.error("Error fetching all jobs:", error);
        return [];
    }
};


export const JobBasedcategory = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/job?job_category=${id}`);
        return response?.data;
    } catch (error) {
        console.error("Error fetching all jobs:", error);
        return [];
    }
};


export const SingleJobwithSlug = async (slug) => {
    try {
        const response = await axios.get(`${BASE_URL}/job?slug=${slug}`);
        return response?.data;
    } catch (error) {
        console.error("Error fetching all jobs:", error);
        return [];
    }
};

// Service ID
// service_qr5nkgc
// Template ID
// template_1frxkzp
// Public Key
// S3BtKGfSoUb93s0HO