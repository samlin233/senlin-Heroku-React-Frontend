import React, { useState, useEffect } from "react"
import { Descriptions, Form, Avatar, Input, Button, Divider, Comment, Spin, Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, CommentOutlined, LikeOutlined } from '@ant-design/icons';
import "./index.scss";
import fetch from "../../utils/fetch";
import query from "../../utils/query";
const { TextArea, Search } = Input;

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

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
                src={props.detail.username_image}
                alt="Han Solo"
            />
        }
        content={
            <div className="content-rate">
                <p>{props.detail.content}</p>
                <div className="rate">
                    <div>
                        <span className="label font-size-16">overall review：</span>
                        <Rate
                            defaultValue={1}
                            value={props.detail.overall || 4}
                            disabled
                            character={({ index }) => {
                                return customIcons[index + 1];
                            }}
                        />
                    </div>
                    <div>
                        <span className="label font-size-16">safety：</span>
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
                        <span className="label font-size-16">expense：</span>
                        <Rate
                            defaultValue={1}
                            value={props.detail.expense || 4}
                            disabled
                            character={({ index }) => {
                                return customIcons[index + 1];
                            }}
                        />
                    </div>
                    <div>
                        <span className="label font-size-16">service：</span>
                        <Rate
                            defaultValue={1}
                            value={props.detail.service || 4}
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


function Editor(props) {
    let [safety, setsafety] = useState(0)
    let [overall, setOverall] = useState(0)
    let [expense, setExpense] = useState(0)
    let [service, setService] = useState(0)
    return <>
        <Form.Item>
            <TextArea rows={4} onChange={props.onChange} value={props.value} />
        </Form.Item>
        <div>
            <span className="font-size-16">Overall review：</span>
            <Rate
                defaultValue={1}
                value={safety}
                // onHoverChange={(e) => {
                //     console.log(e.target.value)
                // }}
                onChange={(e) => {setsafety(e)}}
                character={({ index }) => {
                    return customIcons[index + 1];
                }}
            />
        </div>
        <div>
            <span className="font-size-16">Safety：</span>
            <Rate
                defaultValue={1}
                value={overall}
                // onHoverChange={(e) => {setsafety(e)}}
                onChange={(e) => {setOverall(e)}}
                character={({ index }) => {
                    return customIcons[index + 1];
                }}
            />
        </div>
        <div>
            <span className="font-size-16">Expense：</span>
            <Rate
                defaultValue={1}
                value={expense}
                // onHoverChange={(e) => {setsafety(e)}}
                onChange={(e) => {setExpense(e)}}
                character={({ index }) => {
                    return customIcons[index + 1];
                }}
            />
        </div>
        <div>
            <span className="font-size-16">Service：</span>
            <Rate
                defaultValue={1}
                value={service}
                // onHoverChange={(e) => {setsafety(e)}}
                onChange={(e) => {setService(e)}}
                character={({ index }) => {
                    return customIcons[index + 1];
                }}
            />
        </div>
        <Form.Item>
            <Button className="margin-top-10" htmlType="submit" onClick={()=>{
                props.onSubmit(safety,overall,expense,service)
                setsafety(0)
                setOverall(0)
                setExpense(0)
                setService(0)
            }} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
};
function HospitalDetail(props) {

    let { id } = query()
    let [value, setValue] = useState("")

    let [detail, setDetail] = useState(null)

    const style = {
        width: '400px',
        height: '220px'
    };
    useEffect(() => {
        getDetail()
    }, [])

    const getDetail = async () => {
        let res = await fetch.get(`/api/hospital/viewmore/${id}`);
        setDetail(res)
        console.log(res)
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = async (safety,overall,expense,service) => {
        if (!localStorage.getItem('username')) {
            message.info('You need to log in');
            return;
        }
        let res = await fetch.post(`/api/hospital/write_comment/${id}`, {
            username: localStorage.getItem('username'),
            content: value,
            safety,
            overall,
            expense,
            service
        })
        setValue("")
        getDetail()
    }

    return <>
        <main className="main-container">
            <div className="panel-block margin-top-20">
                <div className="detail-info">
                    <div className="info">
                        <Descriptions column={1} title={<span className="font-size-20">{detail && detail.hospital.name}</span>}>
                            <Descriptions.Item label={<span className="font-size-16">Introduction</span>}>
                                <span className="font-size-16">{(detail && detail.hospital.properties.NAICS_DESC) || " No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China"}</span>
                            </Descriptions.Item>
                            <div>
                                <span className="font-size-16">Overall review：</span>
                                <Rate
                                    defaultValue={1}
                                    value={detail && detail.hospital.scores.overall || 4}
                                    disabled
                                    character={({ index }) => {
                                        return customIcons[index + 1];
                                    }}
                                />
                            </div>
                            <div>
                                <span className="font-size-16">Safety：</span>
                                <Rate
                                    defaultValue={1}
                                    value={detail && detail.hospital.scores.safety || 4}
                                    disabled
                                    character={({ index }) => {
                                        return customIcons[index + 1];
                                    }}
                                />
                            </div>
                            <div>
                                <span className="font-size-16">Expense：</span>
                                <Rate
                                    defaultValue={1}
                                    value={detail && detail.hospital.scores.expense || 4}
                                    disabled
                                    character={({ index }) => {
                                        return customIcons[index + 1];
                                    }}
                                />
                            </div>
                            {/* <Descriptions.Item label={<span className="font-size-16">Expense</span>}>
                                <span className="font-size-16">{(detail && detail.hospital.scores.expense) || " No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China"}</span>
                            </Descriptions.Item> */}
                            <div>
                                <span className="font-size-16">Service：</span>
                                <Rate
                                    defaultValue={1}
                                    value={detail && detail.hospital.scores.service || 4}
                                    disabled
                                    character={({ index }) => {
                                        return customIcons[index + 1];
                                    }}
                                />
                            </div>
                        </Descriptions>
                    </div>
                    <div className="hospital-pic">
                        <Map
                            google={props.google}
                            zoom={14}
                            initialCenter={
                                {
                                    lat: detail && detail.hospital.properties.LATITUDE,
                                    lng: detail && detail.hospital.properties.LONGITUDE
                                }
                            }
                            style={style}
                        >
                            <Marker
                                lat={detail && detail.hospital.properties.LATITUDE}
                                lng={detail && detail.hospital.properties.LONGITUDE}
                                name={detail && detail.hospital.properties.NAME}
                                color="red"
                            />

                        </Map>
                    </div>
                </div>
                <Divider />

                <Comment
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <>
                            <Editor
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                value={value}
                            />

                        </>

                    }
                />
                {
                    detail && detail.comment.map((item, index) => {
                        return <ExampleComment detail={item} key={index} id={id} callback={() => { }}>
                        </ExampleComment>
                    })
                }
            </div>
        </main>
    </>
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCUQcjo7uuh8p9J7SRcK-0jnXb3la7IKac'
})(HospitalDetail);

