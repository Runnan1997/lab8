import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const pets1 = [
    {
        id: 'a',
        firstname: 'Robin',
        url: 'https://www.vets4pets.com/siteassets/species/cat/close-up-of-cat-looking-up.jpg?w=585&scale=down',
        },
      {
        id: 'b',
        firstname: 'Dave',
        url: 'https://www.loveyourdog.com/wp-content/uploads/2019/05/Best-Crates-For-Golden-Retrievers-900x500.jpg',
        },
    ];

const pets2 =[
      {
        id: 'c',
        firstname: 'Mary',
        url: 'https://specials-images.forbesimg.com/imageserve/5de6f2d8c283810006a3947f/960x0.jpg?fit=scale',
       },
      {
        id: 'd',
        firstname: 'Dodo',
        url: 'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg',
      },
    ];
const pets3 =[
      {
        id: 'e',
        firstname: 'Amy',
        url: 'https://newsd.co/wp-content/uploads/2018/02/cocker-spaniel-names.jpg',
      },
      {
        id: 'f',
        firstname: 'Yoshi',
        url: 'https://i2.wp.com/www.paws.org/wp-content/uploads/2019/10/Alphie_cat_29864612_101115_profile_MB-2.jpg?fit=1024%2C583&ssl=1',
      },
];

const Adoption = (props) => {
    return(
        <Container>
            <Row>
            <div className="Adoption">
            <br></br>
            <h4>Adoption</h4>
            <Col>
                {
                    pets1.map(wanted =>
                            <div key={wanted.id}>
                            <div><img width="250px" height="250px" src={wanted.url}/></div>
                            <div>{wanted.firstname}</div>
                            <div><button>Interested in Adoption</button></div>
                            </div>
                        )
                }
            </Col>
            <Col>
                {
                    pets2.map(wanted =>
                            <div key={wanted.id}>
                            <div><img width="250px" height="250px" src={wanted.url}/></div>
                            <div>{wanted.firstname}</div>
                            <div><button>Interested in Adoption</button></div>
                            </div>
                        )
                }
            </Col>
            <Col>
                {
                    pets3.map(wanted =>
                            <div key={wanted.id}>
                            <div><img width="250px" height="250px" src={wanted.url}/></div>
                            <div>{wanted.firstname}</div>
                            <div><button>Interested in Adoption</button></div>
                            </div>
                        )
                }
            </Col>
            </div>
            </Row>
            </Container>
    )
}

export default Adoption;