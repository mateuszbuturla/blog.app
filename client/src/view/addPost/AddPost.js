import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

import './AddPost.css';

const titleMinLength = 5;
const authorMinLength = 3;
const contentMinLength = 20;

class AddPost extends React.Component {

    state = {
        title: '',
        author: '',
        content: '',
        announcement: '',
        announcementError: false,
        titleValid: true,
        authorValid: true,
        contentValid: true,
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    submitAddPostForm(e) {
        e.preventDefault();
        const { title, author, content } = this.state;
        let validTitle = true, validAuthor = true, validContent = true;

        if (title.length < titleMinLength)
            validTitle = false;

        if (author.length < authorMinLength)
            validAuthor = false;

        if (content.length < contentMinLength)
            validContent = false;

        this.setState({ titleValid: validTitle, authorValid: validAuthor, contentValid: validContent });

        if (validTitle && validAuthor && validContent) {
            fetch(`http://localhost:3000/api/addpost/${title}/${author}/${content}`, { method: 'POST' })
                .then(r => {
                    if (r.status === 200) {
                        this.setState({ announcement: 'Your post has been added', announcementError: false })
                    }
                    else if (r.status === 500) {
                        this.setState({ announcement: 'Error: Code 500', announcementError: true })
                    }
                })

            this.setState({ title: '', author: '', content: '' });
            this.setState({ titleValid: true, authorValid: true, contentValid: true });
        }
    }

    render() {
        const { title, author, content, announcement, announcementError, titleValid, authorValid, contentValid } = this.state;
        return (
            <React.Fragment>
                <Nav />
                <section className="add-post">
                    <h2 className="add-post__header">Add Post</h2>
                    {
                        announcement !== '' &&
                        <div className={`${announcementError === true && 'error '} add-post__announcement`}>
                            {announcement}
                        </div>
                    }
                    <form onSubmit={this.submitAddPostForm.bind(this)}>
                        <input className="add-post__input" type="text" placeholder="Title" id="title" onChange={this.handleInputChange.bind(this)} value={title} /><br />
                        {titleValid === false && <React.Fragment><div className="add-post__valid-error">Minimum title length is {titleMinLength}</div><br /></React.Fragment>}
                        <input className="add-post__input" type="text" placeholder="Author" id="author" onChange={this.handleInputChange.bind(this)} value={author} /><br />
                        {authorValid === false && <React.Fragment><div className="add-post__valid-error">Minimum author length is {authorMinLength}</div> <br /></React.Fragment>}
                        <textarea className="add-post__textarea" placeholder="Content" id="content" onChange={this.handleInputChange.bind(this)} value={content}></textarea><br />
                        {contentValid === false && <React.Fragment><div className="add-post__valid-error">Minimum content length is {contentMinLength}</div> <br /></React.Fragment>}
                        <input className="add-post__submit" type="submit" value="Add post" />
                    </form>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default AddPost;
