<template>
     <div class="pinglun">
            <div class="pl_header">
                <span>评论</span>
            </div>

            <div>
                <img class="pl_img" src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~300x300.image">
                <div class="input_box">
                    <div class="srk">
                        <input style="border: none;" class="input1" type="text" placeholder="输入评论（Enter换行，Ctrl + Enter发送）"/>
                    </div>
                </div>
            </div> 
        </div>
</template>

<script>
export default {
    name:'PingLun'

}
</script>

<style>

.pinglun{
    background-color: white;
    width: 755.920px;
    height: 200px;
    padding-left: 32.040px;
    padding-right: 32.040px;
    padding-bottom: 24px;
    padding-top: 8px;
    position: relative;
    top:20px;
  
    
}
.pl_header{
    color: rgb(37,41,51);
    font-size: 18px;
    font-weight: bolder;
    line-height: 30px;
    height: 30px;
    width: 755.920px;
    margin-bottom: 24px;
    margin-top: 20px;
}

.pl_img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 16px;
    float: left;
}
.srk{
    width: 570px;
    height: 48px;
    padding: 8px 12px;
    /* box-sizing: border-box; */
    font-size: 14px;
    line-height: 22px;
    min-height: 64px;
    outline-style: none;
    
    /* outline-color: rgb(37,41,51); */

}
.input_box{
    width: 660px;
    height: 80px;
    /* border: 1px rgb(242,243,245) solid; */
    background-attachment: scroll;
    background-color:rgb(242,243,245) ;
    border-radius: 4px;
    color: rgb(51,51,51);
    float: left;
    padding: 8px 12px;
    /* box-sizing: border-box; */
    position: relative;
    left: 8px;
    top:9px;
    overflow: hidden;
    display: inline-block;
}
.input1{
    background-color: rgb(242,243,245);
    /* line-height: 22px; */
    font-size: 14px;
    position: relative;
    top:-32px;
    left: -8px;
    width: 700px;
    height: 80px;
    outline: none;
    min-height: 64px;
    color: #252933;
    word-spacing: 5px;
    outline: none;
}


</style>