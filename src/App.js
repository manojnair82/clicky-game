import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    clickedFriends: [],
    score: 0
  };

 

    onClickimage = event => {
    const currentFriend = event;
    console.log(currentFriend);
    const friendAlreadyClicked =
      this.state.clickedFriends.indexOf(currentFriend) > -1;

    if (friendAlreadyClicked) {
      this.setState({
        friends: this.state.friends.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedFriends: [],
        score: 0
      });
        alert("You lose. Play again?");

    } else {
      this.setState(
        {
          friends: this.state.friends.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFriends: this.state.clickedFriends.concat(
            currentFriend
          ),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              friends: this.state.friends.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedFriends: [],
              score: 0
            });
          }
        }
      );
    }
  };

     myfunction = res => {
      console.log("testing");
    };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game - Score {this.state.score}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            onClickimage = {this.onClickimage}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
