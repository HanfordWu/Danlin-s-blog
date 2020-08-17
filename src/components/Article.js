import React, { Component } from 'react';
import Header from './Header';

class Article extends Component {

    constructor(props){
        super(props)
        this.changePageToHome = this.changePageToHome.bind(this)

    }

    state = { 

     }


     changePageToHome(){
         this.props.changePageToHome("home")
     }



    render() { 
        return ( 
            <article className="post 简体中文" id="article">
        <div className="row">
          <div className="col-xs-12">
            <div className="site-header">
                {<Header changePageToHome = {this.changePageToHome} ></Header>}
              <div className="header-line" />
            </div>
            <header className="post-header">
              <h1 className="post-title">创业公司的文化</h1>
              <div className="row post-desc">
                <div className="col-xs-6"><time className="post-date" dateTime="2020-03-02 00:00:00 UTC">02 Mar
                    2020</time></div>
                <div className="col-xs-6">
                  <div className="post-author"><a target="_blank" href="https://joway.io/">@Joway</a></div>
                </div>
              </div>
            </header>
            <div className="post-content markdown-body">
              <p>前段时间有一个小事情让我想到创业公司文化这件事情。</p>
              <p>我目前就职在一家创业公司，我们有一个文化是有相当一部分同事会有一个「艺名」。艺名的产生有很多种场景。一种类似古代的「字」，是自己为摆脱原始名字的依赖，为自己取的代称，有着很强个人色彩，比如我的
                <code>Joway</code>。还有一种是在公司发展过程中自然而然形成的「外号」，比如中国公司常见的X哥，通常还带着点共同记忆在里面。</p>
              <p>但这种遍布的艺名也为团队协作带来了一定困扰，比如在 Slack
                搜索/@一个同事的时候，需要一个个遍历所有可能的名字，更麻烦的是有时候你还不一定知道他的艺名。于是乎，很自然能够想到的一个做法是强制规范每个人的命名，比如只能用真实姓名。的确会有大公司过来的同事会这么建议，这种建议也能以最快的速度和最好的结果来解决这个问题。但在这个过程中牺牲的，其实是这些艺名长期以来养成的共同感情，以及沟通中的人味。
              </p>
              <p>至于这件事情最终如何解决的其实倒也并不重要了，但观察这个解决过程其实蛮有意思的。因为这种现象背后展现的其实是一家创业公司在发展过程中，集聚了不同公司文化背景的人以后互相交融影响的过程。</p>
              <p>人类这几千年出现过许许多多的宗教，观察它们兴起的故事其实和创业公司很像。伊斯兰和基督教都有着非常浓厚的传教热情，有些朝代靠战争，有些朝代靠文化。但诸如佛教就比较佛系，唐僧自己走路去取的经，鉴真也是受日本邀请才东渡。佛教之所以在东亚还能继续维系生机，大概也只是因为这里长期闭塞没有经受其他宗教的冲击。而其发源地印度早被各种宗教夹击，如今只剩下了
                0.41% 的佛教徒。</p>
              <p>印度的宗教发展非常像一个创业公司的演变。早期孕育出了某种独特的文化，而后陆陆续续各个公司之间人员的跳槽往来，汇聚出多种公司文化交融的场景，但最后总会有某种文化占上风。并且胜出的文化并不一定是公司最初的文化。
              </p>
              <p>如同宗教一样，不同文化在传播性上，也有着巨大的区别。总会有某些文化特别具有传播性，强势的文化会慢慢吞噬掉弱势的文化，但一种文化弱势却并不一定代表其本身就不好。我们又如何能够相信胜出的文化是因为其本身优秀，而非它只是更加容易能够被人所接受？
              </p>
              <p>这个观点引申出去，同样也能质疑我们目前所传承到的传统文化。真的是因为其优秀所以能够被传承千年吗？</p>
            </div>
            <div className="row middle-xs">
              <div className="col-xs-12">
                <div className="post-category"><a href="https://categories/thought/">Thought</a></div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12"><br /><br />
                <p>及时收到文章更新，请订阅：<a target="_blank" href="https://mailchi.mp/a1a0d59e7a19/joway"><b>Mailchimp</b></a></p><br /><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style={{borderWidth: 0}} src="./创业公司的文化 - Joway's Blog_files/cc.png" className="loading" data-was-processed="true" /></a>
              </div>
            </div>
            <div className="post-ads"><ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-6400651395935595" data-ad-slot={5705651853} data-ad-format="auto" data-full-width-responsive="true" /></div>
            <div style={{height: '50px'}} />
            <div className="post-comments">
              <div id="disqus_thread"><iframe id="dsq-app7790" name="dsq-app7790" allowTransparency="true" frameBorder={0} scrolling="no" tabIndex={0} title="Disqus" width="100%" src="./创业公司的文化 - Joway's Blog_files/saved_resource.html" horizontalscrolling="no" verticalscrolling="no" style={{height: '517px !important'}} /></div>
              <noscript>Please enable JavaScript to view the
                &lt;a href=https://disqus.com/?ref_noscript&gt;comments powered by Disqus.&lt;/a&gt;</noscript>
            </div>
            <div className="site-footer">
              <div className="site-footer-item"><a href="https://t.me/biosthinking" target="_blank">Telegram</a></div>
              <div className="site-footer-item"><a href="https://mailchi.mp/a1a0d59e7a19/joway" target="_blank">Subscribe</a></div>
              <div className="site-footer-item"><a href="https://blog.joway.io/index.xml" target="_blank">RSS</a>
              </div>
              <div className="site-footer-item"><a href="https://blog.joway.io/travel" target="_blank">Travel</a>
              </div>
              <div className="site-footer-item"><a href="https://joway.io/" target="_blank">About</a></div>
            </div>
          </div>
        </div>
      </article>
         );
    }
}
 
export default Article;