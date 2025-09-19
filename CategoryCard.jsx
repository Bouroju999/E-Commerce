import Card from 'react-bootstrap/Card';

function CategoryCard({fileName,categoryName}) {
  return (
    <Card className="text-white" style={{width:'250px',height:'200px'}}>
      <Card.Img src={`public/${fileName}`} alt="Card image" height={'200px'}/>
      <Card.ImgOverlay style={{background:'rgba(0,0,0,0.5)',display:"flex",justifyContent:"center",alignItems:"Center"}}>
        <Card.Title style={{fontSize:"35px"}}>{categoryName}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CategoryCard;