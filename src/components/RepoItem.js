/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const RepoItem = (props) => {
  const navigate = useNavigate();
  const { name, description, owner, stars, forks, lang, url } = props;

  return (
    <div className="my-3">
      <a
        target="_blank"
        href={`${url}`}
        style={{ textDecoration: "none", color: "black" }}
        rel="noreferrer"
      >
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>RepoName: {name}</Card.Text>
            <Card.Text>Description: {description}</Card.Text>
            <Card.Text>author: {owner}</Card.Text>
            <Card.Text>starts: {stars}</Card.Text>
            <Card.Text>forks: {forks}</Card.Text>
            <Card.Text>Language:{lang}</Card.Text>
            <a href={`${url}`} target="_blank" rel="noreferrer">
              see the repo in github
            </a>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
};
export default RepoItem;
