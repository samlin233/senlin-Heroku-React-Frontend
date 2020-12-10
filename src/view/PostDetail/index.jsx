import React, { useEffect, useState } from "react";
import "./index.scss";
import { Form, Avatar, Input, Button, Divider, Comment, Spin, message } from 'antd';
const { TextArea, Search } = Input;
import fetch from "../../utils/fetch"
import { getPostDetail } from "../../api"
import query from "../../utils/query"
let classList = [
    "ant-comment-content",
    "ant-comment-avatar",
    "ant-comment-actions",
    "panel-block margin-top-20",
    "ant-comment-content-author",
    "ant-comment-inner",
    "ant-comment"
]
function ExampleComment(props) {
    let [isCommentId, setIsCommentId] = useState("")
    let [comment, setcomment] = useState("")

    useEffect(() => {
        window.addEventListener("click", (e) => {
            e.nativeEvent && e.nativeEvent.stopImmediatePropagation()
            if (classList.includes(e.target.className) || e.target.id == "root") {
                if (isCommentId) {
                    return
                }
                setIsCommentId("")
            }
        })
    }, [])

    const handelComment = async () => {
        if (!localStorage.getItem('username')) {
            message.info('You need to log in');
            return;
        }
        let res = await fetch.post(`/viewmore/${props.id}`, {
            username: localStorage.getItem('username'),
            comment: comment,
            reply_id: isCommentId,
            reply_name: "",
            comment_id: isCommentId
        })
        setIsCommentId("")
        setcomment("")
        props.callback()
    }
    return <Comment
        actions={[<span className="reply" key="comment-nested-reply-to" onClick={() => {
            setIsCommentId(props.detail.content._id.$oid)
        }
        }>Reply to</span>]}
        author={<a>{props.detail.content.username}</a>}
        avatar={
            <Avatar
                src={props.detail.content.username_image}
                alt="Han Solo"
            />
        }
        content={<p>{props.detail.content.content}</p>}
    >
        {
            isCommentId == props.detail.content._id.$oid ?
                <Search
                    addonAfter={<Button>Cancel</Button>}
                    allowClear
                    value={comment}
                    onChange={(e) => { setcomment(e.target.value) }}
                    enterButton="Comment"
                    onSearch={() => { handelComment() }}
                /> :
                <></>
        }
        {props.children}
    </Comment>
}

function ReplysExampleComment(props) {
    let [isCommentId, setIsCommentId] = useState("")
    let [commentID, setCommentID] = useState("")
    let [replyValue, setReplyValue] = useState("")
    let [replyId, setReplyId] = useState("")
    let [name, setname] = useState("")

    useEffect(() => {
        window.addEventListener("click", (e) => {
            console.log(e.target.className)
            e.nativeEvent && e.nativeEvent.stopImmediatePropagation()
            if (classList.includes(e.target.className) || e.target.id == "root") {
                if (isCommentId) {
                    return
                }
                setIsCommentId("")
            }
        })
    }, [])

    const reply = async () => {
        if (!localStorage.getItem('username')) {
            message.info('You need to log in');
            return;
        }
        let res = await fetch.post(`/viewmore/${props.id}`, {
            username: localStorage.getItem('username'),
            comment: replyValue,
            reply_id: isCommentId,
            reply_name: name,
            comment_id: commentID
        })
        setname("")
        setIsCommentId("")
        setReplyValue("")
        props.callback()
    }

    return <Comment
        actions={[<span className="reply" key="comment-nested-reply-to" onClick={() => {
            setCommentID(props.detail.comment_id)
            setReplyId(props.detail.replay_id)
            setname(props.detail.username)
            setIsCommentId(props.detail._id.$oid)
        }}>Reply to</span>]}
        author={<a>{props.detail.username}</a>}
        avatar={
            <Avatar
                src={props.detail.username_image}
                alt="Han Solo"
            />
        }
        content={
            <p>
                {
                    props.detail.reply_name ?
                        <>Reply <span style={{ color: "#406599" }}>{props.detail.reply_name}：</span></> : <></>
                }
                {props.detail.content}
            </p>
        }
    >
        {
            isCommentId == props.detail._id.$oid ?
                <Search
                    addonAfter={<Button>Cancel</Button>}
                    allowClear
                    value={replyValue}
                    enterButton="Comment"
                    onChange={(e) => { setReplyValue(e.target.value) }}
                    onSearch={() => { reply() }}
                /> :
                <></>
        }


    </Comment>
}

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
        </Button>
        </Form.Item>
    </>
);




function PostDetatil(props) {
    // let id = "5fd1d20a16c9cf29e232ad34"
    let [value, setValue] = useState("")
    let [submitting, setSubmitting] = useState(false)
    let [postDetail, setPostDetail] = useState(null)

    let { id } = query()

    useEffect(() => {
        getPost()
    }, [])

    const getPost = async () => {
        let res = await getPostDetail({ id })
        setPostDetail(res)
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = async () => {
        if (!localStorage.getItem('username')) {
            message.info('You need to log in');
            return;
        }
        let res = await fetch.post(`/viewmore/${id}`, {
            username: localStorage.getItem('username'),
            comment: value,
            reply_id: id,
            reply_name: "",
            comment_id: ""
        })
        setValue("")
        getPost()
    }

    return <main className="main-container">
        <div className="panel-block margin-top-20">
            <div className="titel">
                <div className="author-image">
                    <img src="http://chuantu.xyz/t6/741/1607254549x1700340449.png" alt="" />
                </div>
                <div className="author">
                    {postDetail && postDetail.post.author}
                </div>
            </div>
            <h2>
                {postDetail && postDetail.post.title}
            </h2>
            <div className="img-list-show">
                {/* {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
                        return <div className="img-item" key={item}>
                            <img src="http://chuantu.xyz/t6/741/1607254549x1700340449.png" alt="" />
                        </div>
                    })
                } */}
                {
                    postDetail && postDetail.post.image ?
                        <div className="img-item">
                            <img src={postDetail && postDetail.post.image} alt="" />
                        </div>
                        :
                        <></>
                }
            </div>
            <div className="post-text">
                {
                    postDetail && postDetail.post.text == "1" ?
                        "应该有一个多月没来更新了吧，最近实在太忙了各位小仙女们你们还好吗？今天乘着天气不错去海边捞鱼摸虾玩哈哈哈哈，虽然只去了小半天但是收获还是挺不错呢～好了今天先这样吧改天再来跟各位小仙女们分享我的生活吧"
                        :
                        postDetail && postDetail.post.text
                }
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
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                    />
                }
            />

            {
                postDetail && postDetail.comment.map((item, index) => {
                    return <ExampleComment detail={item} key={index} id={id} callback={getPost}>
                        {
                            item.reply.map((replys, index) => {
                                return <ReplysExampleComment detail={replys} id={id} key={index} callback={getPost} />
                            })
                        }
                    </ExampleComment>
                })
            }
            {/* <ExampleComment>
                <ExampleComment>
                    <ExampleComment />
                    <ExampleComment />
                </ExampleComment>
            </ExampleComment> */}



        </div>
    </main>
}

export default PostDetatil
