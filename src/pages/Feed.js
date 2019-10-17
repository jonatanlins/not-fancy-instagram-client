import React from 'react';
import styled from 'styled-components';

import Shell from '../components/Shell';
import { api } from '../services/api';
import moreImage from '../assets/icons/more.svg';
import likeImage from '../assets/icons/like.svg';
import commentImage from '../assets/icons/comment.svg';
import sendImage from '../assets/icons/send.svg';

class Feed extends React.Component {
  state = {
    feed: [
      {
        author: 'Netinho',
        description: 'Olokinho meu',
        local: 'Tamandaré',
        image:
          'https://img.r7.com/images/dia-internacional-do-gato-instagram-08082019161531430',
        likes: 6541654,
      },
    ],
  };

  fetchData = async () => {
    const response = await api.get('/posts');
    this.setState({ feed: response.data.reverse() });
  };

  componentDidMount() {
    this.fetchData();
  }

  handleLike = id => () => {
    this.setState({
      feed: this.state.feed.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      ),
    });

    api.put(`/posts/${id}/like`);
  };

  render() {
    const { feed } = this.state;

    return (
      <Shell>
        <StyledSection>
          {feed.map(post => (
            <article key={post.id}>
              <header>
                <div className="userInfo">
                  <span>{post.author}</span>
                  <span className="place">{post.local}</span>
                </div>

                <img src={moreImage} alt="Mais" />
              </header>

              <img src={post.image} alt="Imagem" />

              <footer>
                <div className="actions">
                  <button onClick={this.handleLike(post.id)}>
                    <img src={likeImage} alt="Curtir" />
                  </button>
                  <button>
                    <img src={commentImage} alt="Comentarios" />
                  </button>
                  <button>
                    <img src={sendImage} alt="Enviar" />
                  </button>
                </div>

                <strong>{post.likes} curtidas</strong>

                <p>{post.description}</p>
              </footer>
            </article>
          ))}
        </StyledSection>
      </Shell>
    );
  }
}

const StyledSection = styled.section`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;

  article {
    background: #fff;
    border: 1px solid #ddd;
    margin-top: 30px;

    header {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .userInfo {
        display: flex;
        flex-direction: column;

        span {
          &.place {
            font-size: 13px;
            color: #666;
            margin-top: 3px;
          }
        }
      }
    }

    > img {
      width: 100%;
    }

    footer {
      padding: 20px;

      .actions {
        margin-bottom: 10px;

        button {
          background: transparent;
          border: none;
          margin-right: 10px;
          cursor: pointer;
          outline: none;

          img {
            height: 20px;
          }
        }
      }

      p {
        font-size: 13px;
        margin-top: 2px;
        line-height: 18px;

        span {
          color: #7159c1;
          display: block;
        }
      }
    }
  }
`;

export default Feed;
