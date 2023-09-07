import React from "react";
import "./about.css";
import { Card } from "react-bootstrap";
import kailas from '../image/kailas.png'
import Divyanshu from '../image/Divyanshu.png'
import Pratik from '../image/Pratik.png'
import Vrushali from '../image/Vrushali.png'

import Akash from '../image/Akash.png'
import Chaitnya from '../image/Chaitnya.png'
const About = () => {
  return (
    <>
   
      <div className="container" style={{ marginTop: "200px" }}>
        {/* Rest of your code */}
        <h1
          className="text-dark"
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            // height: "70px",
            // padding: "10px",
            // marginBottom: "20px"
        }}
    >
        About Us
    </h1>
    <p>
       <h3>Welcome to Our Company</h3> 
        <h3>Warehouse of modernised Drona Technology</h3>
    </p>
        <br />
        <section className="contact-section">
          <div className="row mx-auto">

          </div>

          <div
            className=""
            // style={{ paddingTop: 50, paddingBottom: 50 }}
          >
          <p className="text-dark text-center mt-4">
  <strong className="font-size-large">Revolutionizing Industries with Drone Technology</strong>
</p>
<p className="text-dark text-center mt-4" style ={{ fontSize: "20px"}}>
  In recent years, the utilization of drones has revolutionized several industries, ranging from agriculture to geospatial mining. Drone technology offers the dual advantage of both selling and renting solutions to these sectors. For industries like agriculture, drones have transformed traditional farming practices. Farmers can utilize drones equipped with high-resolution cameras and sensors to monitor crop health, identify disease outbreaks, and optimize irrigation patterns. Furthermore, the mining and geospatial sectors benefit immensely from drones' aerial capabilities. Drones equipped with LiDAR and advanced imaging systems enable precise mapping and surveying of vast terrains, aiding in geological exploration and environmental assessment.
</p>
           

<h1 className="heading" style={{ color: "#4285F4" }}>
  Drone Utility
</h1>

<div className="container text-center heading">
  <div className="row">
    <Card className="col-md-3 col-sm-6 mb-4 card-hover-effect bg-primary text-white mx-auto">
      <Card.Body>
        <Card.Title>Affordable Prices</Card.Title>
        <Card.Text>
          <div className="text-muted">
            By automating tasks that would require a significant amount of manpower, drones can lead to substantial cost savings for businesses. They can cover large areas in a fraction of the time it would take for humans to do the same tasks.
          </div>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="col-md-3 col-sm-6 mb-4 card-hover-effect mx-2 bg-success text-white mx-auto">
      <Card.Body>
        <Card.Title>Environmental Impact</Card.Title>
        <Card.Text>
          <div className="text-muted">
            Drones can contribute to reducing the environmental impact of certain operations. For instance, in agriculture, drones can target specific areas for pesticide application, minimizing the amount of chemicals used.
          </div>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="col-md-3 col-sm-6 mb-4 card-hover-effect mx-2 bg-info text-white mx-auto">
      <Card.Body>
        <Card.Title>Versatility</Card.Title>
        <Card.Text>
          <div className="text-muted">
            Our drones are equipped with different payloads, such as cameras, LiDAR scanners, and thermal sensors, making them suitable for applications ranging from photography to search and rescue operations.
          </div>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="col-md-3 col-sm-6 mb-4 card-hover-effect mx-2 bg-warning text-dark mx-auto">
      <Card.Body>
        <Card.Title>Aerial View</Card.Title>
        <Card.Text>
          <div className="text-muted">
            Drones provide a unique aerial perspective, allowing businesses to collect data and images from vantage points that were previously inaccessible or costly to reach. This perspective is invaluable for tasks like land surveying, mapping, and monitoring.
          </div>
        </Card.Text>
      </Card.Body>
    </Card>


    
  </div>
</div>


              </div>
          

            <br />

            <h1 className="heading">Our Team</h1>

      <div className="row justify-content-center mt-4 heading">
      <div className="col-md-auto col-sm-4 mb-4 h-100 card-hover-effect">
            
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                 src={Vrushali}
                alt=""
                width="100"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 class="mb-0">
                Vrushali <br />
                Chaudhari
              </h5>
            </div>
          </div>
          <div class="col-md-auto col-sm-4 mb-4 h-100 card-hover-effect">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                     src={Akash}
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">
                  Akash
                    <br /> Pangare
                  </h5>
                 
                </div>
              </div>
              <div class="col-md-auto col-sm-4 mb-4 h-100 card-hover-effect">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={Pratik}
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">
                  Pratik
                    <br /> Murkar
                  </h5>
                 
                </div>
              </div>

        <div className="col-md-auto col-sm-4 mb-4 h-100 card-hover-effect">
            
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                     src={Divyanshu}
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">
                    Divyanshu <br />
                    Tyagi
                  </h5>
                 
                </div>
              </div>
              
              <div class="col-md-auto col-sm-4 mb-4 h-100 card-hover-effect">
  <div class="bg-white rounded shadow-sm py-5 px-4">
    <img
      src={kailas}
      alt=""
      width="100"
      class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
    />
    <div class="text-center"> 
      <h5 class="mb-0">
        Kailas
        <br /> Ghute
      </h5>
    
    </div>
  </div>
</div>
             
              

              
              <div class="col-md-auto col-sm-4 mb-4 h-100 card-hover-effect">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img 
                    src = {Chaitnya}
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">
                    Chaitanya
                    <br /> Satalkar
                  </h5>
               
                </div>
              </div>

            </div>
       
        </section>
     
      </div>
   
    </>
  );
};
export default About;