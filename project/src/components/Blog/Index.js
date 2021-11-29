import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };

        this.renderBlog = this.renderBlog.bind(this)
    }
    componentDidMount(){
        
        axios.get(`http://localhost/laravel/public/api/blog`)
        .then(res=>{
            //  console.log(res)
            const data = res.data.blog.data;
            this.setState({ data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    renderBlog(){
        let {data}= this.state;
        if(data.length > 0) { 
            return data.map((value, key) => {
                return (
                    <div className="single-blog-post">
                    {/* tiêu đề  */}
                   <h3>{value['title']}</h3> 
                   <div className="post-meta">
                       <ul>
                       <li><i className="fa fa-user" /> Mac Doe</li>
                          {/* thời gian tạo */}
                       <li><i className="fa fa-clock-o" /> {value['created_at']}</li>
                           {/* thời gian update  */}
                       <li><i className="fa fa-calendar" />{value['updated_at']}</li>
                       </ul>
                       <span>
                       <i className="fa fa-star" />
                       <i className="fa fa-star" />
                       <i className="fa fa-star" />
                       <i className="fa fa-star" />
                       <i className="fa fa-star-half-o" />
                       </span>
                   </div>
                   <a href>
                         {/* hình ảnh  */}
                       <img src={"http://localhost/laravel/public/upload/Blog/image/" + value['image']} />
                   </a>
                    {/* nội dung */}
                   <p>{value['description']} </p>
                   <Link  className="btn btn-primary" to={"/Blog/Detail/"+ value['id']} >Read More</Link>
               </div>
                )
            }) 
        }
    }
    
  
    render() {
        return(
        <div className="col-sm-9">
            <div className="blog-post-area">
                <h2 className="title text-center">Latest From our Blog</h2>
                {/* blog */}
                {this.renderBlog()}        
                <div className="pagination-area">
                    <ul className="pagination">
                        <li><a href className="active">1</a></li>
                        <li><a href>2</a></li>
                        <li><a href>3</a></li>
                        <li><a href><i className="fa fa-angle-double-right" /></a></li>
                    </ul>
                </div>
            </div>
        </div>

        );
    }
}
export default Index;

