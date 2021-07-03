import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const [markdown, setMarkdown] = useState("# Markdown Previewer");
  return (
    <div>
      <div className="markdown">
        <Container fluid>
          <Row>
            <Col>
              <div>
                <textarea
                  className="input"
                  value={markdown}
                  onChange={(e) => setMarkdown(e.target.value)}
                ></textarea>
              </div>
            </Col>
            <Col>
              <div className="preview">
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
