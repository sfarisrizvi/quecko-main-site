import axios from "axios"
import { api_url } from "../Enviroment"


const get_all_blogs = `${api_url}posts`

export const getAllBlogs = async () => {
    try {
        const blogsResponse = await axios.get(`${get_all_blogs}?per_page=8`)
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