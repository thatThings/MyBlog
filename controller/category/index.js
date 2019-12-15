const Category = require('../../schema/category');

exports.showIndex = function (req,res) {

    //从数据库中读取所有的用户信息
        Category.find().then((results)=>{
            res.render('admin/category/index',{
                userInfo:req.userInfo,
                results,
            });
        })

}