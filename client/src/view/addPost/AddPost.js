import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

import './AddPost.css';


class AddPost extends React.Component {

    state = {
        title: '',
        author: '',
        content: ''
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    submitAddPostForm(e) {
        e.preventDefault();
        const { title, author, content } = this.state;
        fetch(`http://localhost:3000/api/addpost/${title}/${author}/${content}`, { method: 'POST' })

        this.setState({ title: '', author: '', content: '' });
    }

    render() {
        const { title, author, content } = this.state;
        return (
            <React.Fragment>
                <Nav />
                <section className="add-post">
                    <h2 className="add-post__header">Add Post</h2>
                    <form onSubmit={this.submitAddPostForm.bind(this)}>
                        <input className="add-post__input" type="text" placeholder="Title" id="title" onChange={this.handleInputChange.bind(this)} value={title} /><br />
                        <input className="add-post__input" type="text" placeholder="Author" id="author" onChange={this.handleInputChange.bind(this)} value={author} /><br />
                        <textarea className="add-post__textarea" placeholder="Content" id="content" onChange={this.handleInputChange.bind(this)} value={content}></textarea><br />
                        <input className="add-post__submit" type="submit" value="Add post" />
                    </form>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default AddPost;
