let commentArea = document.getElementById('comment');
let hidden = document.getElementById('hidden');
let commentBtn = document.getElementById('commentBtn');
let discussList = document.querySelector('.discuss_list');
let disAmount = document.querySelector('.disAmount');
let previous = document.querySelector('.am-pagination-prev');
let next = document.querySelector('.am-pagination-next');
let commentDetail = document.querySelector('.comment_detail');


commentBtn.onclick = function(){
    ajax({
        url:'/comment',
        type:'post',
        data:{
            //文本域的数据
            comment:commentArea.value,
            //这篇文章的id
            contentId:hidden.value,
        },
        success(msg){
            if(JSON.parse(msg).code==1){
                alert(JSON.parse(msg).message);
                return;
            }
            //获取评论
            comments = JSON.parse(msg).reverse();
            commentArea.value = '';

            renderComment(comments,page,limit);
        }
    });

}


let page = 1;//记录当前的页数
let limit = 5; //每页显示五条数据
let comments = [];

//自动请求评论
ajax({
    url:'/comment',
type:'get',
    data:{
        //这篇文章的id
        contentId:hidden.value,
    },
    success(msg){
        comments = JSON.parse(msg).reverse();
        renderComment(comments,page,limit);
    }
})


//点击下一页按钮
next.onclick = function () {
    page++;

    renderComment(comments,page,limit);
}

//点击上一页按钮
previous.onclick = function () {
    page--;
    renderComment(comments,page,limit);
}

//渲染分页评论
function renderComment(comments,page,limit){
    let　html = '';

    let pageMax = Math.ceil(comments.length/limit);
    page = Math.min(page,pageMax);
    page = Math.max(page,1);

    //第page页的起始位置
    let start = (page-1)*limit;

    //第page页的重点位置
    let end = Math.min(comments.length,start + limit);
    disAmount.innerText = comments.length;
    for(let i=start;i<end;i++){

        html+= `
            <li>
                        <div class="am_tuya_comment">
                            <div class="am_tuya_comment_user">
                                <div class="am_tuya_comment_user_l">
                                    ${comments[i].username} <span>  •  ${new Date(comments[i].time).toLocaleString()}</span>
                                </div>
                                <div class="am_tuya_comment_text">${comments[i].comment}</div>
                            </div>
                        </div>
            </li>
            `
    }
    discussList.innerHTML = html;

    //页码显示
    if(comments.length){
        commentDetail.innerText = page+'/'+pageMax;
    }else{
        commentDetail.innerText = '0/0';
    }
}


