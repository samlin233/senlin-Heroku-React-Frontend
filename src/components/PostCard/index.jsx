import React from "react"
import "./index.scss"
import { LikeOutlined, CommentOutlined } from '@ant-design/icons';

function PostCard(props) {
    let {detail} = props;
    return <>
        <div className="content-item" onClick={() => {
            props.history.push(`/PostDetail?id=${detail._id.$oid}`)
        }}>
            <div className="item-pic">
                <img src={detail.image === "1" ? "http://chuantu.xyz/t6/741/1607254549x1700340449.png" : detail.image} alt="" />
            </div>
            <div className="content-left-right">
                <div className="text">
                    {detail.text}
                </div>
                <div className="sign">
                    <div className="author">
                        {detail.author}
                    </div>
                    <div className="other">
                        <div className="comment">
                            <CommentOutlined /><span className="padding-left-5">{detail.comment_list.length}</span>
                        </div>
                        <div className="like">
                            <LikeOutlined /><span className="padding-left-5">{detail.like_number}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default PostCard
