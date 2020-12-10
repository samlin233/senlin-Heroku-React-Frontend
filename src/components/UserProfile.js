import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Avatar, Row, Col, Form, Input, Button, DatePicker, Card } from "antd";
import moment from 'moment';
import { LikeOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';


class UserProfile extends React.Component {
    state = {
        username: localStorage.getItem('username') || 'shibai',
        loading: false,
        posts: [],
        profile: {
            follower: {
                list: []
            },
            following: {
                list: []
            },
            introduction: '',
            gender: '',
            birthday: '',
            rela_sta: '',
            location: '',
            school: '',
            company: '',
        }
    }

    componentDidMount() {
        this.getInfo()
    }

    getInfo() {
        var { username } = this.state
        fetch('https://cs148-python-backend.herokuapp.com/api/id_profile/' + username)
            .then(res => res.json())
            .then(res => {
                console.log('res ->> ', res);
                this.setState({
                    loading: true,
                    posts: res.posts,
                    profile: res.profile
                })
            })
    }

    onFinish = (val) => {
        var { username, profile } = this.state
        val.birthday = val.birthdayTime ? moment(val.birthdayTime).format('YYYY-MM-DD') : ''
        val.username = username
        val.picture = profile.picture
        // var {birthdayTime, ...data} = val
        // console.log('data -> :', data)

        fetch('https://cs148-python-backend.herokuapp.com/api/personalize', {
            method: 'POST',
            body: JSON.stringify(val),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(res => {
                if (res.check) {
                    // this.getInfo()
                    window.location.reload()
                } else {
                    alert('error')
                }
            }).catch(err => console.log(err));


    }

    onFinishFailed = () => {
    }


    render() {
        const {
            posts,
            profile,
            loading
        } = this.state

        return (
            <>
                {
                    loading ?
                        <div className="main-container">

                            
                        <div className="panel-block margin-top-20">

                            <Row>
                                <Col span={12} style={{ textAlign: 'center' }}>
                                    <Avatar size={120} src={profile.picture}></Avatar>
                                    <p>
                                        following : &nbsp;
                                        {profile.following.number}
                                    </p>
                                    <p>
                                        follower : &nbsp;
                                        {profile.follower.number}
                                    </p>
                                </Col>
                                <Col span={12}>
                                    <Form
                                        onFinish={this.onFinish}
                                        onFinishFailed={this.onFinishFailed}
                                    >
                                        <Form.Item
                                            label="introduction"
                                            name="introduction"
                                            initialValue={profile.introduction}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="gender"
                                            name="gender"
                                            initialValue={profile.gender}
                                        >
                                            <Input />
                                        </Form.Item>

                                        {/* <Form.Item
                                            label="birthday"
                                            name="birthdayTime"
                                            initialValue={moment(profile.birthday)|| ""}
                                        >
                                            <DatePicker formart="YYYY-MM-DD" />
                                        </Form.Item> */}

                                        <Form.Item
                                            label="rela_sta"
                                            name="rela_sta"
                                            initialValue={profile.rela_sta}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="location"
                                            name="location"
                                            initialValue={profile.location}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="school"
                                            name="school"
                                            initialValue={profile.school}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="company"
                                            name="company"
                                            initialValue={profile.company}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            label="hometown"
                                            name="hometown"
                                            initialValue={profile.hometown}
                                        >
                                            <Input />
                                        </Form.Item>


                                        <Form.Item>
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Row>

                            <div>
                                {
                                    posts.map((item, index) => (
                                        <Card key={index}>
                                            <Row gutter={16}>
                                                <Col span={8}>
                                                    <img width='50%' height='100%' src={item.image} alt="" />
                                                    <img width='50%' height='100%' src={item.author_image} alt="" />
                                                </Col>
                                                <Col span={16}>
                                                    <p>{item.title}</p>
                                                    <p>{item.text}</p>
                                                    <p>
                                                        &nbsp;&nbsp;
                                                        <UserOutlined /> {item.author}
                                                        &nbsp;&nbsp;
                                                        <LikeOutlined /> {item.like_list.length}
                                                        &nbsp;&nbsp;
                                                        <MessageOutlined /> {item.comment_list.length}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Card>
                                    ))
                                }
                            </div>


                        </div> </div>
                        :
                        null

                }

            </>
        )
    }

}

export default withRouter(UserProfile);
