<template>
    <div class="index">
        <transition name="slide-fade-Y">
            <ThemeStickyHeader v-if="showSticky" class="ThemeStickyHeader"></ThemeStickyHeader>
        </transition>
        <div class="index-content">
            <div class="index-content-wrap">
                <div class="section1" :style="{ 'backgroundImage':'url('+ urlIcon +')' }">
                    <div class="site-header">
                        <div class="site-header-list">
                            <div class="site-header-item-img">
                                <img :src="SLT_white" alt="" class="SLT_white_logo">
                            </div>
                            <div class="site-header-text-list">
                                <div class="site-header-item">
                                    <div class="text">INTRO</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">ABOUT</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">SLT BENEFITS</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">ICO FACTS</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">TEAM</div>
                                </div>
                                <div class="site-header-item">
                                    <div class="text">ROADMAP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section1-content">
                        <div class="wpb-wrapper">
                            <div class="title1">
                                SLTcoins
                            </div>
                            <div class="title2">
                                키즈산업 생태계 블록체인
                            </div>
                            <div class="content">
                                SLTcoin은 글로벌 최초의 'BOOK코인' 입니다. 실질적으로 사업이 진행중인 북트리와 연계하여 코인을 분배할 수 있어 시장 보급이 용이하며 빠른
                                거래활성화가 가능 합니다. SLTcoin은 북트리 브랜드 및 매출 상승에 따른 코인의 가치 동반상승을 기대할 수 있는 미래가 탄탄한 코인 입니다.
                            </div>
                            <div class="btn">
                                <div class="left">
                                    WHITE PAPERS
                                </div>
                                <div class="right">
                                    <!--<img src="" alt="" class="right-img">-->
                                    <h4>북트리 소개</h4>
                                </div>
                            </div>
                        </div>
                        <div class="ico">
                            <div class="ico-content">
                                <div class="ico-content-title">
                                    ICO Ends in
                                </div>
                                <div class="ico-content-date">
                                    <div class="ico-content-date-list">
                                        <TimeCard class="TimeCard"
                                                  :date="'DAY'"
                                                  :number="'09'"></TimeCard>
                                        <TimeCard class="TimeCard"
                                                  :date="'HR'"
                                                  :number="'09'"></TimeCard>
                                        <TimeCard class="TimeCard"
                                                  :date="'MIN'"
                                                  :number="'09'"></TimeCard>
                                        <TimeCard class="TimeCard"
                                                  :date="'SEC'"
                                                  :number="'09'"></TimeCard>
                                    </div>
                                </div>
                                <div class="ico-content-text">Token sales ends on 31st May, 2021</div>
                                <div class="ico-content-btn" @click="topage('buy')">
                                    BUY SLT COINS
                                </div>
                                <div class="money">
                                    <div class="text">
                                        10,000,000,000
                                    </div>
                                    <div class="tip">
                                        Collected for now
                                    </div>
                                </div>
                                <div class="progressBar">
                                    <div class="text">
                                        <div>1M</div>
                                        <div>10B</div>
                                    </div>
                                    <!--<div class="box"></div>-->
                                    <div class="bar">
                                        <div class="rate"></div>
                                        <div class="text">
                                            SLT coins
                                        </div>
                                    </div>
                                </div>
                                <div class="payImgList">
                                    <img :src="visa" alt="">
                                    <img :src="bit" alt="">
                                    <img :src="master" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section2">
                    <div class="section2-list">
                        <div class="section2-item" v-for="(item,index) in sectionImgs" :key="index">
                            <img :src="item" alt="">
                        </div>
                    </div>
                </div>
                <div class="section3" :style="{ 'backgroundImage':'url('+ section3Bg +')' }">
                    <div class="section3-list">
                        <div class="section3-item">
                            <div class="section3-item-left">
                                <div class="section3-item-box">
                                    <div class="img">
                                        <img src="" alt="" class="section3-item-box-img">
                                    </div>
                                    <div class="text">
                                        <div class="title">
                                            생태계
                                        </div>
                                        <div class="content">
                                            독서데이터로 유아 및 아동 개개인의 교육, 취향, 수준 데이터를 확보하고, 이를 통해 키즈산업 생태계를 구축하여 SLTcoin을 기본
                                            생태토큰으로 블록체인 플랫폼에 고객, 교육기업, 작가, 교육광고자 모두에게 혜택을 제공하는 생태계를 구축하여, 코인판매 이외에도
                                            상품유통, 광고, 펀딩 서비스를 통한 자체 수익원을 확보.
                                        </div>
                                    </div>
                                </div>
                                <div class="section3-item-box">
                                    <div class="img">
                                        <img src="" alt="" class="section3-item-box-img">
                                    </div>
                                    <div class="text">
                                        <div class="title">
                                            활용 분야
                                        </div>
                                        <div class="content">
                                            교육컨텐츠 구입 맻 대여, 키즈카페 결재, 북트리 판매수익 배분, 기프트 카드, 시각장애인 컨텐츠 개발, VIP 컨텐츠, SLTcoin
                                            채굴, 광고청취
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section3-item">
                            <img :src="section3ItemImg" alt="" class="section3ItemImg">
                        </div>
                        <div class="section3-item">
                            <div class="section3-item-right">
                                <div class="section3-item-box">
                                    <div class="img">
                                        <img src="" alt="" class="section3-item-box-img">
                                    </div>
                                    <div class="text">
                                        <div class="title">
                                            블록체인 기술
                                        </div>
                                        <div class="content">
                                            암호화폐의 근간인 블록체인 기술은 4차 산업혁명 시대를 이끌어갈 핵실 기술중의 하나로 거래 내역 데이터를 모두 블록에 저장하고 연결하여
                                            데이터를 기록하 저장된 블록들이 모여 만들어진 블록체인은 모든 네트워크 참여자들에게 공개되어 신뢰를 보장.
                                        </div>
                                    </div>
                                </div>
                                <div class="section3-item-box">
                                    <div class="img">
                                        <img src="" alt="" class="section3-item-box-img">
                                    </div>
                                    <div class="text">
                                        <div class="title">
                                            투명성과 공정성을 보증
                                        </div>
                                        <div class="content">
                                            SLTcoin은 TRON기반의 TRC20토큰을 표준으로 한 코인으로 이미 많은 이용자들에 의하여 성공적인 표준기술로 인정받고 있습니다.
                                            트론스캔 시스템을 통하여 모든 내용이 공개되기 때문에 투명성을 보증 할 수 있으며 투자자들에게 신뢰를 줄 수 있습니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section4">
                    <div class="section4-content1">
                        <div class="section4-content1-wrap">
                            <div class="section4-content1-box1">
                                <div class="section4-content1-box1-left">
                                    <div class="title">
                                        KNOW ABOUT THE CURRENCY
                                    </div>
                                    <div class="question">
                                        What is SLT coin?
                                    </div>
                                    <div class="content">
                                        SLTcoin은 성장시장인 키즈산업을 블록체인/빅데이터/AI등을 이용하여 지속적인 수익 창출 생태계를 구축하기 위한 사업의 일환으로서 만들어진
                                        코인입니다. SLTcoin은 작가, 출판사, 교육업체, 광고업체 등, 유아 및 아동 제품업체가 얽혀 있는 생태계를 이끌어 나갈 수 있는 코인이라
                                        할 수 있습니다.
                                    </div>
                                    <div class="video">
                                        <img src="" alt="" class="video-img">
                                        <h4>
                                            소개 비디오 보기
                                        </h4>
                                    </div>
                                </div>
                                <div class="section4-content1-box1-right">

                                </div>
                            </div>
                            <div class="section4-content1-box2">
                                <div class="section4-content1-content">
                                    <div class="content-text1">Artificial Intelligence Learning</div>
                                    <div class="content-text2">AI 시스템을 통한 키즈시장 접금</div>
                                    <div class="content-text3">독서 데이터를 파악하여 아이의 독서량, 독서수준, 독서성향을 알아내고, 부모님들은 아이가 좋아하는
                                        분야가 무엇인지! 또래 아이들과 비교하여 어느 정도 수준에 있는지 그리고 출판사 및 교육관련 업체에서는 이 정보를 통하여 새로운 컨텐츠를 개발
                                        하게 됩니다.
                                    </div>
                                    <div class="content-img">
                                        <img :src="ALPNG" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section4-content2" :style="{ 'backgroundImage':'url('+ section3Bg +')' }">
                        <div class="section4-content2-wrap">
                            <div class="left">
                                <div class="text1">HELP TO GET STARTED</div>
                                <div class="text2">Frequently Asked Questions</div>
                                <div class="quesgtionBox">
                                    <div class="quesgtionBox-item1">
                                        <div class="quesgtionBox-item-top" @click="openBox('box1')">
                                            <img class="quesgtionBox-item-img" src="" alt="">
                                            <div class="quesgtionBox-item-text">
                                                기술 지원이 가능한가요?
                                            </div>
                                        </div>
                                        <transition name="hidden-box1">
                                            <div class="hidden-box" v-show="box1">
                                                <div class="hidden-box-item">SLTcoin 팀은 어떠한 문의라도 환영 합니다.</div>
                                            </div>
                                        </transition>

                                    </div>
                                    <div class="quesgtionBox-item2">
                                        <div class="quesgtionBox-item-top" @click="openBox('box2')">
                                            <img class="quesgtionBox-item-img" src="" alt="">
                                            <div class="quesgtionBox-item-text">
                                                기술 지원이 가능한가요?
                                            </div>
                                        </div>
                                        <transition name="hidden-box2">
                                            <div class="hidden-box" v-show="box2">
                                                <div class="hidden-box-item">마케팅팀에 문의 바랍니다.</div>
                                                <div class="hidden-box-item">마케팅팀 sltglobalcoin@gmail.com</div>
                                            </div>
                                        </transition>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="title">
                                    전체 코인의 10%에 해당하는 10억개는 IEO및 사모펀드 방식으로 판매되며, 안정적인 SLTcoin의 운영을 위하여 초기 엔젤투자자가 10%, 마케팅
                                    15%, 생태기금으로 30%, 비축기금으로 20%, 개발팀과 고문이 15%의 SLTcoin을 보유하게 됩니다.
                                </div>
                                <div class="echarts-box">
                                    <div id="echartsBox" ref="echartsBox"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section5" :style="{ 'backgroundImage':'url('+ connected +')' }">
                    <div class="section5-wrap">
                        <div class="left">
                            <div class="left-wrap">
                                <div class="left-wrap-item1">북트리 소개</div>
                                <div class="left-wrap-item2">키즈산업 생태계를 위한 완벽한 블록체인</div>
                                <div class="left-wrap-item3">북트리란 엄마에게는 자유시간을 아이에게는 독서습관을 만들어주는 유아동(1~7세) 눈높이의 책을 읽어주는
                                    교육 제품입니다. RFID 기술을 활용하여 아기가 책을 읽고 싶을때, 혼자서도 활용이 쉽고, 언제든지 재미있게 읽어 줍니다.
                                </div>
                                <div class="buySellBox">
                                    <div class="buy">
                                        <div class="title">부모(구매고객)</div>
                                        <div class="content">
                                            <div class="content-list">
                                                <div class="content-item">부모를 대신하여 통화책을 읽어 줌</div>
                                                <div class="content-item">영어책도 원어민 발음으로 읽어 줌</div>
                                                <div class="content-item">자연스러운 독서환경 조성</div>
                                                <div class="content-item">아이의 연령, 수준을 고여한 독서 가이드 제공</div>
                                                <div class="content-item">1만여권 이상의 도서, 클래식, 동요, 컨텐츠 제공</div>
                                                <div class="content-item">빅데이터 시스템을 통한 맞춤형 독서정보 제공</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sell">
                                        <div class="title">유아/어린이(타깃고객)</div>
                                        <div class="content">
                                            <div class="content-list">
                                                <div class="content-item">아이가 원할때 언제든지 책을 읽어 줌</div>
                                                <div class="content-item">아이들 눈높이에 맞춘 편리한 기술</div>
                                                <div class="content-item">언제든 아이의 활동 공간에서 보여지며, 독서환경 제공</div>
                                                <div class="content-item">동요, 클래식 등 다양하고 재미있는 컨텐츠 제공</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <img :src="booktree" alt="" class="right-img">
                        </div>
                    </div>
                </div>
                <div class="section6">
                    <div class="section6-wrap">
                        <div class="left">
                            <img :src="life" alt="" class="left-img">
                        </div>
                        <div class="right">
                            <div class="right-wrap">
                                <div class="tip">
                                    SLT생태계 안에서 SLTcoin은 생태토큰으로 사용
                                </div>
                                <div class="title">
                                    SLTcoin 생태계 활용 계획
                                </div>
                                <ul class="plan-list">
                                    <li class="plan-item">교육컨텐츠 구입 및 대여</li>
                                    <li class="plan-item">키즈카페 결재</li>
                                    <li class="plan-item">북트리 판매수익 배분</li>
                                    <li class="plan-item">기프트 카드</li>
                                    <li class="plan-item">시각장애인 컨텐츠 개발</li>
                                    <li class="plan-item">VIP 컨텐츠</li>
                                    <li class="plan-item">SLTcoin 채굴</li>
                                    <li class="plan-item">광고청취</li>
                                </ul>
                                <div class="btn">
                                    문의하기
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section7">
                    <div class="section7-content1-wrap" :style="{ 'backgroundImage':'url('+ section3Bg +')' }">
                        <div class="section7-content1">
                            <div class="section7-content1-text1">ICO FACTS</div>
                            <div class="section7-content1-text2">Everything to get you started</div>
                            <div class="section7-content1-cards">
                                <div class="section7-content1-cards-item whit">
                                    <div class="title">Buyback</div>
                                    <div class="content">Buyback 및 소객을 통해 코인의 가격 안정을 도모하는것을 목적으로 하는 Buyback제공</div>
                                </div>
                                <div class="section7-content1-cards-item black">
                                    <div class="imgBox">
                                        <img src="" alt="">
                                    </div>
                                    <div class="rate">50%</div>
                                    <div class="date">1년차 Buyback</div>
                                </div>
                                <div class="section7-content1-cards-item blue">
                                    <div class="imgBox">
                                        <img src="" alt="">
                                    </div>
                                    <div class="rate">40%</div>
                                    <div class="date">2년차 Buyback</div>
                                </div>
                                <div class="section7-content1-cards-item green">
                                    <div class="imgBox">
                                        <img src="" alt="">
                                    </div>
                                    <div class="rate">30%</div>
                                    <div class="date">3년차 Buyback</div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section7-content2-wrap">
                        <div class="section7-content2"></div>
                    </div>
                </div>
                <div class="section8">
                    <div class="section8-wrap">
                        <div class="top">
                            <div class="left">
                                <div class="left-box">
                                    <div class="time-box">
                                        <TimeCard class="TimeCard"
                                                  :dateStyle="dateStyle"
                                                  :numberStyle="numberStyle"
                                                  :date="'DAY'"
                                                  :number="'09'">
                                        </TimeCard>
                                        <TimeCard class="TimeCard"
                                                  :dateStyle="dateStyle"
                                                  :numberStyle="numberStyle"
                                                  :date="'HR'"
                                                  :number="'09'">
                                        </TimeCard>
                                        <TimeCard class="TimeCard"
                                                  :dateStyle="dateStyle"
                                                  :numberStyle="numberStyle"
                                                  :date="'MIN'"
                                                  :number="'09'">
                                        </TimeCard>
                                        <TimeCard class="TimeCard"
                                                  :dateStyle="dateStyle"
                                                  :numberStyle="numberStyle"
                                                  :date="'SEC'"
                                                  :number="'09'">
                                        </TimeCard>
                                    </div>
                                    <div class="tip">
                                        Coin sales ends on 31st May, 2021
                                    </div>
                                    <div class="money">10,000,000,000원</div>
                                    <div class="CollectTip">Collected for now</div>
                                    <div class="bar">
                                        <div class="rate"></div>
                                        <div class="text">
                                            SLT coins
                                        </div>
                                    </div>
                                    <div class="btnBox">
                                        <div class="btn">SLT 코인 구매하기</div>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="right-content">
                                    <div class="title">How to buy SLT coin</div>
                                    <div class="content">전체 코인의 10%에 해당하는 10억개는 IEO및 사모펀드 방식으로 판매되며, 안정적인 SLTcoin의 운영을
                                        위하여 초기 엔젤투자자가 10%, 마케팅 15%, 생태기금으로 30%, 비축기금으로 20%, 개발팀과 고문이 15%의 SLTcoin을 보유하게
                                        됩니다.
                                    </div>
                                </div>
                                <div class="right-table">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>SLT coin</td>
                                            <td><strong>TRON TRC20</strong></td>
                                        </tr>
                                        <tr>
                                            <td>ICO Price</td>
                                            <td><strong>1 SLT coin = 10KRW</strong></td>
                                        </tr>
                                        <tr>
                                            <td>ICO Date</td>
                                            <td>March 31 – May 31 (23:59 UTA+9)</td>
                                        </tr>
                                        <tr>
                                            <td>Exchange Listing</td>
                                            <td><strong>Main Exchanges by 15 September</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Token Distribution</td>
                                            <td><strong>Right after the ICO</strong></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="down">
                            <div class="recommend-list">
                                <div class="recommend-item">
                                    <div class="imgBox">
                                        <img src="" alt="" class="img">
                                    </div>
                                    <div class="recommend-item-top">
                                        <div class="title">Whitepaper</div>
                                        <div class="text"></div>
                                    </div>
                                    <div class="content">
                                        <div class="content-list">
                                            <div class="content-item">Korean(한글)</div>
                                            <div class="content-item">English(영어)</div>
                                            <div class="content-item">Chinese(중국어)</div>
                                            <div class="content-item">Japanese(일본어)</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="recommend-item">
                                    <div class="imgBox">
                                        <img src="" alt="" class="img">
                                    </div>
                                    <div class="recommend-item-top">
                                        <div class="title">Notifications</div>
                                        <div class="text">성장시장인 교육산업을 블록체인/빅데이터/AI등을 이용하여 지속적인 수익 창출</div>
                                    </div>
                                </div>
                                <div class="recommend-item">
                                    <div class="imgBox">
                                        <img src="" alt="" class="img">
                                    </div>
                                    <div class="recommend-item-top">
                                        <div class="title">Payment Options</div>
                                        <div class="text">학부모, 학생, 플랫폼고객, 교육기업, 작가, 교육광고자</div>
                                    </div>
                                </div>
                                <div class="recommend-item">
                                    <div class="imgBox">
                                        <img src="" alt="" class="img">
                                    </div>
                                    <div class="recommend-item-top">
                                        <div class="title">Referral & Bounty</div>
                                        <div class="text">상품유통, 광고, 펀딩 서비스를 통한 다양한 수익원</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section9" :style="{ 'backgroundImage':'url('+ section3Bg +')' }">
                    <div class="section9-wrap">
                        <div class="section9-wrap-title">
                            <div class="team">TEAM</div>
                            <div class="text">Who We Are</div>
                            <div class="text2">Get to know the team of enthusiasts who are working hard
                                and passionately behind this project
                            </div>
                        </div>
                        <div class="Team-card">
                            <h2 class="Team-card-title">Member</h2>
                            <div class="Team-card-content">
                                <div class="Team-card-content-list">
                                    <div class="Team-card-content-item"
                                         v-for="(item, index) in members"
                                         :key="index">
                                        <MemberCard :name="item.name"
                                                    :position="item.position"
                                                    :img="item.img"
                                        ></MemberCard>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="Team-card">
                            <h2 class="Team-card-title">Advisor</h2>
                            <div class="Team-card-content">
                                <div class="Team-card-content-list">
                                    <div class="Team-card-content-item"
                                         v-for="(item, index) in members"
                                         :key="index">
                                        <MemberCard :name="item.name"
                                                    :position="item.position"
                                                    :img="item.img"
                                        ></MemberCard>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section10">
                    <div class="section10-wrap">
                        <div class="section9-wrap-title">
                            <div class="team">SLTcoin 로드맵</div>
                            <div class="text">How it was implemented</div>
                            <div class="text2">Here is a timeline of how we get started with the
                                SLT coin and where we are going further
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-badge "
                                     style="background-color:#1e73be">Mar<span>2021</span>
                                    <div class=" " style="background-color:#1e73be"></div>
                                </div>
                                <div class="timeline-panel">
                                    <div class="description">
                                        <span style="color: #ffffff">초기 엔젤투자 판매</span></div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-badge " style="background-color:#81d742">May<span>2021</span>
                                    <div class=" " style="background-color:#81d742"></div>
                                </div>
                                <div class="timeline-panel">
                                    <div class="description">
                                        <span style="color: #ffffff">사모펀드 진행</span></div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-badge " style="background-color:#eeee22">Jun<span>2021</span>
                                    <div class=" " style="background-color:#eeee22"></div>
                                </div>
                                <div class="timeline-panel">
                                    <div class="description">
                                        <span style="color: #ffffff">첫번째 거래소 상장</span></div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-badge " style="background-color:#8224e3">Aug<span>2021</span>
                                    <div class=" " style="background-color:#8224e3"></div>
                                </div>
                                <div class="timeline-panel">
                                    <div class="description">
                                        <span style="color: #ffffff">대형 거래소 상장</span></div>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-badge " style="background-color:#faa732">Mar<span>2022</span>
                                    <div class=" " style="background-color:#faa732"></div>
                                </div>
                                <div class="timeline-panel">
                                    <div class="description">
                                        <span style="color: #ffffff">첫번째 바이백 진행</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section11" :style="{ 'backgroundImage':'url('+ section3Bg +')' }">
                    <div class="section11-wrap">
                        <div class="section11-wrap-title">SLTcoin과 함께 하세요!</div>
                        <div class="section11-wrap-tip">SLTcoin 팀은 코인 구매나 사업관련 어떠한 문의든지 환영 합니다.</div>
                        <div class="section11-wrap-btnBox">
                            <div class="input-item">
                                <input type="text" placeholder="Name">
                            </div>
                            <div class="input-item">
                                <input type="email" placeholder="Email">
                            </div>
                            <div class="btn">
                                Submit
                            </div>
                        </div>
                        <div class="url">
                            <div class="url-content">☉ SLT Global<span>http://sltglobal.net</span></div>
                            <div class="url-content">☉ 북트리<span>http://ubooktree.com</span></div>
                            <div class="url-content email">☉ 문의 e-Mail : sltglobalcoin@gmail.com</div>
                        </div>
                        <div class="logo-icon">
                            <img :src="logoIcon" alt="" class="icon-img">
                        </div>
                        <div class="foot-text">© <strong>S</strong>mart <strong>L</strong>earning
                            <strong>T</strong>echnology <strong>Global</strong> <strong>2020. All rights
                                reserved.</strong></div>
                    </div>
                </div>
            </div>
        </div>
        <TopBar></TopBar>
    </div>
</template>

<script>
    import TopBar from "../../components/header/topBar";
    import TimeCard from "../../components/index/timeCard";
    import ThemeStickyHeader from "../../components/header/themeStickyHeader";
    import MemberCard from "../../components/index/memberCard";

    export default {
        name: "index",
        components: {MemberCard, ThemeStickyHeader, TimeCard, TopBar},
        data() {
            return {
                SLT_white: `${require('../../static/img/index/SLT_white.png')}`,
                urlIcon: `${require('../../static/img/index/ico-landing1-banner_02.jpg')}`,
                section3Bg: `${require('../../static/img/index/ico_bg_dark_03.png')}`,
                connected: `${require('../../static/img/index/bg_connected.png')}`,
                visa: `${require('../../static/img/index/logo-visa.png')}`,
                bit: `${require('../../static/img/index/logo-bitcoin.png')}`,
                master: `${require('../../static/img/index/logo-mastercard.png')}`,
                section3ItemImg: `${require('../../static/img/index/middle-1.png')}`,
                booktree: `${require('../../static/img/index/booktree-1.png')}`,
                ALPNG: `${require('../../static/img/index/AI.png')}`,
                life: `${require('../../static/img/index/life.png')}`,
                logoIcon: `${require('../../static/img/index/sltlogo_60x120_white.png')}`,
                sectionImgs: [
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                    `${require('../../static/img/index/booktree_white.png')}`,
                    `${require('../../static/img/index/SLT_white.png')}`,
                ],
                members: [
                    {
                        name: "Bae Seunghwan",
                        position: "CEO",
                        img: `${require('../../static/img/index/baesh-400x400.png')}`,
                    },
                    {
                        name: "Choi sungmin",
                        position: "Planning, CEO of CRADLEKOREA",
                        img: `${require('../../static/img/index/team_choism-400x400.png')}`,
                    },
                    {
                        name: "Choi kyoungyong",
                        position: "Marketing, Former Director of Altwell",
                        img: `${require('../../static/img/index/team_choikg-400x400.png')}`,
                    },
                    {
                        name: "You hwanho",
                        position: "Web Development",
                        img: `${require('../../static/img/index/team_youhwanho-400x400.png')}`,
                    },
                    {
                        name: "Bae Seunghwan",
                        position: "CEO",
                        img: `${require('../../static/img/index/baesh-400x400.png')}`,
                    },
                    {
                        name: "Choi sungmin",
                        position: "Planning, CEO of CRADLEKOREA",
                        img: `${require('../../static/img/index/team_choism-400x400.png')}`,
                    },
                    {
                        name: "Choi kyoungyong",
                        position: "Marketing, Former Director of Altwell",
                        img: `${require('../../static/img/index/team_choikg-400x400.png')}`,
                    },
                    {
                        name: "You hwanho",
                        position: "Web Development",
                        img: `${require('../../static/img/index/team_youhwanho-400x400.png')}`,
                    },
                    {
                        name: "You hwanho",
                        position: "Web Development",
                        img: `${require('../../static/img/index/team_youhwanho-400x400.png')}`,
                    },
                ],

                showSticky: true,
                scrollTop: 0,
                box1: false,
                box2: false,
                dateStyle: {
                    width: '80rem',
                    height: '20rem',
                },
                numberStyle: {
                    width: '80rem',
                    height: '60rem',
                },
            }
        },
        watch: {
            /*scrollTop(v) {
                if (v > 240) {
                    this.showSticky = true;
                } else {
                    this.showSticky = false;
                }
            }*/
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true);
            this.myEcharts();
        },
        methods: {
            //监听滚动条事件
            handleScroll() {
                //获取设备高度
                // let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //滚动的高度
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                this.scrollTop = scrollTop;
                // console.log(scrollTop)
            },
            openBox(name) {
                this[name] = !this[name];
            },
            topage(name) {
                this.$router.push({
                    name: name
                })
            },
            myEcharts() {
                let echartsBox = this.$refs.echartsBox;
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(echartsBox);

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: '450rem',
                        top: 'center',
                        textStyle: {
                            color: '#ffffff',
                        }
                    },
                    series: [
                        {
                            // name: '访问来源',
                            type: 'pie',
                            radius: '90%',
                            center: ['35%', '50%'], //图的位置，距离左跟上的位置
                            data: [
                                {value: 30, name: '생태기금'},
                                {value: 20, name: '비축기금'},
                                {value: 15, name: '마케팅'},
                                {value: 15, name: '고문&개발팀'},
                                {value: 10, name: '엔젤투자'},
                                {value: 10, name: 'IEO&사모펀드'}
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                }
                            },
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false   //隐藏标示文字
                                    },
                                    labelLine: {
                                        show: true   //隐藏标示线
                                    }
                                }
                            }
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped lang="less">
    @keyframes ThemeStickyHeadertranslateYin {
        0% {
            transform: translateY(-100%);
        }
        50% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0);
        }
    }

    .slide-fade-Y-enter-active {
        animation: ThemeStickyHeadertranslateYin 0.5s ease-in-out 0s;
    }

    .slide-fade-Y-leave-active {
        animation: ThemeStickyHeadertranslateYin 0.5s ease-in-out 0s reverse;
    }

    @keyframes fold {
        0% {
            height: 0;
        }
        100% {
            height: 40rem;
        }
    }

    .hidden-box1-enter-active {

        animation: fold 1s ease-in-out 0s;
    }

    .hidden-box1-leave-active {
        animation: fold 1s ease-in-out 0s reverse;
    }

    .index {

        .ThemeStickyHeader {
            /*animation: ThemeStickyHeadertranslateYin 0.5s ease-in-out 0s;*/
        }

        .index-content {
            width: 100%;
            /*height: 1000rem;*/
            /*position: relative;*/


            .index-content-wrap {
                width: 100%;
                height: 100%;

                .section1 {
                    background-color: #061649;
                    height: 850rem;
                    /*width: 1170rem;*/
                    position: relative;

                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;

                    .site-header {
                        width: 1170rem;
                        height: 218rem;
                        margin: 0 auto;

                        .site-header-list {
                            height: 100%;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            box-sizing: border-box;
                            padding: 0 15rem;


                            .site-header-item-img {
                                margin-right: 30rem;
                            }

                            .site-header-text-list {
                                height: 100%;
                                display: flex;
                                align-items: center;
                                box-sizing: border-box;
                                margin-left: 30rem;

                                .site-header-item {
                                    margin-left: 30rem;

                                    .SLT_white_logo {
                                        width: 314rem;
                                        height: 148rem;
                                    }

                                    .text {
                                        color: #eee;
                                        font-size: 15rem;
                                    }
                                }
                            }
                        }
                    }

                    .section1-content {
                        margin: 0 auto;
                        width: 1170rem;
                        margin-top: 40rem;
                        position: relative;

                        .wpb-wrapper {
                            width: 517rem;
                            height: auto;
                            text-align: left;

                            .title1 {
                                font-size: 14rem;
                                color: #00B4FC;
                                line-height: 1.6em;
                                box-sizing: border-box;
                                margin-bottom: 10rem;
                            }

                            .title2 {
                                color: #fff;
                                margin-bottom: 40rem;
                                font-weight: 400;
                                font-style: normal;
                                visibility: visible;
                                font-size: 42rem;
                            }

                            .content {
                                line-height: 1.6em;
                                box-sizing: border-box;
                                display: block;
                                font-weight: 400;
                                font-style: normal;
                                color: #89c1f9;
                                font-size: 16rem;
                                opacity: 1;
                                visibility: visible;
                                margin-bottom: 40rem;

                            }

                            .btn {
                                display: flex;

                                .left {
                                    width: 243rem;
                                    height: 48rem;
                                    text-align: center;
                                    line-height: 48rem;
                                    color: #00B4FC;
                                    cursor: pointer;
                                    border-radius: 2em;
                                    transition: all 0.3s;
                                }

                                .left:hover {
                                    color: #fff;
                                    background-color: #00B4FC;
                                }

                                .right {

                                    .right-img {
                                        width: 55rem;
                                        height: 55rem;
                                    }

                                    h4 {
                                        margin-left: 20rem;
                                        line-height: 48rem;
                                        font-size: 16rem;
                                        color: #fff;
                                    }
                                }
                            }
                        }

                        .ico {
                            position: absolute;
                            box-sizing: border-box;
                            width: 380rem;
                            height: 565rem;
                            background-color: rgba(1, 1, 25, 0.55);
                            right: 50rem;
                            top: -120rem;
                            padding: 35rem;

                            .ico-content {

                                .ico-content-title {
                                    color: #ffffff;
                                    text-align: center;
                                    margin-bottom: 30rem;
                                    font-size: 24rem;

                                }

                                .ico-content-date {

                                    .ico-content-date-list {
                                        box-sizing: border-box;
                                        display: flex;
                                        justify-content: space-between;

                                        .TimeCard {
                                            border-radius: 5rem;
                                            /*background-color: #fff;*/
                                        }
                                    }
                                }

                                .ico-content-text {
                                    font-size: 12rem;
                                    color: rgba(255, 255, 255, 0.75);
                                    text-align: center;
                                    margin-top: 25rem;
                                    margin-bottom: 30rem;
                                }

                                .ico-content-btn {
                                    height: 48rem;
                                    width: 100%;
                                    border-radius: 2em;
                                    color: #fff;
                                    background: #00B4FC;
                                    line-height: 48rem;
                                    margin-bottom: 21rem;
                                    cursor: pointer;
                                }

                                .money {
                                    .text {
                                        font-size: 32rem;
                                        color: #fff;
                                    }

                                    .tip {
                                        font-size: 13rem;
                                        color: rgba(255, 255, 255, 0.75);
                                        text-align: center;
                                        margin-top: 10rem;
                                    }
                                }

                                .progressBar {
                                    position: relative;
                                    width: 100%;
                                    /*height: 85rem;*/

                                    .text {
                                        display: flex;
                                        justify-content: space-between;
                                        font-size: 23rem;
                                        color: #fff;

                                        div {

                                        }
                                    }

                                    /*.box {
                                        height: 24rem;
                                        width: 100%;
                                        margin-top: 3rem;
                                    }*/

                                    .bar {
                                        /*top: 26rem;*/
                                        position: relative;
                                        height: 24rem;
                                        width: 100%;
                                        background: #fff;
                                        margin-top: 3rem;
                                        border-radius: 2rem;

                                        .rate {
                                            position: absolute;
                                            background: orange;
                                            width: 100rem;
                                            height: 100%;
                                            top: 0;
                                            left: 0;
                                        }

                                        .text {
                                            position: absolute;
                                            color: #fff;
                                            line-height: 24rem;
                                            top: 0;
                                            left: 12rem;
                                            font-size: 12rem;

                                        }
                                    }
                                }

                                .payImgList {
                                    margin-top: 30rem;
                                    /*width: 52rem;*/
                                    /*height: 30rem;*/

                                    display: flex;
                                    justify-content: space-around;

                                    img {
                                        background: rgb(130, 133, 157);
                                        border-radius: 3rem;
                                        width: 52rem;
                                        height: 30rem;
                                    }
                                }

                            }

                        }
                    }
                }

                .section2 {
                    background-color: #061649;
                    height: 150rem;

                    .section2-list {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        width: 1170rem;
                        margin: 0 auto;

                        .section2-item {
                            opacity: 0.6;
                            transition: all 0.3s;

                            img {
                                width: 114rem;
                                height: 54rem;
                            }
                        }

                        .section2-item:hover {
                            opacity: 1;
                        }
                    }
                }

                .section3 {
                    height: 860rem;
                    width: 100%;
                    background-color: #041b63;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;

                    .section3-list {
                        width: 1170rem;
                        margin: 0 auto;
                        display: flex;
                        /*align-items: center;*/
                        height: 100%;

                        .section3-item {
                            width: 380rem;
                            height: 100%;
                            display: flex;
                            align-items: center;

                            .section3ItemImg {
                                width: 350rem;
                                height: 277rem;
                            }

                            .section3-item-box {
                                width: 350rem;
                                box-sizing: border-box;
                                padding: 0 15rem;
                                display: flex;
                                justify-content: space-between;
                                margin-bottom: 60rem;

                                .img {
                                    .section3-item-box-img {
                                        width: 64rem;
                                        height: 64rem;
                                    }
                                }

                                .text {
                                    width: 186rem;
                                    text-align: left;

                                    .title {
                                        color: #fff;
                                        font-size: 23rem;
                                    }

                                    .content {
                                        color: #89c1f9;
                                        font-size: 16rem;
                                        line-height: 1.6em;
                                        box-sizing: border-box;
                                        display: block;
                                        margin-block-start: 1em;
                                        margin-block-end: 1em;
                                        margin-inline-start: 0;
                                        margin-inline-end: 0;
                                        font-weight: 400;
                                        font-style: normal;
                                        opacity: 1;
                                        visibility: visible;
                                    }
                                }

                            }

                            .section3-item-left {

                            }

                            .section3-item-right {

                            }
                        }

                    }
                }

                .section4 {
                    height: 2156rem;
                    width: 100%;
                    background-color: #061649;
                    box-sizing: border-box;

                    .section4-content1 {
                        height: 1476rem;
                        width: 100%;
                        box-sizing: border-box;

                        .section4-content1-wrap {
                            width: 1140rem;
                            margin: 0 auto;
                            height: 100%;
                            box-sizing: border-box;
                            overflow: hidden;

                            .section4-content1-box1 {
                                height: 385rem;
                                width: 100%;
                                box-sizing: border-box;
                                margin: 100rem 0;
                                padding: 30rem 0;
                                overflow: hidden;
                                display: flex;

                                .section4-content1-box1-left {
                                    width: 570rem;
                                    height: 100%;
                                    text-align: left;
                                    box-sizing: border-box;
                                    padding: 0 85.5rem 0 15rem;

                                    .title {
                                        font-size: 14rem;
                                        margin-bottom: 10rem;
                                        color: #00b4fc;
                                        font-weight: 400;
                                        font-style: normal;
                                        display: block;
                                        margin-block-start: 1em;
                                        margin-block-end: 1em;
                                        margin-inline-start: 0;
                                        margin-inline-end: 0;
                                    }

                                    .question {
                                        font-size: 36rem;
                                        color: #fff;
                                        margin-bottom: 15rem;
                                    }

                                    .content {
                                        font-size: 20rem;
                                        color: #89c1f9;
                                        font-weight: 400;
                                        font-style: normal;
                                        display: block;
                                        margin-block-start: 1em;
                                        margin-block-end: 1em;
                                        margin-inline-start: 0;
                                        margin-inline-end: 0;
                                        line-height: 1.68421053em;
                                    }

                                    .video {
                                        display: flex;

                                        .video-img {

                                        }

                                        h4 {
                                            font-size: 16rem;
                                            margin-left: 20rem;
                                            color: #fff;
                                        }
                                    }

                                }

                                .section4-content1-box1-right {
                                    width: 570rem;
                                    height: 100%;
                                }
                            }

                            .section4-content1-box2 {
                                height: 791rem;
                                box-sizing: border-box;
                                width: 100%;
                                text-align: center;
                                margin: 100rem 0;
                                padding-top: 40rem;

                                .section4-content1-content {
                                    .content-text1 {
                                        font-size: 14rem;
                                        color: #00b4fc;
                                        margin-bottom: 10rem;
                                    }

                                    .content-text2 {
                                        font-size: 36rem;
                                        color: #fff;
                                        margin-bottom: 15rem;
                                    }

                                    .content-text3 {
                                        font-size: 20rem;
                                        color: #89c1f9;
                                        margin-bottom: 15rem;
                                        line-height: 1.68421053em;
                                        margin-block-start: 1em;
                                        margin-block-end: 1em;
                                        margin-inline-start: 0;
                                        margin-inline-end: 0;
                                    }

                                    .content-img {
                                        /*width: 100%;*/
                                        /*height: 100%;*/
                                        /*background-size: cover;*/
                                    }

                                }

                            }
                        }

                    }

                    .section4-content2 {
                        height: 680rem;
                        width: 100%;
                        background-color: #041b63;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        box-sizing: border-box;
                        padding: 100rem 0;
                        display: flex;
                        align-items: center;

                        .section4-content2-wrap {
                            width: 1140rem;
                            margin: 0 auto;
                            height: 100%;
                            display: flex;

                            .left {
                                text-align: left;
                                width: 570rem;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;


                                .text1 {
                                    font-size: 14rem;
                                    margin-bottom: 10rem;
                                    color: #00b4fc;
                                }

                                .text2 {
                                    font-size: 36rem;
                                    margin-bottom: 40rem;
                                    color: #FFFFFF;
                                }

                                .quesgtionBox {
                                    .quesgtionBox-item1 {
                                        /*display: flex;*/
                                        width: 540rem;
                                        min-height: 82rem;
                                        box-sizing: border-box;
                                        background-color: #fff;
                                        border-radius: 5rem;
                                        /*align-items: center;*/
                                        padding: 25rem;
                                        position: relative;
                                        margin-bottom: 21rem;

                                        .quesgtionBox-item-top {
                                            display: flex;
                                            align-items: center;
                                            height: 32rem;
                                            cursor: pointer;

                                            .quesgtionBox-item-img {
                                                width: 28rem;
                                                height: 28rem;
                                                position: absolute;
                                            }

                                            .quesgtionBox-item-text {
                                                font-size: 15rem;
                                                color: #010119;
                                                padding-left: 42rem;
                                            }
                                        }

                                        .hidden-box {
                                            width: 100%;
                                            padding-left: 42rem;
                                            margin: 16rem 0 21rem 0;
                                            box-sizing: border-box;
                                            overflow: hidden;

                                            .hidden-box-item {
                                                line-height: 1.6em;
                                                color: #89c1f9;
                                                margin-bottom: 15rem;
                                                font-size: 16rem;
                                                box-sizing: border-box;
                                            }
                                        }
                                    }

                                    .quesgtionBox-item2 {
                                        /*display: flex;*/
                                        width: 540rem;
                                        min-height: 82rem;
                                        box-sizing: border-box;
                                        background-color: #fff;
                                        border-radius: 5rem;
                                        /*align-items: center;*/
                                        padding: 25rem;
                                        position: relative;
                                        margin-bottom: 21rem;

                                        .quesgtionBox-item-top {
                                            display: flex;
                                            align-items: center;
                                            height: 32rem;
                                            cursor: pointer;

                                            .quesgtionBox-item-img {
                                                width: 28rem;
                                                height: 28rem;
                                                position: absolute;
                                            }

                                            .quesgtionBox-item-text {
                                                font-size: 15rem;
                                                color: #010119;
                                                padding-left: 42rem;
                                            }
                                        }

                                        .hidden-box {
                                            width: 100%;
                                            padding-left: 42rem;
                                            margin: 16rem 0 21rem 0;
                                            box-sizing: border-box;
                                            overflow: hidden;

                                            .hidden-box-item {
                                                line-height: 1.6em;
                                                color: #89c1f9;
                                                margin-bottom: 15rem;
                                                font-size: 16rem;
                                                box-sizing: border-box;
                                            }
                                        }
                                    }
                                }

                            }

                            .right {
                                width: 570rem;
                                text-align: left;
                                box-sizing: border-box;
                                padding: 0 15rem;


                                .title {
                                    line-height: 1.6em;
                                    color: #89c1f9;
                                    font-weight: 400;
                                    font-style: normal;
                                    font-size: 16rem;
                                    opacity: 1;
                                    visibility: visible;
                                    margin-bottom: 35rem;
                                }

                                .echarts-box {
                                    width: 540rem;
                                    height: 335rem;

                                    #echartsBox {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }
                        }
                    }
                }

                .section5 {
                    background: #061649;
                    width: 100%;
                    height: 721rem;
                    background-position: 0 0;
                    background-repeat: repeat;

                    .section5-wrap {
                        width: 1140rem;
                        height: 100%;
                        margin: 0 auto;
                        display: flex;
                        padding: 100rem 0;
                        box-sizing: border-box;

                        .left {
                            width: 760rem;
                            height: 100%;

                            .left-wrap {
                                padding: 0 15rem;
                                text-align: left;

                                .left-wrap-item1 {
                                    font-size: 14rem;
                                    color: #00B4FC;
                                    margin-bottom: 10rem;
                                }

                                .left-wrap-item2 {
                                    font-weight: 400;
                                    font-style: normal;
                                    color: #fff;
                                    font-size: 36rem;
                                    line-height: 1.3em;
                                    margin-bottom: 15rem;
                                }

                                .left-wrap-item3 {
                                    line-height: 1.6em;
                                    display: block;
                                    margin-block-start: 1em;
                                    margin-block-end: 1em;
                                    margin-inline-start: 0;
                                    margin-inline-end: 0;
                                    font-weight: 400;
                                    font-style: normal;
                                    color: #89c1f9;
                                    font-size: 16rem;
                                }

                                .buySellBox {
                                    display: flex;

                                    .buy, .sell {
                                        width: 380rem;
                                        box-sizing: border-box;
                                        /*padding: 0 15rem;*/

                                        .title {
                                            margin-bottom: 35rem;
                                            line-height: 32rem;
                                            font-weight: 400;
                                            font-style: normal;
                                            color: #89c1f9;
                                            font-size: 16rem;
                                        }

                                        .content {

                                            .content-list {
                                                padding: 0 15rem;

                                                .content-item {
                                                    margin: 5rem 0;
                                                    color: #ffffff;
                                                    line-height: 32rem;
                                                    font-weight: 400;
                                                    font-style: normal;
                                                    font-size: 16rem;
                                                    opacity: 1;
                                                    visibility: visible;
                                                }
                                            }
                                        }
                                    }

                                    .sell {

                                        margin-left: 15rem;
                                    }
                                }

                            }
                        }

                        .right {
                            height: 100%;
                            width: 380rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            .right-img {
                                width: 289rem;
                                height: 482rem;
                            }
                        }
                    }
                }

                .section6 {
                    background: #061649;
                    width: 100%;
                    height: 717rem;

                    .section6-wrap {
                        height: 567rem;
                        margin: 0 auto;
                        width: 1140rem;
                        box-sizing: border-box;
                        display: flex;

                        .left {
                            margin-right: 15rem;

                            .left-img {
                                width: 640rem;
                                height: 568rem;
                            }
                        }

                        .right {
                            text-align: left;
                            width: 570rem;
                            height: 100%;
                            padding: 0 15rem;
                            box-sizing: border-box;
                            display: flex;
                            align-items: center;

                            .right-wrap {
                                .tip {
                                    font-size: 14rem;
                                    color: #00B4FC;
                                    margin-bottom: 10rem;
                                }

                                .title {
                                    color: #ffffff;
                                    font-size: 36rem;
                                    margin-bottom: 15rem;
                                }

                                .plan-list {
                                    margin-left: 15rem;
                                    margin-bottom: 35rem;

                                    .plan-item {
                                        line-height: 32rem;
                                        font-weight: 400;
                                        font-style: normal;
                                        color: #89c1f9;
                                        font-size: 16rem;
                                        opacity: 1;
                                        visibility: visible;
                                    }
                                }

                                .btn {
                                    line-height: 48rem;
                                    width: 102rem;
                                    height: 48rem;
                                    color: #fff;
                                    font-size: 14rem;
                                    border-radius: 2em;
                                    background-color: #00B4FC;
                                    text-align: center;
                                }

                                .btn:hover {
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }

                .section7 {
                    width: 100%;
                    /*height: 1629rem;*/
                    margin: 0 auto;
                    box-sizing: border-box;

                    .section7-content1-wrap {
                        width: 100%;
                        height: 596rem;
                        background-color: #041b63;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        box-sizing: border-box;

                        .section7-content1 {
                            width: 1140rem;
                            height: 436rem;
                            padding-top: 80rem;
                            margin: 0 auto;
                            box-sizing: border-box;

                            .section7-content1-text1 {
                                width: 100%;
                                font-size: 14rem;
                                text-align: center;
                                color: #02B4E3;
                                padding-bottom: 10rem;
                            }

                            .section7-content1-text2 {
                                width: 100%;
                                font-size: 40rem;
                                text-align: center;
                                color: #FFFFFF;
                                padding-bottom: 70rem;
                            }

                            .section7-content1-cards {
                                display: flex;
                                justify-content: space-between;

                                .section7-content1-cards-item {
                                    width: 255rem;
                                    height: 248rem;
                                    /*background-color: #fff;*/
                                    box-shadow: 0 10rem 30rem rgb(1 1 25 / 10%);
                                    /*opacity: 0.1;*/
                                    border-radius: 5rem;
                                    box-sizing: border-box;
                                    padding: 55rem 40rem;


                                    .title {
                                        line-height: 23rem;
                                        font-weight: 400;
                                        font-style: normal;
                                        font-size: 23rem;
                                        color: #003366;
                                        text-align: left;
                                        margin-bottom: 15rem;
                                    }

                                    .content {
                                        line-height: 1.6em;
                                        color: #003366;
                                        text-align: left;
                                        font-weight: 400;
                                        font-style: normal;
                                        font-size: 16rem;

                                    }

                                    .imgBox {
                                        img {
                                            width: 95rem;
                                            height: 97rem;
                                            margin-bottom: 2rem;
                                        }
                                    }

                                    .rate {
                                        font-size: 30rem;
                                        color: #ffffff;
                                        font-weight: 700;
                                        line-height: 150%;
                                        text-align: center;
                                    }

                                    .date {
                                        font-size: 15rem;
                                        color: #eaf2f5;
                                    }
                                }
                            }

                            .whit {
                                background-color: #fff;
                            }

                            .black {
                                background-color: #010119;
                            }

                            .blue {
                                background-color: #1622a7;
                            }

                            .green {
                                background-color: #00B4FC;
                            }
                        }
                    }
                }

                .section8 {
                    background: #061649;
                    width: 100%;
                    height: 1033rem;
                    box-sizing: border-box;

                    .section8-wrap {
                        width: 1140rem;
                        margin: 0 auto;
                        height: 100%;
                        box-sizing: border-box;

                        .top {
                            height: 644rem;
                            width: 100%;
                            box-sizing: border-box;
                            padding: 100rem 0 60rem 0;
                            display: flex;

                            .left {
                                height: 100%;
                                width: 570rem;

                                .left-box {
                                    height: 417rem;
                                    width: 100%;
                                    box-sizing: border-box;
                                    margin-bottom: 40rem;
                                    padding: 35rem;
                                    background-color: rgba(1, 1, 25, 0.55);
                                    /**background-color: rgb(1,1,25) ;*/
                                    border-radius: 5rem;

                                    .time-box {
                                        display: flex;
                                        align-items: center;
                                        justify-content: space-around;

                                        .TimeCard {

                                        }
                                    }

                                    .tip {
                                        margin-top: 20rem;
                                        font-size: 12rem;
                                        margin-bottom: 30rem;
                                        font-weight: 400;
                                        font-style: normal;
                                        color: #89c1f9;
                                    }

                                    .money {
                                        font-size: 32rem;
                                        color: #ffffff;
                                        line-height: 1.3em;
                                        /*margin-bottom: 15rem;*/
                                    }

                                    .CollectTip {
                                        font-size: 13rem;
                                        font-weight: 400;
                                        font-style: normal;
                                        color: #89c1f9;
                                        margin-bottom: 30rem;
                                    }

                                    .bar {
                                        /*top: 26rem;*/
                                        position: relative;
                                        height: 24rem;
                                        width: 100%;
                                        background: #fff;
                                        margin-top: 3rem;
                                        border-radius: 2rem;
                                        margin-bottom: 35rem;


                                        .rate {
                                            position: absolute;
                                            background: orange;
                                            width: 100rem;
                                            height: 100%;
                                            top: 0;
                                            left: 0;
                                        }

                                        .text {
                                            position: absolute;
                                            color: #fff;
                                            line-height: 24rem;
                                            top: 0;
                                            left: 12rem;
                                            font-size: 12rem;

                                        }
                                    }

                                    .btnBox {
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;

                                        .btn {
                                            width: 168rem;
                                            height: 48rem;
                                            background-color: #00b4fc;
                                            font-size: 14rem;
                                            border-radius: 2em;
                                            color: #fff;
                                            line-height: 48rem;
                                            cursor: pointer;
                                        }

                                    }
                                }
                            }

                            .right {
                                height: 100%;
                                width: 475rem;
                                margin-left: 95rem;

                                .right-content {
                                    text-align: left;

                                    .title {
                                        color: #fff;
                                        font-size: 24rem;
                                        margin-bottom: 15rem;
                                        font-weight: 400;
                                        font-style: normal;
                                        line-height: 1.3em;
                                    }

                                    .content {
                                        margin-bottom: 50rem;
                                        box-sizing: border-box;
                                        font-size: 20rem;
                                        font-weight: 400;
                                        font-style: normal;
                                        color: #89c1f9;
                                        line-height: 1.68421053em;
                                    }
                                }

                                .right-table {
                                    table {
                                        color: #fff;
                                        margin: 20rem 0;
                                        width: 100%;
                                        border: 1rem solid rgba(255, 255, 255, .2);
                                        border-collapse: separate;
                                        border-radius: 4rem;
                                        box-sizing: border-box;
                                        text-indent: initial;
                                        border-spacing: 2rem;
                                        line-height: 32rem;
                                        font-weight: 400;
                                        font-style: normal;
                                        text-align: left;
                                        font-size: 16rem;

                                        tbody {
                                            tr {
                                                td {
                                                    padding: 8rem;
                                                    vertical-align: top;
                                                    text-align: left;
                                                    line-height: 18rem;
                                                    border: 1rem solid rgba(255, 255, 255, .2);
                                                }

                                                td:first-child {
                                                    border-left: 0;
                                                    border-top: 0;
                                                }

                                                td:last-child {
                                                    border-left: 0;
                                                    border-top: 0;
                                                    border-right: 0;
                                                }
                                            }

                                            tr:last-child {
                                                td {
                                                    border-bottom: 0;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        .down {
                            height: 389rem;
                            width: 100%;
                            box-sizing: border-box;
                            padding: 45rem 0 60rem 0;

                            .recommend-list {
                                width: 100%;
                                height: 100%;
                                display: flex;
                                justify-content: space-between;
                                box-sizing: border-box;

                                .recommend-item {
                                    box-sizing: border-box;
                                    position: relative;
                                    width: 285rem;
                                    padding: 0 15rem;

                                    .imgBox {
                                        position: absolute;

                                        .img {
                                            width: 32rem;
                                            height: 32rem;
                                        }
                                    }

                                    .recommend-item-top {
                                        min-height: 64rem;
                                        margin-bottom: 40rem;
                                        padding-left: 52rem;
                                        box-sizing: border-box;

                                        .title {
                                            color: #00b4fc;
                                            line-height: 23rem;
                                            font-weight: 400;
                                            font-style: normal;
                                            font-size: 23rem;
                                            margin-bottom: 15rem;
                                            text-align: left;
                                        }

                                        .text {
                                            /*margin-left: 32rem;*/
                                            width: 200rem;
                                            text-align: left;
                                            /*padding-left: 54rem;*/
                                            box-sizing: border-box;
                                            color: #c2d9e2;
                                            line-height: 1.6em;
                                            font-size: 16rem;

                                        }
                                    }

                                    .content {
                                        width: 255rem;

                                        .content-list {
                                            .content-item {
                                                cursor: pointer;
                                                color: #fff;
                                                font-size: 16rem;
                                                margin-bottom: 15rem;
                                                line-height: 1.6em;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .section9 {
                    height: 2743rem;
                    background-color: #041b63;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;

                    .section9-wrap {
                        width: 1140rem;
                        margin: 0 auto;
                        height: 100%;
                        padding: 100rem 0 60rem 0;

                        .section9-wrap-title {
                            margin-bottom: 70rem;

                            .team {
                                font-size: 14rem;
                                text-align: center;
                                margin-bottom: 10rem;
                                color: #00b4fc;
                                line-height: 1.6em;
                                font-weight: 400;
                                font-style: normal;
                            }

                            .text {

                                color: #fff;
                                font-size: 36rem;
                                margin-bottom: 15rem;
                            }

                            .text2 {
                                font-size: 20rem;
                                line-height: 1.68421053em;
                                max-width: 550rem;
                                font-weight: 400;
                                font-style: normal;
                                color: #89c1f9;
                                margin: 0 auto;
                            }
                        }

                        .Team-card {
                            width: 100%;
                            height: auto;

                            .Team-card-title {
                                color: #ffffff;
                                font-weight: 400;
                                font-style: normal;
                                text-align: left;
                                margin: 0 0 15rem 0;
                                line-height: 1.3em;
                                font-size: 36rem;
                                padding-left: 30rem;
                            }

                            .Team-card-content {
                                box-sizing: border-box;

                                .Team-card-content-list {
                                    display: flex;
                                    flex-wrap: wrap;
                                    box-sizing: border-box;

                                    .Team-card-content-item {
                                        margin-bottom: 30rem;
                                        width: 285rem;
                                        box-sizing: border-box;
                                    }

                                }
                            }
                        }
                    }
                }

                .section10 {
                    background: #061649;
                    width: 100%;
                    height: 1159rem;

                    .section10-wrap {
                        width: 1140rem;
                        margin: 0 auto;
                        height: 100%;
                        padding: 100rem 0;
                        box-sizing: border-box;

                        .section9-wrap-title {
                            margin-bottom: 70rem;

                            .team {
                                font-size: 14rem;
                                text-align: center;
                                margin-bottom: 10rem;
                                color: #00b4fc;
                                line-height: 1.6em;
                                font-weight: 400;
                                font-style: normal;
                            }

                            .text {

                                color: #fff;
                                font-size: 36rem;
                                margin-bottom: 15rem;
                            }

                            .text2 {
                                font-size: 20rem;
                                line-height: 1.68421053em;
                                max-width: 550rem;
                                font-weight: 400;
                                font-style: normal;
                                color: #89c1f9;
                                margin: 0 auto;
                            }
                        }

                        .timeline {
                            width: 1095rem;
                            height: 710rem;
                            box-sizing: border-box;
                            padding: 20rem 0 20rem;
                            position: relative;
                            margin: 0 auto 20rem;

                            .timeline-item {
                                margin-bottom: 40rem;
                                width: 100%;
                                height: 94rem;
                                box-sizing: border-box;
                                position: relative;

                                .timeline-badge {
                                    color: #fff;
                                    width: 70rem;
                                    height: 70rem;
                                    padding-top: 22rem;
                                    font-size: 12rem;
                                    line-height: 12rem;
                                    text-align: center;
                                    position: absolute;
                                    left: 50%;
                                    margin-left: -35rem;
                                    z-index: 100;
                                    border-radius: 50%;
                                    top: 10rem;
                                    text-transform: uppercase;
                                    box-sizing: border-box;

                                    span {
                                        font-size: 14rem;
                                        display: block;
                                        line-height: 16rem;
                                    }

                                    div {
                                        content: "";
                                        position: absolute;
                                        z-index: -1;
                                        width: 110%;
                                        height: 110%;
                                        border-radius: 50%;
                                        top: -5%;
                                        left: -5%;
                                        opacity: .4;
                                    }
                                }

                                .timeline-panel {
                                    height: 94rem;
                                    background: #1e73be;
                                    width: 481rem;
                                    line-height: 32rem;
                                    float: left;
                                    border-radius: 5rem;
                                    padding: 30rem;
                                    position: relative;
                                    border: 1rem solid #eee;
                                    box-shadow: 0 10rem 30rem rgb(1 1 25 / 10%);
                                    box-sizing: border-box;

                                    .description {
                                        span {

                                        }
                                    }
                                }

                                .timeline-panel:before {
                                    position: absolute;
                                    top: 29rem;
                                    right: -15rem;
                                    display: inline-block;
                                    border-top: 15rem solid transparent;
                                    border-left: 15rem solid #eee;
                                    border-right: 0 solid #eee;
                                    border-bottom: 15rem solid transparent;
                                    content: " ";
                                }

                                .timeline-panel:after {
                                    position: absolute;
                                    top: 30rem;
                                    right: -14rem;
                                    display: inline-block;
                                    border-top: 14rem solid transparent;
                                    border-left: 14rem solid #fff;
                                    border-right: 0 solid #fff;
                                    border-bottom: 14rem solid transparent;
                                    content: " ";
                                }
                            }

                            .timeline-item:nth-child(2n) {

                                .timeline-panel:before {
                                    border-left-width: 0;
                                    border-right-width: 15rem;
                                    left: -15rem;
                                    right: auto;
                                }

                                .timeline-panel:after {
                                    border-left-width: 0;
                                    border-right-width: 14rem;
                                    left: -14rem;
                                    right: auto;
                                }

                                .timeline-panel {
                                    float: right;
                                }

                            }
                        }

                        .timeline:before {
                            top: 0;
                            bottom: 0;
                            position: absolute;
                            content: " ";
                            width: 3rem;
                            background-color: #ddd;
                            left: 50%;
                            margin-left: -1.5rem;
                        }
                    }
                }

                .section11 {
                    height: 764rem;
                    background-color: #041b63;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;

                    .section11-wrap {
                        width: 1140rem;
                        margin: 0 auto;
                        height: 100%;
                        padding: 80rem 0 60rem 0;
                        box-sizing: border-box;

                        .section11-wrap-title {

                            color: #fff;
                            font-weight: 400;
                            font-style: normal;
                            opacity: 1;
                            visibility: visible;
                            margin-bottom: 15rem;
                            line-height: 1.3em;
                            font-size: 36rem;
                        }

                        .section11-wrap-tip {
                            font-size: 20rem;
                            line-height: 1.68421053em;
                            font-weight: 400;
                            font-style: normal;
                            color: #89c1f9;
                            margin-bottom: 40rem;
                        }

                        .section11-wrap-btnBox {
                            width: 798rem;
                            height: auto;
                            box-sizing: border-box;
                            margin: 0 auto;
                            display: flex;
                            margin-bottom: 60rem;

                            .input-item {
                                padding: 0 15rem;
                                box-sizing: border-box;

                                input {
                                    padding: 0 20rem;
                                    font-style: normal;
                                    font-weight: 300;
                                    font-size: 16rem;
                                    display: block;
                                    border: 0;
                                    border-bottom: 1rem solid #d0d0d0;
                                    background: #fff;
                                    color: #010119;
                                    line-height: 1;
                                    box-sizing: border-box;
                                    min-height: 46.5rem;
                                    transition: border .25s;
                                    width: 246rem;
                                    height: 46.5rem;
                                    border-radius: 999rem;
                                }
                            }

                            .btn {
                                width: 246rem;
                                height: 46.5rem;
                                background: #1622a7;
                                line-height: 46.5rem;
                                color: #fff;
                                position: relative;
                                border-radius: 999rem;
                                font-size: 12rem;
                                cursor: pointer;
                            }

                        }

                        .url {
                            color: #fff;
                            font-size: 16rem;
                            line-height: 1.6em;
                            margin-bottom: 35rem;

                            .url-content {
                                font-weight: 700;

                                span {
                                    font-weight: 400;
                                    font-style: normal;
                                    margin-left: 15rem;
                                    cursor: pointer;
                                }
                            }

                            .email {
                                margin-top: 35rem;
                                color: #ffff00;
                            }
                        }

                        .logo-icon {
                            margin-bottom: 35rem;

                            .icon-img {
                                width: 120rem;
                                height: 60rem;
                            }
                        }

                        .foot-text {
                            font-weight: 400;
                            font-style: normal;
                            color: #89c1f9;
                            font-size: 16rem;
                            opacity: 1;
                            visibility: visible;
                            line-height: 1.6em;
                        }

                    }
                }
            }
        }
    }
</style>