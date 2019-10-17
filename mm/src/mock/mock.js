import Mock from 'mockjs';
import data from './data.json';

function formatting(data) {
    let obj = {};
    let arr = [...new Set(data.map(item => {
        return item.Spelling.substr(0, 1);
    }))]
    arr.forEach(item => {
        obj[item] = data.filter(item1 => {
            return item1.Spelling.substr(0, 1) === item;
        })
    })
    return {
        obj
    }
}


//初始化第一次请求的数据
Mock.mock('/get/data', formatting(data.data));


//登录验证

Mock.mock('/login/required', ({ body }) => {

    if (JSON.parse(body).user == 'liuxinshu' && JSON.parse(body).pwd == '123456') {
        return {
            code: 1,
            msg: '登陆成功!'
        }
    } else {
        return {
            code: 0,
            msg: '密码错误!'
        }
    }
})