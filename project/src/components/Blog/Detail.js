import React, { Component} from 'react';
import axios from 'axios';
// import Rate from './Rate'
// import Listcomment from './Listcomment';
// import Comment from './Comment';

class Detail extends Component {
    constructor(props) {
      super(props);
      this.state = {
          check: false,
          data:[]
      };
      this.renderBlog = this.renderBlog.bind(this)
    }

    componentDidMount(){
      console.log(this.props)

      let url = `http://localhost/laravel/public/api/blog/detail/` + this.props.match.params.id;
      axios.get(url)
        .then(res=>{
               console.log(res.data.data)
               const data = res.data.data;
               this.setState({ data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    renderBlog(){
      let {data} = this.state
        return (
                 <div className="col-sm-9">
                    <div className="blog-post-area" >
                      <h2 className="title text-center">Latest From our Blog</h2>
                      <div className="single-blog-post">
                        {/* tiêu đề  */}
                          <h3>{data['title']}</h3> 
                        <div className="post-meta">
                          <ul> 
                            <li><i className="fa fa-user" /> Mac Doe</li>
                              {/* thời gian tạo */}
                            <li><i className="fa fa-clock-o" /> {data['created_at']}</li>
                                {/* thời gian update  */}
                            <li><i className="fa fa-calendar" />{data['updated_at']}</li>
                          </ul>
                              <span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                              </span> 
                        </div>
                        <a>
                          {/* hình ảnh  */}
                              <img src={"http://localhost/laravel/public/upload/Blog/image/" + data['image']} />
                        </a>
                        {/* nội dung */}
                         <p>{this.state.data['description']} </p>    
                          <div className="pager-area">
                            <ul className="pager pull-right">
                              <li><a href="#">Pre</a></li>
                              <li><a href="#">Next</a></li>
                            </ul>
                          </div>
                      </div>
                    </div>
                      {/* component đánh giá */}
                      {/* component list comment */}
                      {/* component comment */}
                  </div>
          )
      }

    render() {
        return(
          <>
             {this.renderBlog()}
          </>
          
        )
    }
}
export default Detail;


   