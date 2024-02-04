import React, { useEffect, useState } from 'react'
import HeaderPart from '../main/headerr/header'
import { useParams } from 'react-router-dom'
import {axiosInstance} from '../../API/index'
import ReactImages from '../../components/ReactImage/ReactImages'

const DetailedPage = () => {

  const {id} = useParams()
  const [data, setData] = useState({})

  const GetOneFlat = async () => {
    try {
        const response = await axiosInstance.get(`/main/flats/${id}`)
        setData(response.data)
    } catch (e) {

    } finally {

    }
  }

  useEffect(() => {
    GetOneFlat()
  }, [])

  return (
    <div>
        <HeaderPart />
        <ReactImages 
          photos={data?.flat_images}
        />
    </div>
  )
}

export default DetailedPage