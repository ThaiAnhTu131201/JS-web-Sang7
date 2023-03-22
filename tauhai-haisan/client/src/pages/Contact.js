import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiSupport,BiPhoneCall,BiMailSend} from 'react-icons/bi'
import contact from "../image/contact.png"
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
        <div className='row contactus' >
          <div className='col-md-6'>
            <img
              src={contact}
              alt="contact"
              style={{width:"100%"}}
            />
          </div>
          <div className='col-md-4'>
            <h1 className='bg-dark p-2 text-white text-center'>Contact us</h1>
            <p className='text-justify mt-2'>
              bla balslablablaslkajasjdlaksjdlajslajsdlkajsldjalskdjl
              jaljajdlksadajsld
            </p>
            <p className='mt-3'>
              <BiMailSend /> : tuthai13122001@gmail.com
            </p>
            <p className='mt-3'>
              <BiPhoneCall /> : 0329862213
            </p>
            <p className='mt-3'>
              <BiSupport /> : Không có bạn ơi
            </p>
          </div>
        </div>
    </Layout>
  )
}

export default Contact