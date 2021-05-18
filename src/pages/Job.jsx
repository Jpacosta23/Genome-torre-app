import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppState } from "../store";
import { getJobDetail } from "../store/actions";

const Job = () => {
  const { jobDetail, isLoading } = useAppState();
  const dispatch = useAppDispatch();
  const id = "NwqGzJQr";

  useEffect(() => {
    getJobDetail(id, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <br />
      <br />
      <br />
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#343a35",
          height: "800px",
        }}
      >
        <h1 className="mb-4">Recent Jobs</h1>
        <div className="job-container container-fluid ">
          <Link className="text-decoration-none" to="/job/details">
            <div className="d-flex justify-content-center align-items-center">
              <img
                className="company_logo mt-4 mb-4"
                src={
                  isLoading ? null : jobDetail.serpTags.hiringOrganization.logo
                }
                width="150px"
                alt=""
              />
              <div className="ml-4">
                <h3>{isLoading ? null : jobDetail.serpTags.identifier.name}</h3>
                <h4>
                  Job Title: {isLoading ? null : jobDetail.serpTags.title}
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Job;
