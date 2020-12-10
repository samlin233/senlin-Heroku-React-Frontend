import React, { useEffect, useState } from "react"
import { Row, Col, Input, Button, Divider, Tabs, Spin, Descriptions, Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, CommentOutlined, LikeOutlined, SafetyCertificateTwoTone, InsuranceTwoTone } from '@ant-design/icons';
import PostCard from "../../components/PostCard"
import fetch from "../../utils/fetch"
import "./index.scss"
import "../Hospital/index.scss"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const { Search } = Input;
const { TabPane } = Tabs;
const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
};

function Post(props) {
    return <>
        {
            props.list.map((item, index) => {
                return <PostCard detail={item} {...props} key={index} />
            })
        }
    </>
}

function Hospital(props) {
    const style = {
        width: '320px',
        height: '220px'
    };
    return <>
        {
            props.list.map((item, index) => {
                return <div className="hospital-item" onClick={() => {
                    props.history.push(`/HospitalDetail?id=${item._id.$oid}`)
                }}>
                    <div className="hospital-pic">
                    <Map
                            google={props.google}
                            zoom={14}
                            initialCenter={
                                {
                                    lat: item && item.properties.LATITUDE,
                                    lng: item && item.properties.LONGITUDE
                                }
                            }
                            style={style}
                        >
                            <Marker
                                lat={item && item.properties.LATITUDE}
                                lng={item && item.properties.LONGITUDE}
                                name={item && item.properties.NAME}
                                color="red"
                            />

                        </Map>
                        {/* <img src="http://chuantu.xyz/t6/741/1607254549x1700340449.png" alt="" /> */}
                    </div>
                    <div className="hospital-content">
                        <div className="hospital-title">
                            <div className="hospital-name">
                                {item.name}
                                <SafetyCertificateTwoTone className="padding-left-5" twoToneColor="#52c41a" />
                                <InsuranceTwoTone className="padding-left-5" twoToneColor="#52c41a" />
                            </div>
                            <div className="hospital-roat">
                                <Rate
                                    defaultValue={1}
                                    value={4}
                                    disabled
                                    character={({ index }) => {
                                        return customIcons[index + 1];
                                    }}
                                />
                           （ {item.properties.NAICS_CODE} ）
                       </div>
                        </div>
                        <div className="hospital-info margin-top-10">
                            <Descriptions column={1}>
                                <Descriptions.Item label="资质">
                                    {item.properties.COUNTY}
                                </Descriptions.Item>
                                <Descriptions.Item label="地址">
                                    {item.properties.ADDRESS}
                                </Descriptions.Item>
                            </Descriptions>
                        </div>
                    </div>
                </div>
            })
        }

    </>
}

function Surgery(props) {
    return <>
        {
            props.list.map((item, index) => {
                return <div className="surgey-item" key={index} onClick={() => {
                    props.history.push(`SurgeryDetail?id=${item._id.$oid}`)
                }}>
                    <div className="info">
                        <Descriptions column={1} title={<span className="font-size-20">{item && item.name}</span>}>
                            <Descriptions.Item label={<span className="font-size-16">introduction</span>}>
                                <span className="font-size-16">{(item && item.introduction) || " No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China"}</span>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                    <div className="rate">
                        <div>
                            <span className="font-size-16">expense：</span>
                            <Rate
                                defaultValue={1}
                                value={item && item.scores.safety || 4}
                                disabled
                                character={({ index }) => {
                                    return customIcons[index + 1];
                                }}
                            />
                        </div>
                        <div>
                            <span className="font-size-16">safety：</span>
                            <Rate
                                defaultValue={1}
                                value={item && item.scores.safety || 4}
                                disabled
                                character={({ index }) => {
                                    return customIcons[index + 1];
                                }}
                            />
                        </div>
                    </div>
                </div>
            })
        }
    </>
}


function Content(type, props, list) {
    switch (type) {
        case "post":
            return <Post list={list} {...props} />
        case "hospital":
            return <Hospital list={list} {...props} />
        case "surgery":
            return <Surgery list={list} {...props} />
        case "user":
            return <User list={list} {...props} />
        default:
            break;
    }
}

function User(props) {
    return <>
        {
            props.list.map((item, index) => {
                return <div className="user-item" key={index}>
                    <div className="left">
                        <img src={item.picture} alt="" />
                    </div>
                    <div className="center">
                        <div>
                            <span>{item.username}</span>
                        </div>
                        <div className="follower">
                            <span>follower：</span>
                            <span>{item.follower.number}</span>
                        </div>
                    </div>
                    <div className="right">
                        {/* <Button type="primary">Primary Button</Button> */}
                    </div>
                </div>
            })
        }
    </>
}
function SearchView(props) {

    let [value, setValue] = useState("")
    let [type, setType] = useState("post")
    let [list, setList] = useState([])
    let [loading, setloading] = useState(false)

    useEffect(() => {
        getSearch()
    }, [type])

    const switchType = (key) => {
        setList([])
        if (key == type) return;
        setType(key)
    }

    const getSearch = async () => {
        setloading(true)
        let res = await fetch.post("/api/search", {
            type: type,
            key_word: value
        })
        setloading(false)
        setList(res.list)
    }

    return <main className="main-container">
        <div className="search margin-top-20">
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
                onSearch={() => { getSearch() }}
            />
        </div>
        <div className="panel-block margin-top-20">
            <Tabs defaultActiveKey="1" onChange={switchType}>
                <TabPane tab="Post" key="post"></TabPane>
                <TabPane tab="Hospital" key="hospital"></TabPane>
                <TabPane tab="Surgery" key="surgery"></TabPane>
                <TabPane tab="User" key="user"></TabPane>
            </Tabs>
            <Spin spinning={loading}>
                {Content(type, props, list)}
            </Spin>
        </div>
    </main>
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCUQcjo7uuh8p9J7SRcK-0jnXb3la7IKac'
})(SearchView);