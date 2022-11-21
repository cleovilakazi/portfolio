import React, { Component } from "react";
import Typical from "react-typical";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

class Why_SovTech extends Component {
    render() {
      return (
        <div>

          <div className="sovBox">
          <Typical className="sovTitle"
          loop={1}
          steps={[
            "Why I want to join SovTech",1,
          ]}
          />
          </div>
          
          <div className="sovCard">
          <Card 
            style={{
            
            backgroundImage: "white",
      }}
      >
      <CardContent>
      <Typography>
        My name is mbali
      </Typography>

      </CardContent>
      
      

   </Card>
      
     
          </div>
          </div>
       
      );
    }
  }
   
  export default Why_SovTech;