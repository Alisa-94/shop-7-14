import Vue from 'vue'
// 直接更新state 的多个方法的对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    INREMENT_FOOD_COUNT,
    DEREMENT_FOOD_COUNT,
    CLEAR_CART
} from './mutation-types'
export default{
    [RECEIVE_ADDRESS] (state,{address}){
        state.address = address
    },
    [RECEIVE_CATEGORYS] (state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS] (state,{shops}){
        state.shops = shops
    },
    [RECEIVE_USER_INFO] (state,{userInfo}){
        state.userInfo = userInfo
    },
    [RECEIVE_INFO] (state,{info}){
        state.info = info
    },
    [ RECEIVE_GOODS] (state,{goods}){
        state.goods = goods
    },
    [RECEIVE_RATINGS] (state,{ratings}){
        state.ratings = ratings
    },
    [INREMENT_FOOD_COUNT] (state,{food}){
        if(!food.count){
           Vue.set(food,'count',1) 
           //将food添加到cartFoods中
           state.cartFoods.push(food)
        }else{
            food.count ++
        }
    },
    [DEREMENT_FOOD_COUNT] (state,{food}){
        if(food.count){
            food.count --
            if(food.count === 0){
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },
    [CLEAR_CART] (state){
        state.cartFoods.forEach(food =>food.count = 0)
        state.cartFoods = []
    }
}