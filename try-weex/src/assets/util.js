let utilFunc = {
    initIconFont(){
        // weex 总有他独特的一面
        // native icon
        let domModule = 
        weex.requireModule('dom');
        domModule.addRule('fontFace',{
            'fontFamily':'iconfont',
            'src':"url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"
        })
    }
}
export default utilFunc;