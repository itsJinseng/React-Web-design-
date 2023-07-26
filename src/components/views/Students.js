import { useState, useEffect } from "react";
import View from "../UI/View.js";
import Searchbar from "./Searchbar.js";
import { Card, CardContainer } from "../UI/Card.js";

export default function Students(props) {
  const [theStudents, setStudents] = useState(null);
  const url = "http://softwarehub.uk/unibase/api/users/modules/1";
  function searchCoursemate(search) {}

  const get = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      {!theStudents ? (
        <p>Loading records ...</p>
      ) : theStudents.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <View>
          <h1 className="title">Students In the course</h1>
          <Searchbar
            className="searchbar"
            searchCoursemate={searchCoursemate}
          />
          <CardContainer>
            {theStudents.map((student) => {
              return (
                <div class="studentcards">
                  <Card>
                    <studentCards>
                      <p>{student.UserEmail.substring(0, 8)}</p>
                      <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                      <img
                        class="img"
                        src={student.UserImageURL}
                        alt={student.UserEmail.substring(0, 8)}
                      />
                    </studentCards>
                  </Card>
                </div>
              );
            })}
          </CardContainer>
        </View>
      )}
    </>
  );
}
