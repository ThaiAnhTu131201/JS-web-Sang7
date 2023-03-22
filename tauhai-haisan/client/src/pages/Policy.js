import React from 'react'
import Layout from "../components/Layout/Layout"
import policy from "../image/policy.jpeg"

const Policy = () => {
  return (
    <Layout title={"Policy"}>
       <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={policy}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Nhóm Tấu Hài</p>
          <p>Thái Anh Tú - Nhóm Trưởng</p>
          <p>Nguyễn Kha Ly</p>
          <p>Trần Tuấn Phú</p>
          <p>Trương Hạo Nguyên</p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy