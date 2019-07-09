import React, { Component } from "react";
import PostItem from "../PostItem";
import "./styles.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Everton Zoelner",
          avatar: "https://avatars1.githubusercontent.com/u/11033754?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content:
              "Sim, já tentou enviar o currículo para o email oi@rocketseat.com.br?"
          },
          {
            id: 2,
            author: {
              name: "Everton Zoelner",
              avatar:
                "https://avatars1.githubusercontent.com/u/11033754?s=460&v=4"
            },
            content: "Pera ai to encaminhando já!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.pravatar.cc/34"
        },
        date: "04 Jun 2019",
        content: `Fala galera, beleza?
        Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.`,
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/33"
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/35"
            },
            content:
              "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };
  render() {
    const { posts } = this.state;

    return (
      <div className="postList">
        {posts.map(post => (
          <PostItem {...post} key={post.id} />
        ))}
      </div>
    );
  }
}

export default PostList;
