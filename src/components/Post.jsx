import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ProfileImg from "../images/profile.png";
import TickIcon from "../images/icons/tick.svg";
import Image from "../images/image.jpg";
import HeartIcon from "../images/icons/heart.svg";
import CommentIcon from "../images/icons/comment.svg";
import BookmarkIcon from "../images/icons/bookmark.svg";
import MoreIcon from "../images/icons/more.svg";
import ProfileImg2 from "../images/profile-2.png";
import SelectImage from "../images/icons/select.svg";
import "../styles/Post.css";
import "swiper/css";
import "swiper/css/pagination";

function Post() {
  return (
    <div className="post">
      <div style={{ padding: 15 }}>
        <div className="profile">
          <div>
            <img src={ProfileImg} alt="" />
            <div>
              <div>
                <h3>안녕 나 응애 </h3>
                <img src={TickIcon} alt="" />
                <p>1일전</p>
              </div>
              <p>165cm • 53kg</p>
            </div>
          </div>

          <div>팔로우</div>
        </div>

        <div className="title">
          지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
        </div>

        <div className="description">
          지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시
          어떤 상품이 제일 괜찮았어?
          <br />
          <br />
          후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일
          재밌었다던데 맞아???
          <br />
          <br />
          올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌
          사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던
          팝들 있으면 어땠는지 후기 좀 공유해주라~~!
        </div>

        <div className="hashtags">
          <p>#2023</p>
          <p>#TODAYISMONDAY</p>
          <p>#TOP</p>
          <p>#POPS!</p>
          <p>#WOW</p>
          <p>#ROW</p>
        </div>
      </div>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={Image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="interactions">
        <div>
          <img src={HeartIcon} alt="" />
          <p>5</p>
        </div>
        <div>
          <img src={CommentIcon} alt="" />
          <p>5</p>
        </div>
        <div>
          <img src={BookmarkIcon} alt="" />
        </div>
        <div>
          <img src={MoreIcon} alt="" />
        </div>
      </div>

      <div className="comments">
        <div className="profile" style={{ alignItems: "flex-start" }}>
          <div>
            <img src={ProfileImg} alt="" />
            <div>
              <div>
                <h3>안녕 나 응애 </h3>
                <img src={TickIcon} alt="" />
                <p>1일전</p>
              </div>
            </div>
          </div>

          <div style={{ background: "none" }}>
            <img src={MoreIcon} alt="" />
          </div>
        </div>

        <div>
          <p>
            어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
            아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
            기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
            올라온다고 하니 꼭 봐주세용~!
          </p>

          <div className="reaction">
            <div>
              <img src={HeartIcon} alt="" height={15} />
              <p>5</p>
            </div>
            <div>
              <img src={CommentIcon} alt="" height={15} />
              <p>5</p>
            </div>
          </div>
        </div>

        <div className="reply">
          <div className="profile" style={{ alignItems: "flex-start" }}>
            <div>
              <img src={ProfileImg2} alt="" />
              <div>
                <div>
                  <h3>ㅇㅅㅇ</h3>
                  <p style={{ marginLeft: 5 }}>1일전</p>
                </div>
              </div>
            </div>

            <div style={{ background: "none" }}>
              <img src={MoreIcon} alt="" />
            </div>
          </div>

          <div>
            <p>오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다</p>

            <div className="reaction">
              <div>
                <img src={HeartIcon} alt="" height={15} />
                <p>5</p>
              </div>
            </div>
          </div>
        </div>

        <div className="input">
          <img src={SelectImage} alt="" />
          <input type="text" placeholder="댓글을 남겨주세요." />
          <button>등록</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
