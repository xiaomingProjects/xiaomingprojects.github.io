/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-10-01 08:10:18
 * @LastEditTime: 2021-10-01 08:11:31
 * @LastEditors: wangXiaoMing
 */
const ScrapPurchaseList = [
  {
    chinese: {
      title: 'PC机身小',
      picUrl: 0,
      price: '500元',
      unit: '个'
    },
    japanese: {
      title: 'パソコン本体 小',
      picUrl: 0,
      price: '500円',
      unit: '台'
    },
    english: {
      title: 'PC body small',
      picUrl: 0,
      price: '500 yen',
      unit: 'unit'
    }
  },
  {
    chinese: {
      title: 'PC机身',
      picUrl: 0,
      price: '900元',
      unit: '个'
    },
    japanese: {
      title: 'パソコン本体',
      picUrl: 0,
      price: '900円',
      unit: '台'
    },
    english: {
      title: 'PC body',
      picUrl: 0,
      price: '900 yen',
      unit: 'unit'
    }
  }
]

window.ScrapPurchaseList = ScrapPurchaseList;
console.log(window.ScrapPurchaseList)
