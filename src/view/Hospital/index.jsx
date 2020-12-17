import React, { useEffect, useState } from "react"
import { Row, Col, Input, Button, Divider, Tabs, Rate, Descriptions, Spin } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, CommentOutlined, LikeOutlined, SafetyCertificateTwoTone, InsuranceTwoTone } from '@ant-design/icons';
import fetch from "../../utils/fetch"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import "./index.scss"
const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
};
const { Search } = Input;

function Hospital(props) {

    const style = {
        width: '320px',
        height: '220px'
    };

    let [value, setValue] = useState("") 
    let [list, setList] = useState([])
    let [loading, setloading] = useState(false)


    const handelSearch = async () => {
        setloading(true)
        let res = await fetch.post("/api/search", {
            type: "hospital",
            key_word: value
        })
        setloading(false)
        setList(res.list)
    }

    useEffect(() => {
        getHospatil()
    }, [])

    const getHospatil = async () => {
        let res = await fetch.get("/api/hospital")
        setList(res.hospital)
    }
    return <main className="main-container">
        <div className="search margin-top-20">
            <Search
                value={value}
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onChange={(e) => {setValue(e.target.value)}}
                onSearch={() => {handelSearch() }}
            />
        </div>
        <Spin spinning={loading}>
        <div className="panel-block margin-top-20 padding-top-40">
            {
                list.map((item, index) => {
                    return <div className="hospital-item" key={index}>
                        <div className="hospital-pic" onClick={(e) => { e.stopPropagation() }}>
                            {/* <img src="http://chuantu.xyz/t6/741/1607254549x1700340449.png" alt="" /> */}
                            <Map
                                google={props.google}
                                zoom={14}
                                initialCenter={
                                    {
                                        lat: item.properties.LATITUDE,
                                        lng: item.properties.LONGITUDE
                                    }
                                }
                                style={style}
                            >
                                <Marker
                                    lat={item.properties.LATITUDE}
                                    lng={item.properties.LONGITUDE}
                                    name={item.properties.NAME}
                                    color="red"
                                />

                            </Map>
                        </div>
                        <div className="hospital-content" onClick={() => {
                            console.log(111)
                            props.history.push(`/HospitalDetail?id=${item._id.$oid}`)
                        }}>
                            <div className="hospital-title">
                                <div className="hospital-name">
                                    {item.name}
                                    <SafetyCertificateTwoTone className="padding-left-5" twoToneColor="#52c41a" />
                                </div>
                                <div className="hospital-roat">

                                    （ {item.properties.NAICS_CODE} ）
                            </div>

                            </div>
                            <div className="hospital-info margin-top-10">
                                <Descriptions column={1}>
                                    <Descriptions.Item label="Resource">
                                        {item.properties.TYPE}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Address">
                                        {item.properties.ADDRESS}
                                    </Descriptions.Item>
                                </Descriptions>
                                <div>
                                    <span>Overall review：</span>
                                    <Rate
                                        defaultValue={1}
                                        value={item.scores.overall}
                                        disabled
                                        character={({ index }) => {
                                            return customIcons[index + 1];
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        </Spin>
    </main>
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCUQcjo7uuh8p9J7SRcK-0jnXb3la7IKac'
})(Hospital);
