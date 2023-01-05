import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
       
        <div className="proj-txtx flex-column">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="mt-2">
          <a target = '_blank' href={url}> 
          <button type="submit">Ver mais</button>
          </a>
          </div>
        </div>
      </div>
    </Col>
  )
}