import React, { useState, useEffect } from "react"
import { Row, Col, Input, Button, Divider, Tabs, Spin, Avatar, Rate, Comment } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, CommentOutlined, LikeOutlined } from '@ant-design/icons';

import PostCard from "../../components/PostCard"
import "./index.scss"
import { getSurgery } from "../../api"

import fetch from "../../utils/fetch"
const { Search } = Input;
const { TabPane } = Tabs;
const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
};
function ExampleComment(props) {

    return <Comment
        actions={[]}
        author={<a>{props.detail.username}</a>}
        avatar={
            <Avatar
                src={props.detail.username_image || "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
                alt="Han Solo"
            />
        }
        content={
            <div className="content-rate">
                <p>{props.detail.content}</p>
                <div className="rate">
                    <div>
                        <span className="label font-size-16">Safety：</span>
                        <Rate
                            defaultValue={1}
                            value={props.detail.safety || 4}
                            disabled
                            character={({ index }) => {
                                return customIcons[index + 1];
                            }}
                        />
                    </div>
                    <div>
                        <span className="label font-size-16">Expense：</span>
                        <Rate
                            defaultValue={1}
                            value={props.detail.expense || 4}
                            disabled
                            character={({ index }) => {
                                return customIcons[index + 1];
                            }}
                        />
                    </div>
                    
                </div>
            </div>
        }
    >

        {props.children}
    </Comment>
}



function Surgery(props) {

    let [activeList, setactiveList] = useState([])
    let [value, setValue] = useState("") 
    let [loading, setloading] = useState(false)
    let [type, setType] = useState("5fbb99d85d4bf2c0dadf662a")

    useEffect(() => {
        getList()
    }, [type])

    const getList = async () => {
        setloading(true)
        let res = await fetch.get(`/api/surgery/viewmore/${type}`)
        setactiveList(res.comment)
        setloading(false)
    }
    const handelSearch = async () => {
        setloading(true)
        let res = await fetch.post("/api/search", {
            type: "surgery",
            key_word: value
        })
        setloading(false)
        setactiveList(res.comment)
    }
    return <main className="main-container">
        {/* <div className="search">
            <Search
                value={value}
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onChange={(e) => {setValue(e.target.value)}}
                onSearch={() => {handelSearch() }}
            />
        </div> */}
        <div className="content">
            <div className="content-left">
                <Tabs defaultActiveKey="1" onChange={(key) => {setType(key)}}>
                    <TabPane tab="Breast Augmentation" key="5fbb99d85d4bf2c0dadf662a"></TabPane>
                    <TabPane tab="Liposuction" key="5fbb9a905d4bf2c0dadf663d"></TabPane>
                    <TabPane tab="Eyelid Surgery" key="5fbb9a6d5d4bf2c0dadf6636"></TabPane>
                    <TabPane tab="Nose Reshaping" key="5fbb9a9f5d4bf2c0dadf6640"></TabPane>
                    <TabPane tab="Facelift" key="5fbb9a735d4bf2c0dadf6637"></TabPane>
                </Tabs>
                <Spin spinning={loading}>
                    {
                        activeList.map(item => {
                            // return <PostCard detail={item} {...props} key={item._id.$oid} />
                            return <ExampleComment detail={item} {...props} key={item._id.$oid}/>
                        })
                    }
                </Spin>
                
                <Divider />
                <div className="bottom-more">
                    <Button onClick={() => { props.history.push(`SurgeryDetail?id=${type}`) }}>ViewMore</Button>
                </div>
            </div>
            <div className="content-right"></div>
        </div>
    </main>
}
export default Surgery