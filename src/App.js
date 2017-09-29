import React from "react";
import Dropzone from "react-dropzone";
import { graphql, gql } from "react-apollo";

class App extends React.Component {
  onDrop = async ([file]) => {
    const response = await this.props.mutate({ variables: { file } });
    console.log(response);
  };

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        <p>Try dropping some files here, or click to select files to upload.</p>
      </Dropzone>
    );
  }
}

const uploadFileMutation = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export default graphql(uploadFileMutation)(App);
