import React from "react";
import { StyleSheet, FlatList, Image } from "react-native";
import { Container, Header, Content, List } from "native-base";
import { JobListItem } from "components";

export default (JobList = ({ data }) => {
  const jobs = data["job-search"].jobs[0].job;
  console.log(jobs);

  return (
    <Container>
      <Header />
      <Content>
        <List>
          {jobs.map((job, index) => (
            <JobListItem
              key={job.id}
              {...job}
              // title={job.position[0].title}
              // url={job.url}
              // url={job.url}
            />
          ))}
        </List>
      </Content>
    </Container>
  );
});

const styles = StyleSheet.create({});
