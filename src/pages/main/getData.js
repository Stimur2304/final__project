import { axiosInstance } from "../../API"

export const GetData = async()=>{
    const response = await axiosInstance('/main/flats/')
    return response.data.results
}