export default {
    // 常用
    common:{
        success: '성공',
        fail: '실패',
        warning: '제시',
        confirm: '확정',
        cancel: '취소',
        noData: "데이터 없 음",
    },
    //个人资料
    userInfo: {
        userCenter: '회원정보',
        basemsg: '기본정보',
        phonenum: '전화번호',
        userID: 'ID',
        truename: '성명',
        sex: '성별',
        man: '남',
        weman: '녀',
        secret: '비밀',
        birthday: '생일',
        idnum: '신분증번호',
        userName: '회원정보',
        pleaseSelect: '선택',
        pleaseInput: '위 정보를 모두 입력하세요',
        save: '저장',
        exit: '탈퇴'
    },
    //실명인증
    identifi: {
        identifitext: '실명인증',
        truename: '성명',
        idnum: '전화번호',
        uploadface: '신분증 앞면 사진을 업로드 하세요',
        uploadback: '신분증 뒷면 사진을 업로드 하세요',
        goidenrifi: '인증',
        finish: '인증완료',
        addname: '성명',
        addidnum: '전화번호',
        trueInfo: '성명',
        uploadCard: '신분증 사진을 업로드하세요',
        inputTrueName: '신분증번호를 입력하여주세요',
        auth: '인증',
        wait:'심 사 를 기다리다',
        fail:'인증 실패',
        failed:'인증 신청 실패',
        havename:'실명 이 비어 있 으 면 안 됩 니 다',
        havenum:'신분증 계 정 이 비 어 있 으 면 안 됩 니 다',
        upback:'신분증 뒷면 사진 올 려 주세요',
        upface:'신분증 정면 사진 올 려 주세요',
        reauth:'인증 실패, 수정 후 다시 인증 하 세 요'
    },
    //받는 주소
    userAdress: {
        userAdresstext: '주소',
        name: '성명',
        Adressmsg: '주소 정보',
        msgdetail: '상세주소',
        mailnum: '우편번호',
        phonenum: '전화번호',
        defaultaddress: '기본 주소로 설정',
        save: '저장',
        reciveman: '수취인',
        area: '소재지',
        op: '새팅',
        delete: '삭제',
        change: '수정',
        address: '기본주소',
        addressTitle: '주소',
        pleaseName: '성명',
        pleaseAddr: '상세주소',
        pleaseCode: '우편번호',
        pleasePhone: "전화번호",
        pleasein:'입력 하 세 요'
        // savedAddr: '已保存两个地址',
        // sichuan: '四川省成都市双流区华阳街道',
        // userAddr: '瑞升 橡树华府五单元1401',
        // userName: '李歪歪'
    },
    //个人资产
    personasset: {
        all: '총 자산',
        in: '출금',
        out: '입금',
        remind: '접속 웹 사이트를 확인하고 개통 후 재 인증하고 SLT라고 주장하는 직원에게 돈을 이체하거나 비밀번호를 공개하지 마십시오.',
        money: '자산 분배',
        accout: '계정',
        accoutarr: ["전부", "입금", "판매", "주문"],
        moneytype: '코인 종류',
        num: '수량',
        amount: '총액',
        charge: '단가',
        tredetype: '지불방식',
        moneycomes: '화폐원천',
        usermoney: '수수료료',
        tableHeader:['코인 종류','수량','동결','사용가능','단가','총액','오프션'],
        total:'내 자산',
        account:'내잔고'

    },
    //一键구매
    deal: {
        buy: '구매',
        seal: '판매',
        welcome: 'SLT 가입을 환영합니다',
        buorseal: '모든 코인 구매 또는 판매',
        pay: '지불할것',
        goseal: '판매할것',
        havemoney: '잔액',
        goout: '견적 없음, 선택 영역으로 이동하세요.',
        look: '견적서보기',
        rewind: '가질것',
        buynum: '구매 총수량을 입력하세요.',
        paytype: '지불방식',
        buySLT: 'SLT구매',
        sealSLT: 'SLT판매'
    },
    //오다상세정보
    orderdetails: {
        status:['미지급','거래완료','거래실패'],
        waitpay: '미지급',
        opentrade: '수주열기',
        cancleorderauto: '내불금 미결제, 자동 주문취소',
        paytype: '지불방',
        orderdetail: '주문내역',
        ordernum: '오다号',
        usemoney: '수수료',
        charge: '거래단',
        num: '거래수량',
        allmoney: '총금액',
        confirmmsg1: '결제카드의 소유자와 플랫폼의 실명확보해주세요.',
        confirmmsg2: '일치, 불일치하지 판매자는 돈을 넣지 않을 권리가 있습니다.',
        remindmsg1: '만약 판매자에게 이미 돈을 지불했다면 주문을 취소하지 마세요.',
        remindmsg2: '상대방의 수금정보를 성실히 대조해 주십시오.이체할 때에는 당신의 제삼자계좌가 동결되지 않도록 어떤 정보도 기입하지 마십시오.',
        cancelorder: '주문취소',
        confirmtext: '확인',
        connect: '온라인 고객 서비스에 문의',
        tip:'질문이 있으시면 고객 서비스에 호소하십시오.',
        back: '뒤로가기',
        waitOrder: '미지급',
        hadfree: '수수료',
    },
    //我的订单
    myorder: {
        myorder: "나의 주문 ",
        inoutOrder: '구매/판매주문',
        shop: '구매',
        place: '거래소',
        wait: "주문 대기",
        heade: ['수량', '동결', '총액'],
        haddfee: '수수료',
        all: "전부방향의 주문",
        buy: "구매",
        sell: "판매",
    },
    //聊天
    chat: {
        chatName: '*****',
        preChat: '채팅 기록',
        big: "*****",
        customMsg: '*****',
        userMsg: '*****',
        time: '*****',
        send: '보내기',
        place: '하고 싶은 말을 입력하세요...'
    },
    waitOrder: {
        wait: '주문 대기',
        tip: '상대방이 주문을 수락하기 전에 결제하지 마십시오. 상대방이 주문을 수락 한 후 결제 수단을 확인할 수 있습니다.',
        waitTime: "상대방 주문 대기",
        chat: '판매자에게 연락하고, 상대방과 채팅하고, 주문을 더 빨리 받으려면 아래를 클릭하세요.',
        cancel: '취소',
        contact: '판매자 연결',
        seller: "판매자 정보",
        orderDetail: '주문 내역',
        total: "총가",
        price: '주문내역',
        num: '수량',
        orderNum: '주문번호'
    },
    //取消오다
    cancleorder: {
        back: '돌아가기',
        cancleorder: '주문취소',
        closeorder: '인수닫기',
        complaintext1: '만약 의문이 있으시면 고객센터에 진정하십시오.',
        orderdetails: '주문내역',
        remindmsg1: '만약 돈을 이체했다면, 미확인 결제시스템은 자동으로 진행되기 때문에 채팅 인터페이스에서 상대방과 의사소통을 할 수 있습니다.',
        remindmsg2: '[주동 취소] 또는 [시간 초과] 3회시 자동 취소, 또는 악의적 취소 -회, 당일 거래 금지 : 판매자가 유효한 수납 방식을 제공하지 않아 주문 취소가 발생한 경우 고객 서비스에 청구하여 재판결할 수 있습니다.',
        remindmsg3: '이번 달 누계 6회로 7회차부터 1회 취소당 2시간 동안 거래가 금지된다.',
        complaintext2: '거래처에 제소'
    },
    //购物车
    shopcar: {
        shopcar: '장바구니',
        gofill: '빨리 채워주세요!',
        all: '전부',
        ordermoney: '오다',
        have: '기선',
        goodsnum: '건상품',
        goodsall: '상품총계',
        usemoney: '배송비',
        free: '무료',
        allmoney: '총계',
        text: '설명',
        text1: '온라인 결제 주문서 제출 후 15분 이내에 결제하지 않으면 주문서가 시스템으로 자동 취소됩니다. 빠른 결제 완료로 상품이 즉시 배송될 수 있도록, 재화 상품과 매장 배송 상품은 분리하여 보내드립니다.',
        gopay: '직접결제',
        goon: '계속쇼핑',
        inStock:'재고',
        outStock:'일시 품절',
        goodsId:'스타일 번호',
        goodsStyle:'양식',
        delete:'삭제',
        date:'발송 후 영업일 2-4일 후 배송 예정',
        num:'수량',
        confirmtext:'카 트 삭제 상품 확인',
        notify:'제시 하 다',
        confirm:'확정 하 다',
        cancle:'취소 하 다',
        succeed:'삭제 성공',
        fail:'삭제 됨',
        confirmbuy:'구 매 하 시 겠 습 니까?',
        cancled:'취소 됨'
    },
    //商品详细
    goodsdetails:{
        shopcar: '장바구니넣기',
        goodsId:'스타일 번호',
        title:'상품 상세',
        color:'색깔',
        size:'치수',
        sizeList:'사이즈 표',
        detail:'제품 디 테 일',
        paytype:'지불 방식',
        expres:'배달 서비스',
        buygoods:'즉시 구 매',
        notify:'제시 하 다',
        confirm:'확정 하 다',
        cancle:'취소 하 다',
        comfirmtext:'카 트 가입 을 확정 하 다',
        succeed:'카 트 가입 성공',
        fail:'취소 됨',
        confirmbuy:'구 매 하 시 겠 습 니까?',
        cancled:'취소 됨'
    },
    //商城
    shop:{
        classify:'카테고리' ,
        classifyTip:'다음 기준으로 필터링' ,
    },
    //用户设置
    userSet: {
        title: '계 정 설정',
        tabArray: ['개인 정보', '신분 인증', '수령 주소', '개인 자산', '재무 기록']
    },
    login:{
        welcome:'SLT는 코인 구매 또는 비즈니스 문의를 환영합니다.',
        logintext:'로그인',
        username:'ID 입력하세요.',
        userpsw:'비밀번호 입력하세요.',
        forget:'비밀번호 찾기',
        goreigest:'즉시가입',
        login:'로그인',
        passwordCheck: '비밀 번호',
        usernameCheck: '사용자 이름',
    },
    regiest:{
        welcome:'SLT는 코인 구매 또는 비즈니스 문의를 환영합니다.',
        username:'ID 입력하세요.',
        userpsw:'비밀번호 입력하세요.',
        userres:'즉시가입',
        get:'인증코드 받기',
        regiest:'회원가입',
        gologin:'등록 하 다',
        regiested:'등록 완료',
        mobile: "핸드폰 번호",
        password: "비밀 번호",
        code: "인증번호",
    },
    //头部
    header: {
        tabbar: ['메인 페이지', '백서', '쇼핑몰', 'NFT', 'OTC'],
        lenList: ['중문', '한문'],
        loginText: ['로그인', '회원가입']
    },
    //위치买卖
    position: {
        title1: 'NFT',
        title2: 'NFT 오픈',
        title3: 'NFT는 위치를 구매하는 것이고 그자리의 권한을 구매하는것입니다.',
        title4: 'Product category',
        title5: '카테고리',
    }, //위치买卖상세정보
    positionDetail: {
        detail: '상세내역',
        position: '위치',
        price: '가격',
        get: '수익',
        sell: '위치 매도',
        num: '수량',
        remain: '남은 자리',
        buy: '구매',
        buySuccess: '구 매 위치 성공',
        buyFail: '상품 구매가 실패하였습니다',
    },
    //首页
    index: {
        name: "SLTcoins",
        title: "키즈산업 생태계 블록체인",
        detail: "SLTcoin은 글로벌 최초의 'BOOK코인' 입니다. 실질적으로 사업이 진행중인 북트리와 연계하여 코인을 분배할 수 있어 시장 보급이 용이하며 빠른 거래활성화가 가능 합니다. SLTcoin은 북트리 브랜드 및 매출 상승에 따른 코인의 가치 동반상승을 기대할 수 있는 미래가 탄탄한 코인 입니다.",
        whitBook: "WHITE PAPERS",
        whitBookT: "북트리 소개",
        Ends: "ICO Ends in",
        salesEnds: "Token sales ends on 31st May, 2021",
        buySltCoin: "SLT코인 구매",
        bar: "SLT coins",
        buyBtn: "BUY SLT COINS",
        number: "10,000,000,000",
        Collected: "Collected for now",
        text1: "1M",
        text2: "10B",
        ecosystemTitle: "생태계",
        ecosystemText: "독서데이터로 유아 및 아동 개개인의 교육, 취향, 수준 데이터를 확보하고, 이를 통해 키즈산업 생태계를 구축하여 SLTcoin을 기본 생태토큰으로 블록체인 플랫폼에 고객, 교육기업, 작가, 교육광고자 모두에게 혜택을 제공하는 생태계를 구축하여, 코인판매 이외에도 상품유통, 광고, 펀딩 서비스를 통한 자체 수익원을 확보.",
        blockchainTitle: "블록체인 기술",
        blockchainText: "암호화폐의 근간인 블록체인 기술은 4차 산업혁명 시대를 이끌어갈 핵실 기술중의 하나로 거래 내역 데이터를 모두 블록에 저장하고 연결하여 데이터를 기록하 저장된 블록들이 모여 만들어진 블록체인은 모든 네트워크 참여자들에게 공개되어 신뢰를 보장.",
        useTitle: "활용 분야",
        useText: "교육컨텐츠 구입 맻 대여, 키즈카페 결재, 북트리 판매수익 배분, 기프트 카드, 시각장애인 컨텐츠 개발, VIP 컨텐츠, SLTcoin 채굴, 광고청취",
        safeguardTitle: "투명성과 공정성을 보증",
        safeguardText: "SLTcoin은 TRON기반의 TRC20토큰을 표준으로 한 코인으로 이미 많은 이용자들에 의하여 성공적인 표준기술로 인정받고 있습니다. 트론스캔 시스템을 통하여 모든 내용이 공개되기 때문에 투명성을 보증 할 수 있으며 투자자들에게 신뢰를 줄 수 있습니다.",
        know: "KNOW ABOUT THE CURRENCY",
        SLTCoin: "What is SLT coin?",
        SLTCoinText: "SLTcoin은 성장시장인 키즈산업을 블록체인/빅데이터/AI등을 이용하여 지속적인 수익 창출 생태계를 구축하기 위한 사업의 일환으로서 만들어진 코인입니다. SLTcoin은 작가, 출판사, 교육업체, 광고업체 등, 유아 및 아동 제품업체가 얽혀 있는 생태계를 이끌어 나갈 수 있는 코인이라 할 수 있습니다.",
        videoText: "소개 비디오 보기",
        study: "Artificial Intelligence Learning",
        AIText: "AI 시스템을 통한 키즈시장 접금",
        AIDetail: "독서 데이터를 파악하여 아이의 독서량, 독서수준, 독서성향을 알아내고, 부모님들은 아이가 좋아하는 분야가 무엇인지! 또래 아이들과 비교하여 어느 정도 수준에 있는지 그리고 출판사 및 교육관련 업체에서는 이 정보를 통하여 새로운 컨텐츠를 개발 하게 됩니다.",
        help: "HELP TO GET STARTED",
        aboutQuestion: "Frequently Asked Questions",
        support: "기술 지원이 가능한가요?",
        search: "SLTcoin팀은 어떠한 문의도 환영 합니다.",
        connect: "마케팅팀에 문의 바랍니다.",
        teamEmail: "마케팅팀 sltglobalcoin@gmail.com",
        helpPie: "전체 코인의 10%에 해당하는 10억개는 IEO및 사모펀드 방식으로 판매되며, 안정적인 SLTcoin의 운영을 위하여 초기 엔젤투자자가 10%, 마케팅 15%, 생태기금으로 30%, 비축기금으로 20%, 개발팀과 고문이 15%의 SLTcoin을 보유하게 됩니다.",
        introduce: "북트리 소개",
        introduceText: "키즈산업 생태계를 위한 완벽한 블록체인",
        introduceText1: "북트리란 엄마에게는 자유시간을 아이에게는 독서습관을 만들어주는 유아동(1~7세) 눈높이의 책을 읽어주는 교육 제품입니다. RFID 기술을 활용하여 아기가 책을 읽고 싶을때, 혼자서도 활용이 쉽고, 언제든지 재미있게 읽어 줍니다.",
        user1: "부모(구매고객)",
        user1List: [
            '부모를 대신하여 통화책을 읽어 줌',
            '영어책도 원어민 발음으로 읽어 줌',
            '자연스러운 독서환경 조성',
            '아이의 연령, 수준을 고여한 독서 가이드 제공',
            '1만여권 이상의 도서, 클래식, 동요, 컨텐츠 제공',
            '빅데이터 시스템을 통한 맞춤형 독서정보 제공'
        ],
        user2: "유아/어린이(타깃고객)",
        user2List: [
            '아이가 원할때 언제든지 책을 읽어 줌',
            '아이들 눈높이에 맞춘 편리한 기술',
            '언제든 아이의 활동 공간에서 보여지며, 독서환경 제공',
            '동요, 클래식 등 다양하고 재미있는 컨텐츠 제공',
        ],
        tokenText: "SLT생태계 안에서 SLTcoin은 생태토큰으로 사용",
        tokenPlan: "SLTcoin 생태계 활용 계획",
        tokenList: [
            '교육컨텐츠 구입 및 대여',
            '키즈카페 결재',
            '북트리 판매수익 배분',
            '기프트 카드',
            '시각장애인 컨텐츠 개발',
            'VIP 컨텐츠',
            'SLTcoin 채굴',
            '광고청취',
        ],
        searchBtn: "문의하기",

        trueText: "ICO FACTS",
        intoText: "Everything to get you started",
        backBuy: "Buyback",
        backBuyText: "Buyback 및 소객을 통해 코인의 가격 안정을 도모하는것을 목적으로 하는 Buyback제공",
        rateText1: "50%",
        yearText1: "1년차 Buyback",
        rateText2: "40%",
        yearText2: "2년차 Buyback",
        rateText3: "30%",
        yearText3: "3년차 Buyback",
        Howtobuy: "How to buy SLT coin",
        HowtobuyWay: "전체 코인의 10%에 해당하는 10억개는 IEO및 사모펀드 방식으로 판매되며, 안정적인 SLTcoin의 운영을 위하여 초기 엔젤투자자가 10%, 마케팅 15%, 생태기금으로 30%, 비축기금으로 20%, 개발팀과 고문이 15%의 SLTcoin을 보유하게 됩니다.",
        tableTextTitle: [
            'SLT coin',
            'ICO Price',
            'ICO Date',
            'Exchange Listing',
            'Token Distribution',
        ],
        tableTextContent: [
            'TRON TRC20',
            '1 SLT coin = 10KRW',
            'March 31 – May 31 (23:59 UTA+9)',
            'Main Exchanges by 15 September',
            'Right after the ICO',
        ],
        Korean: "한도",
        Chinese: "중문",
        notice: "Notifications",
        noticeText: "성장시장인 교육산업을 블록체인/빅데이터/AI등을 이용하여 지속적인 수익 창출",
        payWay: "Payment Options",
        payWayText: "학부모, 학생, 플랫폼고객, 교육기업, 작가, 교육광고자",
        money: "Referral & Bounty",
        moneyText: "상품유통, 광고, 펀딩 서비스를 통한 다양한 수익원",
        team: "Team",
        teamTitle: "Who We Are",
        teamTitleText: "Get to know the team of enthusiasts who are working hard and passionately behind this project",
        member: "Member",
        counselor: "Advisor",

        SLTMap: "SLT코인 로드맵",
        way: "How it was implemented",
        time: "Here is a timeline of how we get started with the SLT coin and where we are going further",
        year20211: "초기 엔젤투자 판매",
        year20212: "사모펀드 진행",
        year20213: "첫번째 거래소 상장",
        year20214: "대형 거래소 상장",
        year20221: "첫번째 바이백 진행",
        Mar: "Mar",
        May: "May",
        Jun: "Jun",
        Aug: "Aug",
        year1: "2021",
        year2: "2022",
        join: "SLTcoin과 함께 하세요!",
        joinText: "SLTcoin 팀은 코인 구매나 사업관련 어떠한 문의든지 환영 합니다.",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        net1: ["SLT Global","http://sltglobal.net"],
        net2: ["Booktree","http://ubooktree.com"],
        net3: ["☉문의 e-Mail：sltglobalcoin@gmail.com"],
        own: "© Smart Learning Technology Global 2020. All rights reserved.",
        submit: "SUBMIT",
    },
    //支付成功
    paymentSuccess: {
        success: '기불성공',
        thank: '구매해 주셔서 감사합니다.',
        order: '주문번호',
        model: '지불방',
        handfee: '수수료',
        unitprice: '거래단',
        num: '거래수량',
        checkorder: '주문보기',
        returnHome: '메인 화면으로 가기'
    },
    //OTC
    otcTrade:{
        tabBar:['자유거래','원 클릭 거래'],
        buy:'구매',
        sell:'판매',
        title:'자유거래',
        subTitle:'',
        tableHeader:['광고주','수량','한도','단가','지불방','거래','수수료'],
        auth:'실명인증이 필요합니다.',
        buyNumber: "수량에따라구매하다",
        buyPlaceholder: "구매수량을입력하세요",
        all: "전부",
        limit: "한정 하 다",
        treadMoney: "거래 금액",
        payMoney: "실제 지불",
        openOrders: "오픈 시트",
        acceptText: "주문 서 를 클릭 하면 귀하 가 아 시 는 것 을 의미 하고 수령 에 동의 합 니 다",
        ad: "광고 서비스 프로 토 콜",
        sellBtn: "매출 을 확인 하 다",
        success: "성공 하 다",
    },
    //钱包 提币、입금wallet
    wallet:{
        charge:'입금',
        chinaName:'ChainName',
        chargeAddress:'입금주소',
        copyAddress:'주소복사',
        confirm:'확인',
        chargeTipArray:[
            '최소입금수량:',
            '자금의 안전을 확보하기 위해 고객님의 계정 보안 정책이 변경되거나 비밀번호가 변경 될 경우 수동 검토를 실시하므로 직원이 전화 나 이메일로 연락을 드릴 때까지 기다려 주시기 바랍니다.',
            '정보가 봉인되거나 유출되지 않도록 컴퓨터와 브라우저가 안전한지 확인하십시오.',
            '언급하신 디지털 자산은 멀티 체인 자산입니다. 어떤 체인에서 출금을 선택하든 귀하가 소유 한 출금 페이지에 표시되는 디지털 자산의 총량이 해당 출금 횟수만큼 감소한다는 의미입니다.'
        ],
        withdraw:'출금',
        available:'유효한',
        withdrawAddress:'출금주소',
        num:'출금수량',
        all:'전부',
        serviceCharge:'수수료',
        tip:'입금 전 꼭 알아두세요',
        withdrawTipArray:[
            '해당 주소로 다른 디지털 자산을 입금 시도 할 경우에 발생 할 수 있는 오류/손실은 복구 불가능합니다.',
            '입금 프로세스를 거쳐 잔고에 반영이 됩니다. 입금 프 로세스는 자동으로 진행되며 네트워크 상황에 따라 소 요 시간이 달라질 수 있습니다.',
            '위 주소는 입금전용 주소입니다.'
            
        ],
        received:'도착수량',
        tips:[
            '현금 인출 주 소 는 비어 있 으 면 안 됩 니 다!',
            '현금 인출 금액 은 공백 일 수 없습니다!',
            '현금 인출 신청 성공!',
            '현금 인출 신청 실패!'

        ]

    },


    //----------------------------------------------------------------------------------

    //移动提现
    Mwithdraw: {
        withdrawText: "출금",
        btcText1: "BTC",
        btcText2: "Bitcoin",
        name: "코인",
        addr: "출금주소",
        wNumber: "출금수량",
        btnBoxText: "SLT",
        all: "전부",
        fee: "수수료:",
        BTCNumber: "도착수량",
        title: "출금상기",
        btn: "확인",
        tipText1: "출금 작업이 완료되면 대상 주소에 해당하는 계정 소유자가 해당 자산의 소유권을 누릴 수 있습니다. 출금 작업 전 출금 주소 정보를주의 깊게 확인하여 출금이 자발적인지 확인하고, 피라미드 계획, 불법 모금, 사기 등과 같은 불법적 인 상황을 포함하지 않으며, 속임을 조심하고 불필요한 재산 손실을 피합니다.",
        tipText2: ".최소출금금액은 : 0.001",
        tipText3: ".자금의 안전을 보장하기 위해 귀하의 계정 보안 정책이 변경되거나 비밀번호가 변경 될 때 당사는 수동으로 코인 출금을 검토 할 것입니다. 직원이 전화 또는 이메일로 귀하에게 연락 할 때까지 참을성있게 기다려주십시오.",
        tipText4: ".정보가 변경되거나 유출되지 않도록 컴퓨터와 브라우저를 안전하게 보관하십시오.",
        toolTip: "다시 알리지 않기",
        primary: "확인",
        decal: "《부인성명》",
        tipText: "선택하신 네트워크는 SLT 코인 생태계 헤코 네트워크로 헤코 네트워크 hrc의 20대 코인 표준을 지원합니다.만약 상대방이 지원하지 않는다면, 당신의 자산은 손실될 것입니다.또한 Heco의 탈중심화 특성으로 인해 Huobi Globalt이 제3의 DAPP를 사용할 경우 위험함을 알려드립니다.잘 읽어보세요",
        book: "이 주소로만 SLT를 충전하실 수 있으며 다른 자산은 SLT 주소로 충전하시면 찾을 수 없습니다.",
        tips:[
            '현금 인출 주 소 는 비어 있 으 면 안 됩 니 다!',
            '현금 인출 금액 은 공백 일 수 없습니다!',
            '현금 인출 신청 성공!',
            '현금 인출 신청 실패!'

        ]
    },
    //移动充币
    MtopUp: {
        withdrawText: "입금",
        btcText1: "BTC",
        btcText2: "Bitcoin",
        name: "코인",
        addr: "입금주소",
        wNumber: "입금수량",
        copyAddr: "주소복사",
        btnBoxText: "SLT",
        all: "전부",
        fee: "수수료:",
        searchPlaceholder: "코인검색",
        BTCNumber: "도착수량（BTC）",
        btn: "확인",
        tipText1: "입금 전 꼭 알아두세요",
        tipText2: ".해당 주소로 다른 디지털 자산을 입금 시도 할 경우에 발생 할 수 있는 오류/손실은 복구 불가능합니다.",
        tipText3: ".입금 프로세스를 거쳐 잔고에 반영이 됩니다. 입금 프 로세스는 자동으로 진행되며 네트워크 상황에 따라 소 요 시간이 달라질 수 있습니다.",
        tipText4: ".위 주소는 입금전용 주소입니다.",
        toolTip: "다시 알리지 않기",
        primary: "일금",
        tipText: "이 주소는 SLT로만 입금할수 있습니다.",
        book: "이 주소로만 SLT를 충전하실 수 있으며 다른 자산은 SLT 주소로 충전하시면 찾을 수 없습니다.",
    },
    positionRecord: {
        detail: "상세정보보기",
        time: "시간",
        type: "유형",
        number: "수량",
        price: "단가",
        noData: "데이터 없음"
    },
    //移动端支付成功
    Mpaysucceed:{
        succeed:'지불성공',
        thanks:'구매감사합니다',
        ordernum:'오다号',
        paytype:'지불방식',
        usermoney:'수수료',
        chaege:'거래단가',
        paynum:'거래수량',
        look:'오다보기',
        backindex:'메인페이지 가기'
    },
    //移动端확인오다
    Mpayorder:{
        back:'돌아가기',
        beforepay:'지불대기',
        open:'주문열기',
        cancle:'미결제시 오다 자동 취소',
        paytype:'지불방식',
        orderdetails:'오다상세정보',
        ordernum:'오다남버',
        usermoney:'수수료',
        chaege:'거래단가',
        paynum:'거래수량',
        allmoney:'총금액',
        confirmtext1:'결제카드의 소유자와 플랫폼의 실명확보',
        confirmtext2:'일치, 불일치하지 않으면 파는 사람이 돈을 넣지 않을 권리가 있다.지급보전과 카드의 입금시간이 비교적 긴 결제방식은 사용하지 마십시오.',
        remindtext1:'만약 판매자에게 이미 돈을 지불했다면,절대 취소하지 마세요.',
        remindtext2:'당신은 상대방의 수방식에 근거하여 위챗/페이퍼/카드 등의 플랫폼을 통하여 이체할 필요가 있습니다. 상대방의 수금정보를 잘 확인해 주십시오. 이체 시에는 당신의 제3자 계좌가 동결되지 않도록 어떠한 정보도 기재하지 마십시오.',
        cancleorder:'오다취소',
        confirmorder:'지불확인 ',
        connect:'올라인 고객서비스 연결'
    },
    //移动端取消오다
    Mcancleorder:{
        back:'돌아가기',
        cancle:'오다취소',
        close:'주문 마감',
        question:'문의가 잇으면 고객 서비스에 호소',
        paytype:'지불방식',
        orderdetails:'오다상세정보',
        ordernum:'오다남버',
        usermoney:'수수료',
        chaege:'거래단가',
        paynum:'거래수량',
        allmoney:'총금액',
        remindtext1:'이미 송금 한 경우 결제 시스템이오다를 자동 취소하지 않았기 때문에 채팅 인터페이스에서 상대방과 대화 할 수 있습니다.;',
        remindtext2:'[자동 취소] 또는 [타임 아웃] 자동 취소 3 회 또는 악의적 인 취소는 당일까지 금지됩니다. 거래 : 판매자가 유효한 수납 방식을 제공하지 않아오다 취소, 고객 서비스에 이의를 제기 할 수 있습니다. 재심',
        remindtext3:'매월 총 6 회, 7 회부터 시작하여 취소 할 때마다 2 시간 동안 거래가 금지됩니다.',
        connect:'고객 서비스에 호소'
    },
    //移动端확인오다弹窗
    confirmorderpop:{
        confirm:'확인구매',
        charge:'단가',
        num:'수량',
        all:'총금액',
        intype:'수납방식',
        out:'탈퇴',
        gopay:'확인주문내리기'
    },
    //移动端提醒인증弹窗
    remindauth:{
        goauth:'실명인증을 완료하세요.',
        remindtext1:'디지털 자산 보호를 위해 실명인증이 필요합니다',
        personauth:'개인실명인증',
        auth:'인증'
    },
    //移动端즉시구매
    Mbuy:{
        choose:'자유거래',
        trade:'즉시구매',
        value:'가치 약',
        willpay:'교환전코인',
        canuse:'가용자금',
        willgain:'교환후코인',
        paytype:'교환방식',
        buy:'구매',
        willseal:'교환전코인',
        seal:'판매'
    },
    //移动端자유거래
    Mtrade:{
        buy:'구매',
        seal:'판매',
        num:'수량',
        charge:'단가',
        limit:'한도액'
    },
    //移动端我的
    usermsg:{
        personcenter:'내정보',
        auth:'실명인증',
        order:'보유자산',
        localtionn:'위치',
        address:'받는 주소',
        log:'거래내역',
        out:'탈퇴'
    },
    //移动端消息列表
    msglist:{
        msglist:'메시지 목록',
        hidden:'읽기 숨기기',
        allread:'전부 읽은 상태로 표시',
        details:'상세정보',
        reply:'댓글',
        noData: "데이터 없음",
    },
    TopUp: {
        topUp: "입금기록",
        withdraw: "출금기록",
        OTC: "OTC거래기록",
        position: "위치 구매기록",
        deal: "상품 거래기록",
    },
    //移动端商城
    Mmall:{
        select:'필터',
        copyright:'판권 소유',
        right:'사업자드록증',
        beian:'기록'
    },
    //移动端로그인
    Mlogin:{
        login:'로그인',
        inphone:'핸드폰 번호를 입력해주세요',
        inpsw:'비밀번호를 입력해 주세요'
    },
    Mpositiondetails:{
        position:'뒤로가기',
        seal:'현재 보유 자산',
        num:'수량',
        residue:'구매 후 남은 자산',
        earn:'수익',
        desceipt:'상품 이 있다,매개 위치평균 수입',
        buy:'구매',
        // tip:'구 매 팁, 문제 가 있 으 면',
        connect:'구매 중 문제 발생 시 온라인 고객 서비스 연결',
        buySuccess: '구 매 위치 성공',
        buyFail: '상품 구매가 실패하였습니다',
        fail:'실패 하 다',
        succeed:'성공 하 다'
    },
    notifyText: {
        notify: "제시 하 다",
        vCode: "먼저 인증번호 받 으 세 요",
        vPhone: "핸드폰 번 호 를 먼저 입력 하 세 요.",
        success: "거래 가 성공 하 다",
        fail: "거래 실패",
    }
}
