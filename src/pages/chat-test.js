import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/chat-test.css"
import { StaticImage } from "gatsby-plugin-image"

const Chat = ({data}) => (
  <Layout>
     <Seo title="Chat" />
     <div className="chat-box">
         <div className="chat-face">
             <StaticImage
               src="../images/test1.png"
               width={90}
               height={90}
               quality={95}
               formats={["AUTO", "WEBP", "AVIF"]}
               alt="自分のチャット画像です。"
             />
         </div>
         <div className="chat-area">
             <div className="chat-hukidashi">
             ふきだしなのですーふきだしですーふきだー
             </div>
         </div>
     </div>
     <div className="chat-box-right">
         <div className="chat-face-right">
             <StaticImage
                   src="../images/test2.png"
                   width={90}
                   height={90}
                   quality={95}
                   formats={["AUTO", "WEBP", "AVIF"]}
                   alt="誰かのチャット画像です。"
                 />
         </div>
         <div className="chat-area-right">
             <div className="chat-hukidashi-right someone">
             ふきだしだよ<br/>
             へへへ
             </div>
         </div>
     </div>
     <div className="chat-box-top">
         <div className="chat-face-top">
             <StaticImage
               src="../images/test1.png"
               width={90}
               height={90}
               quality={95}
               formats={["AUTO", "WEBP", "AVIF"]}
               alt="自分のチャット画像です。"
             />
         </div>
         <div className="chat-area-top">
             <div className="chat-hukidashi-top">
             ふきだしなのですーふきだしですーふきだー
             </div>
         </div>
     </div>
     <div className="chat-box-top1">
         <div className="chat-face-top1">
             <StaticImage
               src="../images/test1.png"
               width={90}
               height={90}
               quality={95}
               formats={["AUTO", "WEBP", "AVIF"]}
               alt="自分のチャット画像です。"
             />
         </div>
         <div className="chat-area-top1">
             <div className="chat-hukidashi-top1">
             ふきだしなのですーふきだしですーふきだー
             </div>
         </div>
     </div>
     <div className="chat-box-bottom1">
         <div className="chat-area-bottom1">
             <div className="chat-hukidashi-bottom1">
             ふきだしなのですーふきだしですーふきだー
             </div>
         </div>
         <div className="chat-face-bottom1">
             <StaticImage
               src="../images/test1.png"
               width={90}
               height={90}
               quality={95}
               formats={["AUTO", "WEBP", "AVIF"]}
               alt="自分のチャット画像です。"
             />
         </div>
     </div>

     <Link to="/">Back to home</Link>
   </Layout>
 )
export default Chat;

export const query = graphql `
  query {
    site {
        siteMetadata {
          author
          description
          title
        }
      }
  }
`