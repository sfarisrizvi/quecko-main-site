import axios from "axios"
import { api_url, BASE_URL } from "../Enviroment"


const get_all_blogs = `${api_url}posts`

export const getAllBlogs = async (perPage = 100) => {
    try {
        const blogsResponse = await axios.get(`${get_all_blogs}?per_page=${perPage}`)
        return blogsResponse?.data
    }
    catch (error) {
        console.error(error)
    }

}
export const getBlogsdetails = async (slug) => {
    try {
        const Blogsdetails = await axios.get(`${get_all_blogs}?slug=${slug}`)
        const posts = Blogsdetails?.data
        if (Array.isArray(posts) && posts.length > 0) {
            const post = posts[0]
            if (post.authors && Array.isArray(post.authors) && post.authors[0]) {
                const termId = post.authors[0].term_id
                if (termId) {
                    try {
                        const authorRes = await axios.get(`https://dev.quecko.com/wp-json/publishpress-authors/v1/authors/${termId}`)
                        const authorData = authorRes?.data
                        if (authorData) {
                            let rawDescription = authorData.description || post.authors[0].description || ""
                            // Remove any h3 headings from the description
                            rawDescription = rawDescription.replace(/<h3[^>]*>.*?<\/h3>/gi, "").trim()
                            post.authors[0].description = rawDescription
                            post.authors[0].job_title = authorData.job_title || post.authors[0].job_title || ""
                            post.authors[0].user_url = authorData.user_url || post.authors[0].user_url || ""
                        }
                    } catch (err) {
                        console.error("Error fetching author details:", err)
                    }
                }
            }
        }
        return posts
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


export const blogcategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts?categories=161`);
        return response?.data;
    } catch (error) {
        console.error("Error fetching all jobs:", error);
        return [];
    }
};
 