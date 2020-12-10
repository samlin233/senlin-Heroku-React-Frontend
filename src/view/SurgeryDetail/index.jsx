import React, { useState, useEffect } from "react"
import { Row, Rate, Input, Button,Form, Divider, Tabs, Descriptions, Spin, Avatar, Comment } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, CommentOutlined, LikeOutlined } from '@ant-design/icons';
import "./index.css"
import { getSurgeryDetail } from "../../api"
import fetch from "../../utils/fetch"

import PostCard from "../../components/PostCard"
import query from "../../utils/query"
const { Search , TextArea} = Input;
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
function Editor(props) {
    let [safety, setsafety] = useState(0)
    let [overall, setOverall] = useState(0)
    let [expense, setExpense] = useState(0)
    let [service, setService] = useState(0)
    return <>
        <Form.Item>
            <TextArea rows={4} onChange={props.onChange} value={props.value} />
        </Form.Item>
        {/* <div>
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
        </div> */}
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
        {/* <div>
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
        </div> */}
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
function SurgeryDetail(props) {

    let [activeList, setactiveList] = useState([])
    let [detail, setDeatil] = useState(null)
    let [loading, setloading] = useState(false)
    let [value, setValue] = useState("")


    let { id } = query()

    useEffect(() => {
        getDetail()
    }, [])

    const getDetail = async () => {
        setloading(true)
        let res = await getSurgeryDetail({
            id: id
        })
        setactiveList(res.comment)
        setDeatil(res.surgery)
        setloading(false)
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = async (safety,overall,expense,service) => {
        if (!localStorage.getItem('username')) {
            message.info('You need to log in');
            return;
        }
        let res = await fetch.post(`/api/surgery/write_comment/${id}`, {
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

    return <main className="main-container">
        <Spin spinning={loading}>
            <div className="panel-block margin-top-20">
                <Descriptions title={<span className="font-size-20">{detail && detail.name}</span>}>
                    <Descriptions.Item label={<span className="font-size-16">introduction</span>}>
                        <span className="font-size-16">{(detail && detail.introduction) || " No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China"}</span>
                    </Descriptions.Item>
                </Descriptions>
                <div className="margin-top-10">
                    <div>
                        <span>Safety：</span>
                        <Rate
                            defaultValue={1}
                            value={detail && detail.scores.safety}
                            disabled
                            character={({ index }) => {
                                return customIcons[index + 1];
                            }}
                        />
                    </div>
                    <div>
                        <span>Expense：</span>
                        <Rate
                            defaultValue={1}
                            value={detail && detail.scores.expense}
                            disabled
                            character={({ index }) => {
                                return customIcons[index + 1];
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="panel-block margin-top-20">

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
                    activeList.map((item, index) => {
                        return <ExampleComment detail={item} {...props} key={item._id.$oid} />
                    })
                }
            </div>
        </Spin>
    </main>
}

export default SurgeryDetail