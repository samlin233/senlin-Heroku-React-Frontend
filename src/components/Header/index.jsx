import React, { useEffect, useState } from "react"
import { Button, Radio, Select, Dropdown, Menu } from 'antd';
import { EditOutlined, DownOutlined } from '@ant-design/icons';
const { Option } = Select;
import configMenu from "./config"
import "./index.scss"


const menu = (
    <Menu>
        <Menu.Item>
            <span onClick={() => {
                window.location.href = "/UserProfile"
            }}>UserProfile</span>
        </Menu.Item>
        <Menu.Item>
            <span onClick={() => {
                localStorage.removeItem("username")
                window.location.href = "/"
            }}>Log out</span>
        </Menu.Item>
    </Menu>
);
function Header(props) {
    let [name, setname] = useState("")
    // useEffect(() => {
    //     setInterval(() => {
    //         console.log(localStorage.getItem('username'))
    //         if (localStorage.getItem('username')) {
    //             setname(localStorage.getItem('username'))
    //         }
    //         setname("")
    //     }, 500)
    // }, [])
    return <>
        <div className="header-wrap-plus">
            <div className="header-container">
                <div className="logo" onClick={() => {
                    window.location.href = "/"
                }}>
                    {/* <img src="https://static.soyoung.com/sy-pre/logo-main-1590063001647.png" alt=""/> */}
                    <div className="text">
                        Show Your Beauty
                    </div>
                </div>
                <div className="menu-list">
                    {
                        configMenu.map((item, index) => {
                            return <div className="menu-item" key={index} onClick={() => { window.location.href = item.path }}>
                                <span><a href={item.path}>{item.title}</a></span>
                                {item.MenuRoute.includes(window.location.pathname) ? <div className="line"></div> : <></>}
                            </div>
                        })
                    }
                </div>
                <div className="edit">
                    <Button icon={<EditOutlined />} block type="primary" href="/CreatNewPost">Write</Button>
                </div>
                <div className="info">
                    {
                        !localStorage.getItem('username') ?
                            <div className="no-login">
                                <Button type="text" block size={"small"} onClick={() => {
                                    window.location.href = "/LogInPage"
                                    // props.history.push("")
                                }}>
                                    Sign in
                                 </Button>
                                <Button block href="/RegisterPage">Sign up</Button>
                            </div> :
                            <div className="user-name">
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        {localStorage.getItem('username')} <DownOutlined />
                                    </a>
                                </Dropdown>
                            </div>
                    }
                </div>
            </div>
        </div>
        <div className="header-wrap"></div>

    </>
}

export default Header
