let obj = {};

//获取所有商品数据
obj.getGoodsList = function () {
    return JSON.parse(window.localStorage.getItem('goodsList') || '{}');
}

//保存商品
obj.saveGoods = function (goodsList) {
    window.localStorage.setItem('goodsList', JSON.stringify(goodsList));
}

//增加一个商品
obj.add = function (goods) {
    let goodsList = this.getGoodsList();
    if (goodsList[goods.id]) {
        goodsList[goods.id] += goods.num;
    
    } else {
        goodsList[goods.id] = goods.num;
    }
    this.saveGoods(goodsList);
}


//获取总数
obj.getTotalCount = function () {
    let goodsList = this.getGoodsList();
    let values = Object.values(goodsList);
    let sum = 0;
    values.forEach(val => sum += val);
    return sum;
}

export default obj;