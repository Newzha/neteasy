import Mock from 'mockjs'

import msite from './msite_data.json'
import findthings from './findthings_data.json'
import {categoryL1List} from './category_data.json'

const category = categoryL1List;

Mock.mock('/home_data',{code:0,data:msite});
Mock.mock('/shiwu_data',{code:0,data:findthings});
Mock.mock('/category_data',{code:0,data:category});
console.log('mock运行了')
