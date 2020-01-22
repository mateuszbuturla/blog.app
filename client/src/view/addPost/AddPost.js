import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

import './AddPost.css';


class AddPost extends React.Component {

    state = {
        title: '',
        author: '',
        content: '',
        announcement: '',
        announcementError: false,
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    submitAddPostForm(e) {
        e.preventDefault();
        const { title, author, content } = this.state;
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
    }

    render() {
        const { title, author, content, announcement, announcementError } = this.state;
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
