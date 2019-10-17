import React from 'react';
import styled from 'styled-components';

import api from '../services/api';
import Shell from '../components/Shell';

const toBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

class NewPost extends React.Component {
  state = {
    image: '',
    author: '',
    local: '',
    description: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleImageChange = async event => {
    const image = await toBase64(event.target.files[0]);
    this.setState({ image });
  };

  handleSubmit = async event => {
    event.preventDefault();

    await api.post('/posts', this.state);

    this.props.history.push('/');
  };

  render() {
    return (
      <Shell>
        <StyledForm onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleImageChange} />

          <input
            type="text"
            name="author"
            placeholder="Autor do post"
            onChange={this.handleChange}
            value={this.state.author}
          />

          <input
            type="text"
            name="local"
            placeholder="Local do post"
            onChange={this.handleChange}
            value={this.state.local}
          />

          <input
            type="text"
            name="description"
            placeholder="Descrição do post"
            onChange={this.handleChange}
            value={this.state.description}
          />

          <button>Enviar</button>
        </StyledForm>
      </Shell>
    );
  }
}

const StyledForm = styled.form`
  width: 90%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;

    &[type='text'] {
      height: 38px;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 0 20px;
      font-size: 14px;
    }
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #7159c1;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default NewPost;
