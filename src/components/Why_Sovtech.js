import React, { Component } from "react";
import Typical from "react-typical";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


class Why_SovTech extends Component {
    render() {
      return (
        <div className="sov-background">

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
            background: "plum",
      }}
      >
      <CardContent>
        <div >
      <Typography >
        <p className="sov-motivation">
        Based on what I have read about the company, 
        I was impressed with how much my professional 
        goals align with your company's values. 
        I like that the company values growth by being 
        result oriented and the fact that the company values 
        adaptability, means that I will always be challenged.
        The company's tech stack aligns with my technical 
        skill set(Python, Java, Javascript) and the areas 
        I want to advance in. Also as a full stack software
        developer, it means I can contribute in many 
        departments of the company(Mobile and Web app development,
        Servers, Devops, etc.) This makes me versatile and a 
        great asset to the company.

        </p>
        
      </Typography>
      </div>

      </CardContent>
      
      

   </Card>
      
     
          </div>
          </div>
       
      );
    }
  }
   
  export default Why_SovTech;
