import React from "react";
import Card from "react-bootstrap/Card";



const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <>

      <div className="container">
        <Card>
        <Card.Img className="picture-container" variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="container-text">
            Team: {team}<br/>
            Nationality: {nationality}<br/>
            Jersey Number: {jerseyNumber}<br/>
            Age: {age}
        </Card.Text>
        </Card.Body>
        </Card>
      </div>
        
    </>
    
  );
};

export default Player;
