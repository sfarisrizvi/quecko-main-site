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

// export const Alljobsnewemployuy = async () => {
//     try {
//         const Alljobs = await axios.get(`${get_all_blogs}?job&per_page=100`);
//         return Alljobs?.data;
//     } catch (error) {
//         console.error("Error fetching jobs:", error);
//     }
// };


// export const SingleJobnewmployuyid = async (id) => {
//     try {
//         const SingleJob = await axios.get(`${get_all_blogs}?/job/${id}`);
//         return SingleJob?.data;
//     } catch (error) {
//         console.error("Error fetching jobs:", error);
//     }
// };

 

// export const SingleJobwithSlug = async (slug) => {
//     try {
//         const SingleJobs = await axios.get(`${get_all_blogs}?slug=${slug}`)
//         return SingleJobs?.data
//     }
//     catch (error) {
//         console.error(error)
//     }

// }


// export const JobsBasedoncategory = async (id) => {
//     try {
//         const JobsBase = await axios.get(`${get_all_blogs}?/job/job_category=${id}`);
//         return JobsBase?.data;
//     } catch (error) {
//         console.error("Error fetching jobs:", error);
//     }
// };


// export const JobCategories = async (id) => {
//     try {
//         const allJobsCategories = await axios.get(`${get_all_blogs}${id}`);
//         return allJobsCategories?.data;
//     } catch (error) {
//         console.error("Error fetching jobs:", error);
//     }
// };

// export const SingleJobcategorywithID = async (id) => {
//     try {
//         const ingleJobcate = await axios.get(`${get_all_blogs}${id}`);
//         return ingleJobcate?.data;
//     } catch (error) {
//         console.error("Error fetching jobs:", error);
//     }
// };






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