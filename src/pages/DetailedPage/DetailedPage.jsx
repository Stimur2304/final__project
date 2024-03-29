import React, { useEffect, useState } from 'react'
import HeaderPart from '../main/headerr/header'
import { useParams } from 'react-router-dom'
import {axiosInstance} from '../../API/index'
import ReactImages from '../../components/ReactImage/ReactImages'
import './DetailedPage.css'
import Button from '@mui/material/Button';
import 'react-toastify/dist/ReactToastify.css';
import { showInfo } from '../../utils/alert'
import MyComponent from '../main/footer/footer'

const DetailedPage = () => {
  const {id} = useParams()
  const [data, setData] = useState({})

  const GetOneFlat = async () => {
    try {
        const response = await axiosInstance.get(`/main/flats/${id}`)
        setData(response.data)
        console.log(response.data);
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
      <div className='Image-container'>
        <div className='image-desc__detailed__div'>
          <div className='images'>
            <ReactImages 
            photos={data?.flat_images}/>
          </div>
        <div className='titles'>
          <h2>
            {data.title}
          </h2>
          <p>Район: {data.district}</p>
          <p>Этаж: {data.floor} из {data.number_of_floors}</p>
          <p>Площадь: {data.total_area}м²</p>
          <p>Документ: {data.document}</p>
          <p>Состояние: {data.condition}</p>
          <p>Описание: {data.description}</p>
          <p>Цена: {data.price}$</p>
          <p>ID {data.id}</p> 
         <div className='contacts-div'>
         <Button className='Detailed-button' variant="contained" onClick={()=>showInfo(data?.realtor?.FIO, data?.realtor?.phone)}><p className='button-text'>Контакты</p></Button>
         </div>
        </div>
     </div>
    </div>
    <MyComponent/>
    </div>
  )
}

export default DetailedPage