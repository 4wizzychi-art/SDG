import Card from 'react-bootstrap/Card';

const Carding = ({
  cardTitle,
  children,
  className,
  style
}) => {
  return (
    <Card className={className} style={style}>
      <Card.Body>
        <Card.Title style={{fontSize:"50px",
opacity:"0.5",
color:"white"

        }}>{cardTitle}</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
    
  );
};

export default Carding;