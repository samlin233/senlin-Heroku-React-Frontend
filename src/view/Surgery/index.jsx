import React, {useState, useEffect} from "react"
import {  Row, Col, Input, Button, Divider, Tabs  } from 'antd';
import { LikeOutlined, CommentOutlined } from '@ant-design/icons';
import "./index.css"
import fetch from 'isomorphic-fetch';
const { Search } = Input;
const { TabPane } = Tabs;
function Surgery() {


    let [activeList, setactiveList] = useState([])


    useEffect(() => {
        getList()
    }, [])

    const getList = async () => {
        fetch('https://cs148-python-backend.herokuapp.com/api/surgery', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(res=>{
           setactiveList(res.surgery)
         }).catch(err => console.log(err))
        
    }
    return <main className="container">
        <div className="search">
        <Search placeholder="Basic usage" />

        </div>
       <div className="content">

        <div className="content-left">
            <Tabs defaultActiveKey="1" onChange={() => {}}>
                <TabPane tab="Breast Augmentation" key="1"></TabPane>
                <TabPane tab="Liposuction" key="2"></TabPane>
                <TabPane tab="Eyelid Surgery" key="3"></TabPane>
                <TabPane tab="Nose Reshaping" key="4"></TabPane>
                <TabPane tab="Facelift" key="5"></TabPane>
         </Tabs>
         {
               activeList.map((item, index) => {
                   return <>
                        <div className="content-item" key={index}>
                    <div className="item-pic">
                        {/* <div className="item-pic-url">

                        </div> */}
                        <img src={item.image === "1" ? "http://chuantu.xyz/t6/741/1607254549x1700340449.png" : item.image} alt=""/>
                    </div>
                    <div className="content-left-right">
                        <div className="text">
                            {item.text}
                        </div>
                        <div className="sign">
                            <div className="author">
                                {item.author}
                            </div>
                            <div className="other">
                                <div className="comment">
                                    <CommentOutlined className="margin-right-5"/>{item.comment_list.length}
                                </div>
                                <div className="like">
                                    <LikeOutlined className="margin-right-5"/>{item.like_number}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                   </>
               })
           }
        </div>
           <div className="content-right">

           </div>
            
       </div>
    </main>
}
export default Surgery