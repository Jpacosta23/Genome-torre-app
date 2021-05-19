import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useAppDispatch, useAppState } from "../store";
import { getJobDetail } from "../store/actions";

const JobDetail = () => {
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
        }}
      >
        <h1>{isLoading ? null : jobDetail.serpTags.identifier.name}</h1>

        <Header className="d-flex flex-lg-column align-items-center">
          {" "}
          <img
            className="company_logo mt-4 mb-4"
            src={isLoading ? null : jobDetail.serpTags.hiringOrganization.logo}
            width="150px"
            alt=""
          />
          <div className="d-flex flex-lg-column align-items-center">
            <h2>Job Title: {isLoading ? null : jobDetail.serpTags.title}</h2>
            <p></p>
            <h3>Job Description</h3>
            <p className="text-justify col-md-6">
              {isLoading ? null : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: jobDetail.serpTags.description,
                  }}
                />
              )}
            </p>
            <div className=" d-flex flex-row justify-content-around col-md-6">
              <h5>
                Type: {isLoading ? null : jobDetail.serpTags.employmentType}
              </h5>
              <h5>Status: {isLoading ? null : jobDetail.status}</h5>
            </div>
          </div>
        </Header>
        <Link
          to="/apply"
          className="btn btn-md btn-secondary shadow-lg p-3 mb-5 bg-body  "
        >
          Apply now
        </Link>
      </div>
    </>
  );
};

export default JobDetail;
