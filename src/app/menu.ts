import { Menu } from './ione/models/menu.model';

export const MENUS: Menu[] = [
  {
    uuid: '42500994-a9ac-4216-a56c-94b6e07aada2',
    name: '活动基础信息',
    icon: 'fa fa-bank',
    subMenus: [
      {
        uuid: 'afce25e8-739e-4592-9af0-7b0c146e7cc5',
        name: '活动品牌维护',
        link: ['/pages/brands'],
      },
      {
        uuid: 'bc14d4fe-3662-429c-b22d-14f33baf0540',
        name: '活动经销商维护',
        link: ['/pages/marking-channels']
      },
      {
        uuid: '9a742b4f-b916-4764-b8e3-e6a9df7ccbdc',
        name: '活动商品维护',
        link: ['/pages/marketingProducts'],
      },
      {
        uuid: '0afe7cb2-afcd-4148-941b-f9773dfe0e3d',
        name: '活动卡券维护',
        link: ['/pages/marketingCoupons'],
      },
      {
        uuid: '300c1d33-c38b-455c-ac47-4cd49c83fba9',
        name: '活动礼品维护',
        link: ['/pages/prizes'],
      },
      {
        uuid: '569e0e16-7eae-4319-addd-369bb28df33c',
        name: '活动奖项维护',
        link: ['/pages/prizeLevel']
      },
      {
        uuid: 'd5bdfe5f-d00b-4175-990d-ae2bb50e59d1',
        name: '收款方式维护',
        link: ['/pages/payWayManagement']
      },
      {
        uuid: 'cccf0fac-9487-4f1b-8fd0-5e576c6c6388',
        name: '签单员维护',
        link: ['/pages/signer']
      },
    ]
  },
  {
    uuid: '332951bd-ca63-4d4f-a732-2fe1f7c4404d',
    name: '促销规则维护',
    icon: 'fa fa-credit-card',
    subMenus: [
      {
        uuid: 'd5f0e5a6-b5a7-4dc1-aaf0-2aa34bcd1a4a',
        name: '奖券促销规则维护',
        link: ['/pages/lotteryRule'],
      },
      {
        uuid: 'a9ac2132-d1fe-420c-9976-f025b7507730',
        name: '满赠促销规则维护',
        link: ['/pages/giftRule'],
      },
    ]
  },
  {

    uuid: 'ce4302e5-82d1-45f4-a152-05a0cdafa0c0',
    name: '营销活动管理',
    icon: 'fa fa-comments',
    subMenus: [

      {
        uuid: '08c5f78e-714e-4ed4-b602-23d693eba5d0',
        name: '营销活动维护',
        link: ['/pages/marketingActivities'],
      },
      {
        uuid: '146f90b7-97ca-446f-a60e-12d510dcdfdb',
        name: '活动礼品库存维护',
        link: ['/pages/prizeStorage'],
      },
      {
        uuid: '208ec41e-1792-4e63-90d8-deda6ac3af7b',
        name: '营销活动关联维护',
        link: ['/pages/marketingActivityRelation'],
      },
      {
        uuid: '3a5b7967-464c-4deb-ad4c-4b0d9e1ba7ad',
        name: '经销商关联维护',
        link: ['/pages/channel-relation'],
      },
      {
        uuid: '83c7923e-7244-4c60-bbf0-790d9acb39e5',
        name: '经销商卡券分配',
        link: ['/pages/marketingCouponAssign'],
      },
      {
        uuid: 'a2ea0236-f2bd-4a06-a79c-ec8deda2aaf6',
        name: '营销活动券号打印',
        link: ['/pages/marketingCouponPrint'],
      },
    ]
  },
  {
    uuid: 'd94593dd-b688-40c5-9bde-f930e77a3fd5',
    name: '活动订单管理',
    icon: 'fa fa-bars',
    subMenus: [
      {
        uuid: '037f0fac-9487-4f1b-8fd0-5e576c6c6388',
        name: '签到管理',
        link: ['/pages/signIn'],
      },
      {
        uuid: '54df25a2-79db-4371-ae57-b30bf1a29f38',
        name: '营销活动订单维护',
        link: ['/pages/marketingOrders'],
      },
      {
        uuid: 'c7a226fa-643c-4a84-bcd3-7896e43109d5',
        name: '营销活动礼品兑换',
        link: ['/pages/gift-redemption'],
      },
      {
        uuid: '3a8d4627-09cb-4075-8fa5-bfe2cce4c6dd',
        name: '订单抽奖',
        link: ['/pages/order-lottery'],
      },
      {
        uuid: 'e5f4e58b-e0d4-422c-b7ca-b53baf5bcd42',
        name: '签到抽奖',
        link: ['/pages/sign-lottery'],
      },
      {
        uuid: '71fcdd31-cd58-414c-b01a-768c20a50d5f',
        name: '中奖公示',
        link: ['/pages/prize-repertory'],
      },
      {
        uuid: 'd00bd55f-bdfe-ae2b-990d-4175b50e59d1',
        name: '收款单查询',
        link: ['/pages/receiptOrderInquiry'],
      },
    ]
  },
  {
    uuid: '9261627c-5426-4da6-93f2-8ca3ba6367f2',
    name: '统计报表',
    icon: 'fa fa-bar-chart',
    subMenus: [
      {
        uuid: '3c66afcc-20ef-471a-a1a2-1afb232b4140',
        name: '订单记录',
        link: ['/pages/marketingOrderReport'],
      },
      {
        uuid: 'sdc60a1d-a602-eb47-a420-44ad09bfac38',
        name: '门店-订单汇总统计',
        link: ['/pages/channelOrderReport'],
      },
      {
        uuid: 'bbb677c7-227b-45dd-a397-ffa151473334',
        name: '城市-订单汇总统计',
        link: ['/pages/cityOrderReport'],
      },
      {
        uuid: 'aaa666c7-45dd-ad7b-a997-ffa151123424',
        name: '区域-订单汇总统计',
        link: ['/pages/provinceOrderReport'],
      },
      {
        uuid: '7f660a1d-6a02-47eb-a420-fa44ad09bc38',
        name: '会员信息表',
        link: ['/pages/marketingMemberInfoReport'],
      },
      {
        uuid: '0a815ac7-7a4e-478a-b0d0-4576b5a82eca',
        name: '门店-会员统计',
        link: ['/pages/marketingChannelMemberReport'],
      },
      {
        uuid: '86686e73-b008-4a27-b6f5-445f82eb5038',
        name: '城市-会员统计',
        link: ['/pages/marketingCityMemberReport'],
      },
      {
        uuid: '7da9b867-da65-42b8-91ab-d7d002da9d3b',
        name: '区域-会员统计',
        link: ['/pages/marketingProvinceMemberReport'],
      },
      {
        uuid: '319f758d-034d-42d7-91e4-3193bb754775',
        name: '签单统计',
        link: ['/pages/signerReport'],
      },
      {
        uuid: '1ca63bc7-ad7b-45dd-a997-ffa151477e24',
        name: '收款记录',
        link: ['/pages/receiptOrderReport'],
      },
      {
        uuid: '66fc222a-09d7-4c71-8e6f-bab2a8fa2343',
        name: '门店收款',
        link: ['/pages/marketingChannelReceiptReport'],
      },
      {
        uuid: '7467bc3e-54eb-4d9b-be57-d5da775f0c9c',
        name: '收款综合信息',
        link: ['/pages/marketingProvinceReceiptReport'],
      },
      {
        uuid: 'cc4c0106-b70d-4e0e-97c1-ebbf9096d9d8',
        name: '收款对账单',
        link: ['/pages/receiptPaidOrderReport'],
      },
      {
        uuid: '22aa122a-4c71-09d7-8e6f-ba8fa2ab2343',
        name: '门店-礼品发放统计',
        link: ['/pages/channelPrizeRepot'],
      },
      {
        uuid: '1915122a-7777-09d7-8e6f-ba8f43a2ab23',
        name: '礼品发放明细',
        link: ['/pages/prizeReport'],
      },
    ]
  },
  {
    uuid: '94E12E52-A7C7-4AA2-9BC6-E0BC5638630D',
    name: '售后管理',
    icon: 'fa fa-phone',
    subMenus: [
      {
        uuid: '3ee6cd29-158c-4a6c-9eb7-4be428a66868',
        name: '售后服务单',
        link: ['/pages/aftersalesOrders'],
      },
      {
        uuid: '1ee3940b-5047-4cbf-b1ab-57779f9291de',
        name: '售后满意度查询',
        link: ['/pages/aftersalesOrderReports'],
      },
      {
        uuid: '4741df0b-e145-4fab-880d-5a0b3dc38331',
        name: '安装工维护',
        link: ['/pages/installer'],
      },
      {
        uuid: 'b2e1630e-bf85-4846-87c2-6d78e5fb5735',
        name: '售后保修卡维护',
        link: ['/pages/warrantyCard'],
      },
      {
        uuid: 'e76cfed3-5d7a-4a32-a19e-9e09cfd9cd8e',
        name: '问题类型维护',
        link: ['/pages/aftersalesFaultType'],
      },
      {
        uuid: '47fbc9eb-8604-451c-9ec9-5513aad71dc0',
        name: '售后评价项目维护',
        link: ['/pages/aftersalesEvaluation'],
      },
      {
        uuid: '19403781-fbd3-4914-be85-c2430e665a09',
        name: '售后通知发送设定',
        link: ['/pages/afsScheduleMessageSetting'],
      },
      {
        uuid: '0392b38a-0ad8-4033-89f5-663ca7a9ce17',
        name: '售后参数维护',
        link: ['/pages/afsParameter'],
      },
    ]
  },
  {
    uuid: 'DE55EABC-70D9-4846-BE09-B594493A22ED',
    name: '权限管理',
    icon: 'fa fa-unlock',
    subMenus: [
      {
        uuid: '3f25c868-95e0-4008-b256-026de360ae0c',
        name: '账号权限分配',
        link: ['/pages/userRelations'],
      },
      {
        uuid: '5bf5e808-1d9a-47b9-b823-61ad9ae44b47',
        name: '角色权限分配',
        link: ['/pages/roleRelations'],
      },
      {
        uuid: '7EF0AA7A-3400-529A-E050-10AC9FA2214E',
        name: '账号菜单配置',
        link: ['/pages/userMenuRelations'],
      },
      {
        uuid: '0AA7EF7A-4263-295A-5E00-C4E79FA10A221',
        name: '角色菜单配置',
        link: ['/pages/roleMenuRelations'],
      },
      {
        uuid: 'dce47624-0410-44d2-aa74-9025429fff46',
        name: '基础信息',
        icon: 'fa fa-thumb-tack',
        subMenus: [
          {
            uuid: 'bb8b8ad6-e7a9-47ca-b00d-859ca57187aa',
            name: '角色管理',
            link: ['/pages/roleManage'],
          },
          {
            uuid: '2738cee7-5545-4371-b2ec-3fd37a2aac1d',
            name: '员工基础资料',
            link: ['/pages/employees'],
          },
          {
            uuid: '1bb11ccf-a73e-49df-8d79-33fbb8bfbe6b',
            name: '打印参数设置',
            link: ['/pages/parameters'],
          },
        ]
      }
    ]
  },

];
