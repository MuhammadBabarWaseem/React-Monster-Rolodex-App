import { Input, Container } from "@chakra-ui/react";
import React, { Component } from "react";

export default class SearchField extends Component {
  render() {
    return (
      <div>
        <Container>
          <Input color='whitesmoke'
            variant="flushed"
            mt={5}
            mb={5}
            placeholder="Search Characters"
            onChange={this.props.onChangeHandler}
          />
        </Container>
      </div>
    );
  }
}
