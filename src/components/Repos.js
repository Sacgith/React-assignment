/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";

import RepoItem from "./RepoItem";
import { Button } from "react-bootstrap";
import Spinner from "./Spinner";
import axios from "axios";

const Repos = () => {
  const [page, setPage] = useState(0);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // console.log("hello there");
    updateRepos();
  }, [page]);

  const updateRepos = async () => {
    console.log("its coming");
    const url = `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=${page}&per_page=10`;
    setLoading(false);
    let data = await axios(url);
    // console.log(data.data.items);
    setRepos(data.data.items);
  };

  const handleNextClick = async () => {
    setPage(page + 1);
  };

  const handlePrevClick = async () => {
    setPage(page - 1);
  };

  return (
    <div className="container my-3">
      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          {repos.map((repo) => {
            return (
              <div className="col-md-4" key={repo.id}>
                <RepoItem
                  name={repo.name}
                  description={repo.description}
                  owner={repo.owner.login}
                  stars={repo.stargazers_count}
                  forks={repo.forks_count}
                  lang={repo.language}
                  url={repo.html_url}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="container d-flex justify-content-between">
        <Button disabled={page <= 1} variant="dark" onClick={handlePrevClick}>
          &larr; Prev
        </Button>{" "}
        <Button variant="dark" onClick={handleNextClick}>
          Next &rarr;
        </Button>{" "}
      </div>
    </div>
  );
};

export default Repos;
