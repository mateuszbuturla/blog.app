import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Comment from './comment/Comment';

import './ReadMore.css';

const config = require('../../config');

class ReadMore extends React.Component {

    state = {
        post: [],
        comments: [],
        error: false,
        addCommentAuthor: '',
        addCommentContent: '',
        addCommentAnnouncement: '',
        addCommentAnnouncementError: false,
    }

    getDataFromApi() {
        const id = this.props.match.params.id;
        let apiLink1 = ``;
        let apiLink2 = ``;
        if (config.clientOnThisSamePortAsServer) {
            apiLink1 = `/api/post/${id}`;
            apiLink2 = `/api/comments/${id}`;
        }
        else {
            apiLink1 = `http://localhost:3000/api/post/${id}`;
            apiLink2 = `http://localhost:3000/api/comments/${id}`;
        }

        fetch(apiLink1, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                if (r.length > 0)
                    this.setState({ post: r })
                else
                    this.setState({ error: true })
            })

        fetch(apiLink2, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                this.setState({ comments: r })
            })
    }

    componentDidMount() {
        this.getDataFromApi();
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    submitAddCommentForm(e) {
        e.preventDefault();
        const id = this.props.match.params.id;
        const { addCommentAuthor, addCommentContent } = this.state;
        let validAuthor = true, validContent = true;

        if (addCommentAuthor.length === 0)
            validAuthor = false;

        if (addCommentContent.length === 0)
            validContent = false;

        if (validAuthor && validContent) {
            fetch(`http://localhost:3000/api/addcomment/${id}/${addCommentAuthor}/${addCommentContent}`, { method: 'POST' })
                .then(r => {
                    if (r.status === 200) {
                        this.getDataFromApi();
                        this.setState({ addCommentAnnouncement: 'Comment has been added', addCommentAnnouncementError: false })
                    }
                    else if (r.status === 500)
                        this.setState({ addCommentAnnouncement: 'Error while adding comment', addCommentAnnouncementError: true })
                })

            this.setState({ addCommentAuthor: '', addCommentContent: '' });
        }
        else {
            this.setState({ addCommentAnnouncement: 'Complete all fields', addCommentAnnouncementError: true })
        }
    }

    render() {
        const { post, error, comments, addCommentAuthor, addCommentContent, addCommentAnnouncement, addCommentAnnouncementError } = this.state;
        const _comments = comments.map(comment => <Comment key={comment._id} comment={comment} />)
        return (
            <React.Fragment>
                <Nav />
                <section className="read-more">
                    {
                        post.length > 0 &&
                        <React.Fragment>
                            <h2 className="read-more__post-title">{post[0].title}</h2>
                            <p className="read-more__post-author">Author: {post[0].author}</p>
                            <p className="read-more__post-content">{post[0].content}</p>
                            <p className="read-more__comments">Comments:</p>
                            {_comments}
                            <form onSubmit={this.submitAddCommentForm.bind(this)}>
                                <p className="read-more__add-comment">Add comment:</p>
                                {
                                    addCommentAnnouncement !== '' &&
                                    <React.Fragment>
                                        <div className={`${addCommentAnnouncementError === true && 'error '} read-more__add-comment-announcement`}>
                                            {addCommentAnnouncement}
                                        </div>
                                        <br />
                                    </React.Fragment>
                                }
                                <input className="read-more__add-comment-input" type="text" placeholder="Author" id="addCommentAuthor" value={addCommentAuthor} onChange={this.handleInputChange.bind(this)} /><br />
                                <textarea className="read-more__add-comment-input" placeholder="Comment" id="addCommentContent" value={addCommentContent} onChange={this.handleInputChange.bind(this)}></textarea><br />
                                <input className="read-more__input-submit" type="submit" value="Add comment" />
                            </form>
                        </React.Fragment>
                    }
                    {
                        error === true &&
                        <React.Fragment>
                            <h2 className="read-more__error-code">404</h2>
                            <p className="read-more__error-description">This address cannot be found</p>
                        </React.Fragment>
                    }
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ReadMore;
