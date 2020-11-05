import React from 'react';
import '../style.css';
import '../css/bootstrap.min.css';
import 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import Backgroundjpg from '../image/Background.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign up for new account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Creat New Account</h4>
        <p>
          User Name:
        </p>
        <p>
        <FormControl type="text" placeholder="Enter Your User Name" className="mr-sm-2" />
        </p>        
        <p>
          Pass Word:
        </p>
        <p>
        <FormControl type="text" placeholder="Enter Your Password" className="mr-sm-2" />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} href = "/">Sign Up</Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign up for new account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Creat New Account</h4>
        <p>
          User Name:
        </p>
        <p>
        <FormControl type="text" placeholder="Enter Your User Name" className="mr-sm-2" />
        </p>        
        <p>
          Pass Word:
        </p>
        <p>
        <FormControl type="text" placeholder="Enter Your Password" className="mr-sm-2" />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} href = "/">Log In</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content />
      <meta name="author" content />
      <title>Plastic Surgery</title>
      {/* Bootstrap core CSS */}
      <link href="../css/bootstrap.min.css" rel="stylesheet" />
      {/* Custom styles for this template */}
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet" />
      <link href="../style.css" rel="stylesheet" />
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="text-muted" href="#">LogoGoesHere</a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="#">Show Your Beauty</a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
            
            <Button variant="success" onClick={() => setModalShow(true)}>
              Sign Up
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <Button variant="success" onClick={() => setModalShow(true)}>
              Log In
            </Button>
            <MyVerticallyCenteredModal2
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            </div>
          </div>
        </header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky = "top">
          <Navbar.Brand href="#">Show Your Beauty</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Hospitals">Hospitals</Nav.Link>
              <Nav.Link href="#Doctors">Doctors</Nav.Link>
              <Nav.Link href="#Eyes">Eyes</Nav.Link>
              <Nav.Link href="#Lips">Lips</Nav.Link>
              <Nav.Link href="#Jaw">Jaw</Nav.Link>
              <Nav.Link href="#Fillers">Fillers</Nav.Link>
              <Nav.Link href="#Breast">Breast</Nav.Link>
              <Nav.Link href="#Tummy">Tummy</Nav.Link>
              <NavDropdown title="Others" id="collasible-nav-dropdown">
                <NavDropdown.Item href="Suction Lipectomy">Suction Lipectomy"</NavDropdown.Item>
                <NavDropdown.Item href="Laser Resurfacing">Laser Resurfacing</NavDropdown.Item>
                <NavDropdown.Item href="Sclerotherapy">Sclerotherapy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Not Listed">Not Listed</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
{/*        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 text-muted" href="#">Hospitals</a>
            <a className="p-2 text-muted" href="#">Doctors</a>
            <a className="p-2 text-muted" href="#">Facial</a>
            <a className="p-2 text-muted" href="#">Eyes</a>
            <a className="p-2 text-muted" href="#">Lips</a>
            <a className="p-2 text-muted" href="#">Body</a>
            <a className="p-2 text-muted" href="#">Others</a>
          </nav>
  </div>*/}
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">Top Story of the Day</h1>
            <p className="lead my-3">Breast reconstructive surgery helps cancer survivor to heal. Maria Izaguirre couldn’t look at herself in the mirror for two years. It was too hard. “I was in shock to not be able to see ...</p>

{/*             <Container>
              <Row>
                <Col xs={6} md={5}>
                  <Image src="https://d31029zd06w0t6.cloudfront.net/wp-content/uploads/sites/60/2020/10/102320.MARIA_IZAGUIRRE.jm_.004.jpg" roundedCircle style={{width:"200", height:"200"}} width='300' height='300'/>
                </Col>
              </Row>
            </Container>
*/}         
            <p className="lead mb-0"><a href="https://www.themonitor.com/2020/10/28/breast-reconstructive-surgery-helps-cancer-survivor-heal/" className="text-white font-weight-bold">Continue reading...</a></p>
          </div>
        </div>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Daily top ratted Doctor</Card.Title>
              <Card.Text>
                Place introduction of the most reviewed doctor of the day.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted" href="#">Click for more infomation</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Daily top ratted hospital</Card.Title>
              <Card.Text>
                Place introduction of the most reviewed hospital of the day
              </Card.Text>
            </Card.Body>Place introduction of the most reviewed doctor of the day.
            <Card.Footer>
              <small className="text-muted" href="#">Click for more infomation</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Daily top ratted post</Card.Title>
              <Card.Text>
                Place topic of the most reviewed post of the day
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted" href="#">Click for more infomation</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <h1 className="pb-3 mb-4 font-italic border-bottom">
              Newest Post
            </h1>
            <div className="blog-post"href=''>
              <h2 className="blog-post-title">Sample post</h2>
              <p className="blog-post-meta" >Nov 1, 2020 by <a href="#">User</a></p>
              <hr />
              <p>This post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>

              <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
              <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </blockquote>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
              <h2>Heading</h2>
              <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
              <h3>Sub-heading</h3>
              <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <pre><code>Example code block</code></pre>
              <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>

            </div>{/* /.blog-post */}
            <div className="blog-post">
              <h2 className="blog-post-title">Another post</h2>
              <p className="blog-post-meta">December 23, 2020 by <a href="#">User2</a></p>
              <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
              <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </blockquote>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
              <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            </div>{/* /.blog-post */}
            <div className="blog-post">
              <h2 className="blog-post-title">New Post</h2>
              <p className="blog-post-meta">December 14, 2020 by <a href="#">User3</a></p>
              <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <ul>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
              <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            </div>{/* /.blog-post */}
            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">Show More</a>
              <a className="btn btn-outline-secondary disabled" href="#">Show Less</a>
            </nav>
          </div>{/* /.blog-main */}
          <aside className="col-md-4 blog-sidebar">
            <div className="p-3 mb-3 bg-light rounded">
              <h4 className="font-italic">About</h4>
              <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div className="p-3">
              <h4 className="font-italic">Hottest post of the month</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#">March 2020</a></li>
                <li><a href="#">February 2020</a></li>
                <li><a href="#">January 2020</a></li>
                <li><a href="#">December 2019</a></li>
                <li><a href="#">November 2019</a></li>
                <li><a href="#">October 2019</a></li>
                <li><a href="#">September 2019</a></li>
                <li><a href="#">August 2019</a></li>
                <li><a href="#">July 2019</a></li>
                <li><a href="#">June 2019</a></li>
                <li><a href="#">May 2019</a></li>
                <li><a href="#">April 2019</a></li>
              </ol>
            </div>
            <div className="p-3">
              <h4 className="font-italic">Follow Us</h4>
              <ol className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </aside>{/* /.blog-sidebar */}
        </div>{/* /.row */}
      </main>{/* /.container */}
      <footer className="blog-footer">
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
      {/* Bootstrap core JavaScript
  ================================================== */}
      {/* Placed at the end of the document so the pages load faster */}
    </div>
    );
  };
export default Home;
